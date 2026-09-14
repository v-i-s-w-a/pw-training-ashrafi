import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;
    protected path: string;

    constructor(page: Page, path: string) {
        this.page = page;
        this.path = path;
    }

    async open() {
        await this.page.goto(`https://www.saucedemo.com${this.path}`);
    }
}