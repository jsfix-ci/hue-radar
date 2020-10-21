#!/usr/bin/env ts-node-script
import commander from './helpers/commander';
import globby from './helpers/globby';
import lineReader from './helpers/lineReader';

//  Parse the args right away
const program = commander();

(async function() {
  const paths = await globby(program.patterns);
  
  const reports = await Promise.all(paths.map(lineReader));
  console.log(reports);

}())
