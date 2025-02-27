const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'khzx4x',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso de Cypress',
      reportPageTitle: 'Projeto do curso de Cypress'

    },
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    video: true, // Habilita gravação de vídeo
    videosFolder: "cypress/videos", // Define a pasta para salvar os vídeos
    screenshotOnRunFailure: true, // Tira screenshots automaticamente quando um teste falha
    screenshotsFolder: "cypress/screenshots", // Define a pasta para salvar screenshot
    // viewportWidth: 335,
    // viewportHeight: 999,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
