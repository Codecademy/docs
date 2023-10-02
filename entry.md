Your Markdown file contains all of the information regarding your topic. For an entry to be properly indexed, the Markdown file must contain metadata that describes the topic, the relevant subject, the catalog tag, and the search keywords that will lead to your doc. All of this data must be included at the very top of the Markdown file in the following format: ```shell
Title: Doc title Description: Brief, one-sentence, description of the doc. Subjects: Relevant subject in list form (could be computer science, web dev, app dev, etc…). Tags: Relevant tags in list form. CatalogContent: Relevant catalog content in list form.

This information will not appear on the docs entry. It is used internally for cataloging purposes at Codecademy.

Example for doc entry on Java `abs()` function:

```shell
---
Title: '.abs()'
Description: 'Returns the absolute value of the argument.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Arithmetic'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---