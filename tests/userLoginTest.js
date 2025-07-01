// Import necessary libraries
const { Builder, By, until } = require('selenium-webdriver');
const { describe, it, before, after } = require('mocha');
const assert = require('assert');

// Define the test suite
describe('User Login Functionality', function() {
    let driver;

    // Test setup
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // Test case
    it('should allow user to login with valid credentials', async function() {
        // Step 1: Navigate to the login page
        await driver.get('http://example.com/login');

        // Step 2: Enter Valid User Name
        await driver.findElement(By.name('username')).sendKeys('validUser');

        // Step 3: Enter Password
        await driver.findElement(By.name('password')).sendKeys('validPassword');

        // Step 4: Click on Login button
        await driver.findElement(By.id('loginButton')).click();

        // Wait for the page to load and check the URL
        await driver.wait(until.urlIs('http://example.com/dashboard'), 5000);

        // Assert that the user is on the dashboard page
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'http://example.com/dashboard');
    });

    // Test teardown
    after(async function() {
        await driver.quit();
    });
});

// Tags: smoke, regression, functional