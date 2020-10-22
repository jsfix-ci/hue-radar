import commander from 'commander';
import getVersion from './getVersion';
import { DEFAULT_GLOBS } from '../components/globby';


/**
 * Setup commander and parse the process.argv.
 */
export default function initProgram(): commander.Command {
  const program = new commander.Command();
  program.version(getVersion())
    .option('-d, --debug', 'Display debug logging')
    .option('-p, --patterns <glob-patterns>', `patterns for which files to search for colors on (default: ${DEFAULT_GLOBS.join(',')})`);
  program.parse(process.argv);
  return program;
}
