import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { isDigit } from "./isDigit.ts";

Deno.test("isDigit", () => {
  assertEquals(isDigit('a'), false);
  assertEquals(isDigit('1'), true);
  assertEquals(isDigit('0'), true);
  assertEquals(isDigit('9'), true);
  assertEquals(isDigit('Z'), false);
});
