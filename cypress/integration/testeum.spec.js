///<reference types="cypress"/>

import loc from '../support/locators'

describe('Acessar o site', () => {

    before(() => {
        cy.visit('/')
       
        cy.get('.MuiButton-label').click()
    })
    describe('CAMPOS DE TEXTOS', () => {
        it('validação de campo de texto', () => {

    cy.camp_de_texto()
           
    
        })
    })
    describe('TIPOS DE VALIDAÇÃO', () => {
        it('', () => {

            var a = 1;
            var b = 2;

            //////VARIAVEL
            expect(a).equal(1)
            expect(a).not.be.equal(2)
            expect(b).equal(2)
            expect(b).not.be.equal(1)

            ////////OBJETO
            const obj = {
                a: 1,
                b: 2,

            }

        expect(obj).to.be.equal(obj)
        expect(obj).equal(obj)
        expect(obj).to.have.property('a')
        expect(obj).to.have.property('b')
        expect(obj).eql({a:1,b:2})

        })
    })
    describe('BOTOES DE RADIO',()=>{
        it('selecionando botão de radio',()=>{
            cy.get(loc.BOTAO_DE_RADIO.youtube).click()
            cy.get(loc.BOTAO_DE_RADIO.linkedin).check()

        
        })
    })
    describe('CAIXA DE SELEÇÃO',()=>{
        it('selecionando caixa de seleção',()=>{
           cy.caixa_de_seleção()

        })
    })
    describe('CAMPOS DE SELECT 4',()=>{
        it('selecionando o campo 4',()=>{
            cy.get('#id_campo_linguagemProgramacaoSimples').select('PYTHON')
          
        })
    describe('CAMPO DE SELECT 5',()=>{
            it('selecionando o campo 5',()=>{
                cy.get('#mui-component-select-linguagemProgramacao').type('C#')
                cy.timeout({timeout:5000})
                cy.get('body').type('{enter}')

        
              })
        })
        
        describe('CAMPO DE SELECT 6',()=>{
        
            it('selecionando o campo 6',()=>{
const tags = ['C#','Javascript','Python']
tags.forEach(valor =>{
    cy.get('input[aria-invalid^="false"][name="multiplaSelecao"]').type(valor)
    cy.get('input[aria-invalid^="false"][name="multiplaSelecao"]').type('{downArrow}')
    cy.get('input[aria-invalid^="false"][name="multiplaSelecao"]').type('{enter}')

})

          })
        })

        describe('UPLOAD DE ARQUIVO',()=>{
            it('fazendo upload de arquivo',()=>{
                var arq = {
                    img: 'fototeste.png',
                }
                cy.get('#id_file').attachFile(arq.img)
            })
        })
      
    describe('BOTÃO DE CONFIRMAÇÃO',()=>{
        it('selcionando o botão de confirmação',()=>{
            cy.get('#btn_confirm > .MuiButton-label').click()
            cy.get('.Toastify__toast-body > :nth-child(2)').should('exist')
            //Dados enviados com sucesso
            cy.get('.Toastify__toast-body > :nth-child(2)').should('contain.text','Dados enviados com sucesso')
            cy.get('#id_campo_nome').should('be.disabled')
            cy.get('#id_campo_descricao').should('be.disabled')
            cy.get('#id_campo_descricao').should('not.be.enabled')
        })
    })
    describe('BOTÃO DE RESEET',()=>{
        it('selecionando o botão de reset',()=>{
            cy.get('#btn_reset > .MuiButton-label').click()
        })
    }) 
    
    })
})