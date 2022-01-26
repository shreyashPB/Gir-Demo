/// <reference types="cypress"/>

describe("My first test Suit",function()
{

  it("MyfirstTestCase",function()
  {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(6000)
    // cy.get('.product:visible').should('have.length',4)
    // instead Of doing this either we can use Parentchild traversed Method of Cypress (But it will be hardcoded)
    // We can use String the methods
    // cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click()
    // To make it more dynamically we can use
    // As we have seen that we cannot handle the Unpromised child library by taking it into a variable Thus to reduce 
    //The Efrorts we can use 'ALIAS' a cypress method to make the locator as variabel
    cy.get('.products').as('productlocator')
    cy.get('@productlocator').find('.product').each(($e1,index,list)=>
    {
       const textVeg = $e1.find('h4.product-name').text()

    if(textVeg.includes('Cashews'))
    {
        cy.wrap($e1).find('button').click()
    }
     // To log this text this will throw an error due to the promise of Jquery
    // const Logo = cy.get('.brand')
    // cy.log(Logo.text())
    // In order to do this we can either use then function
    //  cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click()
    //Above method workd because In cypress cy.get is a parent Method of cypress and find is a child cypress
    // Method so then can be concatinate

    // const textVeg = $e1.find('h4.product-name').text()
    //This method worked because we have first resolved the index and then passed it to the child command
    //But when we try to log thee log by taking it to the variable it throws error because it was not resolved
    cy.get('.brand').then(function(logo){ cy.log(logo.text())})
    //aftet Doing this we have resolved the Promise of Parent and chiled method 

    }
    
    
    )
    {

   


    }

  



  })



})

