import { test } from '@playwright/test';
import { PricingPage } from '../pages/pricingPage';


test.describe("Product Pricing", () => {
    let pricingPage: PricingPage;

    test.beforeEach( async ({ page }) => {
        pricingPage = new PricingPage(page);
        await pricingPage.open();
    });

    test("Featured Pricing", async ({ page }) => {
        await pricingPage.verifyProductPrice("DevCraft Complete", "1299");
    });

});
