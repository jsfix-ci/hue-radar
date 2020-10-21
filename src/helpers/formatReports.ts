import flatten from '../utils/flatten';
import type { ReportEntry } from "../types";

//  TODO: move/rename?
type ColorsReport = {
  [K: string]: Array<Omit<ReportEntry, 'colors'>>
};

/**
 * Formats the individual file report entries into a unified ColorsReport.
 *
 * @param {ReportEntry[][]} fileReports - Array of file report entries (see lineReader module).
 */
export default function formatReports(fileReports: ReportEntry[][]): ColorsReport {
  let allColors: ColorsReport = {};
  const reports: ReportEntry[] = flatten(fileReports);
  reports.forEach(({ colors, ...entry }) => {
    Array.from(colors).forEach(color => {
      allColors[color] = allColors[color]?.length > 0
      ? [
        ...allColors[color],
        entry,
      ]
      : [entry]
    })
  });
  return allColors;
}
