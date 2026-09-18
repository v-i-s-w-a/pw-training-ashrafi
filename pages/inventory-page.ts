import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class InventoryPage extends BasePage {

    constructor(page: Page) {
        super(page, '/inventory.html');
    }

    async addItem(productName: string) {
        await this.page.locator('[data-test="inventory-item"]')
            .filter({ hasText: productName })
            .getByRole('button', { name: 'Add to cart' })
            .click();
    }
}