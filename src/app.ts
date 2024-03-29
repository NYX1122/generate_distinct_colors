import iwanthue, { IWantHueSettings } from 'iwanthue';

const app = async (colorNum: number, options?: IWantHueSettings): Promise<Array<string>> => {
  const attempts = options?.attempts ?? 100;
  const quality = options?.quality ?? 800;
  const colorSpace = options?.colorSpace ?? [0, 330, 75, 100, 0, 80];
  const clustering = options?.clustering ?? 'force-vector';
  const seed = options?.seed ?? 1;

  return new Promise((resolve, reject) => {
    try {
      const colors = iwanthue(colorNum, {
        attempts,
        quality,
        colorSpace,
        clustering,
        seed,
      });
      resolve(colors);
    } catch (error) {
      reject(error);
    }
  });
};

export default app;