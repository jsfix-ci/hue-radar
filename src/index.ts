#!/usr/bin/node
import commander from './helpers/commander';
import globby from './helpers/globby';
import lineReader from './helpers/lineReader';
import createLogger from './helpers/createLogger';
import formatReports from './helpers/formatReports';
import { writeJSONFile } from './utils/fs';

//  Parse the args right away
const program = commander();

(async function main() {
  const log = createLogger(program.debug);
  log.info('🎨 Searching for colors.');
  const paths = await globby(program.patterns);
  const reports = await Promise.all(paths.map(lineReader));
  const colors = formatReports(reports);
  const colorsCount = Object.keys(colors).length;
  log.success(`🎨 Discovered ${colorsCount} colors in this project!`);
  await writeJSONFile('hue-radar.report.json', colors);
}())
