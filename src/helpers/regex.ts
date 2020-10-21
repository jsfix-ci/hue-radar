import hexRegex from 'hex-color-regex';
import rgbRegex from 'rgb-regex';
import rgbaRegex from 'rgba-regex';

export default {
  HEX: (text: string) => text.match(hexRegex()),
  RGB: (text: string) => text.match(rgbRegex()),
  RGBA: (text: string) => text.match(rgbaRegex()),
};
