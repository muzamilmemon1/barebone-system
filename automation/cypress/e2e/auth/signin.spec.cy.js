/// <reference types="cypress" />

import { APP_URL } from "../../support/e2e";

describe("Sign In Flow", () => {
  beforeEach(() => {
    cy.visit(`${APP_URL}/signin`);
  });

  it("signs in and redirects to success page", () => {

    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();

    // Assert that we're redirected to the success page
    cy.url().should("include", "/success");

    // Assert that the success message is displayed
    cy.get("h2").should("contain", "Signed in successfully!");
  });

  it("navigates to the signup page when clicking 'Sign up now'", () => {
    cy.contains("Sign up now").click();
    cy.url().should("include", "/signup");
  });

  it("navigates to the reset password page when clicking 'Forgot password?'", () => {
    cy.contains("Forgot password?").click();
    cy.url().should("include", "/resetpassword");
  });


});
