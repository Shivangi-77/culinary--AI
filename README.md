# Culinary AI

Culinary AI is an AI-powered recipe generator. Enter the ingredients you have available, and the application asks an Ollama model to create a recipe with a title, measured ingredients, and step-by-step instructions.

## Features

- Enter available ingredients
- Generate recipes using a locally running Ollama model
- Display the generated recipe in the existing interface
- Responsive React user interface

## Technologies

- React and TypeScript
- Vite
- Tailwind CSS
- Node.js and Express
- Axios
- Ollama

## Requirements

Install these before running the project:

- Node.js and npm
- Ollama for Windows
- An Ollama model downloaded locally

## Run in Visual Studio Code (Windows)

1. Extract the `Culinary-AI` folder.
2. Open Visual Studio Code.
3. Select **File → Open Folder** and open the inner `Culinary-AI` folder (the folder containing `package.json`).
4. Open **Terminal → New Terminal**.
5. Install the project dependencies:

   ```bash
   npm install
   ```

6. Check the Ollama configuration in the existing `.env` file. The supported settings are:

   ```env
   OLLAMA_API_URL=http://localhost:11434
   OLLAMA_MODEL=llama2
   PORT=5000
   ```

   Keep the values already present in your `.env` file. The backend defaults to `http://localhost:11434`, model `llama2`, and port `5000` when a setting is omitted. Do not share your `.env` file publicly.

7. Open a second terminal and check that Ollama is installed:

   ```bash
   ollama --version
   ```

8. Check which model is configured in `.env` under `OLLAMA_MODEL`. Download that model if it is not already installed. For example, if the configured model is `llama2`:

   ```bash
   ollama pull llama2
   ```

   The model name in the command must match `OLLAMA_MODEL`.

9. Make sure Ollama is running. If needed, start it from a terminal:

   ```bash
   ollama serve
   ```

   If Ollama is already running as a Windows background application, do not start a second server.

10. In the first VS Code terminal, start the backend:

    ```bash
    npm run server
    ```

    The terminal should report that the server is running on its configured port (normally `5000`). Leave this terminal open.

11. In a second VS Code terminal, start the frontend:

    ```bash
    npm run dev
    ```

12. Open the local URL printed by Vite, usually:

    http://localhost:5173/

13. Enter ingredients and use the existing Generate Recipe control.

## Useful commands

- `npm run server` — starts the Express backend
- `npm run dev` — starts the Vite development server
- `npm run build` — builds the frontend
- `npm run lint` — runs ESLint
- `npm run preview` — previews a production build

## Project structure

- `src/` — React frontend
- `src/components/` — interface components
- `src/hooks/` — recipe request logic
- `src/types/` — TypeScript types
- `server/index.js` — Express API and Ollama integration
- `public/` — static assets

## Notes

- The backend sends recipe-generation requests to the Ollama API at the URL configured by `OLLAMA_API_URL`.
- The recipe model is selected using `OLLAMA_MODEL`.
- The frontend and backend are separate processes, so keep both terminals running while using the application.
- The presentation PDF from the original archive is not included in this runnable project folder.
