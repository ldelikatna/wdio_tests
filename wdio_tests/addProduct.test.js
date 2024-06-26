import { it } from "mocha";
import loginPage from './login.page.js';
import inventoryPage from "./inventoryPage.js";
import cartPage from "./cartPage.js";
import users from './users.js';

describe('Add product', () => {
    
    it('Add product to the cart', async () => {
        browser.url('https://www.saucedemo.com/')
        await loginPage.setUsername(users.standartUser.email)
        await loginPage.setPassword(users.standartUser.password)
        await loginPage.clickLoginButton()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        await inventoryPage.clickProductCartIcon()
        const shoppingCartCount = await inventoryPage.getShoppingCardCount()
        await expect(shoppingCartCount).toBe('1')

        await inventoryPage.clickShoppingCard()
        const addedProduct = await cartPage.getAddedProduct()
        await expect(addedProduct).toHaveText('Sauce Labs Backpack')

        await cartPage.clickRemoveButton()
        const cartItems = await cartPage.cartItems()
        await expect(cartItems).toBeElementsArrayOfSize({ eq: 0 })
      })
})
