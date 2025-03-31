import { test } from '@playwright/test';
import { FreeTrialsPage } from "../pages/freeTrialsPage";



test.describe("Free Trials Tests", () => {
    let freeTrialsPage: FreeTrialsPage;

    test.beforeEach(async ({ page }) => {
        freeTrialsPage = new FreeTrialsPage(page);
        await freeTrialsPage.open();
    }); 


    test("Broken Link Checker", async () => {
        test.setTimeout(300000);
        await freeTrialsPage.checkForBrokenLinks();
    });


    test('Telerik DevCraft Try Now Workflow', async ({page}) => {
        await freeTrialsPage.clickTryNowLink();
        await freeTrialsPage.enterEmailInCreateAccountForm();
        await page.waitForTimeout(2000);
    });
});