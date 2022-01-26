/// <reference types="cypress"/>
import ShoppingPage from '../PageObject/ShoppingPage'
import HomePage from '../PageObject/HomePage'





describe("My first test Suit for POD",function()
{
   before(function(){
       //It will run before all the test blocks
       //These are called as cypress hooks
       // To do Data driven Approch from fixture Json files we need to make a global variable and store
       //The Object of fixture into it
       cy.fixture("users").then(function(data) { this.data = data })
       //Same like constructors in python we need to define it inside the funtion by "this" Keyword
   })
   it("MyfirstTestCase",function()
   {   // Now we can use the "key" more dynamically into our testcases
    //By this we can call the url of any enviroment to any testcase and if we want to concatinate 
    //The base URL with its extension URL we can do it by + ''
    //    cy.visit(Cypress.env('url')+"/angularpractice/")

    cy.visit(Cypress.env('url'))
       const homepage = new HomePage
       homepage.getUsername().type(this.data.name)
       homepage.getEmail().type(this.data.email)
       homepage.checkRadioButton().check()
       homepage.getGender().select(this.data.Gender)

       //Assert Wheather the bewow textbox Takes the given name or not
       homepage.getAssertion2Databinding().should('have.value',this.data.name)
       //Assert if the 3rd Radio Button is Disabaled or not
       homepage.getAssertionMinlenght2().should('have.attr','minlength','2')
       
       //Assert if the Name given have minimum of length 2
      
       homepage.getAssertionRadiobuttondisabled().should('be.disabled')

       homepage.getShopTab().click()
    
       this.data.productName
       this.data.productName.forEach(element => {cy.SelectProduct(element)
       // forEach method is used to Iterate over an String Array defined
       });
       
   })
   
   it("CheckoutPage",function()
   {   Cypress.config('defaultCommandTimeout',10000)
       const chekcoutpage = new ShoppingPage
       chekcoutpage.clickCheckoutbutton().click()
       var sum = 0    //taking sum as zero first as varibale as it need to be iteratable
       cy.get('tr td:nth-child(4) strong').each(($e1,index,list)=>
       {
            const amount = $e1.text()
            var   res    = amount.split(" ")  // taking Split keyword to catch the space between $ 65000
            res          = res[1].trim() 
            sum          = Number(sum) + Number(res)
            // assign res as Result of abover operations now
            // triming the catched space with res index 1
            // for example amount is $.65000 here 
            // res[0] = $. and 
            // res[1] = 65000 Therefore
       }).then(function(){  cy.log(sum) })
     //Thi is printing sum as 0 in dashboard the reason is Upper operation is performed by
       //Jqueries not cypress so we have to resolve the promise first by .then(function)

       // Now Comparing the total amount and our sum as assertion to do that we have to resolve the promise first
       cy.get('h3 > strong').then(function(element)
       {

        const amount = element.text()
        var   res    = amount.split(" ")  // taking Split keyword to catch the space between $ 65000
        let total         = res[1].trim() 
        expect(Number(total)).to.equal(sum)

       })
       cy.contains('Checkout').click()
       cy.get('#country').type("Ind")
       cy.get('.suggestions > :nth-child(1) > li > a').click()
       cy.get('#checkbox2').click({force:true})
       cy.get('input[class*="btn-succes"]').click()
    //    cy.get('.alert').should('have.text',' Thank you! Your order will be delivered in next few weeks')
       cy.get('.alert').then(element=>
        {
            const alterText = element.text()
            expect(alterText.includes('Success')).to.be.true
        })
   })
    
    
//    this.data.productname.forEach(element => console.log(element));
        
    


    
   
    
//     // cy.SelectProduct('Nokia Edge')

//     // cy.SelectProduct('Nokia Edge').then(function(logo){ cy.log(logo.text())})
   
    
    



//    })









})