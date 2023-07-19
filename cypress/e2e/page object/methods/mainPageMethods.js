import MainPageElements from "../elements/mainPageElements";

const mainPageElements = new MainPageElements()

class MainPageMethods {

    openMarketplaceUrl() {
        cy.visit('https://rozetka.com.ua/ua/')
    }

    checkMarketplaceUrl(url) {
        cy.url().should('be.equal', `${url}`)
    }

    checkMarketplaceIsOpened() {
        mainPageElements.websiteLogo.should('be.visible')
    }

    openCatalog() {
        mainPageElements.catalogButton.should('be.visible').click()
    }

    chooseGoodsCategory(categoryName) {
        mainPageElements.categoryMenuItem(categoryName).click()
    }

    chooseGoodsSubcategory(subcategoryName) {
        mainPageElements.subcategoryMenuItem(subcategoryName).click()
    }

    checkItemsTable() {
        mainPageElements.itemsTable.first().scrollIntoView().should('be.visible')
    }

    choosePriceFilter(priceFilterName) {
        mainPageElements.priceFilters.select(priceFilterName)
    }

    addItemToBasket() {
        mainPageElements.addToBasketButton.first().click()
    }

    changeGoodsCategory(categoryName) {
        mainPageElements.categorySectionTitle(categoryName).click({force: true})
    }

    openBasket() {
        mainPageElements.basketIcon.click({force: true})
    }

    checkItemsInBasket(itemBasket) {
        mainPageElements.itemIntoBasket.find('a').contains(itemBasket)
    }

    openBasketItemMenu() {
        mainPageElements.basketItemMenu.click()
    }

    checkBasketItemMenuDeleteButton() {
        mainPageElements.basketItemMenuDeleteButton.should('be.enabled')
    }

    checkAndSubmitSearchOnWebsite(searchItemName) {
        mainPageElements.searchField.should('be.visible').clear().type(searchItemName)
        mainPageElements.searchSubmitButton.click()
    }

    openUserLoginWindow() {
        mainPageElements.userLoginIcon.should('be.visible').click()
    }

    checkAndEnterUserLoginAndPassword(userEmail, userPassword) {
        mainPageElements.userLoginEmailInput.should('be.visible').clear().type(userEmail)
        mainPageElements.userLoginPasswordInput.should('be.visible').clear().type(userPassword)
        mainPageElements.userLoginSubmitButton.should('be.visible').click()
    }

    checkUserLoginSuccessfully() {
        mainPageElements.userWishlistIcon.should('be.visible')
    }
}

export default MainPageMethods