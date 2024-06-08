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
    // Tests search bar
    cy.get('.agent-info__content__main-info__text__agent-name').contains('Moisés Adame Aguilar');
    cy.get('[data-testid="search-bar"]').type('Diego J');
    cy.get('.agent-info__content__main-info__text__agent-name').contains('Diego Jacobo');
    cy.get('.agent-info__content__main-info__text__agent-name').should('not.contain', 'Moisés Adame Aguilar');
    cy.get('[data-testid="search-bar-input"]').clear();
    // Tests filters
    cy.get('[data-testid="aci-button"]').click({ multiple: true });
    cy.get('.agent-info__content__main-info__text__agent-name').contains('Moisés Adame Aguilar');
    cy.get('[data-testid="multiselect-option-checkbox-BasicQueue"]').click();
    cy.get('.agent-info__content__main-info__text__agent-name').contains('José Aram Méndez Gómez');
    cy.get('.agent-info__content__main-info__text__agent-name').should('not.contain', 'Moisés Adame Aguilar');
    cy.get('[data-testid="multiselect-option-checkbox-BasicQueue"]').click();
    cy.get('[data-testid="aci-button"]').click({ multiple: true });
  });

  it('should navigate to the skill detail page', () => {
    cy.get('[data-testid="side-bar-element-Team4-Mobile Support"]').click();
    cy.wait(15000);
    cy.url().should('include', '/skills/');
    // Tests if the skill detail page has the correct alerts
    cy.get('.alert-expansion-panel__container').should('have.length', 1);
    
    // Tests if the skill detail page has the correct trainings
    cy.get('[data-testid="joint-training-expansion-panel-button"]').click();
    cy.get('[data-testid="progress-bar-label"]').should('have.length', 2);
    cy.get('[data-testid="progress-bar-value"]').should('have.length', 2);
    
    // Tests if the skill detail page has the correct agents
    cy.get('.agent-info__content__main-info__text__agent-name').contains('Diego Jacobo');
    cy.get('.agent-info__content__main-info__text__agent-name').contains('Moisés Adame Aguilar');
    cy.get('.agent-info__content__main-info__text__agent-name').should('not.contain', 'José Aram Méndez Gómez');
  });

  it('should navigate to the agent detail page', () => {
    cy.wait(15000);
    cy.get('.agent-info__content__main-info__text__agent-name').contains('Diego Jacobo').click();

    // Navigate to the agent detail page
    cy.url().should('include', '/agents/');
    cy.wait(15000);

    // Test if the agent has the correct information
    cy.get('[data-testid="information-bar"]').should('have.length', 2);
    cy.get('[data-testid="ItemSubitem-content"]').contains('Diego Jacobo');
    cy.get('[data-testid="ItemSubitem-content"]').contains('Team4-Mobile Support');
    cy.get('[data-testid="ItemSubitem-content"]').contains('DISCONNECTED');

    // Test if the agent detail page has the correct alerts
    cy.get('.alert-expansion-panel__container').should('have.length', 2);
    
    // Test if the agent detail page has the correct trainings
    cy.get('[data-testid="training-button"]').should('have.length', 4);
    
    // Tests navigate to an alert detail page
    cy.get('[data-testid="alert-expansion-panel-expand-button"]').click({ multiple: true });
    cy.get('[data-testid="aci-button"]').contains('View More').first().click();
    cy.url().should('include', '/alerts/');
  });
  
  it('should navigate to the alerts page', () => {
    // Navigate to the alerts page
    cy.get('[data-testid="alert-nav-alerts-button"]').click();
    cy.wait(4000);
    cy.url().should('include', '/alerts');

    // Test if the agent detail page has the correct alerts and all types of alerts are displayed
    cy.get('.alert-expansion-panel__container').should('have.length', 3);
    cy.get('[data-testid="alert-expansion-panel-expand-button"]').click({ multiple: true });
    cy.get('[data-testid="alert-expansion-panel-alert-priority-text"]').contains('Critic');
    cy.get('[data-testid="alert-expansion-panel-alert-priority-text"]').contains('Medium');
    cy.get('[data-testid="alert-expansion-panel-alert-priority-text"]').contains('Low');

    // Test navigate to an alert detail view
    cy.get('[data-testid="aci-button"]').contains('View More').first().click();
    cy.url().should('include', '/alerts/');
  });
  
  it('should navigate to the alert detail page', () => {
    // Navigate to the alerts page
    cy.get('[data-testid="alert-nav-alerts-button"]').click();
    cy.wait(4000);
    cy.url().should('include', '/alerts');

    // Navigate to the alert detail page
    cy.get('[data-testid="alert-expansion-panel-expand-button"]').click({ multiple: true });
    cy.get('[data-testid="aci-button"]').contains('View More').first().click();
    cy.url().should('include', '/alerts/');
    cy.wait(3000);

    // Test the go back button in the alert detail page
    cy.get('[data-testid="aci-button"]').contains('span', 'Go Back').click();
    cy.url().should('include', '/alerts');
  });

  it('should navigate to the logs page', () => {
    cy.get('[data-testid="side-bar-element-Logs"]').click();
    cy.wait(5000);
    cy.url().should('include', '/logs');
    cy.get('.history-agent__container').first().click();
  });
});
