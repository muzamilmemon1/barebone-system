#!/bin/bash

# Define the directory for the test files
TEST_DIR="automation/cypress/e2e"

# Create the test directory if it doesn't exist
mkdir -p "$TEST_DIR"

# List of test files to create
files=(
    "homepage_to_learnmore.spec.cy.js"
    "homepage_to_signup.spec.cy.js"
    "signup_to_success.spec.cy.js"
    "signup_to_signin.spec.cy.js"
    "signin_to_success.spec.cy.js"
    "signin_to_forgot_password.spec.cy.js"
    "signin_to_home.spec.cy.js"
    "signup_to_home.spec.cy.js"
    "resetpassword_to_success.spec.cy.js"
    "resetpassword_to_home.spec.cy.js"
    "success_to_home.spec.cy.js"
)

# Create each test file
for file in "${files[@]}"; do
    touch "$TEST_DIR/$file"
    echo "Created file: $TEST_DIR/$file"
done