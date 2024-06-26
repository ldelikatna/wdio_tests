class cartPage {
    get cartContainer() { return $('[data-test="cart-contents-container"]')}
    
    get cartList() { return $$('[data-test="cart-list"]')}
  
    get addedProducTitle() { return $$('[data-test="item-4-title-link"]')}
  
    get removeButton() { return $('[data-test="remove-sauce-labs-backpack"]')}
  
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

  export default new cartPage ()