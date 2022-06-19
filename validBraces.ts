export function validBraces(braces: string): boolean {
    let stack: string[] = [];
    const bracesArray: string[] = braces.split('');
    const brackets: { [index: string]: string } = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    const openingBraces = new Set(Object.keys(brackets));
    const closingBraces = new Set(Object.values(brackets));
    for (const brace of bracesArray) {
        if (openingBraces.has(brace)) {
            stack.push(brace);
        }
        if (closingBraces.has(brace)) {
            if (!stack.length) {
                return false;
            }
            let lastBracket = stack.pop();
            if (typeof lastBracket === 'string')
                if (brackets[lastBracket] !== brace) return false;
        }
    }
    return !stack.length;
}
