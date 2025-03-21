import { test } from '@playwright/test';
import { ContactUsPage } from '../pages/contactUsPage';
import { userData } from '../data/userData.js';

 
test.describe("Contact Us Page Tests", () => {
    let contactUsPage: ContactUsPage;

    test.beforeEach(async ({ page }) => {
        contactUsPage = new ContactUsPage(page);
        await contactUsPage.open();
    }); 

    
    let users = userData;
    
    users.forEach(user => {
        test(user.testCaseName, async ({ page }) => {
            await contactUsPage.fillGetInTouchForm(user);
        });
    });

});