type LexerType = {
    input: string,
    position: number,
    readPosition: number,
    ch: number
}

class Lexer {
    constructor(public input: string) {

    }
}

function newLexer(input: string): Lexer {
    return new Lexer(input);
}
