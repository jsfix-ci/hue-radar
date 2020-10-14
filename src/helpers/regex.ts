import * as hexRegex from 'hex-color-regex';
import * as rgbRegex from 'rgb-regex';
import * as rgbaRegex from 'rgba-regex';

export default {
  HEX: (text: string) => text.match(hexRegex()),
  RGB: (text: string) => text.match(rgbRegex()),
  RGBA: (text: string) => text.match(rgbaRegex()),
};
