import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Lexer } from "./lexer.ts";
import { token } from "../token/token.ts";


Deno.test("basic tokens", () => {
    const input = 'let cool ,;(){}';
    const lexer = new Lexer(input);

    let x = lexer.nextToken();
    let b = lexer.nextToken();
    let comm = lexer.nextToken();

    assertEquals(x.type, token.LET)
    assertEquals(b.type, token.IDENT)
    assertEquals(comm.type, token.COMMA) // ILLEGAL
});

Deno.test("identifier let and numbers work", () => {
    const input = 'let x 5;';
    const lexer = new Lexer(input);

    let a = lexer.nextToken();
    let b = lexer.nextToken();
    let c = lexer.nextToken();

    assertEquals(a.type, token.LET)
    assertEquals(b.type, token.IDENT)
    assertEquals(c.type, token.INT)
});
