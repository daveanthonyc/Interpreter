import { assertEquals } from "https://deno.land/std@0.223.0/testing/asserts.ts";
import { TokenType, lookupIdentifier } from "../token.ts";

Deno.test('not sure what to put', () => {
    assertEquals(lookupIdentifier('function'), TokenType.FUNCTION);
    assertEquals(lookupIdentifier('asdf'), TokenType.INT);
})
