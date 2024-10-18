describe("Success Page to Home", () => {
  it("should navigate back to homepage from success page", () => {
    cy.visit("/success");

    // Go back to the homepage
    cy.get('a[href="/"]').click();

    // Assert that the user is on the homepage
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
  });
});
