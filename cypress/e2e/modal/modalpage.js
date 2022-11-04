/// <reference types="Cypress" />

import ModalElements from "./modalelements";
const modalElements = new ModalElements

const url = Cypress.config("baseUrl")

class ModalPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url + "howto/howto_css_modals.asp")
    }

    // Clica no botão 'open modal'
    abrirModal() {
        cy.contains("Open Modal").click()
        // modalElements.botao.click()
    }

    // Visualizar modal
    visualizarModal() {
        cy.get(modalElements.infoModal()).then($modal => {
            return $modal.is(':visible')
        })
        .should ('equal', true)
    }

}

export default ModalPage;