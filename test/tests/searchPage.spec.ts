import { test, expect } from '@playwright/test';
import { sleep } from "../utils/sleep.js";

test.describe("Search", () => {

    test.beforeEach( async ({ page }) => {
        await page.goto('https://www.telerik.com/search');
    });

    test("Search DevCraft", async ({ page }) => {
        await page.getByPlaceholder('search').fill('DevCraft');
        //I did not submit this search because it is blocked by Captcha. 

        await sleep(1000);

        let firstLinkText = await page.locator("//ul[@class='TK-Search-Results-List']/li[@class='TK-Search-Results-List-Item'][1]/h3/a").textContent();
        expect(firstLinkText).toContain("DevCraft");
    });
});