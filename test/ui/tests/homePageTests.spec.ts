import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { PricingPage } from '../pages/pricingPage';
import { ContactUsPage } from '../pages/contactUsPage';
import { SearchPage } from '../pages/searchPage';


test.describe("Home Page Tests", () => {
    let homePage: HomePage;
    let contactUsPage: ContactUsPage;
    let pricingPage: PricingPage;
    let searchPage: SearchPage;


    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        contactUsPage = new ContactUsPage(page);
        pricingPage = new PricingPage(page);
        searchPage = new SearchPage(page);
        await homePage.open();
    }); 

    test("Broken Link Checker", async () => {
        test.setTimeout(120000);
        await homePage.checkForBrokenLinks();
    });


    test("Contact Us Link", async () => {
        await homePage.clickContactUsLink();

        await contactUsPage.verifyPageTitle();
    });

    test("Pricing Link", async () => {
        await homePage.clickPricingLink();

        await pricingPage.verifyPageTitle();
    });

    test("Search Link", async () => {
        await homePage.clickSearchLink();

        await searchPage.verifyPageTitle();
    });

});