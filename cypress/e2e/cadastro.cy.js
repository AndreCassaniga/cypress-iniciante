/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import register_page from '../support/pages/register_page';

const user_data = require('../fixtures/desafio.json')

//const screens = ['desktop', 'iphone-xr', 'iphone-8']

//screens.forEach(element => {

    describe('Cadaastro de usuário', () => {

        beforeEach('Acessando página de cadastro', () => {
            // if (element != 'desktop'){
            //     cy.viewport(element)
            // }

            home_page.acessRegisterPage()
        })

        it('Validar campo nome vazio', () => {
            register_page.saveRegister()
            register_page.checkMessage('O campo nome deve ser prenchido')
        })
        it('Validar campo e-mail vazio', () => {
            register_page.fillName(user_data.user_name)
            register_page.saveRegister()
            register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
        })
        it('Validar campo e-mail inválido', () => {
            register_page.fillName(user_data.user_name)
            register_page.fillEmail(user_data.user_email_invalid)
            register_page.saveRegister()
            register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
        })
        it('Validar campo senha vazio', () => {
            register_page.fillName(user_data.user_name)
            //register_page.fillEmail(user_data.user_email)
            register_page.fillEmail('srgsdgsdfg')
            register_page.saveRegister()
            register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
        })
        it('Validar campo senha inválido', () => {
            register_page.fillName(user_data.user_name)
            register_page.fillEmail(user_data.user_email)
            register_page.fillPassword(user_data.user_password_ivalid)
            register_page.saveRegister()
            register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
        })
        it('Validar cadastro com sucesso', () => {
            const name = faker.person.fullName()
            register_page.fillName(name)
            register_page.fillEmail(user_data.user_email)
            register_page.fillPassword(user_data.user_password)
            register_page.saveRegister()
            register_page.checkRegisterSucess(name)
        })
    })

//});