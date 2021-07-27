import fs from 'fs';
import path from 'path';

describe('Codecademy Docs Content', () => {
  it('adheres to content file structure', () => {
    // file names can only contain alphanumerics and hyphens
    const validateName = (pathName: string, name: string) => {
      const filteredName = name.replace(/[^A-Za-z0-9.-]/g, '');

      // format so that test failures are more helpful
      if (filteredName !== name) {
        expect(`${pathName} - file name must only include alphanumerics or -`).toBe('');
      }
    };

    // nodes can have n directories of children and at most one .md file with the same name as its parent directory
    const checkNode = (nodePath: string) => {
      const children = fs.readdirSync(nodePath);

      children.forEach((child) => {
        const childPath = path.join(nodePath, child);
        validateName(childPath, child);

        if (fs.statSync(childPath).isDirectory()) {
          checkChild(childPath);
        } else {
          const nodeName = nodePath.split('/').slice(-1)[0];
          expect(childPath).toBe(path.join(nodePath, `${nodeName}.md`));
        }
      });
    };

    // children can only be directories of nodes
    const checkChild = (childPath: string) => {
      const nodes = fs.readdirSync(childPath);

      nodes.forEach((node) => {
        const nodePath = path.join(childPath, node);
        validateName(nodePath, node);

        // format so that test failures are more helpful
        if(!fs.statSync(nodePath).isDirectory()) {
          expect(`${nodePath} - expected a directory but got a file`).toBe('');
        }
        checkNode(nodePath);
      });
    };

    checkChild(path.join(__dirname, 'content'));
  });
});
