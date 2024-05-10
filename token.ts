export type Token = {
    Type: TokenType,
    Literal: string
}

export const TokenType = {
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
