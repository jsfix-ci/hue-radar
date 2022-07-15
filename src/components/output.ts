import { program as commander } from 'commander';
import createHTMLReport from './createHTMLReport';
import type { ColorsReport } from '../types';
import { getFormatIs, SUPPORTED_FORMATS } from '../helpers';
import { ensureCorrectExtension, resolveCwd, writeJSONFile } from '../utils';


/**
 * Handles the report output for the user.
 *
 * @param {commander.Command} program - Commander program, with args.
 * @param {ColorsReport} colors - The color report data.
 */
export default async function output(program: commander.Command, colors: ColorsReport): Promise<void> {
  const formatIs = getFormatIs(program.format);
  const outPath = resolveCwd(program.output);
  if (formatIs(SUPPORTED_FORMATS.JSON)) {
    const outFile = ensureCorrectExtension(outPath, SUPPORTED_FORMATS.JSON);
    return writeJSONFile(outFile, colors);
  }
  if (formatIs(SUPPORTED_FORMATS.HTML)) {
    const outFile = ensureCorrectExtension(outPath, SUPPORTED_FORMATS.HTML);
    return createHTMLReport(colors, outFile);
  }
}
