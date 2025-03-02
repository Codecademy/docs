---
Title: '.getElementById'
Description: 'Returns the element objects representing element whose id property matches the string provided.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Arguments'
  - 'Functions'
  - 'Parameters'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In javascript, the **_getElementById()_** method of the `Document` interface returns an `Element` object representing the element whose `id` property matches the specified string.

## Syntax

```pseudo
document.getElementById(id)
```

-`id`:is the ID of the element to locate. Within the document, the ID is case_sensititve and should be unique to just one element.

## Example

```HTML
  <!DOCTYPE html>
<html>
<body>

<h1 id="atd">Codecademy</h1>
<h2>The getElementById() Method</h2>

<script>
const myElement = document.getElementById("atd");
myElement.style.color = "blue";
</script>

</body>
</html>

```

## Output

(https://raw.githubusercontent.com/aatiduaCodecademy/docs/main/media/getelementbyid.png)
