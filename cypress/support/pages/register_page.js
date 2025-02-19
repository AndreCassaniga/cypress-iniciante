
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


//ELEMENTOS

const elements = {
    buttons: {
        btnRegister: '#btnRegister'
    },
    fields: {
        fieldName: '#user',
        fieldEmail: '#email',
        fieldPassword: '#passwordx'
    },
    messages: {
        error: '#errorMessageFirstName',
        sucessTitle: '#swal2-title',
        sucessSubTitle: '#swal2-html-container'
    }

}


//AÇÔES METODOS FUNÇÔES 
export default {
    saveRegister() {
        cy.get(elements.buttons.btnRegister)
            .click()
    },
    
    fillName(name) {
        cy.get(elements.fields.fieldName)
            .type(name)
    },
    
    fillEmail(email) {
        cy.get(elements.fields.fieldEmail)
            .type(email)
    },
    
    fillPassword(password) {
        cy.get(elements.fields.fieldPassword)
            .type(password)
    },
    
    checkMessage(message) {
        cy.get(elements.messages.error)
            .should('have.text', message)
    },
    
    checkRegisterSucess(name) {
        cy.get(elements.messages.sucessTitle, {timeout: 3000})
            .should('have.text', 'Cadastro realizado!')
        cy.get(elements.messages.sucessSubTitle)
        .should('have.text',`Bem-vindo ${name}`)
    }

}

