import { test, expect } from '@playwright/test';

test.describe("Home Page Links", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.telerik.com/');    
    }); 


    test("Contact Us Link", async ({ page }) => {
        await page.click("//a[@title='Contact Us']");

        let contactUsPageTitle = await page.title();

        expect(contactUsPageTitle).toBe("Contact the Telerik Team | Progress Telerik");
    });

    test("Pricing Link", async ({ page }) => {
        await page.click("//a[text()='Pricing']");

        let pricingPageTitle = await page.title();

        expect(pricingPageTitle).toBe("Purchase Telerik Software Development Tools");
    });

    test("Search Link", async ({ page }) => {
        await page.click("//a[@title='Search']");

        let searchPageTitle = await page.title();

        expect(searchPageTitle).toBe("Search Results");
    });

});