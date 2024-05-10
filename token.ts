export type Token = {
    Type: TokenType,
    Literal: string
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
    LET
}
