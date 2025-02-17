/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const user_data = require('../fixtures/desafio.json')

describe('Cadaastro de usuário', () => {

    it('Validar campo nome vazio', () => {
        cy.visit('/')
            .get('.header-logo')

        //MINHA RESOLUÇÂO    
        // cy.get('.fa-lock')
        //     .click()
        //     .get('.account_form')
        //     .should('be.visible')

        //RESOLUÇÂO FINOTI    
        cy.get('.fa-lock')
            .click()
            .get('#user')
            .should('be.visible')
        
        cy.get('#btnRegister')
            .click()
        
        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element.text()).eq('O campo nome deve ser prenchido')
                expect(element).to.be.visible
                expect(element).not.disabled
        })
   
    } )

    it('Validar campo e-mail vazio', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock')
            .click()
        
        cy.get('.account_form')
            .should('be.visible')
        
        cy.get('#user')
            .type(user_data.user_name)

        cy.get('#btnRegister')
            .click()
        
        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element.text()).eq('O campo e-mail deve ser prenchido corretamente')
                expect(element).to.be.visible
                expect(element).not.disabled
        })
   
    } )

    it('Validar campo e-mail inválido', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock')
            .click()
        
        cy.get('.account_form')
            .should('be.visible')
        
        cy.get('#user')
            .type(user_data.user_name)

        cy.get('#email')
            .type(user_data.user_email_invalid)
        

        cy.get('#btnRegister')
            .click()
        
        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element.text()).eq('O campo e-mail deve ser prenchido corretamente')
                expect(element).to.be.visible
                expect(element).not.disabled
        })
   
    } )

    it('Validar campo senha vazio', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock')
            .click()
        
        cy.get('.account_form')
            .should('be.visible')
        
        cy.get('#user')
            .type(user_data.user_name)

        cy.get('#email')
            .type(user_data.user_email)

        cy.get('#btnRegister')
            .click()
        
        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element.text()).eq('O campo senha deve ter pelo menos 6 dígitos')
                expect(element).to.be.visible
                expect(element).not.disabled
        })
   
    } )


    it('Validar campo senha inválido', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock')
            .click()
        
        cy.get('.account_form')
            .should('be.visible')
        
        cy.get('#user')
            .type(user_data.user_name)

        cy.get('#email')
            .type(user_data.user_email)
        
        cy.get('#password')
        .type(user_data.user_password_ivalid)

        cy.get('#btnRegister')
            .click()
        
        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element.text()).eq('O campo senha deve ter pelo menos 6 dígitos')
                expect(element).to.be.visible
                expect(element).not.disabled
        })
   
    })

    it.only('Validar cadastro com sucesso', () => {

        const name = faker.name.fullName()
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock')
            .click()
        
        cy.get('.account_form')
            .should('be.visible')
        
        cy.get('#user')
            .type(name)
        
        cy.get('#email')
            .type(user_data.user_email)
        
        cy.get('#password')
        .type(user_data.user_password)

        cy.get('#btnRegister')
            .click()
        
        
        cy.get('#swal2-title')
            .then((element) => {
                expect(element.text()).eq('Cadastro realizado!')
                expect(element).to.be.visible
                expect(element).not.disabled
        })
   
        cy.get('#swal2-html-container')
        .then((element) => {
            expect(element.text()).eq(`Bem-vindo ${name}`)
            expect(element).to.be.visible
            expect(element).not.disabled
    })

    } )

})