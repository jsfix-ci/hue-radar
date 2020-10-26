import { readFile, toLines } from '../utils';
import type { TemplateReplacement } from '../types';


//  Higher-order function which takes the template replacements and returns the replaceLine fn.
function withReplacements(replacements: TemplateReplacement[]): (line: string) => string {
  //  For each line, see if it has anything we want to replace in it.
  return function replaceLine(line: string): string {
    let draftLine = line;
    replacements.forEach(({ find, replace }) => {
      if (line.includes(find)) {
        draftLine = draftLine.replace(new RegExp(find, 'g'), replace);
      }
    });
    return draftLine;
  };
}

/**
 * Reads a file and replaces anything with your given set of replacements.
 * Note that this does only templates the string and returns it,
 * and it does not write a new file to disk.
 *
 * @param {string} filePath - Path to your template file.
 * @param {TemplateReplacement[]} replacements - A list of find/replace combos.
 */
export default async function template(filePath: string, replacements: TemplateReplacement[]): Promise<string> {
  //  Read the template file.
  const templateContents: string = await readFile(filePath, 'utf8');
  const replaceLine = withReplacements(replacements);
  return toLines(templateContents)
    .map(replaceLine)
    .join('\n');
}
