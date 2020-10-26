import { tail } from '../utils';

/**
 * Try to infer the project name from the process.cwd()
 */
export default function getProjectName(): string {
  return tail<string>(process.cwd().split('/')) || 'Project';
}
