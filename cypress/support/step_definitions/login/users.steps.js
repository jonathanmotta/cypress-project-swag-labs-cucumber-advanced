/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const login = require('../../pages/login/users.function');


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })

Given('que eu acesse o site swag labs', () => {
    cy.visit('/')
})

When('preencher usuario', () => {
    login.preencherNomeUsuario();
})

And('preencher senha', () => {   
    login.preencherSenha();
})

And('clicar no botao login', () => {   
    login.clicarBotaoLogin();
})

Then('devo ver a mensagem swag labs na tela inicial', () => {   
    login.assertTextoSwagLabs();
})