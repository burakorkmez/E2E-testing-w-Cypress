/// <reference types="cypress" />

describe("page navigation", () => {
	it("should navigate between pages", () => {
		cy.visit("/");
		// instead of class, id and element selectors we can use data-cy attributes as it is more reliable and less prone to change
		cy.get("[data-cy='header-about-link']").click();
		cy.location("pathname").should("eq", "/about");
		cy.go("back");
		cy.location("pathname").should("eq", "/");
		cy.get("[data-cy='header-about-link']").click();
		cy.get("[data-cy='header-home-link']").click();
		cy.location("pathname").should("eq", "/");
	});
});
