export type Token = {
    Type: TokenType,
    Literal: string
}

export const TokenTypeS = {
    ILLEGAL: 'ILLEGAL',
    EOF: 'EOF',

    // Identifiers and literals
    IDENT: 'IDENT',
    INT: 'INT',

    // Operators
    ASSIGN: '=',
    PLUS: '+',

    // Delimiters
    COMMA: ',',
    SEMICOLON: ';',

    LPAREN: '(',
    RPAREN: ')',
    LBRACE: '{',
    RBRACE: '}',

    // Keywords
    FUNCTION: 'FUNCTION',
    LET: 'LET'
}

export enum TokenType {
    'ILLEGAL',
    'EOF',

    // Identifiers and literals
    'IDENT',
    'INT',

    // Operators
    '=',
    '+',

    // Delimiters
    ',',
    ';',

    '(',
    ')',
    '{',
    '}',

    // Keywords
    'FUNCTION',
    'LET'
}
