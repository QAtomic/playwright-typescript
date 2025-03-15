import { test, expect } from '@playwright/test';


test.describe("Product Pricing", () => {
    test.beforeEach( async ({ page }) => {
        await page.goto('https://www.telerik.com/purchase.aspx');
    });

    test("Featured Pricing", async ({ page }) => {
        let eleDevCraftComplete = await page.getByRole('heading', { name: 'DevCraft Complete' });
        let elePurchaseTitle = await page.locator("//div[@class='Purchase-title']").filter({ has: eleDevCraftComplete });
        let elePurchaseCell = await page.locator("//div[contains(@class,'Purchase-cell')]").filter({ has: elePurchaseTitle });
        let elePurchasePrice = await elePurchaseCell.locator("//div[@class='Purchase-price']");
        let purchasePrice = await elePurchasePrice.textContent();
        purchasePrice = purchasePrice.replace(/[a-zA-Z,$]/g, '').trim();
        expect(purchasePrice).toBe("1299");


    });

});
