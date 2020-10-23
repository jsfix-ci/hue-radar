#!/usr/bin/node
import createLogger from './components/createLogger';
import globby from './components/globby';
import lineReader from './components/lineReader';
import formatReports from './components/formatReports';
import createHTMLReport from './components/createHTMLReport';
import { initProgram } from './helpers';
// import { writeJSONFile } from './utils';

//  Parse the args right away
const program = initProgram();

(async function main(): Promise<void> {
  const log = createLogger(program.debug);
  log.info('🎨 Searching for colors.');
  const paths = await globby(program.patterns);
  const reports = await Promise.all(paths.map(lineReader));
  const colors = formatReports(reports);
  const colorsCount = Object.keys(colors).length;
  log.success(`🎨 Discovered ${colorsCount} colors in this project!`);

  // TODO: if json report, then this
  // await writeJSONFile('hue-radar.report.json', colors);
  await createHTMLReport(colors);

}());
