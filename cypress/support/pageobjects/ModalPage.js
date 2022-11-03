/// <reference types="Cypress" />

import ModalElements from "../elements/ModalElements";

const url = Cypress.config("baseUrl")

class ModalPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão 'open modal'
    abrirModal() {
        cy.get(ModalElements.botaoOpenModal()).click()
    }

    // Visualizar modal
    visualizarModal() {
        cy.get(loginElements.infoModal()).then($modal => {
            return $modal.is(':visible')
        })
        .should ('equal', true)
    }

}

export default ModalPage;