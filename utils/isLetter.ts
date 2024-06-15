export function isLetter(ch: string) {
    return (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' || ch === '_');
}
