/// <reference types="cypress" />

import { APP_URL } from "../../support/e2e";

describe("Success Page", () => {
  it("displays correct message after sign in", () => {
    cy.visit(`${APP_URL}/signin`);
    cy.get('input[name="email"]').type("test@example.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/success");
    cy.get("h2").should("contain", "Signed in successfully!");
    cy.get("p").first().should("contain", "Welcome back!");
    cy.contains("a", "Go to Home").should("exist");
  });

  it("displays correct message after sign up", () => {
    cy.visit(`${APP_URL}/signup`);
    cy.get('input[name="name"]').type("New User");
    cy.get('input[name="age"]').type("25");
    cy.get('input[name="email"]').type("newuser@example.com");
    cy.get('input[name="password"]').type("newpassword123");
    cy.get('input[name="confirm_password"]').type("newpassword123");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/success");
    cy.get("h2").should("contain", "Signed up successfully!");
    cy.get("p").first().should("contain", "Your account has been created.");
    cy.contains("a", "Go to Sign In").should("exist");
  });

  it("displays correct message after password reset", () => {
    cy.visit(`${APP_URL}/resetpassword`);
    cy.get('input[name="newPassword"]').type("newpassword123");
    cy.get('input[name="confirmPassword"]').type("newpassword123");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/success");
    cy.get("h2").should("contain", "Password reset successfully!");
    cy.get("p")
      .first()
      .should("contain", "You can now log in with your new password.");
    cy.contains("a", "Go to Home").should("exist");
  });

  it("has consistent styling", () => {
    cy.visit(`${APP_URL}/success`, {
      onBeforeLoad: (win) => {
        win.history.pushState({ from: "signin" }, "", "/success");
      },
    });

    cy.get("h2")
      .should("have.class", "text-2xl")
      .and("have.class", "font-bold");
    cy.get("a")
      .should("have.class", "text-indigo-600")
      .and("have.class", "hover:text-indigo-500");
  });
});
