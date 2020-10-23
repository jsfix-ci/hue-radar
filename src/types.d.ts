type HexColor = string;
type RGBColor = string;
type RGBAColor = string;
type HSLColor = string;
type HSLAColor = string;

export type Color = HexColor | RGBColor | RGBAColor | HSLColor | HSLAColor;

//  A file report entry, which represents one line where colors were discovered in source code.
export type ReportEntry = {
  colors: Set<Color>;
  file: string;
  lineNumber: number;
  verbatim: string;
};

/**
 * ColorsReport represents the final outputted colors report.
 *
 * @example:
 * const colorsReport: ColorsReport = {
 *   '#fff': [
 *     {
 *       lineNumber: 27,
 *       file: 'some-file.css',
 *       verbatim: '  color: #fff;'
 *     }
 *   ]
 * }
 */
export type ColorsReport = {
  [K: string]: Array<Omit<ReportEntry, 'colors'>>;
};
