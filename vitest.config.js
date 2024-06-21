import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "jsdom",
        setupFiles: "./setupTest.js"
    },
    resolve: {
        alias: {
          src: "/src",
          stories: "/src/stories",
          components: "/src/components",
          assets: "/src/assets",
        },
      },
})