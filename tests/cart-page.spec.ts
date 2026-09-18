import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/cart-page';

test('Cart page should display and remove products', async ({ page }) => {

    // Login
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Add two products
    const product1 = 'Sauce Labs Bolt T-Shirt';
    const product2 = 'Sauce Labs Fleece Jacket';

    await page.locator('[data-test="inventory-item"]')
        .filter({ hasText: product1 })
        .getByRole('button', { name: 'Add to cart' })
        .click();

    await page.locator('[data-test="inventory-item"]')
        .filter({ hasText: product2 })
        .getByRole('button', { name: 'Add to cart' })
        .click();

    // Open cart
    const cartPage = new CartPage(page);
    await cartPage.open();

    // Assert both products are in the cart
    const itemNames = await cartPage.itemNames();

    expect(itemNames).toEqual(
        expect.arrayContaining([product1, product2])
    );

    // Remove one product
    await cartPage.removeItem(product1);

    // Assert the other product is still there
    const remainingItems = await cartPage.itemNames();

    expect(remainingItems).toContain(product2);
    expect(remainingItems).not.toContain(product1);
});