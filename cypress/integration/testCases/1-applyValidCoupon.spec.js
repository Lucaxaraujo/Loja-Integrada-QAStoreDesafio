/// <reference types="Cypress" />

describe('Apply a valid discount coupon cart page', () => {
  it('should be able to display the new balance', () => {
    cy.visit("https://qastoredesafio.lojaintegrada.com.br/");
    
    cy.get(':nth-child(1) > ul > :nth-child(3) > .listagem-item > .produto-sobrepor').click();
    cy.wait(3000);
    cy.get('.acoes-produto > .comprar > .botao:visible').click();
    cy.wait(2000);
    cy.get('#usarCupom').type('10OFF');
    cy.get('#btn-cupom').click();
    cy.wait(2000);
    cy.get('#cupom_desconto').contains(' 10 % ');   
  });  
});