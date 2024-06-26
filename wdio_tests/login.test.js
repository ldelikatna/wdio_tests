import { it } from "mocha";
import loginPage from './login.page.js';
import inventoryPage from "./inventoryPage.js";
import users from './users.js';

describe('login', () => {
    it ('Perform Login', async () => {
        browser.url('https://www.saucedemo.com/')
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
