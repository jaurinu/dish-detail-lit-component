/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../dish-detail-li-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<dish-detail-li-component></dish-detail-li-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
