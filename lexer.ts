import { Token, TokenType, lookupIdentifier } from './token.ts'
import isAlpha from './utils/isAlpha.ts';

export class Lexer {
    public input: string;
    public position: number;
    public readPosition: number;
    public ch: string | number;

    constructor(input: string) {
        this.input = input;
        this.position = 0;
        this.readPosition = 1;
        this.ch = input[this.position];
    }
}

export function readChar(l: Lexer) {
    if (l.readPosition >= l.input.length) {
        // because it is supposed to be ascii code for nul signifying EOF
        // I don't get this
        l.ch = 0;
    } else {
        l.ch = l.input[l.readPosition];
    }

    l.position = l.readPosition;
    l.readPosition++;
}

export function nextToken(l: Lexer) {
    skipToNextChar(l);
    let tok: Token;

    switch (l.ch) {
        case '=':
            tok = newToken(TokenType.ASSIGN, l.ch);
            break;
        case ';':
            tok = newToken(TokenType.SEMICOLON, l.ch);
            break;
        case '(':
            tok = newToken(TokenType.LPAREN, l.ch);
            break;
        case ')':
            tok = newToken(TokenType.RPAREN, l.ch);
            break;
        case ',':
            tok = newToken(TokenType.COMMA, l.ch);
            break;
        case '+':
            tok = newToken(TokenType.PLUS, l.ch);
            break;
        case '{':
            tok = newToken(TokenType.LBRACE, l.ch);
            break;
        case '{':
            tok = newToken(TokenType.RBRACE, l.ch);
            break;
        case '0':
            tok = newToken(TokenType.EOF, '');
            break;

        default:
            if (isAlpha(l.ch)) {
                const word = readIdentifier(l);
                tok = {type: lookupIdentifier(word), literal: word} as Token;
                return tok;
            } else if (isNumber(l.ch)) {
                // number checking implementation can be cause of error:
                const num = readNumber(l);
                tok = {type: TokenType.INT, literal: num} as Token;
            } else {
                tok = newToken(TokenType.ILLEGAL, l.ch);
            }
    }

    return tok as Token;
}

export function isNumber(char: string | number) {
    if (typeof char === 'number') {
        return false;
    }

    const charCodeOfNum = ['0'.charCodeAt(0), '9'.charCodeAt(0)];
    return (char.charCodeAt(0) >= charCodeOfNum[0] && char.charCodeAt(0) <= charCodeOfNum[1]);
}

export function readNumber(l: Lexer): string {
    let num = '';

    while (isNumber(l.ch)) {
        num += l.ch;
        readChar(l);
    }

    return num;
}

export function skipToNextChar(l: Lexer): void {
    if (l.ch === ' ' || l.ch === '\t' || l.ch === '\r') {
        readChar(l);
    }
}

export function readIdentifier(l: Lexer): string {
    let identifier = '';

    while (isAlpha(l.ch)) {
        identifier += l.ch;
        readChar(l);
    }

    return identifier;
}

export function newToken(type: TokenType, literal: string | number) {
    return {type, literal} as Token;
}
