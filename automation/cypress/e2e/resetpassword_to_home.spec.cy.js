describe("Reset Password to Homepage", () => {
  it("should navigate back to homepage from reset password", () => {
    cy.visit("/resetpassword");

    // Go back to the homepage
    cy.get('a[href="/"]').click();

    // Assert that the user is on the homepage
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`);
  });
});
