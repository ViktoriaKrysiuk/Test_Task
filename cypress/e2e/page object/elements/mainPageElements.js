class MainPageElements {

    get websiteLogo() {
        return cy.get('[alt="Rozetka Logo"]')
    }

    get catalogButton() {
        return cy.get('#fat-menu')
    }

    get itemsTable() {
        return cy.get('[class*="portal-grid"]')
    }

    categoryMenuItem(category) {
        return cy.get('[class*="menu-categories__item"]').find('a').contains(`${category}`)
    }

    subcategoryMenuItem(subcategory) {
        return cy.get('[class*="tile-cats__item"]').find('a').contains(`${subcategory}`)
    }

    shoppingFilter(filter) {
        return cy.get(`[data-id="${filter}"]`)
    }

    get priceFilters() {
        return cy.get('[class*="select-css"]')
    }

    get addToBasketButton() {
        return cy.get('[class*="buy-button"]')
    }

    categorySectionTitle(categoryName) {
        return cy.get('[class*="breadcrumbs__item"]').find('a').contains(`${categoryName}`)
    }

    get basketIcon() {
        return cy.get('[href*="header-basket"]')
    }

    get itemIntoBasket() {
        return cy.get('.cart-product__main')
    }

    get basketItemMenu() {
        return cy.get('[id*="cartProductActions"]')
    }

    get basketItemMenuDeleteButton() {
        return cy.get('button[type="button"]').contains(" Видалити ")
    }

    get searchField() {
        return cy.get('input[class*="search-form__input"]')
    }

    get searchSubmitButton() {
        return cy.get('[class*="search-form__submit"]')
    }

    get goodsItem() {
        return cy.get('[class*="catalog-grid__cell_type_slim"]')
    }

    get userLoginIcon() {
        return cy.get('[href*="icon-user-simple"]')
    }

    get userLoginEmailInput() {
        return cy.get('[id="auth_email"]')
    }

    get userLoginPasswordInput() {
        return cy.get('[id="auth_pass"]')
    }

    get userLoginSubmitButton() {
        return cy.get('[class*="auth-modal__submit"]')
    }

    get userWishlistIcon() {
        return cy.get('[class*="header-actions__item--wishlist"]')
    }
}

export default MainPageElements