import { test } from '@playwright/test';
import { PricingPage } from '../pages/pricingPage';


test.describe("Pricing Page Tests", () => {
    let pricingPage: PricingPage;

    test.beforeEach( async ({ page }) => {
        pricingPage = new PricingPage(page);
        await pricingPage.open();
    });

    test("Broken Link Checker", async () => {
        test.setTimeout(120000);
        await pricingPage.checkForBrokenLinks();
    })

    test("Featured Pricing", async () => {
        await pricingPage.verifyProductPrice("DevCraft Complete", "1299");
    });

});
