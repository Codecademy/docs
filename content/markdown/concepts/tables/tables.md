---
Title: "Tables"
Subjects:
  - "Developer Tools"
  - "Web Development"
Tags: 
  - "Tables"
  - "Documentation"
  - "GitHub"
Catalog Content:
  - "https://www.codecademy.com/learn/paths/learn-how-to-build-websites"
  - "https://www.codecademy.com/learn/paths/web-development"
---

To add a table, use vertical line `|` to separate each column, and use three or more dahses `---` to create each column’s header. You should also add a vertical line on either end of the row.

```
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```

The output would look like:

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

Cell widths can vary, as shown below. The rendered output will look the same.

```
| Syntax | Description |
| --- | --- |
| Header | Title |
| Paragraph | Text |
```

## Text Alignment

You can align text in the columns to the left, right, or center by adding a colon `:` to the left, right, or on both side of the hyphens within the header row.

```
| Syntax | Description | Test Text |
| :--- | :----: | ---: |
| Header | Title | Here's this |
| Paragraph | Text | And more |
```

The output would look like:

```
Syntax	Description	Test Text
Header	Title	Here’s this
Paragraph	Text	And more
```

## Text Formatting

You can format the text within tables. For example, you can add links, code (words or phrases in backticks) only, not code blocks), and emphasis.

You can’t add headings, blockquotes, lists, horizontal rules, images, or HTML tags.

## Escaping Characters

You can display a vertical line "|" character in a table by using its HTML character code `&#124;`.

