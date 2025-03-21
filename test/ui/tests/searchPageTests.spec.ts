import { test } from '@playwright/test';
import { SearchPage } from '../pages/searchPage.js';

test.describe("Search Page Tests", () => {
    let searchPage: SearchPage;

    test.beforeEach( async ({ page }) => {
        searchPage = new SearchPage(page);
        await searchPage.open();
    });

    test("Broken Link Checker", async () => {
        test.setTimeout(120000);
        await searchPage.checkForBrokenLinks();
    })

    test("Search DevCraft", async () => {
        await searchPage.search("DevCraft");

        await searchPage.verifyFirstLinkText("DevCraft");
    });
    
});