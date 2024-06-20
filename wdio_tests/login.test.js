import { it } from "mocha";
import saucedemoComp from './saucedemoComp.js';
import users from './users.js';

describe('login', () => {
    it ('Perform Login', async () => {
        browser.url('https://www.saucedemo.com/')
        await saucedemoComp.setUsername(users.standartUser.email)
        await saucedemoComp.setPassword(users.standartUser.password)
        await saucedemoComp.clickLoginButton()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        const elementProducts = await $('[data-test="title"]')
        await expect(elementProducts).toHaveText('Products')

        const cartIconVisible = await saucedemoComp.cartIconVisible()
        await expect(cartIconVisible).toBe(true)

        const getProductsCount = await saucedemoComp.getProducts()
        await expect(getProductsCount).toBeElementsArrayOfSize({ gte: 1 })
    })

})
