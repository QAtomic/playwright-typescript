import { test } from '@playwright/test';
import { ContactUsPage } from '../pages/contactUsPage';
import { userData } from '../data/userData.js';

 
test.describe("Form Submissions", () => {
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