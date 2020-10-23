import chalk from 'chalk';
import { noop } from '../utils';


type LogType = 'info' | 'warn' | 'error' | 'success';

type Log = (...paramaters: any[]) => void; // eslint-disable-line @typescript-eslint/no-explicit-any

export type Logger = {
  [K in LogType]: Log;
};

/**
 * Returns a logger with pretty chalk color output for each type.
 * Only logs if debug mode is true.
 *
 * @param {boolean} isDebugMode - Determine if it's debug mode.
 */
export default function createLogger(isDebugMode: boolean): Logger {
  //  Returns a fn to call console.log if in debug mode. Otherwise uses a noop.
  const logIfDebug = (chalkSettings: chalk.Chalk): Log => (...logs: any[]): void => isDebugMode // eslint-disable-line @typescript-eslint/no-explicit-any
    ? console.log(chalkSettings(...logs)) // eslint-disable-line no-console
    : noop();
  return {
    info: logIfDebug(chalk.cyan),
    warn: logIfDebug(chalk.yellow),
    error: logIfDebug(chalk.red),
    success: logIfDebug(chalk.green),
  };
}
