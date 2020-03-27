describe("Testing the Sign In Form", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/");
    });

    it("Tests inputs on the Form", function(){
        cy.get("#pizzaButton")
          .click()
        cy.get("input[name='name']")
          .type("Manuel")
          .should("have.value", "Manuel");
        cy.get("#sizes")
          .select("Large")
          .should("have.value", "Large");
        cy.get("input[name='pepperoni']")
          .check()
          .should("be.checked");
        cy.get("input[name='sausage']")
          .check()
          .should("be.checked");
        cy.get("input[name='ham']")
          .check()
          .should("be.checked");
        cy.get("input[name='mushroom']")
          .check()
          .should("be.checked");
        cy.get("input[name='instructions']")
          .type("Extra Cheese")
          .should("have.value", "Extra Cheese");
        cy.get('button[type="Submit"]')
          .click()
    });
        
});