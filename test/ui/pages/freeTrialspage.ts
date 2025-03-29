import { Page, expect, Locator } from '@playwright/test';
import { closeCookiePopup } from '../utils/closeCookiePopup';
import { brokenLinkChecker } from '../utils/brokenLinkChecker';

export class FreeTrialsPage {
    page: Page;
    url: string;


    constructor(page: Page) {
        this.page = page;
        this.url = "https://www.telerik.com/download";
    };


    async open() {
        await this.page.goto(this.url);
        await closeCookiePopup(this.page);
    }

    async verifyPageTitle() {
        let pageTitle = await this.page.title();
        expect(pageTitle).toBe("Download trials and sign up for services | Telerik");
    }

    async checkForBrokenLinks() {
        await brokenLinkChecker(this.page);
    }

    async clickTryNowLink() {
        await this.page.getByText('Telerik DevCraftBuild').getByRole('link', { name: 'Try now' }).click();
    }

    async enterEmailInCreateAccountForm() {
        await this.page.getByRole('textbox', { name: 'Work or Telerik Account Email' }).fill('playwright@test.com');
    }


};