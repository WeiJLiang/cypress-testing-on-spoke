describe ('Home Tests', () => {

    //Check the URL, homepage and title
    it ("open the homepage and verify the url and the title", () =>{
        //open the homepage

        cy.visit('https://spoke-london.com/');
        
        //assert the url
        cy.url().should("include", "spoke-london");

        //assert the title
        cy.title().should("eq", "SPOKE Men's Trousers - A flawless fit, delivered");
    });

    //Click on the FIND YOUR FIT button verify pathname and title
    it('clicks the FIND YOUR FIT button and verify the url', () => {

        //click the FIND YOUR FIT button
        cy.get(".styles_banner__button__Q246s").eq(0).click();
        
        //assert the pathname
        cy.url().should("include", "/pages/fit-finder");

        //assert the title
        cy.title().should("eq", "Fit Finder - SPOKE");
    });

    //Click on the  EXLPORE THE RANGE button verify pathname and title
    it('clicks the  EXLPORE THE RANGE button and verify the url', () => {

        //to go back to the homepage & verify it's the homepage
        cy.go('back')
        cy.url().should('eq', 'https://spoke-london.com/');

        //click the EXLPORE THE RANGE button
        cy.get(".styles_banner__button__Q246s").eq(1).click();
        
        //assert the pathname
        cy.url().should("include", "/pages/explore-the-range");

        //assert the title
        cy.title().should("eq", "Explore the range - SPOKE");
    });

    it('Back to homepage and verify the url', () => {

        //to go back to the homepage & verify it's the homepage
        cy.go('back')
        cy.url().should('eq', 'https://spoke-london.com/');

        //assert the url
        cy.url().should("include", "spoke-london");

        //assert the title
        cy.title().should("eq", "SPOKE Men's Trousers - A flawless fit, delivered");
    });

});