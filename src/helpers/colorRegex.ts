import hexRegex from 'hex-color-regex';
import rgbRegex from 'rgb-regex';
import rgbaRegex from 'rgba-regex';
import hslRegex from 'hsl-regex';
import hslaRegex from 'hsla-regex';


type ColorRegExpGetter = () => RegExp;

type ColorRegexType = 'HEX' | 'RGB' | 'RGBA' | 'HSL' | 'HSLA';

export type ColorMatcher = (text: string) => string;

const getMatcher = (colorRegexGetter: ColorRegExpGetter): ColorMatcher =>
  (text: string): string => {
    const match = colorRegexGetter().exec(text);
    return match
      ? match[0]
      : '';
  };

const colorRegex: { [K in ColorRegexType]: ColorMatcher } = {
  HEX: getMatcher(hexRegex),
  RGB: getMatcher(rgbRegex),
  RGBA: getMatcher(rgbaRegex),
  HSL: getMatcher(hslRegex),
  HSLA: getMatcher(hslaRegex),
};

export default colorRegex;
