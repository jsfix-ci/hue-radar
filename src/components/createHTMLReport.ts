import path from 'path';
import { getProjectName, getTimeGenerated, template } from '../helpers';
import { writeFile } from '../utils';
import type { ColorsReport, TemplateReplacement } from '../types';


const TEMPLATE_PATH = path.resolve(__dirname, '../', 'templates', 'report.html');

const DEFAULT_WRITE_PATH = path.resolve(process.cwd(), 'hue-radar.report.html');

//  This is where the data is injected.
const INJECT_MARKER = {
  RAW_DATA: '{% RAW_DATA %}',
  PROJECT_NAME: '{% PROJECT_NAME %}',
  TIME_GENERATED: '{% TIME_GENERATED %}',
};

//  Returns the list of find/replace pairs for the template
function getReplacements(reportData: ColorsReport): TemplateReplacement[] {
  return [
    {
      find: INJECT_MARKER.RAW_DATA,
      replace: JSON.stringify(reportData),
    },
    {
      find: INJECT_MARKER.PROJECT_NAME,
      replace: getProjectName(),
    },
    {
      find: INJECT_MARKER.TIME_GENERATED,
      replace: getTimeGenerated(),
    },
  ];
}

/**
 * Takes the user's color discovery data and writes the HTML report template to disk.
 *
 * @param {ColorsReport} reportData - Color discovery report data.
 * @param {string} [writePath] - Optionally provide the path where the template should be written.
 */
export default async function createHTMLReport(reportData: ColorsReport, writePath: string = DEFAULT_WRITE_PATH): Promise<void> {
  const replacements = getReplacements(reportData);
  const report = await template(TEMPLATE_PATH, replacements);
  await writeFile(writePath, report, 'utf8');
}
