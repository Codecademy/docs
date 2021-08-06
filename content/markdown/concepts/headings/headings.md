---
Title: "Headings"
Subjects:
  - "Developer Tools"
  - "Web Development"
Tags: 
  - "Markdown"
  - "Headings"
  - "GitHub"
Catalog Content:
  - "https://www.codecademy.com/learn/paths/learn-how-to-build-websites"
  - "https://www.codecademy.com/learn/paths/web-development"
---

To create a heading, add number signs `#` in front of a word or phrase. The number of number signs you use should correspond to the heading level. 

For example, to create a heading level three `<h3>`, use three number signs (e.g., `### My Header`).

## Syntax

```
# This is a <h1 tag>
## This is an <h2> tag
### This is an <h3> tag
#### This is an <h4> tag
##### This is an <h5> tag
###### This is an <h6> tag
```

Markdown	HTML	Rendered Output
# Heading level 1	<h1>Heading level 1</h1>	
Heading level 1
## Heading level 2	<h2>Heading level 2</h2>	
Heading level 2
### Heading level 3	<h3>Heading level 3</h3>	
Heading level 3
#### Heading level 4	<h4>Heading level 4</h4>	
Heading level 4
##### Heading level 5	<h5>Heading level 5</h5>	
Heading level 5
###### Heading level 6	<h6>Heading level 6</h6>	
Heading level 6

## Alternate Syntax

Alternatively, on the line below the text:

- Add any number of `==` characters for heading level 1 
- Add any number or `--` characters for heading level 2.

```
Heading level 1
===============	

Heading level 2
---------------	
```

## Best Practices

Markdown applications don’t agree on how to handle a missing space between the number signs (`#`) and the heading name. 

For compatibility, always put a space between the number signs and the heading name.

| ✅ Do | ❌ Don't |
| --- | --- |
| `# Here's a Heading` | `#Here's a Heading` |

You should also put blank lines before and after a heading for compatibility.

```
... text end here.

# Heading

More text starts here.
```