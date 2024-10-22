/// <reference types="cypress" />

import { APP_URL } from "../../support/e2e";

describe("Reset Password Flow", () => {
  beforeEach(() => {
    cy.visit(`${APP_URL}/resetpassword`);
  });

  it("should display the reset password form", () => {
    cy.get('h2').should('contain', 'Reset your password');
    cy.get('input[name="newPassword"]').should('exist');
    cy.get('input[name="confirmPassword"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it("should show an error for mismatched passwords", () => {
    cy.get('input[name="newPassword"]').type("newpassword123");
    cy.get('input[name="confirmPassword"]').type("differentpassword");
    cy.get('button[type="submit"]').click();

    cy.contains("Passwords must match").should("be.visible");
  });

  it("should submit the form with matching passwords", () => {
    cy.get('input[name="newPassword"]').type("newpassword123");
    cy.get('input[name="confirmPassword"]').type("newpassword123");
    cy.get('button[type="submit"]').click();

    // Assert that we're redirected to the success page
    cy.url().should("include", "/success");
    cy.get("h2").should("contain", "Password reset successfully!");
  });

  it("should navigate to sign in page when clicking 'Sign in now'", () => {
    cy.contains("Sign in now").click();
    cy.url().should("include", "/signin");
  });

  it("has consistent styling with other components", () => {
    cy.get("h2").should("have.class", "text-2xl").and("have.class", "font-bold");
    cy.get("form").should("have.class", "space-y-6");
    cy.get('button[type="submit"]').should("have.class", "bg-indigo-600").and("have.class", "text-white");
  });
});
