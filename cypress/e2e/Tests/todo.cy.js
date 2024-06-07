describe('Login Page', () => {

  beforeEach(() => {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.viewport('macbook-16');
    cy.visit('/login');
  });

  it('should render login page', () => {
    cy.get('p').should('have.text', 'LOGIN');
    cy.get('[data-testid="input-email"]').should('have.attr', 'placeholder', 'Enter your email').should('exist');
    cy.get('[data-testid="input-password"]').should('have.attr', 'placeholder', 'Enter your password').should('exist');
    cy.get('button[type="submit"]').should('have.text', 'Login').should('exist');
  });

  it('should display an error message for invalid credentials', () => {
    cy.get('[data-testid="input-email"]').type('ivalid@test.com');
    cy.get('[data-testid="input-password"]').type('wrongpassword123!');
    cy.get('button[type="submit"]').click();

    cy.get('[data-testid="txt-error"]').should('have.text', 'Invalid email or password, please try again.');
  });

  it('should navigate to the home page after successful login', () => {
    cy.get('[data-testid="input-email"]').type('test@g.com');
    cy.get('[data-testid="input-password"]').type('123456');
    cy.get('button[type="submit"]').click();

    cy.url().should('not.include', '/login');
  });
});

describe('Main functionalities', () => {

  beforeEach(() => {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
    cy.viewport('macbook-16');
    cy.visit('/login');
    cy.get('[data-testid="input-email"]').type('test@g.com');
    cy.get('[data-testid="input-password"]').type('123456');
    cy.get('button[type="submit"]').click();
  });

  it('should render home page', () => {
    cy.url().should('include', '');
  });

  it('should filter using searchbar and filters', () => {
    cy.url().should('include', '');
    cy.wait(15000);
    cy.get('[data-testid="search-bar"]').type('Diego J');
    cy.get('.agent-info__content__main-info__text__agent-name').contains('Diego Jacobo');
    cy.get('[data-testid="search-bar"]').clear();
    cy.get('[data-testid="aci-button"]').click();
    
  });
});
