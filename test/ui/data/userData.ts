export type TUser = {
    testCaseName: string;
    help: string;
    interest: string;
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    country: string;
    state: string;
    phone: string;
    comment: string;
}

export const userData = [
    {
        testCaseName : "Form Steve",
        help : "Product questions",
        interest : "Test Studio",
        firstName : "Steve",
        lastName : "Johnson",
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