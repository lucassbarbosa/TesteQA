import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que vou acessar a página de tabela de cores", () => {
    /* Acessar a página de tabela de cores "https://www.w3schools.com/colors/colors_groups.asp" */
})

When("encontrar a cor {string}", (Cor) => {
    /* Encontrar a linha que contenha o valor da primeira coluna igual a 'Black' */
})

Then("o hexadecial deve ser igual a {string}", (Hexa) => {
    /* Se o valor da segunda coluna for igual a #000000, a cor está correta. */
})