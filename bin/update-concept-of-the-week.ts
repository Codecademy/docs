import fs from 'fs';
import glob from 'glob';
import path from 'path';

const storePath = path.join(__dirname, 'concept-of-the-week.txt');

const getRandomElement = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];

const conceptPaths = glob.sync('content/*/concepts/*/*.md');

const currentConceptPath = fs.existsSync(storePath)
  ? fs.readFileSync(storePath)
  : '';

let newConceptPath: string;
do {
  newConceptPath = getRandomElement(conceptPaths);
} while (newConceptPath === currentConceptPath);

fs.writeFileSync(storePath, newConceptPath, 'utf8');
