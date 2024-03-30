import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Use Vite's TypeScript plugin for handling TS
  test: {
    environment: 'node', // or 'happy-dom' for browser environments
  },
  // Ensures Vite processes TypeScript files
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Adjust based on your project
  },
});
