import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import ModalPage from '../pageobjects/ModalPage'
const modalPage = new ModalPage

Given("o usuário acessa a página de tutorial de modal box", () => {
    modalPage.acessarSite();
})

When("o usuário clica no botão open-modal", () => {
    modalPage.abrirModal();
})

Then("deve ser exibido uma janela", () => {
    modalPage.visualizarModal();
})