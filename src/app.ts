import iwanthue, { IWantHueSettings } from 'iwanthue';

const generateDistinctColors = (colorNum: number, options?: IWantHueSettings): Array<string> => {
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

  return colors;
};

export default generateDistinctColors;
