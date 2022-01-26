/// <reference types="cypress"/>

describe("My first test Suit",function()
{

  it("APImocking",function()
  {  
    
      
     cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
     
     cy.intercept(
         {
             method:'GET',
             url   : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
         },
         {   statusCode: 200,
             body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                   },
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "BSG",
                        "aisle": "2302"
                    },
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "LSA",
                        "aisle": "2303"
                    },
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "DSR",
                        "aisle": "2304"
                    },
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "RCD",
                        "aisle": "2305"
                    },]
            

         }).as('bookretrived')
         cy.get('button[class="btn btn-primary"]').click()
         //Resolving Promise here taking Alias and request and response as parameter
         //After resolving the promise getmethod for the UI Row tag and assert the condition IN RESPONSE body's length
         cy.wait('@bookretrived').should(({request,response})=>
         {
              cy.get('tr').should('have.length',response.body.length+1).as('Rowlength')


              if ('Rowlength'==response.body.length)
         {
                cy.log("We have these many books")
         }
         else
         {
          cy.get('p').should('have.text','Oops only 1 Book available').then(function(logo){ cy.log(logo.text())})
         }

         })
        

         
  })

})