const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const {config} = require("../../wdio.conf");

Given('I navigate to the MoJ login page', async () => {
    //when there is no need to pass a parameter we can use single quotes ''
    await browser.maximizeWindow();
    await browser.url(config.baseUrl);
    await LoginPage.clickAcceptCookiesButton();
});

Then(/^I input the username "(.*)"/, async (username) => {
    //when passing a parameter we must use /^/
    await LoginPage.inputUsername(username);
});

Then(/^I input the password "(.*)"/, async (password) => {
    await LoginPage.inputPassword(password);
});

Then('I click the Login button', async () => {
    await LoginPage.clickLoginButton();
});

Then(/^I expect to be logged in and receive the text "(.*)" to be visible/, async (outputMessage) => {
    await LoginPage.verifyURL("/candidate");
    await LoginPage.assertOutputMessage(outputMessage);
});

Then(/^I expect to receive the error message "(.*)"/, async (errorMessage) => {
    await LoginPage.verifyURL("/candidate/login");
    await LoginPage.assertErrorMessage(errorMessage);
});

Then('I expect not to be logged in', async () => {
    await LoginPage.verifyExactURL("https://justicejobs.tal.net/candidate/login");
    await LoginPage.assertErrorMessageNotPresent("Login Failed");
});
