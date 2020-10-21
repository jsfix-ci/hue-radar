import { program } from 'commander';
// import * as pkg from '../../package.json';
import { DEFAULT_GLOBS } from './globby';

/**
 * Setup commander and parse the process.argv.
 */
export default function commander() {
  // program.version(pkg.version);
  program.version('0.1.0')
    .option('-d, --debug', 'Display debug logging')
    .option('-p, --patterns <glob-patterns>', `patterns for which files to search for colors on (default: ${DEFAULT_GLOBS.join(',')})`);
  program.parse(process.argv);
  return program;
}
