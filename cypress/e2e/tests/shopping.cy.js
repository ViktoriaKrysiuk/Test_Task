import MainPageElements from "../page object/elements/mainPageElements"
import MainPageMethods from "../page object/methods/mainPageMethods";

const mainPageElements = new MainPageElements()
const mainPageMethods = new MainPageMethods()
const MARKETPLACE_URL = "https://rozetka.com.ua/ua/"
const CATEGORY_NAME = "Товари для дому"
const SUBCATEGORY_NAME = " Свічки "

describe('Shopping test cases', () => {
    beforeEach(() => {
        mainPageMethods.openMarketplaceUrl()
    })

    it('Check the price filter working correctly', () => {
        const filters = ["Aroma Home", "Bispol", "Bolsius"]
        const priceFilterName = "Від дешевих до дорогих"
        cy.wait(5000)
        mainPageMethods.checkMarketplaceUrl(MARKETPLACE_URL)
        mainPageMethods.checkMarketplaceIsOpened()
        mainPageMethods.openCatalog()
        mainPageMethods.chooseGoodsCategory(CATEGORY_NAME)
        cy.wait(5000)
        mainPageMethods.checkItemsTable()
        mainPageMethods.chooseGoodsSubcategory(SUBCATEGORY_NAME)
        cy.wait(5000)
        filters.forEach(filter => {
             mainPageElements.shoppingFilter(filter).click()
             cy.wait(5000)
        }) 
        cy.wait(5000)
        mainPageMethods.choosePriceFilter(priceFilterName)
        cy.wait(10000)
    })

    it('Check adding items to the basket', () => {
        const category_changed = "Аромати для дому"
        const basket_items = ["Аромадифузор", "Свічка"] 
        const item_first = "Аромадифузор"
        const item_second = "Свічка"
        mainPageMethods.checkMarketplaceUrl(MARKETPLACE_URL)
        mainPageMethods.checkMarketplaceIsOpened()
        mainPageMethods.openCatalog()
        mainPageMethods.chooseGoodsCategory(CATEGORY_NAME)
        cy.wait(5000)
        mainPageMethods.checkItemsTable()
        mainPageMethods.chooseGoodsSubcategory(SUBCATEGORY_NAME)
        cy.wait(5000)
        mainPageMethods.addItemToBasket()
        cy.wait(10000)
        mainPageMethods.changeGoodsCategory(CATEGORY_NAME)
        cy.wait(5000)
        mainPageMethods.checkItemsTable()
        mainPageMethods.chooseGoodsSubcategory(category_changed)
        cy.wait(5000)
        mainPageMethods.addItemToBasket()
        cy.wait(10000)
        mainPageMethods.openBasket()
        cy.wait(2000)
        basket_items.forEach(item => {
            mainPageMethods.checkItemsInBasket(item)
        })
        mainPageMethods.openBasketItemMenu()
        mainPageMethods.checkBasketItemMenuDeleteButton()
    })

    it('Check searching the item', () => {
        const searchItemName = "Кавомашина RZTK"
        mainPageMethods.checkMarketplaceUrl(MARKETPLACE_URL)
        mainPageMethods.checkMarketplaceIsOpened()
        mainPageMethods.checkAndSubmitSearchOnWebsite(searchItemName)
        cy.wait(2000)
        mainPageElements.goodsItem.each(() => {
            cy.contains(searchItemName)
        })
    })

    it('Check the user can login successfully', () => {
        const userEmail = "test@gmail.com"
        const userPassword = "12345678"
        mainPageMethods.checkMarketplaceUrl(MARKETPLACE_URL)
        mainPageMethods.checkMarketplaceIsOpened()
        mainPageMethods.openUserLoginWindow()
        mainPageMethods.checkAndEnterUserLoginAndPassword(userEmail, userPassword)
        cy.wait(5000)
        mainPageMethods.checkUserLoginSuccessfully()
    })
})