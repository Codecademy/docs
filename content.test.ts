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
          const nodeName = nodePath.split('/').slice(-1)[0];
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

// test content of each markdown file
describe.each(glob.sync('content/**/*.md'))('%s', (file) => {
  type FrontMatterAttributes = {
    CatalogContent?: string[];
    'Codecademy Hub Page'?: string;
    Description?: string;
    Subjects?: string[];
    Tags?: string[];
    Title: string;
  };

  const { attributes }: FrontMatterResult<FrontMatterAttributes> = frontmatter(
    fs.readFileSync(file, 'utf8')
  );

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
      expect(validKeys[key]).toBe(key);
    });
  });

  it('has valid metadata values', () => {
    const isOptionalString = (val?: string) =>
      val === undefined || typeof val === 'string';

    const isOptionalStringArray = (val?: string[]) =>
      val === undefined ||
      (Array.isArray(val) && val.every((item) => typeof item === 'string'));

    expect(typeof attributes.Title === 'string').toBe(true);
    expect(isOptionalString(attributes.Description)).toBe(true);
    expect(isOptionalString(attributes['Codecademy Hub Page'])).toBe(true);

    expect(isOptionalStringArray(attributes.CatalogContent)).toBe(true);
    expect(isOptionalStringArray(attributes.Tags)).toBe(true);
    expect(isOptionalStringArray(attributes.Subjects)).toBe(true);
  });
});
