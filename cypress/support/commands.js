// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('SearchForDescription',()=>{

  cy.get('div.content:nth-of-type(2) > a').first().then(($el) => {
    const token = $el.text();
    cy.log(token);

});
 })

 Cypress.Commands.add('SearchForPrice',()=>{

  cy.get('div.meta > span.pricerow').first().then(($el)=>{
    const price = $el.text();
    cy.log(price);
})


});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })