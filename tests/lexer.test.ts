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
})

Deno.test('lexer works', () => {
    const l = new Lexer('let x = 1;');
    const tokens: Token[] = [];
    while (l.readPosition <= l.input.length) {
        tokens.push(nextToken(l));
        readChar(l);
    }

    const expectedResult = [
        {type: TokenType.LET, literal: 'let'},
        {type: TokenType.IDENT, literal: 'x'},
        {type: TokenType.ASSIGN, literal: '='},
        {type: TokenType.INT, literal: '1'},
        {type: TokenType.SEMICOLON, literal: ';'},
    ]
    console.log(tokens);
    assertEquals(tokens, expectedResult);
})



