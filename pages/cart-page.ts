import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class CartPage extends BasePage {

    constructor(page: Page) {
        super(page, '/cart.html');
    }

    async itemNames() {
        return await this.page.locator('[data-test="inventory-item-name"]').allTextContents();
    }

    async removeItem(productName: string) {
        const item = this.page.locator('[data-test="inventory-item"]')
            .filter({ hasText: productName });

        await item.getByRole('button', { name: 'Remove' }).click();
    }
}