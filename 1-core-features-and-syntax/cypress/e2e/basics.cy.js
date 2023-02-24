/// <reference types="cypress" /> // this is the magic line that makes intellisense work
describe("tasks page", () => {
	it("should render the main image", () => {
		cy.visit("http://localhost:5173/");
		cy.get(".main-header img").should("be.visible");
		// chaining .get() is not gonna search the element as if it is in the previous .get() call
		// cy.get(".main-header").get("img") // is not gonna work as expected. It's not gonna search img element inside the .main-header
		// instead, it's gonna search for img element in the whole DOM
		// BUT if we want to chain .get() calls, we can use .find() method
		cy.get(".main-header").find("img"); // this is gonna work as expected. It's gonna search for all img elements inside the .main-header
		// find only can be used after .get() call
	});

	it("should display the page title", () => {
		cy.visit("http://localhost:5173/");
		cy.get("h1").should("have.length", 1);
		cy.get("h1").contains("My Cypress Course Tasks"); // checks if the text is in the h1 element
		// cy.contains("My Cypress Course Tasks"); // only checks if the text is in the DOM
	});
});
