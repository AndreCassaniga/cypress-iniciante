
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />
const elements = {
    imgHeader: '.header-logo',
    btnCadastro: '.fa-lock',
    fieldName: '#user'
}

Cypress.Commands.add('acessRegisterPage', () => {
    cy.visit('/')
    .get(elements.imgHeader)

    cy.get(elements.btnCadastro)
        .click()
    
    cy.get(elements.fieldName)
        .should('be.visible')
})