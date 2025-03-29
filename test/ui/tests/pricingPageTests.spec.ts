import { test } from '@playwright/test';
import { PricingPage } from '../pages/pricingPage';


test.describe("Pricing Page Tests", () => {
    let pricingPage: PricingPage;

    test.beforeEach( async ({ page }) => {
        pricingPage = new PricingPage(page);
        await pricingPage.open();
    });

    test("Broken Link Checker", async () => {
        test.setTimeout(300000);
        await pricingPage.checkForBrokenLinks();
    })

    test("Featured Pricing", async () => {
        await pricingPage.verifyProductPrice("DevCraft Complete", "1299");
    });

    test("Example TDD Todo Test", async () => {
        test.fixme(true, "Complete this test when code ready.  Dev not complete");
    });

});
