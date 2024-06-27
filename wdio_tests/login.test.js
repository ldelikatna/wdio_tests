import { it } from "mocha";
import loginPage from './pageObjects/loginPage.js';
import inventoryPage from "./pageObjects/inventoryPage.js";
import users from './users/users.js';


describe('login', () => {
    it ('Perform Login', async () => {
        await browser.url('/')
        await loginPage.setUsername(users.standartUser.email)
        await loginPage.setPassword(users.standartUser.password)
        await loginPage.clickLoginButton()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        const elementProducts = await $('[data-test="title"]')
        await expect(elementProducts).toHaveText('Products')

        const cartIconVisible = await inventoryPage.cartIconVisible()
        await expect(cartIconVisible).toBe(true)

        const getProductsCount = await inventoryPage.getProducts()
        await expect(getProductsCount).toBeElementsArrayOfSize({ gte: 1 })
    })

})
