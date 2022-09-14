class LandPage
{
    getHomePageTitle()
    {
        return cy.get('a.page-logo > img');
    }

    getAcceptBttn()
    {
        return cy.get('#searchselector')
    }

   getSearchBooks()
   {
       return cy.get('.item.indented').contains('Books');
   }
   
   getSearch()
   {
       return cy.get('#search');
   }

   getSearchBttn()
   {
       return cy.get('.btn.btn-search');
   }

   getSearchText()
   {
       return cy.get('.ui.large.label');
   }
}

export default LandPage