import { test, expect } from '@playwright/test';

test.describe.parallel("API : Get Users", () => {
    const baseURL = "https://reqres.in";

    test("Get User Two", async ({ request }) => {
        const response = await request.get(`${baseURL}/api/users`);

        expect(response.status()).toBe(200);
    });

    test("User Not Found", async ({ request }) => {
        const response = await request.get(`${baseURL}/api/users/23`);

        expect(response.status()).toBe(404);
    });
});