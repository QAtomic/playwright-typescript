import { test } from '@playwright/test';
import { FreeTrialsPage } from '../pages/freeTrialspage';
import { sleep } from '../../utils/sleep';


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


    test('Telerik DevCraft Try Now Workflow', async () => {
        await freeTrialsPage.clickTryNowLink();
        await freeTrialsPage.enterEmailInCreateAccountForm();
        sleep(2000);
    });
});