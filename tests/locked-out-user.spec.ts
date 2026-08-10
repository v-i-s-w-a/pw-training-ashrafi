import { test, expect } from '@playwright/test';

test('locked out user should see error message', async ({ page }) => {

await page.goto('https://www.saucedemo.com/');

await page.getByTestId('username').fill('locked_out_user');

await page.getByTestId('password').fill('secret_sauce');

await page.getByTestId('login-button').click();

await expect(page.getByTestId('error')).toBeVisible();
});