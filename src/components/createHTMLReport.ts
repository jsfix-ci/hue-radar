import path from 'path';
import { template } from '../helpers';
import { writeFile } from '../utils';
import type { ColorsReport } from '../types';


const TEMPLATE_PATH = path.resolve(__dirname, '../', 'templates', 'report.html');

const DEFAULT_WRITE_PATH = path.resolve(process.cwd(), 'hue-radar.report.html');

//  This is where the data is injected.
const DATA_INJECT_MARKER = '{% RAW_DATA_INJECT %}';

/**
 * Takes the user's color discovery data and writes the HTML report template to disk.
 *
 * @param {ColorsReport} reportData - Color discovery report data.
 * @param {string} [writePath] - Optionally provide the path where the template should be written.
 */
export default async function createHTMLReport(reportData: ColorsReport, writePath: string = DEFAULT_WRITE_PATH): Promise<void> {
  const replacements = [{ find: DATA_INJECT_MARKER,
    replace: JSON.stringify(reportData) }];
  const report = await template(TEMPLATE_PATH, replacements);
  await writeFile(writePath, report, 'utf8');
}
