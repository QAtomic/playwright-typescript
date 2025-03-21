import { Page } from '@playwright/test';

export async function closeCookiePopup(page : Page) {
    try {
        await page.click('button#onetrust-accept-btn-handler', { timeout: 2000 }); 
    } catch {}
}