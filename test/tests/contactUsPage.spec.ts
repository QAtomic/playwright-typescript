import { test, expect } from '@playwright/test';

 
test.describe("Form Submissions", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.telerik.com/contact');    
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
            await page.selectOption('select#Dropdown-1', { value : user.help});
            await page.locator('[name=DropdownListFieldController]').selectOption( { value: user.interest });
            await page.fill('input#Textbox-1', user.firstName); 
            await page.fill('input#Textbox-2', user.lastName); 
            await page.fill('input#Email-1', user.email); 
            await page.fill('input#Textbox-3', user.company); 
            await page.selectOption('select#Country-1', { value : user.country });
            await page.selectOption('select#State-1', { value: user.state });
            await page.fill('input#Textbox-4', user.phone);
            await page.fill('textarea#Textarea-1', user.comment);


            await page.screenshot({ path: './test/screenshots/contact-us-page/screenshot.png' });
        });
    });

});