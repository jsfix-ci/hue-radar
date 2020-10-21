#!/usr/bin/env ts-node-script
import commander from './helpers/commander';
import globby from './helpers/globby';
import lineReader from './helpers/lineReader';
import createLogger from './helpers/createLogger';

//  Parse the args right away
const program = commander();

(async function main() {
  const log = createLogger(program.debug);
  log.info('🎨 Searching for colors.');
  const paths = await globby(program.patterns);
  
  const reports = await Promise.all(paths.map(lineReader));
  // console.log(reports);

}())
