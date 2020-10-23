import path from 'path';

/**
 * Resolves a path relative to the cwd().
 *
 * @param {string[]} paths - Path segments.
 */
export function resolveCwd(...paths: string[]): string {
  return path.resolve(
    process.cwd(),
    ...paths,
  );
}
