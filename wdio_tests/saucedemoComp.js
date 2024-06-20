import { $ } from '@wdio/globals'

class SaucedemoComp {
  get userName() { return $('[data-test="username"]') }

  get passwordValue() { return $('[data-test="password"]') }

  get loginButton() { return $('[data-test="login-button"]') }

  get cartIcon() { return $('[data-test="shopping-cart-link"]')}

  get productTile() { return $('[data-test="inventory-item"]')}

  get cartItems() { return $$('[data-test="inventory-item"]')}

  get inventoryContainer () { return $('[data-test="inventory-container"]')}

  get inventoryList () { return $$('[data-test="inventory-list"]')}

  get prodcustOneCart () { return $('[data-test="add-to-cart-sauce-labs-backpack"]')}

  get shoppingCartBadge() { return $('[data-test="shopping-cart-badge"]')}

  get shoppingCartIcon() { return $('[data-test="shopping-cart-link"]')}

  get cartContainer() { return $('[data-test="cart-contents-container"]')}
  
  get cartList() { return $$('[data-test="cart-list"]')}

  get addedProducTitle() { return $$('[data-test="item-4-title-link"]')}

  get removeButton() { return $('[data-test="remove-sauce-labs-backpack"]')}


  async setUsername(username) {
    const userName = await this.userName
    await userName.setValue(username)
  }

  async setPassword(password) {
    const passwordCommon = await this.passwordValue
    await passwordCommon.setValue(password)
  }

  async clickLoginButton() {
    await this.loginButton.waitForClickable()
    await this.loginButton.click()
  }

  async cartIconVisible() {
    const isVisible = await this.cartIcon.waitForDisplayed()
    return isVisible;
  }

  async clickCartIcon() {
    await this.cartIcon.waitForClickable()
    await this.cartIcon.click()
  }

  async getProducts() {
    await this.inventoryContainer.waitForDisplayed()
    return this.inventoryList
  }

  async clickProcustOneCart() {
    await this.prodcustOneCart.click()
  }

  async getShoppingCardCount() {
    return this.shoppingCartBadge
  }

  async clickShoppingCard() {
    await this.shoppingCartIcon.click()

  }

  async getAddedProduct() {
    await this.cartContainer.waitForDisplayed()
    await this.cartList
    return this.addedProducTitle
  }

  async clickRemoveButton() {
    await this.removeButton.click()
  }

  async cartItems() {
    return this.cartItems
  }

  }

export default new SaucedemoComp()
