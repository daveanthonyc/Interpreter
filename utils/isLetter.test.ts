import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { isLetter } from "./isLetter.ts";

Deno.test("isLetter", () => {
  assertEquals(isLetter('a'), true);
  assertEquals(isLetter('n'), true);
  assertEquals(isLetter('z'), true);
  assertEquals(isLetter('A'), true);
  assertEquals(isLetter('N'), true);
  assertEquals(isLetter('z'), true);
  assertEquals(isLetter('1'), false);
});
