import fs from 'fs';
import { promisify } from 'util';

//  Promisified fs.readFile
export const readFile = promisify(fs.readFile);

//  Promisified fs.writeFile
export const writeFile = promisify(fs.writeFile);

//  Writes a JSON object to disk.
export const writeJSONFile = (path: string, json: Object, spaces: number = 2) => writeFile(path, JSON.stringify(json, null, spaces))
