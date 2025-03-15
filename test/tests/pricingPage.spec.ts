import { test, expect } from '@playwright/test';


test.describe("Product Pricing", () => {
    test.beforeEach( async ({ page }) => {
        await page.goto('https://www.telerik.com/purchase.aspx');
    });

    test("Featured Pricing", async ({ page }) => {
        let text = await page.getByRole('heading', { name: 'DevCraft Complete' }).textContent();
        console.log(text);
    });

});
