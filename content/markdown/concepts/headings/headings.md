---
Title: "Headings"
Subjects:
  - "Developer Tools"
  - "Web Development"
Tags: 
  - "Markdown"
  - "Headings"
  - "GitHub"
CatalogContent:
  - "paths/learn-how-to-build-websites"
  - "paths/front-end-engineer-career-path"
---

Headings are titles or subtitles that you want to display with Markdown. There is a total of 6 different headings.

To create a heading, add hashtag signs `#` in front of a word or phrase. 

The number of number signs you use should correspond to the heading level. For example, to create a heading level three `<h3>`, use three number signs (e.g., `### My Header`).

## Syntax

```markdown
# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6
```

![example](https://i.imgur.com/8NNe3NE.png)

## Alternate Syntax

Alternatively, on the line below the text:

- Add any number of `==` characters for heading level 1 
- Add any number or `--` characters for heading level 2.

```markdown
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

```markdown
... text ends here.

# Heading

More text starts here.
```

## Example

```markdown
# Headings

This page is about headings.

## The cool things about headings

Headings are a great way to format the page.

## Example

Here's an example of headings.
```

