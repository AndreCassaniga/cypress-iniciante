/// <reference types="cypress" />

describe('Get Elements', () => {

    it('Encontrar/Selecionar Elementos', () => {
        // get - selecionar elementos
        cy.visit('/')
            .get('.header-logo')
        
        // contains - para selecionar elementos por texto - geralmente diminuimos o escopo com um get()
        cy.get('#top_header')
            .contains('Login')
      
        //find - para encontrar elementos - geralmente diminuimos o escopo com um get()
        cy.get('#top_header')
            .find('.fa-user')

        //as - alias - serve para criar apelidos grandes comandos
        cy.get('#top_header').as('cabecalho')

    } )

})