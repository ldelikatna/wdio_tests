class inventoryPage {
    get cartIcon() { return $('[data-test="shopping-cart-link"]')}
  
    get productTile() { return $('[data-test="inventory-item"]')}
  
    get cartItems() { return $$('[data-test="inventory-item"]')}
  
    get inventoryContainer () { return $('[data-test="inventory-container"]')}
  
    get inventoryList () { return $$('[data-test="inventory-list"]')}
  
    get productCart () { return $('[data-test="add-to-cart-sauce-labs-backpack"]')}
  
    get shoppingCartBadge() { return $('[data-test="shopping-cart-badge"]')}
  
    get shoppingCartIcon() { return $('[data-test="shopping-cart-link"]')}
  
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
  
    async clickProductCartIcon() {
      await this.productCart.click()
    }
  
    async getShoppingCardCount() {
       const shoppingCartBadge = await this.shoppingCartBadge
       return shoppingCartBadge.getText()
    }
  
    async clickShoppingCard() {
      await this.shoppingCartIcon.click()
    }
  
  }

  export default new inventoryPage()