import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Function to parse the recipe from AI response
const parseRecipe = (recipeText) => {
  try {
    // Default structure in case parsing fails
    let recipe = {
      title: "Delicious Recipe",
      ingredients: [],
      instructions: []
    };
    
    // Extract title
    const titleMatch = recipeText.match(/^#\s+(.+)$|^(.+?)\n/m);
    if (titleMatch) {
      recipe.title = titleMatch[1] || titleMatch[2];
    }
    
    // Extract ingredients
    const ingredientsSection = recipeText.match(/(?:Ingredients:|INGREDIENTS:?)([\s\S]*?)(?:Instructions:|INSTRUCTIONS:|Directions:|DIRECTIONS:|$)/i);
    if (ingredientsSection && ingredientsSection[1]) {
      const ingredientList = ingredientsSection[1].trim().split('\n');
      recipe.ingredients = ingredientList
        .map(item => item.replace(/^[\s-•*]+/, '').trim())
        .filter(item => item.length > 0);
    }
    
    // Extract instructions
    const instructionsSection = recipeText.match(/(?:Instructions:|INSTRUCTIONS:|Directions:|DIRECTIONS:)([\s\S]*?)(?:Notes:|NOTES:|$)/i);
    if (instructionsSection && instructionsSection[1]) {
      const instructionList = instructionsSection[1].trim().split('\n');
      recipe.instructions = instructionList
        .map(item => item.replace(/^[\s\d.)+(-]*/, '').trim())
        .filter(item => item.length > 0);
    }
    
    return recipe;
  } catch (error) {
    console.error('Error parsing recipe:', error);
    throw new Error('Failed to parse recipe format');
  }
};

// Ollama AI model interface
class OllamaModel {
  constructor() {
    this.baseURL = process.env.OLLAMA_API_URL || 'http://localhost:11434';
    this.model = process.env.OLLAMA_MODEL || 'llama2';
  }

  async generateRecipe(ingredients) {
    const prompt = `Create a unique and delicious recipe using the following ingredients: ${ingredients}.

The recipe should include:
1. A creative recipe title
2. A list of ingredients with measurements
3. Step-by-step instructions for preparation

Format the recipe with clear sections:
# [RECIPE TITLE]

Ingredients:
- [ingredient 1]
- [ingredient 2]
...

Instructions:
1. [step 1]
2. [step 2]
...`;

    try {
      const response = await axios.post(`${this.baseURL}/api/generate`, {
        model: this.model,
        prompt: prompt,
        stream: false
      });

      return response.data.response;
    } catch (error) {
      console.error('Error calling Ollama API:', error);
      throw new Error('Failed to generate recipe from Ollama');
    }
  }
}

// Initialize Ollama model
const aiModel = new OllamaModel();

// Generate recipe endpoint
app.post('/api/generate-recipe', async (req, res) => {
  try {
    const { ingredients } = req.body;
    
    if (!ingredients) {
      return res.status(400).json({ error: 'Ingredients are required' });
    }
    
    const recipeText = await aiModel.generateRecipe(ingredients);
    const recipe = parseRecipe(recipeText);
    
    res.json({ recipe });
  } catch (error) {
    console.error('Error generating recipe:', error);
    res.status(500).json({ error: 'Failed to generate recipe' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});