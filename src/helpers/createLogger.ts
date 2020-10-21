import chalk from 'chalk';
import noop from '../utils/noop';

type LogType = 'info' | 'warn' | 'error' | 'success';

type Log = (...params: any[]) => void;

export type Logger = {
  [K in LogType]: Log;
}

/**
 * Returns a logger with pretty chalk color output for each type.
 * Only logs if debug mode is true.
 *
 * @param {boolean} isDebugMode - Determine if it's debug mode.
 */
export default function createLogger(isDebugMode: boolean): { [K in LogType]: Log } {
  //  Returns a fn to call console.log if in debug mode. Otherwise uses a noop.
  const logIfDebug = (chalkSettings: chalk.Chalk): Log => (...logs: any[]) => isDebugMode
    ? console.log(chalkSettings(...logs))
    : noop();
  return {
    info: logIfDebug(chalk.cyan),
    warn: logIfDebug(chalk.yellow),
    error: logIfDebug(chalk.red),
    success: logIfDebug(chalk.green),
  };
}
