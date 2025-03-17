import { test, expect } from '@playwright/test';
import { sum } from "../../src/functions/sum.js";
import { mathData } from "../data/mathData.js";

test.describe("Test Sum Function", () => {
    let maths = mathData;
    
    maths.forEach(math => {
        test(math.testName, () => {
            expect(sum(math.a, math.b)).toBe(math.result);
        });
    });




});