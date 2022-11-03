const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        viewportWidth: 1366,
        viewportHeight: 768,
        defaultCommandTimeout: 10000,
        baseUrl: "https://w3schools.com/",
        specPattern: "**/*.feature"
    }
})
