/// <reference types="cypress" />

//ELEMENTOS
const elements = {
    buttons: {
        btnRegister: '#btnRegister'
    },
    fields: {
        fieldName: '#user',
        fieldEmail: '#email',
        fieldPassword: '#password'
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

