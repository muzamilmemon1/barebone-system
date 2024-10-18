describe("Home Page Tests", () => {
  const APP_URL = Cypress.config("baseUrl");

  beforeEach(() => {
    cy.visit(`${APP_URL}/`);
  });

  it("should navigate from home page to learn more page", () => {
    // Assert that the home page is loaded
    cy.contains("Barebone Authentication System").should("be.visible");

    // Click the Learn More link
    cy.contains("Learn more").click();

    // Assert that we are on the learn more page
    cy.url().should("include", "/presentation");
    cy.contains("Learn more").should("be.visible");
  });

  it("should navigate from home page to sign up page", () => {
    // Assert that the home page is loaded
    cy.contains("Barebone Authentication System").should("be.visible");

    // Click the Sign Up button
    cy.contains("Sign Up").click();

    // Assert that we are on the sign up page
    cy.url().should("include", "/signup");
    cy.contains("Sign Up").should("be.visible");
  });
});
