describe("Reset Password to Success Reset Password", () => {
  it("should navigate to success page after resetting password", () => {
    cy.visit("/resetpassword");

    // Fill in the reset password form
    cy.get('input[name="email"]').type("user@example.com");
    cy.get("form").submit();

    // Assert that the user is redirected to the success reset password page
    cy.url().should("eq", `${Cypress.config("baseUrl")}/reset-success`);
  });
});
