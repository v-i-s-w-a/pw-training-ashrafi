import { test, expect } from './fixtures';

test('Cart page should display and remove products', async ({ cartPage }) => {

    const product1 = 'Sauce Labs Backpack';
    const product2 = 'Sauce Labs Bike Light';

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