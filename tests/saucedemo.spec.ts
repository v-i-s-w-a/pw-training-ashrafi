import { test, expect } from '@playwright/test';

test('SauceDemo page validation', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle('Swag Labs');

    let result=await expect(page).toHaveURL('https://www.saucedemo.com/');

    console.log('SauceDemo page validation test completed successfully.');

});