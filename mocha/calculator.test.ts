import assert from "assert/strict";
import { add } from "./calculator";

test("should add", () => {
    assert.strictEqual(add(24, 2), 26);
    assert.strictEqual(add(24, 2, 4), 30);
    assert.strictEqual(add(24, 2, 4, 5), 35);

    assert.strictEqual(add(...[24, 2, 4, 5]), 35);
});
