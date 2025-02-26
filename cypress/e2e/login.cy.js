/// <reference types="cypress" />

import home_page from '../support/pages/home_page';
import login_page from '../support/pages/login_page';

const user_data = require('../fixtures/desafio.json')

describe('Login de usuário', () => {

    beforeEach('Acessando página de login', () => {
        home_page.acessLoginPage()
    })

    it('Validar campo e-mail vazio', () => {
        login_page.fillPassword(user_data.user_password)
        login_page.clickLogin()
        login_page.checkMessage('E-mail inválido.')
    })
    it('Validar campo e-mail inválido', () => {
        login_page.fillEmail(user_data.user_email_invalid)
        login_page.clickLogin()
        login_page.checkMessage('E-mail inválido.')
    })
    it('Validar campo senha vazio', () => {
        login_page.fillEmail(user_data.user_email)
        login_page.clickLogin()
        login_page.checkMessage('Senha inválida.')
    })
    it('Validar campo senha inválido', () => {
        login_page.fillEmail(user_data.user_email)
        login_page.fillPassword(user_data.user_password_ivalid)
        login_page.clickLogin()
        login_page.checkMessage('Senha inválida.')
    })
    it('Validar login com sucesso', () => {
        
        login_page.fillEmail(user_data.user_email)
        login_page.fillPassword(user_data.user_password)
        login_page.clickLogin()
        login_page.checkRegisterSucess(user_data.user_email)
    })
})