import chroma from 'chroma-js';
import colorRegex from './colorRegex';


//  Returns a tuple, representing if the given color is either RGBA or HSLA
function getColorIs(colorString: string): [isRGBA: boolean, isHSLA: boolean] {
  return [
    !!colorRegex.RGBA(colorString),
    !!colorRegex.HSLA(colorString),
  ];
}

/**
 * Normalizes the color string by ensuring that:
 *  - All spaces/inconsistencies are removed from rgb/hsl strings.
 *  - Consistent casing is used for all colors.
 *  - Shortened hex codes are extended to the full 6-digit hex value.
 *  - If the user has specified, converts ALL non-alpha colors to hexes.
 *
 * @param {string} colorString - Any given color string (eg: `rgb(0, 0, 0)` or `#444`).
 * @param {boolean} convertAll - Determine if ALL colors should be converted to a hex.
 */
export default function normalizeColor(colorString: string, convertToHex: boolean): string {
  const [isRGBA, isHSLA] = getColorIs(colorString);
  const chromaColor = chroma(colorString);
  //  Do not convert color spaces with alpha channels, instead just remove any spaces/inconsistencies using chroma.
  if (isRGBA || isHSLA) {
    const convertTo = isHSLA ? 'hsl' : undefined; // undefined == rgb(a), by default.
    return chromaColor.css(convertTo);
  }
  //  Convert all colors to hex
  if (convertToHex) {
    return chromaColor.hex();
  }
  if (colorRegex.RGB(colorString)) {
    return chromaColor.css();
  }
  if (colorRegex.HSL(colorString)) {
    return chromaColor.css('hsl');
  }
  return chromaColor.hex();
}
