import { test as base } from '@playwright/test';
import { InventoryPage } from '../pages/inventory-page';
import { CartPage } from '../pages/cart-page';

type Fixtures = {
    inventoryPage: InventoryPage;
    cartPage: CartPage;
};

export const test = base.extend<Fixtures>({
    inventoryPage: async ({ page }, use) => {

        // Login
        await page.goto('https://www.saucedemo.com/');

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        // Create InventoryPage
        const inventoryPage = new InventoryPage(page);

        await use(inventoryPage);
    },

    cartPage: async ({ inventoryPage, page }, use) => {

        // Add required products
        await inventoryPage.addItem('Sauce Labs Backpack');
        await inventoryPage.addItem('Sauce Labs Bike Light');

        // Open cart
        const cartPage = new CartPage(page);
        await cartPage.open();

        await use(cartPage);
    }
});

export { expect } from '@playwright/test';