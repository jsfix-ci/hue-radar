type RGBColor = string;
type RGBAColor = string;
type HexColor = string;

export type Color = RGBColor | RGBAColor | HexColor;

//  An "entry" for our report, which represents one line where colors were discovered.
export type ReportEntry = {
  colors: Set<Color>;
  file: string;
  lineNumber: number;
  verbatim: string;
}
