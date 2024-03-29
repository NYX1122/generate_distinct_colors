import { IWantHueSettings } from 'iwanthue';
import app from '../app';

describe('app', () => {
  it('should generate the specified number of colors with default options', async () => {
    const colorNum = 5;
    const colors = await app(colorNum);
    expect(colors).toHaveLength(colorNum);
    expect(colors.every((color) => typeof color === 'string')).toBe(true);
  });

  it('should generate colors with custom options', async () => {
    const colorNum = 3;
    const options = {
      attempts: 50,
      quality: 600,
      colorSpace: [0, 360, 60, 100, 0, 100],
      clustering: 'k-means',
      seed: 42,
    };
    const colors = await app(colorNum, options as IWantHueSettings);
    expect(colors).toHaveLength(colorNum);
    expect(colors.every((color) => typeof color === 'string')).toBe(true);
  });

  it('should reject with an error if iwanthue throws an error', async () => {
    const colorNum = -1;
    await expect(app(colorNum)).rejects.toThrow();
  });
});
