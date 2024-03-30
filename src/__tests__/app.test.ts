import { describe, it, expect, vi } from 'vitest';
import generateDistinctColors from '../app'; // Adjust the path as necessary
import { IWantHueSettings } from 'iwanthue';

// Mock the 'iwanthue' library
vi.mock('iwanthue', () => ({
  default: vi.fn((colorNum: number, _options: IWantHueSettings = {}): Array<string> => {
    // Prefix 'options' with an underscore to indicate it's intentionally unused
    // Return a mock array of color strings based on `colorNum`
    return Array.from({ length: colorNum }, (_, index) => `#color${index}`);
  }),
}));


describe('generateDistinctColors', () => {
  it('generates the specified number of colors', () => {
    const colorNum = 5;
    const colors = generateDistinctColors(colorNum);
    expect(colors).toHaveLength(colorNum);
    // Ensure each generated color is unique
    const uniqueColors = new Set(colors);
    expect(uniqueColors.size).toBe(colorNum);
  });

  it('correctly applies default options when no options are provided', () => {
    const colorNum = 3;
    const colors = generateDistinctColors(colorNum);
    expect(colors).toHaveLength(colorNum);
    // No need to test the defaults deeply here since it's the responsibility of iwanthue library,
    // but ensuring the function runs without error and returns the expected number of results
  });

  it('handles custom options correctly', () => {
    const colorNum = 2;
    const options: IWantHueSettings = { quality: 500, seed: 10 };
    const colors = generateDistinctColors(colorNum, options);
    // This test checks if the function runs without errors when custom options are provided
    expect(colors).toHaveLength(colorNum);
    // Further assertions can be made on the options if the mock implementation uses them
  });

  it('produces distinct colors', () => {
    const colorNum = 4;
    const colors = generateDistinctColors(colorNum);
    const uniqueColors = new Set(colors);
    expect(uniqueColors.size).toBe(colors.length);
    // This test ensures that all generated colors are unique
  });
});

