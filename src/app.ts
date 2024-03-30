import iwanthue, { IWantHueSettings } from 'iwanthue';
import displayColors from 'display_colors';

const generateDistinctColors = (colorNum: number, options?: IWantHueSettings, display?: boolean): Array<string> => {
  const attempts = options?.attempts ?? 100;
  const quality = options?.quality ?? 800;
  const colorSpace = options?.colorSpace ?? [0, 330, 75, 100, 0, 80];
  const clustering = options?.clustering ?? 'force-vector';
  const seed = options?.seed ?? 1;

  const colors = iwanthue(colorNum, {
    attempts,
    quality,
    colorSpace,
    clustering,
    seed,
  });

  if (display === true) {
    displayColors(colors);
  }

  return colors;
};

generateDistinctColors(8, undefined, true);

export default generateDistinctColors;
