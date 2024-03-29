import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:9090/",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
