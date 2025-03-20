import { Page, expect, Locator } from '@playwright/test';
import { sleep } from "../utils/sleep.js";

export class SearchPage {
    page: Page;
    url: string;
    inputSearch: Locator;
    linkFirstResult: Locator;

    constructor(page: Page) {
        this.page = page;
        this.url = "https://www.telerik.com/search";
        this.inputSearch = page.getByPlaceholder('search');
        this.linkFirstResult = page.locator("//ul[@class='TK-Search-Results-List']/li[@class='TK-Search-Results-List-Item'][1]/h3/a");
    }
    
    async open() {
        await this.page.goto(this.url);
    }

    async verifyPageTitle() {
        let pricingPageTitle = await this.page.title();
        expect(pricingPageTitle).toBe("Search Results");
    }

    async search(str: string) {
        await this.inputSearch.fill(str);
        //I did not submit this search because it is blocked by Captcha. 
        
        await sleep(1000);
    }

    async verifyFirstLinkText(str: string) {
        let firstLinkText = await this.linkFirstResult.textContent();
        expect(firstLinkText).toContain(str);
    }
}