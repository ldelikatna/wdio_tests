
class loginPage {
    get userName() { return $('[data-test="username"]') }
  
    get passwordValue() { return $('[data-test="password"]') }
  
    get loginButton() { return $('[data-test="login-button"]') }
  
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
  
  }

  export default new loginPage()