import { test, expect } from '@playwright/test';

test.describe.parallel("API : Users", () => {
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
    });
    

    test("User Not Found", async ({ request }) => {
        const response = await request.get(`${baseURL}/api/users/23`);

        expect(response.status()).toBe(404);
    });


    test("Create User", async ({ request }) => {
        const response = await request.post(`${baseURL}/api/users`, {
            data: {
                name: "Mike", 
                job: "QA Engineer"
            }
        });

        expect(response.status()).toBe(201);

        const responseBody = JSON.parse(await response.text());

        console.log(responseBody);

        expect(responseBody.name).toBe("Mike");
        expect(responseBody.job).toBe("QA Engineer");
        expect(responseBody.id).toBeTruthy();
        expect(responseBody.createdAt).toBeTruthy();
    });
});