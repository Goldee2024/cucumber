// Import necessary libraries
const { Builder, By, until } = require('selenium-webdriver');
const { describe, it, after, before } = require('mocha');

// Tagging for categorization
// Tags: smoke, functional

describe('User Login Functionality', function() {
    let driver;

    // Test setup
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Test case
    it('should allow the user to login with valid credentials', async function() {
        // Preconditions
        await driver.get('http://example.com'); // Replace with actual URL

        // Step 1: Enter Valid User Name
        await driver.findElement(By.name('username')).sendKeys('validUser'); // Replace with actual username field locator

        // Step 2: Enter Password
        await driver.findElement(By.name('password')).sendKeys('validPassword'); // Replace with actual password field locator

        // Step 3: Click on Login button
        await driver.findElement(By.id('loginButton')).click(); // Replace with actual login button locator

        // Expected Outcome
        await driver.wait(until.urlIs('http://example.com/dashboard'), 5000); // Replace with actual expected URL
    });

    // Test teardown
    after(async function() {
        await driver.quit();
    });
});
