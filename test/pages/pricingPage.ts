import { Page, expect } from '@playwright/test';


export class PricingPage {

    constructor(page: Page) {
        this.page = page;
        this.url = "https://www.telerik.com/purchase.aspx";
    }

    async open() {
        await this.page.goto(this.url);
    }

    async verifyPageTitle() {
        let pricingPageTitle = await this.page.title();
        expect(pricingPageTitle).toBe("Purchase Telerik Software Development Tools");
    }


    async verifyProductPrice(product: string, price: string) {
        let eleDevCraftComplete = await this.page.getByRole('heading', { name: product });
        let elePurchaseTitle = await this.page.locator("//div[@class='Purchase-title']").filter({ has: eleDevCraftComplete });
        let elePurchaseCell = await this.page.locator("//div[contains(@class,'Purchase-cell')]").filter({ has: elePurchaseTitle });
        let elePurchasePrice = await elePurchaseCell.locator("//div[@class='Purchase-price']");
        let purchasePrice = (await elePurchasePrice.textContent()).replace(/[^0-9]/g, '').trim();
        expect(purchasePrice).toBe(price);
    }

    
}