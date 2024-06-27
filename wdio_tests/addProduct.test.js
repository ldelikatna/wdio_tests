import { it } from "mocha";
import loginPage from './pageObjects/loginPage.js';
import inventoryPage from "./pageObjects/inventoryPage.js";
import cartPage from "./pageObjects/cartPage.js";
import users from './users/users.js';


describe('Add product', () => {
  beforeEach(async () => {
      await browser.url('/')
      await loginPage.setUsername(users.standartUser.email)
      await loginPage.setPassword(users.standartUser.password)
      await loginPage.clickLoginButton()
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
  })
    
    it('Add product to the cart', async () => {
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
