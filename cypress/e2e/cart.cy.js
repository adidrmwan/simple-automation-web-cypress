describe('Success add item to cart using valid data', () => {

    beforeEach( ()=> {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('.login_logo', { timeout: 7000 }).should("be.visible")
        cy.get('#user-name').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label', { timeout: 7000 }).should("be.visible")
    })

    it('add an item to cart', () => {
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get('.fa-layers-counter').should("be.visible").contains(1)
    })

})