// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
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

import loc from './locators'

var txt = {

    meuNome: "GABRIEL",
    meuSobrenome: "RIBEIRO",
    meuEmail:"teste@teste.com",
    txt_descrição:"TESTE",

}

Cypress.Commands.add('camp_de_texto', (email, password) => { 

    cy.get(loc.CAMP_TXT.nome).should('exist').and('be.visible').and('be.enabled')
    cy.get(loc.CAMP_TXT.nome).type(txt.meuNome)
    cy.get(loc.CAMP_TXT.sobreNome).type(txt.meuSobrenome)
    cy.get(loc.CAMP_TXT.email).type(txt.meuEmail)
    cy.get(loc.CAMP_TXT.descrição).type(txt.txt_descrição)

 })
 Cypress.Commands.add('caixa_de_seleção', (email, password) => {
    cy.get('#id_checkbox_cypress').click().uncheck()
    cy.get('#id_checkbox_selenium').check()
    
  })