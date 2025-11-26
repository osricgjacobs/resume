import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const repoName = 'resume'; 

export default defineConfig({
  // CRITICAL: This prepends the repo name to all asset links in index.html
  base: `/${repoName}/`, 
  
  plugins: [react()],
});