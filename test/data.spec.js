// importamos la funciónrun test
import { showIndicatorEducacion } from "./src/main.js";

describe("showIndicator", () => {
  it("should be a function", () => {
    expect(typeof showIndicatorEducacion).toEqual("function");
  });
});
