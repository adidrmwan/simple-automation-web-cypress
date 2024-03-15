describe('Success Login using valid data', () => {

  beforeEach( ()=> {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('.login_logo', { timeout: 7000 }).should("be.visible")
    cy.contains('LOGIN', { timeout: 7000 }).should("be.visible")
  })

  it('input standart username and valid password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_label', { timeout: 7000 }).should("be.visible")
  })

})

describe('Failed Login using invalid data', () => {
  
  beforeEach( ()=> {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('.login_logo', { timeout: 7000 }).should("be.visible")
    cy.contains('LOGIN', { timeout: 7000 }).should("be.visible")
  })

  it('input invalid username', () => {
    cy.get('#user-name').type('invalid_username')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]', { timeout: 7000 }).should("be.visible")
    cy.contains('Epic sadface: Username and password do not match any user in this service', { timeout: 7000 }).should("be.visible")
  })

  it('input invalid password', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type('invalid_password')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]', { timeout: 7000 }).should("be.visible")
    cy.contains('Epic sadface: Username and password do not match any user in this service', { timeout: 7000 }).should("be.visible")
  })

})