class HomePage
{
    getUsername()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }
    
    getEmail()
    {
        return cy.get(':nth-child(2) > .form-control')
    }
    checkRadioButton()
    {
        return  cy.get('#exampleCheck1')
    }
    getGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }
    getAssertion2Databinding()
    {   

                cy.wait(5000)
        return  cy.get('.ng-untouched')
        
    }
    getAssertionRadiobuttondisabled()
    {
        return   cy.get('#inlineRadio3')
    }
    getAssertionMinlenght2()
    {
        return   cy.get('input[minlength="2"]')
    }
    getShopTab()
    {
        return   cy.get(':nth-child(2) > .nav-link')
    }

}

export default HomePage;