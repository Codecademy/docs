import fs from 'fs';
import path from 'path';

describe('Codecademy Docs Content', () => {
  it('adheres to content file structure', () => {
    // file names can only contain alphanumerics and hyphens
    const validateName = (pathName: string, name: string) => {
      if (name.match(/[^A-Za-z0-9.-]/g)) {
        // format so that test failures are more helpful
        expect(`${pathName} - file name must only include alphanumerics or -`).toBe('');
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
        if(!fs.statSync(nodePath).isDirectory()) {
          expect(`${nodePath} - expected a directory but got a file`).toBe('');
        }
        checkNode(nodePath); // step into directory and make sure it's a valid node
      });
    };

    checkChild(path.join(__dirname, 'content'));
  });
});
