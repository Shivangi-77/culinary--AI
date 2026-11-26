export interface Ingredient {
  id: string;
  name: string;
}

export interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string[];
  loading?: boolean;
  error?: string;
}

export interface ApiResponse {
  recipe: Recipe;
}