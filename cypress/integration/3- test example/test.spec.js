describe("event-id", function() {
    it("validate-event-id", function() {
        cy.visit("/");
        cy.get("#codeInput").type("R9YIfzZz");
        cy.get("#buttonUsar").click();
        cy.wait(2000);
        cy.get("#divDisponible").should("be.visible");
    })
    it("validate-event-incorrect-id", function() {
        cy.visit("/");
        cy.get("#codeInput").type("R9YIfzZ5");
        cy.get("#buttonUsar").click();
        cy.wait(2000);
        cy.get("#divUsadoInvalido").should("be.visible");
    })
    it("validate-event-used-id", function() {
        cy.visit("/");
        cy.get("#codeInput").type("BB3xnWYj");
        cy.get("#buttonUsar").click();
        cy.wait(2000);
        cy.get("#divUsadoInvalido").should("be.visible");
    })
})