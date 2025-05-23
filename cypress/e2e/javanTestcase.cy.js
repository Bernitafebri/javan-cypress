describe('Javan.co.id - Image Responsiveness Tests', () => {
  context('Homepage - Mobile View (425x900)', () => {
    it('should display all images responsively and without overflow', () => {
      cy.viewport(425, 900);
      cy.visit('https://javan.co.id/en/homepage');

      cy.get('img').each(($img) => {
        cy.wrap($img)
          .should('be.visible')
          .and(($el) => {
            expect($el[0].naturalWidth).to.be.greaterThan(0);
          });

        cy.wrap($img)
          .should('have.css', 'max-width')
          .and('match', /100%|auto|inherit|contain/);
      });

      cy.document().then((doc) => {
        expect(doc.documentElement.scrollWidth).to.be.lte(425);
      });
    });
  });

  context('Portfolio Page - Desktop View (1024x795)', () => {
    it('should display portfolio images correctly at 1024x795', () => {
      cy.viewport(1024, 795);
      cy.visit('https://javan.co.id/en/portfolio-list');

      cy.get('img').each(($img) => {
        cy.wrap($img)
          .should('be.visible')
          .and(($el) => {
            expect($el[0].naturalWidth).to.be.greaterThan(0);
          });

        cy.wrap($img)
          .should('have.css', 'max-width')
          .and('match', /100%|auto|inherit|contain/);
      });

      cy.document().then((doc) => {
        expect(doc.documentElement.scrollWidth).to.be.lte(1024);
      });
    });
  });
});
