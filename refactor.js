const fs = require('fs');
const path = require('path');

const topics = fs.readdirSync(path.join(__dirname, 'content'));

topics.forEach((topic) => {
  const conceptsPath = path.join(__dirname, 'content', topic, 'concepts');

  const conceptsToChange = fs.readdirSync(conceptsPath)
    .filter((concept) => {
      return concept.match(new RegExp(`^.*-in-${topic}$`));
    });

  conceptsToChange.forEach((concept) => {
    if (concept !== 'operators-in-sql') {
      const newConcept = concept.replace(`-in-${topic}`, '');

      const filePath = path.join(conceptsPath, concept, `${concept}.md`);
      const newFilePath = path.join(conceptsPath, newConcept, `${newConcept}.md`);

      const content = fs.readFileSync(filePath, 'utf8');
      const newContent = content.replace(new RegExp(` in ${topic}`, 'i'), '');

      fs.mkdirSync(path.join(conceptsPath, newConcept));

      fs.writeFileSync(filePath, newContent);
      fs.renameSync(filePath, newFilePath);

      console.log(`${filePath} -> ${newFilePath}`);
    }
  });
});
