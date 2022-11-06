import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("o usuário acessa a página de tutorial de modal box", () => {
    /* Acessar a pagina "https://w3schools.com/howto/howto_css_modals.asp" */
    const url = Cypress.config("baseUrl")
    cy.visit(url + "howto/howto_css_modals.asp")
})

When("o usuário clica no botão open-modal", () => {
    /* Encontrar o botão "Open Modal" e clicar */
    cy.contains("Open Modal").click()
})

Then("deve ser exibido uma janela", () => {
    /* Verificar se a modal está visivel */
    cy.get("#id01").then($modal => {
        return $modal.is(':visible')
    })
    .should ('equal', true)
})