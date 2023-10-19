describe('Main page visible', () => {
  it('Should display movies list', () => {
    cy.visit('/')
    cy.contains('Зверополис').should('be.visible')
    cy.contains('Терминатор-заржавел').should('be.visible')
    cy.contains('Унесенные ветром').should('be.visible')
  })
})