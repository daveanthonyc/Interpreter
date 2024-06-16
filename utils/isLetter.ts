export function isLetter(ch: string): boolean {
    return (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z' || ch === '_');
}
