import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../pages/contactUsPage';

 
test.describe("Form Submissions", () => {
    let contactUsPage: ContactUsPage;

    test.beforeEach(async ({ page }) => {
        contactUsPage = new ContactUsPage(page);
        await contactUsPage.open();
    }); 

    let users = [
        {
            testCaseName : "Form Andrew",
            help : "Product questions",
            interest : "Test Studio",
            firstName : "Andrew",
            lastName : "Sorensen",
            email : "automation@test.com",
            company : "Playwright",
            country : "United States",
            state : "PA",
            phone : "215-444-5555",
            comment : "This is a Playwright Test"
        } ,
        {
            testCaseName : "Form Mike",
            help : "Account activation",
            interest : "UI for Vue",
            firstName : "Mike",
            lastName : "Smith",
            email : "playwright@code.net",
            company : "Automation",
            country : "United States",
            state : "NY",
            phone : "215-777-8899",
            comment : "This is an Automation Test"
        }
    ];

    users.forEach(user => {
        test(user.testCaseName, async ({ page }) => {
            await contactUsPage.fillGetInTouchForm(user);
        });
    });

});