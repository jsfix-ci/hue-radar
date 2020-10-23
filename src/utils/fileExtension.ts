import type { Formats } from '../helpers';


const DOT = '.';

//  Determine if a string ends with `.{up to 6 chars}`
const fileExtensionRegex = new RegExp(/(?<fileExt>\.[a-z]{1,6})$/);

/**
 * Determines if a given file path (probably) ends with an extension.
 *
 * @param {string} filePath - A given file path.
 */
export function endsWithExtension(filePath: string): boolean {
  return fileExtensionRegex.test(filePath);
}

/**
 * Removes extension from the file path.
 *
 * @param {string} filePath - A given file path.
 */
export function stripExtension(filePath: string): string {
  return endsWithExtension(filePath)
    ? filePath.split(DOT).slice(0, -1).join(DOT)
    : filePath;
}

/**
 * Ensures that the provided file path ends in the correct extension.
 * Strips off any extension that might already exist.
 *
 * @param {string} filePath - A given file path.
 * @param {Formats} extension - An extension, from our supported formats.
 */
export function ensureCorrectExtension(filePath: string, extension: Formats): string {
  return filePath.endsWith(extension)
    ? filePath // Just return the filePath if it already ends with the extension we're interested in.
    : `${stripExtension(filePath)}.${extension}`;
}
