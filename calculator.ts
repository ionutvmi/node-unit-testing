export function add(...args: number[]) {
    let result = 0;

    for (const n of args) {
        result += n;
    }

    return result;
}
