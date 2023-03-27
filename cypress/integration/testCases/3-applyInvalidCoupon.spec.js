/// <reference types="Cypress" />

describe('Apply an invalid discount coupon at cart page', function() {
  it('Should display an alert for coupon not found and not apply any discount', function() {
    cy.visit("https://qastoredesafio.lojaintegrada.com.br/");
  
    cy.get(':nth-child(1) > ul > :nth-child(3) > .listagem-item > .produto-sobrepor').click();
    cy.wait(3000);
    cy.get('.acoes-produto > .comprar > .botao:visible').click();
    cy.wait(2000);
    cy.get('#usarCupom').type('CUPOMINVALIDO');
    cy.get('#btn-cupom').click();
    cy.wait(2000);
    cy.get('#usarCupom').should('be.empty');
    cy.get('.alert-danger').should('include.text', 'Cupom não encontrado.');   
  });  
});