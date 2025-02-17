/// <reference types="cypress" />

//Elementos
const elements = {
    imgHeader: '.header-logo',
    btnCadastro: '.fa-lock',
    fieldName: '#user'
}

export default {
    acessRegisterPage(){
        cy.visit('/')
        .get(elements.imgHeader)
   
        cy.get(elements.btnCadastro)
            .click()
        
        cy.get(elements.fieldName)
            .should('be.visible')

    }

}