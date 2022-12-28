import { add } from "./calculator";

test("add", () => {
    expect(add(24, 2)).toBe(26);
    expect(add(24, 2, 4)).toBe(30);
    expect(add(24, 2, 4, 5)).toBe(35);

    expect(add(...[24, 2, 4, 5])).toBe(35);
});
