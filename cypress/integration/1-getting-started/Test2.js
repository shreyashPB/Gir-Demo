/// <reference types="cypress"/>

describe("My first test Suit",function()
{

  it("MyfirstTestCase",function()
  {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(6000)
    cy.get('.products').as('productlocator')
    cy.get('@productlocator').find('.product').each(($e1,index,list)=>
    {
       const textVeg = $e1.find('h4.product-name').text()

    if(textVeg.includes('Cashews'))
    {
        cy.wrap($e1).find('button').click()
    }
    cy.get('.brand').then(function(logo){ cy.log(logo.text())})
    } )
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
      //  // Now we have to asseet 3 conditions 
    //  //The name entered should have minimum length 2
    //  cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
    //  //Second is to identify wheathter the textbox below printing the same name as entered
    //  cy.get('.ng-pristine').should('have.value',this.data.name)
    //  //Third is to check wheather the third radio button is disabled or not
    //  cy.get(':nth-child(7) > :nth-child(4) > .form-check-label').should('be.disabled')
  





    

  



  })



})

