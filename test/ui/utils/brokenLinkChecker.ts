import { Page, expect } from "@playwright/test";


export async function brokenLinkChecker(page: Page) {
    const baseURL = "https://www.telerik.com";

    const links = page.locator("a");

    const allLinks = await links.all();

    const allHrefs = await Promise.all(
        allLinks.map((link) => link.getAttribute("href"))
    )

    const allValidHrefs = allHrefs.reduce((links, link) => {
        expect.soft(link, `${link} is not a valid href`).toBeTruthy();
        if (link && !link?.startsWith("mailto")) {
            if (link.charAt(0) === "/" || link.charAt(0) === "#") link = baseURL + link;
            if (link.includes(baseURL)) links.add(link);
        }
            return links
        }, new Set<string>())

        for (let url of allValidHrefs) {
            try {
                const response = await page.request.get(url);
                expect.soft(response.ok(), `${url} is not valid`).toBeTruthy();
            } catch(err) {
                expect.soft(null, `${url} is not valid`).toBeTruthy();
                expect.soft(null, "" + err).toBeTruthy();
            }
    }
}