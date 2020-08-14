/*// importamos la funciónrun test
import { showIndicatorEducacion } from "../src/main.js";

describe("showIndicator", () => {
  it("should be a function", () => {
    expect(typeof showIndicatorEducacion).toEqual("function");
  });
});
*/

// importamos la función `example`
import { data } from '../src/data';

describe('data', () => {
  it('should be an object', () => {
    expect(typeof data).toBe('object');
  });