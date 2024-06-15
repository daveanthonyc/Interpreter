import { Token, TokenType, lookupIdent, token } from "../token/token.ts";
import { isLetter } from "../utils/isLetter.ts";

export class Lexer {
    private input: string;
    public position: number;
    public readPosition: number;
    public ch: string | number;

    constructor(input: string) {
        this.input = input;
        this.position = 0;
        this.readPosition = 1;
        this.ch = input[this.position];
    }

    readChar(): void {
        if (this.readPosition >= this.input.length) {
            // at the end of file
            this.ch = 0;
        } else {
            this.ch = this.input[this.readPosition];
        }
        this.position = this.readPosition;
        this.readPosition++;
    }

    nextToken(): Token {
        let tok: Token = {} as Token;

        this.skipWhiteSpace();

        switch (this.ch) {
            case '=':
                tok = this.newToken(token.ASSIGN, this.ch);
                break;
            case ';':
                tok = this.newToken(token.SEMICOLON, this.ch)
                break;
            case '(':
                tok = this.newToken(token.LPAREN, this.ch)
                break;
            case ')':
                tok = this.newToken(token.RPAREN, this.ch)
                break;
            case ',':
                tok = this.newToken(token.COMMA, this.ch)
                break;
            case '+':
                tok = this.newToken(token.PLUS, this.ch)
                break;
            case '{':
                tok = this.newToken(token.LBRACE, this.ch)
                break;
            case '}':
                tok = this.newToken(token.RBRACE, this.ch)
                break;
            case 0:
                tok.literal = ""
                tok.type = token.EOF
                break;
            default:
                if (isLetter(this.ch as string)) {
                    tok.literal = this.readIdentifier();
                    tok.type = lookupIdent(tok.literal);
                    return tok;
                } else {
                    tok = this.newToken(token.ILLEGAL, this.ch as string);
                }
        }

        this.readChar()
        return tok;
    }

    private readIdentifier(): string {
        let identifier = '';

        // possible break
        while (isLetter(this.ch as string)) {
            identifier += this.ch;
            this.readChar();
        }

        return  identifier;
    }

    private newToken(tokenType: TokenType, ch: string): Token {
        return {type: tokenType, literal: ch} as Token;
    }

    skipWhiteSpace() {
        if (this.ch === ' ' || this.ch === '\n' || this.ch === '\t' || this.ch === '\r') {
            this.readChar();
        }
    }
}

