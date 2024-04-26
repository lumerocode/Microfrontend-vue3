// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///home/ecarrasco/Prueba/node_modules/.pnpm/vite@5.2.10_@types+node@20.12.7_sass@1.75.0_terser@5.30.4/node_modules/vite/dist/node/index.js";
import vue from "file:///home/ecarrasco/Prueba/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.10_@types+node@20.12.7_sass@1.75.0_terser@5.30.4__vue@3.4.25_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import federation from "file:///home/ecarrasco/Prueba/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.5/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import topLevelAwait from "file:///home/ecarrasco/Prueba/node_modules/.pnpm/vite-plugin-top-level-await@1.4.1_rollup@4.16.4_vite@5.2.10_@types+node@20.12.7_sass@1.75.0_terser@5.30.4_/node_modules/vite-plugin-top-level-await/exports/import.mjs";
var __vite_injected_original_import_meta_url = "file:///home/ecarrasco/Prueba/Microfrontend-vue3/vite.config.ts";
var APPLICATION_PORT = 5006;
var vite_config_default = defineConfig({
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false
      }
    }
  },
  server: {
    port: APPLICATION_PORT
  },
  preview: {
    port: APPLICATION_PORT
  },
  plugins: [
    vue(),
    federation({
      name: "Microfrontend-vue3",
      filename: "Microfrontend-vue3.js",
      // Modules to expose
      exposes: {
        "./Login": "./src/components/Login.vue"
      },
      shared: {
        vue: {},
        vuex: {}
      }
    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9lY2FycmFzY28vUHJ1ZWJhL01pY3JvZnJvbnRlbmQtdnVlM1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZWNhcnJhc2NvL1BydWViYS9NaWNyb2Zyb250ZW5kLXZ1ZTMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvZWNhcnJhc2NvL1BydWViYS9NaWNyb2Zyb250ZW5kLXZ1ZTMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSAnQG9yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb24nXG5pbXBvcnQgdG9wTGV2ZWxBd2FpdCBmcm9tICd2aXRlLXBsdWdpbi10b3AtbGV2ZWwtYXdhaXQnXG5cbmNvbnN0IEFQUExJQ0FUSU9OX1BPUlQgPSA1MDA2O1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICBtaW5pZnlJbnRlcm5hbEV4cG9ydHM6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IEFQUExJQ0FUSU9OX1BPUlQsXG4gIH0sXG4gIHByZXZpZXc6IHtcbiAgICBwb3J0OiBBUFBMSUNBVElPTl9QT1JULFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgZmVkZXJhdGlvbih7XG4gICAgICBuYW1lOiAnTWljcm9mcm9udGVuZC12dWUzJyxcbiAgICAgIGZpbGVuYW1lOiAnTWljcm9mcm9udGVuZC12dWUzLmpzJyxcbiAgICAgIC8vIE1vZHVsZXMgdG8gZXhwb3NlXG4gICAgICBleHBvc2VzOiB7XG4gICAgICAgICcuL0xvZ2luJzogJy4vc3JjL2NvbXBvbmVudHMvTG9naW4udnVlJyxcbiAgICAgIH0sXG4gICAgICBzaGFyZWQ6IHtcbiAgICAgICAgdnVlOiB7fSxcbiAgICAgICAgdnVleDoge30sXG4gICAgICB9XG4gICAgfSksXG4gICAgdG9wTGV2ZWxBd2FpdCh7XG4gICAgICAvLyBUaGUgZXhwb3J0IG5hbWUgb2YgdG9wLWxldmVsIGF3YWl0IHByb21pc2UgZm9yIGVhY2ggY2h1bmsgbW9kdWxlXG4gICAgICBwcm9taXNlRXhwb3J0TmFtZTogXCJfX3RsYVwiLFxuICAgICAgLy8gVGhlIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGltcG9ydCBuYW1lcyBvZiB0b3AtbGV2ZWwgYXdhaXQgcHJvbWlzZSBpbiBlYWNoIGNodW5rIG1vZHVsZVxuICAgICAgcHJvbWlzZUltcG9ydE5hbWU6IGkgPT4gYF9fdGxhXyR7aX1gXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZTLFNBQVMsZUFBZSxXQUFXO0FBRWhWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLG1CQUFtQjtBQUxnSyxJQUFNLDJDQUEyQztBQU8zTyxJQUFNLG1CQUFtQjtBQUd6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDSix1QkFBdUI7QUFBQSxNQUMzQjtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQTtBQUFBLE1BRVYsU0FBUztBQUFBLFFBQ1AsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLEtBQUssQ0FBQztBQUFBLFFBQ04sTUFBTSxDQUFDO0FBQUEsTUFDVDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBO0FBQUEsTUFFWixtQkFBbUI7QUFBQTtBQUFBLE1BRW5CLG1CQUFtQixPQUFLLFNBQVMsQ0FBQztBQUFBLElBQ3BDLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
