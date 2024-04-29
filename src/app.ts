import iwanthue from 'iwanthue';
import sortColors from 'sort_colors';
import displayColors from 'display_colors';

import { Parameters } from './types';

const generateDistinctColors = ({ colorNum, options, display }: Parameters): Array<string> => {
  const optionData = {
    attempts: options?.attempts ?? 1000,
    quality: options?.quality ?? 500,
    colorSpace: options?.colorSpace ?? [0, 360, 75, 100, 0, 100],
    clustering: options?.clustering ?? 'force-vector',
    seed: options?.seed ?? 1
  };


  const colors = iwanthue(colorNum, optionData);

  const sortedColors = sortColors(colors);

  if (display === true) {
    displayColors(sortedColors);
  }

  return colors;
};

export default generateDistinctColors;