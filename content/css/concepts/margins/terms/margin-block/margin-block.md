#  margin-block

The `margin-block` CSS property defines the logical block-start and block-end margins of an element. It is used to control vertical spacing in writing modes where the block direction may vary, such as top-to-bottom or right-to-left layouts.

## Syntax

margin-block: <start> <end>;
- `<start>`: sets the margin at the start of the block (top in normal writing mode)
- `<end>`: sets the margin at the end of the block (bottom in normal writing mode)

## Example

```
.box {
  margin-block: 10px 20px;
}
```

In this example, the `.box` element will have a 10px margin at the start of the block and a 20px margin at the end of the block.

## Notes
`margin-block` is a logical property and will adapt based on writing mode, unlike `margin-top` and `margin-bottom`.