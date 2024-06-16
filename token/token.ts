export type TokenType = number;

export type Token = {
    type: TokenType,
    literal: string
}

export enum token {
    ILLEGAL,
    EOF,
    // Identifiers + literals
    IDENT,
    INT,
    // Operators
    ASSIGN,
    PLUS,
    BANG,
    ASTERISK,
    SLASH,
    // Delimiters
    COMMA,
    SEMICOLON,
    LPAREN,
    RPAREN,
    LBRACE,
    RBRACE,
    // Keywords
    FUNCTION,
    LET,
    RETURN,
    TRUE,
    FALSE,
    IF,
    ELSE,

    LT,
    GT
}

export const keywords: Record<string, TokenType> = {
    'fn': token.FUNCTION,
    'let': token.LET,
    'return': token.RETURN,
    'true': token.TRUE,
    'false': token.FALSE,
}

export function lookupIdent(ident: string): TokenType {
    if (keywords[ident]) {
        return keywords[ident];
    }

    return token.IDENT;
}
