---
Title: '.createElement()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Generates a new element node of the specified type.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'JavaScript'
  - 'DOM'
  - 'Elements'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-javascript'
  - 'paths/computer-science'
---

The **.createElement()** method, when called on the document object, generates a new element node of the specified type.

## Syntax
```pseudo
document.createElement(type)
```

The `.createElement()` method has one required parameter, type.

- `type` The type of element to create.

## Example

```javascript
document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

The example will result in the following output:

```shell
Hi there and greetings!
The text above has been created dynamically.
```

## Codebyte Example (if applicable)

The following example passes three arguments into the method:

```codebyte/javascript
const btn = document.createElement("button");
btn.innerHTML = "Hello Button";
document.body.appendChild(btn);
```


