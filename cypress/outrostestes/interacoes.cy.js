/// <reference types="cypress" />

describe('Interações', () => {

    it('Digitar em um campo', () => {
        // get - selecionar elementos
        cy.visit('/')
            .get('.header-logo')

        cy.get('.form-control')
            .type('emailteste@teste.com')
    } )

    it('Click', () => {
        // get - selecionar elementos
        cy.visit('/')
            .get('.header-logo')

        //Click normal
        // cy.get('.fa-user')
        //     .click()

        //Click duplo
        // cy.get('.fa-user')
        //     .dblclick()

        //Click duplo
        // cy.get('.fa-user')
        //     .rightclick()

        //Click por cordenadas
        //  cy.get('.fa-user')
        //      .click(100, 100 , {force: true})

        //Simular pressionar ENTER
        cy.get('.form-control')
            .type('emailteste@teste.com{enter}')

    } )

    it('Select', () => {
        cy.visit('/')
        .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View Two')
            .click()

        cy.get('#country')
        .select('Colombia')

    })

    it.only('Checkbox e radio button', () => {
        cy.visit('/')
        .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()

        cy.get('#materialUnchecked')
            .check()
            .uncheck()

        cy.get('#css')
            .check()        

        
    })

})