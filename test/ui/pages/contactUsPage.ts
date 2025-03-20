import { Page, expect, Locator } from '@playwright/test';
import { TUser } from '../data/userData';

export class ContactUsPage {
    page: Page;
    url: string;
    selectHelpYou: Locator;
    selectProductInterest: Locator;
    inputFirstName: Locator;
    inputLastName: Locator;
    inputBusinessEmail: Locator;
    inputCompanyName: Locator;
    selectCountry: Locator;
    selectState: Locator;
    inputPhone: Locator;
    inputComments: Locator;

    constructor(page: Page) {
        this.page = page;
        this.url = "https://www.telerik.com/contact";
        this.selectHelpYou = page.locator('select#Dropdown-1');
        this.selectProductInterest = page.locator('[name=DropdownListFieldController]');
        this.inputFirstName = page.locator('input#Textbox-1');
        this.inputLastName = page.locator('input#Textbox-2');
        this.inputBusinessEmail = page.locator('input#Textbox-2');
        this.inputCompanyName = page.locator('input#Textbox-3');
        this.selectCountry = page.locator('select#Country-1');
        this.selectState = page.locator('select#State-1');
        this.inputPhone = page.locator('input#Textbox-4');
        this.inputComments = page.locator('textarea#Textarea-1');
    }
    
    async open() {
        await this.page.goto(this.url);
    }

    async verifyPageTitle() {
        let pricingPageTitle = await this.page.title();
        expect(pricingPageTitle).toBe("Contact the Telerik Team | Progress Telerik");
    }

    async fillGetInTouchForm(user: TUser) {
        await this.selectHelpYou.selectOption( { value: user.help} );
        await this.selectProductInterest.selectOption( { value: user.interest });
        await this.inputFirstName.fill(user.firstName); 
        await this.inputLastName.fill(user.lastName); 
        await this.inputBusinessEmail.fill(user.email); 
        await this.inputCompanyName.fill(user.company); 
        await this.selectCountry.selectOption( { value: user.country } );
        await this.selectState.selectOption( { value: user.state } );
        await this.inputPhone.fill(user.phone);
        await this.inputComments.fill(user.comment);

        let screenshotPath = "./test/screenshots/contact-us-page/" + user.testCaseName + ".png";
        await this.page.screenshot({ path: screenshotPath });
    }
}