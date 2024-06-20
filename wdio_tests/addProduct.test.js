import { it } from "mocha";
import saucedemoComp from './saucedemoComp.js';
import users from './users.js';

describe('Add product', () => {
    
    it('Add product to the cart', async () => {
        browser.url('https://www.saucedemo.com/')
        await saucedemoComp.setUsername(users.standartUser.email)
        await saucedemoComp.setPassword(users.standartUser.password)
        await saucedemoComp.clickLoginButton()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        await saucedemoComp.clickProcustOneCart()
        let shoppingCartCount = await saucedemoComp.getShoppingCardCount()
        await expect(shoppingCartCount).toHaveText('1')

        await saucedemoComp.clickShoppingCard()
        const addedProduct = await saucedemoComp.getAddedProduct()
        await expect(addedProduct).toHaveText('Sauce Labs Backpack')

        await saucedemoComp.clickRemoveButton()
        const cartItems = await saucedemoComp.cartItems()
        await expect(cartItems).toBeElementsArrayOfSize({ eq: 0 })
      })
})
