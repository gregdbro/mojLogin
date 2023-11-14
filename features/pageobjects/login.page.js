const { $ } = require('@wdio/globals')

class LoginPage {
    //define the selectors
    get acceptCookiesButton () {
        return $("[id=cookies-accept-button]")
    }
    get usernameInputField () {
        return $("[id=login_form_user]")
    }
    get passwordInputField () {
        return $("[id=login_form_password]")
    }
    get loginButton () {
        return $("[id=login_form_form_submit]")
    }
    get body() {
        return $("body")
    }
    get outputAlert() {
        //return $("[id=main-content]")
        return $("#main-content > div.login-existing-users > div.alert")
    }

    clickAcceptCookiesButton = async () => {
        //added as when executing the test Validate that errors are present when the user does not insert all the necessary parameters
        //the same session is used, therefore cookies have already been cleared
        const areCookiesPresent = await this.acceptCookiesButton.isDisplayed();
        if (areCookiesPresent) {
            await this.acceptCookiesButton.waitForClickable();
            await this.acceptCookiesButton.click();
        }
    }

    async inputUsername(username) {
        await this.usernameInputField.waitForDisplayed();
        //good idea to clear the input field before inputting data
        await this.usernameInputField.clearValue();
        await this.usernameInputField.setValue(username);
        //check that the data has actually been input
        await expect(this.usernameInputField).toHaveValue(username);
    }

    async inputPassword(password) {
        await this.passwordInputField.waitForDisplayed();
        await this.passwordInputField.clearValue();
        await this.passwordInputField.setValue(password);
        await expect(this.passwordInputField).toHaveValue(password);
    }

    clickLoginButton = async () => {
        await this.loginButton.waitForClickable();
        await this.loginButton.click();
    }

    verifyURL = async (url) => {
        await expect(browser).toHaveUrlContaining(url);
    }

    verifyExactURL = async (url) => {
        await expect(browser).toHaveUrl(url);
    }

    assertOutputMessage = async (outputMessage) => {
        await expect(this.body).toHaveTextContaining(outputMessage);
    }

    assertErrorMessage = async (errorMessage) => {
        await expect(this.outputAlert).toHaveText(errorMessage);
    }

    assertErrorMessageNotPresent = async (errorMessage) => {
        await expect(this.body).not.toHaveText(errorMessage);
    }
}

module.exports = new LoginPage();
