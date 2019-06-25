
describe('Cypress Home Page test' ,() => {
    beforeEach(' visit Home page ', () => {
        cy.visit('/');
    });

    it('verify all dropdowns are present', ()=> {
        cy.get('#routeDropDown').should('be.enabled')
        cy.get('#directionDropDown').should('be.disabled')
        cy.get('#stopsDropDown').should('be.disabled')
    });

    it('verify input box and Stop Number Button is present', () => {
        cy.get('#txtstopNumber').should('be.enabled')
        cy.get('#stopNumber').click({ force: true }).should('be.disabled')
    });

    it('enter stop Number and check Button is enabled', () => {
        cy.get('#txtstopNumber').type('1000');
        cy.get('#stopNumber').should('be.enabled');
        cy.get('#txtstopNumber').clear();

    });

    it('enter stop Number and route to departure page, check for elements ', () => {
        cy.get('#txtstopNumber').type('1000');
        cy.get('#stopNumber').should('be.enabled');
        cy.get('#stopNumber').click();
        cy.url().should('eq', 'http://localhost:3000/nextTrip');
        cy.get('.btn');
    });

    it('Check Routes -> go back to previos page is working ', () => {
        cy.get('#txtstopNumber').clear();
        cy.get('#txtstopNumber').type('1000');
        cy.get('#stopNumber').should('be.enabled');
        cy.get('#stopNumber').click();
        cy.url().should('eq', 'http://localhost:3000/nextTrip');
        cy.get('.btn').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });
});