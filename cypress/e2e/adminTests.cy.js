import admins from "../fixtures/admin.json"
import sels from "../fixtures/adminPage.selectors.json"
describe('Admin page visible', () => {
    beforeEach(() => {
        cy.visit('https://qamid.tmweb.ru/admin/')
    })
    it('Should open admin page', () => {
      cy.get(sels.header).should("have.text", "Администраторррская")
      cy.get(sels.loginHeader).should("have.text", "Авторизация")
      cy.get(sels.loginField).should("be.visible")
      cy.get(sels.passField).should("be.visible")
      cy.get(sels.submitButton).should("be.visible")
    })
    it('Successful login', () => {
      cy.login(admins.login, admins.password)
      cy.contains("Управление залами").should("be.visible")
      cy.contains("Конфигурация залов").should("be.visible")
    })
    it('Unsuccessful login', () => {
        cy.login(admins.wrongLogin, admins.wrongPass)
        cy.contains("Ошибка авторизации").should("be.visible")
      })

})
        