import { test, expect } from '@playwright/test';

test.describe.parallel("API : Get Users", () => {
    const baseURL = "https://reqres.in";

    test("Get User Two", async ({ request }) => {
        const response = await request.get(`${baseURL}/api/users/2`);

        expect(response.status()).toBe(200);

        const responseBody = JSON.parse(await response.text());

        //console.log(responseBody);

        expect(responseBody.data.id).toBe(2);
        expect(responseBody.data.first_name).toBe("Janet");
        expect(responseBody.data.last_name).toBe("Weaver");

        expect(responseBody.support.url).toContain("contentcaddy");

        //console.log(responseBody.support.url)
    });
    

    test("User Not Found", async ({ request }) => {
        const response = await request.get(`${baseURL}/api/users/23`);

        expect(response.status()).toBe(404);
    });
});