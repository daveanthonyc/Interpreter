export default function isAlpha(char: string | number) {
    if (typeof char === 'number') {
        return false;
    }

    return ( char.toLowerCase() != char.toUpperCase() );
}
