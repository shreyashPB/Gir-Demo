/// <reference types="cypress"/>

describe("My first test Suit",function()
{

  it("MyfirstTestCase",function()
  {
    cy.visit("https://spa-ui-dev.sendpro360.pitneycloud.com/")
    cy.get('#username').type("analytics_ssto_client@yopmail.com")
    cy.get('#password').type("Analytics@123")
    cy.get('#signinButton').click()
    
    cy.get(' button[aria-label="Analytics"] span').click()
    cy.get('div#cdk-overlay-0 a[role="menuitem"][href="/analytics/dashboard/all"] span').click()
    cy.wait(5000)



    

  



  })



})
































































// /// <reference types="cypress"/>

// const { has } = require("cypress/types/lodash")


// describe("My first test Suit for POD",function()

//    before(function(){
//        //It will run before all the test blocks
//        //These are called as cypress hooks
//        // To do Data driven Approch from fixture Jason files we need to make a global variable and stor
//        //The Object of fixture into it
//        cy.fixture("example").then(function(data) { this.data = data })
//        //Same like constructors in python we need to define it inside the funtion by "this" Keyword
//    })

//   it("MyfirstTestCase",function()
//   {   // Now we can use the "key" more dynamically into our testcases
//       cy.visit("https://rahulshettyacademy.com/angularpractice/")
//       cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
//       cy.get(':nth-child(2) > .form-control').type(this.data.email)
//       cy.get('#exampleCheck1').check()
//     //   cy.get('#exampleFormControlSelect1').select(this.data.Gender)
//   })
// })