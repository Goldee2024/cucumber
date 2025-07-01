// Import necessary libraries
const { Builder, By, until } = require('selenium-webdriver');
const { describe, it, after, before } = require('mocha');

// Tagging details for categorization
const TAGS = ['smoke', 'functional'];

describe('User Login Functionality', function() {
    let driver;

    // Test setup
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Test case
    it('should allow user to login with valid credentials', async function() {
        // Step 1: Open the Google login page
        await driver.get('https://accounts.google.com/'); // Google login URL

        // Step 2: Enter Valid User Name
        await driver.findElement(By.id('identifierId')).sendKeys('your-email@gmail.com'); // Replace with actual email

        // Step 3: Click on Next button
        await driver.findElement(By.id('identifierNext')).click();

        // Wait for the password field to be visible
        await driver.wait(until.elementLocated(By.name('password')), 5000);

        // Step 4: Enter Password
        await driver.findElement(By.name('password')).sendKeys('your-password'); // Replace with actual password

        // Step 5: Click on Next button
        await driver.findElement(By.id('passwordNext')).click();

        // Expected Outcome: Verify user is navigated to the Google account page
        await driver.wait(until.urlContains('myaccount.google.com'), 5000); // Check if redirected to account page
    });

    // Test teardown
    after(async function() {
        await driver.quit();
    });
});
