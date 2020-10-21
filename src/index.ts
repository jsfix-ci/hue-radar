#!/usr/bin/env ts-node-script
import commander from './helpers/commander';
import globby from './helpers/globby';
import getColors from './components/getColors';

//  Parse the args right away
const program = commander();

(async function() {
  const paths = await globby(program.patterns);
  
  console.log(paths);

}())
