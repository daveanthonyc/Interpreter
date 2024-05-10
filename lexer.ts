import { Token, TokenType } from './token'

type Lexer = {
    input: string,
    position: number,
    readPosition: number,
    ch?: number | string
}

function createLexer(input: string): Lexer {
    return {
        input: input,
        position: 0,
        readPosition: 1,
    } as Lexer
}

function readChar(lex: Lexer) {
    if (lex.readPosition >= lex.input.length) {
        lex.ch = 0;
    } else {
        lex.ch = lex.input[lex.readPosition]
    }

    lex.position = lex.readPosition;
    lex.readPosition++;
}

function nextToken(lex: Lexer) {
    let tok: Token;

    switch (lex.ch) {
        case '=':
            tok = newToken(TokenType.ASSIGN, lex.ch);
            break;
        case ';':
            tok = newToken(TokenType.SEMICOLON, lex.ch);
            break;
        case '(':
            tok = newToken(TokenType.LBRACE, lex.ch);
            break;
        case ')':
            tok = newToken(TokenType.RBRACE, lex.ch);
            break;
        case ',':
            tok = newToken(TokenType.COMMA, lex.ch);
            break;
        case '+':
            tok = newToken(TokenType.PLUS, lex.ch);
            break;
        case '{':
            tok = newToken(TokenType.LBRACE, lex.ch);
            break;
        case '}':
            tok = newToken(TokenType.RBRACE, lex.ch);
            break;
        case '0':
            tok.Literal = '';
            tok.Type = TokenType.EOF
            break;
    }

}


function newToken(tokenType: TokenType, ch: number | string): Token {
    return {} as Token;
}
