// / <reference types="cypress" />

describe('__define-ocg__ Javan.co.id Bug Scan', () => {
  const varOcg = 'https://javan.co.id';

  beforeEach(() => {
    cy.visit(varOcg);
  });
  describe('Navbar Dropdown Test', () => {
    it('should show dropdown on click', () => {
      cy.visit('https://javan.co.id')
  
      // Klik elemen navbar yang ada dropdown
      cy.get('.dropdown-toggle').first().click()
  
      // Pastikan dropdown muncul
      cy.get('.dropdown-menu').should('be.visible')
    })
  })

  describe('Hero Section Test', () => {
    it('should show hero section on page load', () => {
      cy.visit('https://javan.co.id')
  
      // Pastikan elemen hero ada dan terlihat
      cy.get('.hero').should('be.visible')
    })
  })

  describe('Image Load Test', () => {
    it('should not have broken images', () => {
      cy.visit('https://javan.co.id')
  
      cy.get('img').each(($img) => {
        cy.wrap($img).should('have.attr', 'src').then((src) => {
          cy.request(src).its('status').should('eq', 200)
        })
      })
    })
  })

  // cypress/e2e/form_validation.cy.js
  describe('Contact Us Form', () => {
    it('should submit the contact form', () => {
      cy.visit('https://javan.co.id/en/homepage');
  
      // Isi form-nya dulu (ganti selector sesuai struktur HTML)
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('textarea[name="message"]').type('This is a test message');
  
      // Klik tombol submit
      cy.get('.s_website_form_send').click();
  
      // Cek apakah ada response atau validasi, misalnya alert atau notifikasi muncul
      cy.get('#s_website_form_result')
        .should('be.visible')
        .and('not.contain', ''); // atau sesuaikan dengan isi pesan error/sukses
    });
  });
  

describe('Image Responsiveness on Mobile', () => {
  it('Images should not overflow screen width on mobile', () => {
    cy.viewport(425, 900); // iPhone-like size
    cy.visit('https://javan.co.id/en/homepage');

    // Tunggu gambar muncul
    cy.get('img').each(($img) => {
      cy.wrap($img).should('be.visible').then(($el) => {
        const imgWidth = $el[0].getBoundingClientRect().width;
        const windowWidth = Cypress.config('viewportWidth');
        
        // Assertion: gambar harus kurang dari 95% layar
        expect(imgWidth).to.be.lessThan(windowWidth * 0.95);
      });
    });
  });
});

  
  

});
