import { assertEquals } from "https://deno.land/std@0.223.0/testing/asserts.ts";
import { Lexer, newToken, nextToken, readChar, readIdentifier } from "../lexer.ts";
import { Token, TokenType } from "../token.ts";

Deno.test('new token creation works', () => {
    assertEquals(newToken(TokenType.IDENT, 'lol'), {type: 2, literal: 'lol'})
})

Deno.test('read identifiers work', () => {
    const l = new Lexer('let1');
    assertEquals(readIdentifier(l), 'let');
})

Deno.test('readChar goes to next char', () => {
    const l = new Lexer('let1');
    assertEquals(l.ch, 'l');
    readChar(l);
    assertEquals(l.ch, 'e');
    readChar(l);
    assertEquals(l.ch, 't');
    readChar(l);
    assertEquals(l.ch, '1');
})

Deno.test('lexer works', () => {
    const l = new Lexer('asdf;');
    const tokens: Token[] = [];

    while (l.position < l.input.length) {
        tokens.push(nextToken(l));
        readChar(l);
    }

    const expectedResult = [
        {type: TokenType.IDENT, literal: 'asdf'},
        {type: TokenType.SEMICOLON, literal: ';'},
    ]

    assertEquals(tokens, expectedResult);
})
