import { assertEquals } from "https://deno.land/std@0.223.0/testing/asserts.ts";
import isAlpha from "./isAlpha.ts";

Deno.test('detect alpha chars', () => {
    assertEquals(isAlpha('a'), true);
    assertEquals(isAlpha(0), false);
})
