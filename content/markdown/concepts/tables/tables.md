---
Title: "Tables"
Subjects:
  - "Developer Tools"
  - "Web Development"
Tags: 
  - "Tables"
  - "Documentation"
  - "GitHub"
CatalogContent:
  - "learn-html"
  - "paths/front-end-engineer-career-path"
---

A table is an arrangement of data in rows and columns.

To add a table in Markdown, use the vertical line `|` to separate each column, and use three or more dahses `---` to create each column’s header. A vertical line should also be added at either end of the row.

```markdown
| Month     | Savings   |
| --------- | --------- |
| January   | $250      |
| February  | $80       |
| March     | $420      |
```

The output would look like:

| Month     | Savings   |
| --------- | --------- |
| January   | $250      |
| February  | $80       |
| March     | $420      |

Cell widths can vary, as shown below.

```markdown
| Month | Savings |
| --- | --- |
| January | $250 |
| February | $80 |
| March | $420 |
```

The output will look exactly the same.

## Text Alignment

You can align text in the columns to the left, right, or center by adding a colon `:` to the left, right, or on both side of the dashes `---` within the header row.

```markdown
| Item | In Stock | Quantity |
| :-- | :-: | --: |
| Shirts | True | 52 |
| Hats | True | 120 |
| Socks | False | 0 |
```

| Item | In Stock | Quantity |
| :-- | :-: | --: |
| Shirts | True | 52 |
| Hats | True | 120 |
| Socks | False | 0 |

- `:--` means the column is left aligned.
- `--:` means the column is right aligned.
- `:-:` means the column is center aligned.

## Text Formatting

The text can be formatted within tables. For example, you can add links, emphasis, and inline code (words or phrases in backticks only, not code blocks).

You can’t add headings, blockquotes, lists, horizontal rules, images, or HTML tags.

## Escaping Characters

You can display a vertical line "|" character in a table by using its HTML character code `&#124;`.

