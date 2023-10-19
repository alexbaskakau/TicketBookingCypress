import seats from "../fixtures/seats.json"
import sels from "../fixtures/mooviePage.selectors.json"
import admins from "../fixtures/admin.json"
import movs from "../fixtures/adminPage.selectors.json"
describe('Tickets booking', () => {
    it('Should book two tickets', () => {
      cy.visit('https://qamid.tmweb.ru/admin/')
      cy.login(admins.login, admins.password)
      cy.contains("Управление залами").should("be.visible")
      cy.get(movs.movie)
      .invoke("text")
      .then((movieFromAdmin) => {
      cy.visit('/')
      cy.get(sels.daySelector).click()
      cy.contains(movieFromAdmin).should('be.visible')
      cy.get(sels.moovieSelector).click()
      seats.forEach((seat) => {
      cy.bookSeats(seat.row, seat.seat)
      })
      cy.get(sels.bookingButton).click()
      cy.contains('Вы выбрали билеты').should('be.visible')
      cy.contains("Терминатор-заржавел").contains(movieFromAdmin)
    })
  })
})