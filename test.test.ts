import { assertEquals } from "https://deno.land/std@0.223.0/testing/asserts.ts";
import { TokenType } from './token.ts';

Deno.test("Test Next Token", () => {
  assertEquals(TokenType.ILLEGAL, 'ILLEGAL'); // Use assertions for verification
  assertEquals(TokenType.EOF, 'EOF'); // Use assertions for verification
  assertEquals(TokenType.IDENT, 'IDENT'); // Use assertions for verification
  assertEquals(TokenType.INT, 'INT'); // Use assertions for verification
  assertEquals(TokenType.ASSIGN, '='); // Use assertions for verification
  assertEquals(TokenType.PLUS, '+'); // Use assertions for verification
  assertEquals(TokenType.COMMA, ','); // Use assertions for verification
  assertEquals(TokenType.SEMICOLON, ';'); // Use assertions for verification
  assertEquals(TokenType.LPAREN, '('); // Use assertions for verification
  assertEquals(TokenType.RPAREN, ')'); // Use assertions for verification
  assertEquals(TokenType.LBRACE, '{'); // Use assertions for verification
  assertEquals(TokenType.RBRACE, '}'); // Use assertions for verification
  assertEquals(TokenType.FUNCTION, 'FUNCTION'); // Use assertions for verification
  assertEquals(TokenType.LET, 'LET'); // Use assertions for verification
});
