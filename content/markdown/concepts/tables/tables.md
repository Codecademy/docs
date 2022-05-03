---
Title: 'Tables'
Description: 'A table is an arrangement of data in rows and columns. To add a table in Markdown, use the vertical line to separate each column, and use three or more dahses to create each column’s header.'
Subjects:
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'Tables'
  - 'Documentation'
  - 'GitHub'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

A table is an arrangement of data in rows and columns.

To add a table in Markdown, use the vertical line `|` to separate each column, and use three or more dahses `---` to create each column’s header. A vertical line should also be added at either end of the row.

```md
| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |
```

The output would look like:

| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |

Cell widths can vary, as shown below:

<!-- prettier-ignore -->
```md
| Month | Savings |
| -------- | ------- |
| January | $250 |
| February | $80 |
| March | $420 |
```

The output will look exactly the same.

## Text Alignment

Align text in the columns to the left, right, or center by adding a colon `:` to the left, right, or on both side of the dashes `---` within the header row.

```md
| Item              | In Stock | Price |
| :---------------- | :------: | ----: |
| Python Hat        |   True   | 23.99 |
| SQL Hat           |   True   | 23.99 |
| Codecademy Tee    |  False   | 19.99 |
| Codecademy Hoodie |  False   | 42.99 |
```

- `:--` means the column is left aligned.
- `--:` means the column is right aligned.
- `:-:` means the column is center aligned.

## Text Formatting

Text can be formatted within tables. For example, links, emphasis, and inline code (words or phrases in backticks only, not code blocks) are all readily available for use within a table.

Several formatting options are not available within tables, including:

- Headings
- Blockquotes
- Horizontal rules
- Images
- Lists
- HTML tags

## Escaping Characters

Pipe characters "|" can be displayed in a table with the [HTML character code](https://www.codecademy.com/resources/docs/html/entities) `&#124;`.
