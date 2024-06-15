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
}

export const keywords: Record<string, TokenType> = {
    'fn': token.FUNCTION,
    'let': token.LET,
}

export function lookupIdent(ident: string): TokenType {
    if (keywords[ident]) {
        return keywords[ident];
    }

    return token.IDENT;
}
