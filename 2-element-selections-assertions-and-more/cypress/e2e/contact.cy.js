/// <reference types="cypress" />
describe("contact form", () => {
	it("should submit the form", () => {
		cy.visit("http://localhost:5173/about");
		cy.get("[data-cy='contact-input-message']").type("Hello, Cypress!");
		cy.get("[data-cy='contact-input-name']").type("John Doe");
		cy.get("[data-cy='contact-input-email']").type("test@example.com");
		cy.get("[data-cy='contact-btn-submit']").contains("Send Message").should("not.have.attr", "disabled");
		cy.get("[data-cy='contact-btn-submit']").click();
		cy.get("[data-cy='contact-btn-submit']").contains("Sending...").and("have.attr", "disabled");
		// and is alias for .should. It makes more readable code
		// cy.get("[data-cy='contact-btn-submit']").contains("Sending...").should("have.attr", "disabled");

		// This is not recommended
		// const btn = cy.get("[data-cy='contact-btn-submit']");
		// btn.click();
		// btn.contains("Sending...").and("have.attr", "disabled");

		// instead do this
		// cy.get("[data-cy='contact-btn-submit']").as("submitBtn");
		// cy.get("@submitBtn").click();
		// cy.get("@submitBtn").contains("Sending...").should("have.attr", "disabled");
	});
});
