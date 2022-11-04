import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import > classe -- from > arquivo.js
import ValidaCorPage from './validaCorPage'
const validaCor = new ValidaCorPage

Given("ao acessar a página de tabela de cores", () => {
    validaCor.acessarSite();
})

When("a cor Black for encontrada", () => {
    validaCor.buscarCor();
})

Then("o hexadecial deve ser igual a #000000", () => {
    validaCor.compararCor();
})