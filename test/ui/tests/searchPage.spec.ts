import { test } from '@playwright/test';
import { SearchPage } from '../pages/searchPage.js';

test.describe("Search", () => {
    let searchPage: SearchPage;

    test.beforeEach( async ({ page }) => {
        searchPage = new SearchPage(page);
        await searchPage.open();
    });

    test("Search DevCraft", async ({ page }) => {
        await searchPage.search("DevCraft");

        await searchPage.verifyFirstLinkText("DevCraft");
    });
    
});