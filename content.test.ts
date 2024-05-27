import frontmatter, { FrontMatterResult } from 'front-matter';
import fs from 'fs';
import glob from 'glob';
import path from 'path';

/*
 * the content/ directory is organized like so:
 *
 * content/
 * |  <child>/
 * |  |  <node>/
 * |  |  |  <node>.md
 * |  |  |  <child>/
 * |  |  |  |  <node>/
 * |  |  |  |  |  <node>.md
 * |  |  |  |  ...
 * |  |  <node>/
 * |  |  |  <node>.md
 * |  <child>/
 * |  |  <node>/
 * |  |  |  <node>.md
 * |  |  ...
 *
 *
 * node: directory containing one .md file with the same name as the node and optionally one child directory
 *
 * child: directory containing an arbitrary number of nodes
 */

describe('Codecademy Docs Content', () => {
  it('adheres to content file structure', () => {
    // file names can only contain alphanumerics and hyphens
    const validateName = (pathName: string, name: string) => {
      if (name.match(/[^A-Za-z0-9.-]/g)) {
        // format so that test failures are more helpful
        expect(
          `${pathName} - file name must only include alphanumerics or -`
        ).toBe('');
      }
    };

    // nodes can contain n children and at most one .md file with the same name as the node
    const checkNode = (nodePath: string) => {
      const children = fs.readdirSync(nodePath);

      children.forEach((child) => {
        const childPath = path.join(nodePath, child);
        validateName(childPath, child);

        if (fs.statSync(childPath).isDirectory()) {
          checkChild(childPath); // step into directory and make sure it's a valid child
        } else {
          const nodeName = nodePath.split(path.sep).slice(-1)[0];
          expect(childPath).toBe(path.join(nodePath, `${nodeName}.md`));
        }
      });
    };

    // children can only contain nodes
    const checkChild = (childPath: string) => {
      const nodes = fs.readdirSync(childPath);

      nodes.forEach((node) => {
        const nodePath = path.join(childPath, node);
        validateName(nodePath, node);

        // format so that test failures are more helpful
        if (!fs.statSync(nodePath).isDirectory()) {
          expect(`${nodePath} - expected a directory but got a file`).toBe('');
        }
        checkNode(nodePath); // step into directory and make sure it's a valid node
      });
    };

    checkChild(path.join(__dirname, 'content'));
  });
});

// validate metadata in each markdown file
describe.each(glob.sync('content/**/*.md'))('%s', (file) => {
  type FrontMatterAttributes = {
    Title: string;
    Description?: string;
    'Codecademy Hub Page'?: string;
    CatalogContent?: string[];
    Subjects?: string[];
    Tags?: string[];
  };

  const fileContent = fs.readFileSync(file, 'utf8');

  if (!frontmatter.test(fileContent)) {
    throw new Error(
      `error: ${file} does not contain properly formatted frontmatter.`
    );
  }

  if (!fileContent.startsWith('---')) {
    throw new Error(
      `error: ${file} does not contain properly formatted frontmatter. Check for leading invisible characters.`
    );
  }

  const { attributes }: FrontMatterResult<FrontMatterAttributes> =
    frontmatter(fileContent);

  it('has only valid metadata keys', () => {
    const validKeys: Record<string, string> = {
      CatalogContent: 'CatalogContent',
      'Codecademy Hub Page': 'Codecademy Hub Page',
      Description: 'Description',
      Subjects: 'Subjects',
      Tags: 'Tags',
      Title: 'Title',
    };

    Object.keys(attributes).forEach((key) => {
      if (!validKeys[key]) {
        expect(`Invalid metadata key: ${key}`).toBe('');
      }
    });
  });

  it('has valid metadata values', () => {
    const testOptionalStringArray = (key: string, val?: string[]) => {
      if (
        val !== undefined &&
        (!Array.isArray(val) || val.some((item) => typeof item !== 'string'))
      ) {
        expect(
          `Expected ${key} to be a string array or undefined but got ${typeof val}`
        ).toBe('');
      }
    };

    expect(typeof attributes.Title).toBe('string');
    expect(typeof attributes.Description).toBe('string');

    if (
      attributes['Codecademy Hub Page'] !== undefined &&
      typeof attributes['Codecademy Hub Page'] !== 'string'
    ) {
      expect('Expected "Codecademy Hub Page" to be a string or undefined').toBe(
        ''
      );
    }

    testOptionalStringArray('CatalogContent', attributes.CatalogContent);
    testOptionalStringArray('Subjects', attributes.Subjects);
    testOptionalStringArray('Tags', attributes.Tags);
  });
});