import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import ModalPage from './modalpage'
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