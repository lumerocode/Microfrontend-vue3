// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///home/ecarrasco/Prueba/node_modules/.pnpm/vite@5.2.9_@types+node@20.12.7_sass@1.75.0_terser@5.30.3/node_modules/vite/dist/node/index.js";
import vue from "file:///home/ecarrasco/Prueba/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.9_@types+node@20.12.7_sass@1.75.0_terser@5.30.3__vue@3.4.23_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueDevTools from "file:///home/ecarrasco/Prueba/node_modules/.pnpm/vite-plugin-vue-devtools@7.1.2_rollup@4.14.3_vite@5.2.9_@types+node@20.12.7_sass@1.75.0_terse_evhfjmzuhgxvnk4hmopeo3catq/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import federation from "file:///home/ecarrasco/Prueba/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.5/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import topLevelAwait from "file:///home/ecarrasco/Prueba/node_modules/.pnpm/vite-plugin-top-level-await@1.4.1_rollup@4.14.3_vite@5.2.9_@types+node@20.12.7_sass@1.75.0_terser@5.30.3_/node_modules/vite-plugin-top-level-await/exports/import.mjs";
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
    }),
    VueDevTools()
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9lY2FycmFzY28vUHJ1ZWJhL01pY3JvZnJvbnRlbmQtdnVlM1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZWNhcnJhc2NvL1BydWViYS9NaWNyb2Zyb250ZW5kLXZ1ZTMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvZWNhcnJhc2NvL1BydWViYS9NaWNyb2Zyb250ZW5kLXZ1ZTMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbmltcG9ydCBmZWRlcmF0aW9uIGZyb20gJ0BvcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uJ1xuaW1wb3J0IHRvcExldmVsQXdhaXQgZnJvbSAndml0ZS1wbHVnaW4tdG9wLWxldmVsLWF3YWl0J1xuXG5jb25zdCBBUFBMSUNBVElPTl9QT1JUID0gNTAwNjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICBtaW5pZnk6IGZhbHNlLFxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgICAgbWluaWZ5SW50ZXJuYWxFeHBvcnRzOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiBBUFBMSUNBVElPTl9QT1JULFxuICB9LFxuICBwcmV2aWV3OiB7XG4gICAgcG9ydDogQVBQTElDQVRJT05fUE9SVCxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIGZlZGVyYXRpb24oe1xuICAgICAgbmFtZTogJ01pY3JvZnJvbnRlbmQtdnVlMycsXG4gICAgICBmaWxlbmFtZTogJ01pY3JvZnJvbnRlbmQtdnVlMy5qcycsXG4gICAgICAvLyBNb2R1bGVzIHRvIGV4cG9zZVxuICAgICAgZXhwb3Nlczoge1xuICAgICAgICAnLi9Mb2dpbic6ICcuL3NyYy9jb21wb25lbnRzL0xvZ2luLnZ1ZScsXG4gICAgICB9LFxuICAgICAgc2hhcmVkOiB7XG4gICAgICAgIHZ1ZToge30sXG4gICAgICAgIHZ1ZXg6IHt9LFxuICAgICAgfVxuICAgIH0pLFxuICAgIHRvcExldmVsQXdhaXQoe1xuICAgICAgLy8gVGhlIGV4cG9ydCBuYW1lIG9mIHRvcC1sZXZlbCBhd2FpdCBwcm9taXNlIGZvciBlYWNoIGNodW5rIG1vZHVsZVxuICAgICAgcHJvbWlzZUV4cG9ydE5hbWU6IFwiX190bGFcIixcbiAgICAgIC8vIFRoZSBmdW5jdGlvbiB0byBnZW5lcmF0ZSBpbXBvcnQgbmFtZXMgb2YgdG9wLWxldmVsIGF3YWl0IHByb21pc2UgaW4gZWFjaCBjaHVuayBtb2R1bGVcbiAgICAgIHByb21pc2VJbXBvcnROYW1lOiBpID0+IGBfX3RsYV8ke2l9YFxuICAgIH0pLFxuICAgIFZ1ZURldlRvb2xzKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZTLFNBQVMsZUFBZSxXQUFXO0FBRWhWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLG1CQUFtQjtBQU5nSyxJQUFNLDJDQUEyQztBQVEzTyxJQUFNLG1CQUFtQjtBQUd6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDSix1QkFBdUI7QUFBQSxNQUMzQjtBQUFBLElBQ0o7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQTtBQUFBLE1BRVYsU0FBUztBQUFBLFFBQ1AsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLEtBQUssQ0FBQztBQUFBLFFBQ04sTUFBTSxDQUFDO0FBQUEsTUFDVDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBO0FBQUEsTUFFWixtQkFBbUI7QUFBQTtBQUFBLE1BRW5CLG1CQUFtQixPQUFLLFNBQVMsQ0FBQztBQUFBLElBQ3BDLENBQUM7QUFBQSxJQUNELFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
