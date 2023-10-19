import sels from "../fixtures/adminPage.selectors.json";
Cypress.Commands.add('login', (login, pass) => {
    cy.get(sels.loginField).type(login)
    cy.get(sels.passField).type(pass)
    cy.get(sels.submitButton).click()
});

Cypress.Commands.add('bookSeats',(row, seat) => {
    cy.get(`main > section div:nth-child(${row}) > span:nth-child(${seat})`).click()
})
