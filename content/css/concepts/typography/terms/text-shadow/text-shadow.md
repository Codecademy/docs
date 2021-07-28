---
Title: "text-shadow"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Fonts"
  - "Typography"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition 

Adds shadow to text. 

## Syntax

```css
text-shadow: 2px 4px 10px blue;
```

The shadow is created with a combination of X and Y offsets from the element, blur radius, and color:

- value 1: Offsets the X-axis(required).
- Value 2: Offsets the Y-axis(required). 
- Value 3: Sets the blur radious(optional).
- Value 4: Sets the color of the shadow(optional).

**Note:** You can add multiple text shadows by comma separating. 

## Example 1

Creating a basic text shadow.

```css
h1 {
  /*x-offset | y-offset*/
  text-shadow: 2px 4px; 
}
```

## Example 2

Creating a text shadow with blur effect and blue color.

```css
h1 {
  /*x-offset | y-offset | blur-radius | color*/
  text-shadow: 2px 4px 10px blue; 
}
```

## Example 3

Adding multiple text-shadows.

```css
h1 {
  /*x-offset | y-offset | blur-radius | color*/
  text-shadow: 2px 4px 10px #00E9EC,
               3px 6px 5px green; 
}
```