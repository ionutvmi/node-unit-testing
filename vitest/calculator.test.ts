import { test, assert } from "vitest";

import { add } from "./calculator";

test("add", () => {
    assert.strictEqual(add(24, 2), 25);
    assert.strictEqual(add(24, 2, 4), 30);
    assert.strictEqual(add(24, 2, 4, 5), 35);

    assert.strictEqual(add(...[24, 2, 4, 5]), 35);
});
