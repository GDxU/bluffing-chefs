export function sortAlphabeticaly(a: string, b: string): number {
    if (a === b) {
        return 0
    }
    
    if (a > b) {
        return 1
    }

    return -1
}