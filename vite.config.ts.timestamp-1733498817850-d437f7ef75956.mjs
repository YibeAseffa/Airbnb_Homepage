// vite.config.ts
import path from "path";
import { defineConfig } from "file:///app/node_modules/vite/dist/node/index.js";
import react from "file:///app/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { tempo } from "file:///app/node_modules/tempo-devtools/dist/vite/index.js";
var __vite_injected_original_dirname = "/app";
var conditionalPlugins = [];
if (process.env.TEMPO === "true") {
  conditionalPlugins.push(["tempo-devtools/swc", {}]);
}
var vite_config_default = defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"]
  },
  plugins: [
    react({
      plugins: conditionalPlugins
    }),
    tempo()
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvYXBwL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgeyB0ZW1wbyB9IGZyb20gXCJ0ZW1wby1kZXZ0b29scy9kaXN0L3ZpdGVcIjtcblxuY29uc3QgY29uZGl0aW9uYWxQbHVnaW5zOiBbc3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBhbnk+XVtdID0gW107XG5cbi8vIEB0cy1pZ25vcmVcbmlmIChwcm9jZXNzLmVudi5URU1QTyA9PT0gXCJ0cnVlXCIpIHtcbiAgY29uZGl0aW9uYWxQbHVnaW5zLnB1c2goW1widGVtcG8tZGV2dG9vbHMvc3djXCIsIHt9XSk7XG59XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBwcm9jZXNzLmVudi5WSVRFX0JBU0VfUEFUSCB8fCBcIi9cIixcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZW50cmllczogW1wic3JjL21haW4udHN4XCIsIFwic3JjL3RlbXBvYm9vay8qKi8qXCJdLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3Qoe1xuICAgICAgcGx1Z2luczogY29uZGl0aW9uYWxQbHVnaW5zLFxuICAgIH0pLFxuICAgIHRlbXBvKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBwcmVzZXJ2ZVN5bWxpbmtzOiB0cnVlLFxuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThMLE9BQU8sVUFBVTtBQUMvTSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsU0FBUyxhQUFhO0FBSHRCLElBQU0sbUNBQW1DO0FBS3pDLElBQU0scUJBQXNELENBQUM7QUFHN0QsSUFBSSxRQUFRLElBQUksVUFBVSxRQUFRO0FBQ2hDLHFCQUFtQixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0FBQ3BEO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTSxRQUFRLElBQUksa0JBQWtCO0FBQUEsRUFDcEMsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGdCQUFnQixvQkFBb0I7QUFBQSxFQUNoRDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osU0FBUztBQUFBLElBQ1gsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLGtCQUFrQjtBQUFBLElBQ2xCLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
