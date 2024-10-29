/// <reference types="cypress" />

import { APP_URL } from "../../support/e2e";

describe("Signup Flow", () => {
  beforeEach(() => {
    cy.visit(`${APP_URL}/signup`);
  });

  it("successfully completes the signup process", () => {
    // Generate a unique email for each test run
    const uniqueEmail = `test${Date.now()}@example.com`;

    // Fill out the signup form
    cy.get('input[name="name"]').type("Test User");
    cy.get('input[name="age"]').type("25");
    cy.get('input[name="email"]').type(uniqueEmail);
    cy.get('input[name="password"]').type("password123");
    cy.get('input[name="confirm_password"]').type("password123");

    // Check for "Already registered? Sign In" link
    cy.contains("Already registered? Sign In").should("be.visible");

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert that we're redirected to the success page
    cy.url().should("include", "/success");

    // Assert that the success message is displayed
    cy.contains("Signed up successfully!").should("be.visible");
    cy.contains("Your account has been created.").should("be.visible");

    // Check for "Go to Sign In" link
    cy.contains("Go to Sign In").should("be.visible");
  });

  it("displays validation errors for invalid inputs", () => {
    // Submit the form without filling any fields
    cy.get('button[type="submit"]').click();

    // Assert that error messages are displayed
    cy.contains("Name is required").should("be.visible");
    cy.contains("Age is required").should("be.visible");
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
    cy.contains("Confirm Password is required").should("be.visible");

    // Fill out the form with invalid data
    cy.get('input[name="name"]').type("Test User");
    cy.get('input[name="age"]').type("17"); // Under 18
    cy.get('input[name="email"]').type("invalidemail");
    cy.get('input[name="password"]').type("short");
    cy.get('input[name="confirm_password"]').type("mismatch");

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert that specific error messages are displayed
    cy.contains("You must be at least 18 years old").should("be.visible");
    cy.contains("Invalid email address").should("be.visible");
    cy.contains("Password must be at least 6 characters").should("be.visible");
    cy.contains("Passwords must match").should("be.visible");
  });
});
