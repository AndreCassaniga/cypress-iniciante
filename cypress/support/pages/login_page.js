/// <reference types="cypress" />

//ELEMENTOS
const elements = {
    buttons: {
        btnLogin: '#btnLogin'
    },
    fields: {
        fieldEmail: '#user',
        fieldPassword: '#password'
    },
    messages: {
        error: '.invalid_input',
        sucessTitle: '#swal2-title',
        sucessSubTitle: '#swal2-html-container'
    }

}
//AÇÔES METODOS FUNÇÔES 
export default {
    clickLogin() {
        cy.get(elements.buttons.btnLogin)
            .click()
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
   
    checkRegisterSucess(email) {
        cy.get(elements.messages.sucessTitle, {timeout: 3000})
            .should('have.text', 'Login realizado')
        cy.get(elements.messages.sucessSubTitle)
        .should('have.text',`Olá, ${email}`)
    }

}

