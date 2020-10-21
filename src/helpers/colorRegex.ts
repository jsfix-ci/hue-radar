import hexRegex from 'hex-color-regex';
import rgbRegex from 'rgb-regex';
import rgbaRegex from 'rgba-regex';


type ColorRegExpGetter = () => RegExp;

type ColorRegexType = 'HEX' | 'RGB' | 'RGBA';

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
};

export default colorRegex;
