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

To add a table, use three or more hyphens (`---`) to create each column’s header, and use pipes `|` to separate each column. For compatibility, you should also add a pipe on either end of the row.

```
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```

The rendered output looks like this:


| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

Cell widths can vary, as shown below. The rendered output will look the same.

| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |

 Tip: Creating tables with hyphens and pipes can be tedious. To speed up the process, try using the Markdown Tables Generator. Build a table using the graphical interface, and then copy the generated Markdown-formatted text into your file.

## Text Alignment

You can align text in the columns to the left, right, or center by adding a colon `:` to the left, right, or on both side of the hyphens within the header row.

```
| Syntax | Description | Test Text     |
| :--- |    :----:   |          ---: |
| Header | Title       | Here's this   |
| Paragraph | Text        | And more      |
```

The rendered output looks like this:

```
Syntax	Description	Test Text
Header	Title	Here’s this
Paragraph	Text	And more
```

## Text Formatting

You can format the text within tables. For example, you can add links, code (words or phrases in backticks (`) only, not code blocks), and emphasis.

You can’t add headings, blockquotes, lists, horizontal rules, images, or HTML tags.

Escaping Pipe Characters in Tables
You can display a pipe (|) character in a table by using its HTML character code (&#124;).

