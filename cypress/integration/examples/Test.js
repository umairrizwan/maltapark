/// <reference types="Cypress" />
import LandPage from '../../support/pageObjects/landingpage'

describe('Maltapark E2E test', function () {

    const landpage = new LandPage();   

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    })

    it('Search for computer in books section', function () {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit(Cypress.env('url'));

        //Homepage logo assertion
        landpage.getHomePageTitle().should('have.attr','src',this.data.HomepageLogoPath);
        landpage.getAcceptBttn().click();
       
        landpage.getSearchBooks().click();
        landpage.getSearch().type('Computer');
        landpage.getSearchBttn().click();

        //Search page text assertion
        landpage.getSearchText().should('have.text',this.data.SearchTitle);
        cy.wait(2000);
        cy.SearchForDescription();
        cy.SearchForPrice();       

    })
})