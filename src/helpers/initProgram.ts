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
    .option('-p, --patterns <glob-patterns>', `Patterns for which files to search for colors on (default: ${DEFAULT_GLOBS.join(',')})`)
    .option('-f, --format <format>', 'Output format for color report, json or html (default: json)')
    .option('-o, --output <output-path>', 'Path to the color report outputted file');
  program.parse(process.argv);
  return program;
}
