export type Token = {
    type: TokenType,
    literal: string
}

export enum TokenType {
    ILLEGAL,
    EOF,

    // Identifiers and literals
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

export const keywords = <Record<string, TokenType>>{
    'function': TokenType.FUNCTION,
    'let': TokenType.LET
}

export function lookupIdentifier(identifier: string): TokenType {
    if (keywords[identifier]) {
        return (keywords[identifier]);
    }
    return TokenType.IDENT;
}
