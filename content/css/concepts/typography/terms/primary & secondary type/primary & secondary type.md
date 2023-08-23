---
Title: 'primary & secondary type'
Description: 'Used for using multiple typeface in a rule set.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Fonts'
  - 'Typography'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Used for using multiple typeface(combination of languages) in a rule set.
## Syntax

```css
font-family: <font-family-name>;
```

where `<font-family-name>` can be the following:

- `Roboto`
- `Noto Sans`
- or can be selected from [Google Fonts](https://fonts.google.com/) that suites you.

There will be cases in which we need to use multiple languages in the same tag. Let's consider our text to be '你好 World!'
In this scenario, the font that we use may not be supported for the Chinese language. In that case, the Chinese text will be shown in the default font.

In these scenarios, we can use a secondary font.

## Example 1

Set the `p` tag to `Roboto`:

```css
p {
  font-family: Roboto;
}
 # In this scenario our Chineese language will not be in our desired fonts.
```

## Example 2

Set the `p` tag to `" Roboto and Noto Sans"`:

```css
p {
  font-family: 'Roboto , Noto Sans';
}
By doing this we can achieve desired result. In this case if the first font-family is not supported it will be switch to the secondary.
```
**Note:** Chinese language is being used as an example. Also, the default appearance of Chinese fonts depends on the type of software your computer uses. Consider consulting their website to learn more.