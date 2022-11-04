const url = Cypress.config("baseUrl")

class ValidaCorPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url + "colors/colors_groups.asp")
    }
    // encontra a cor Black
    buscarCor() {
        this.tagAColor = cy.contains("Black")
    }
    // Visualizar hexa
    compararCor() {
        secondColumn = this.tagAColor.parent("tr").children("td")[1]
        secondColumn.children("a").innerText.should("equal", "#000000")
    }
}

export default ValidaCorPage;