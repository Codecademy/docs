---
Title: 'MDX'
Description: 'MDX is an extension where JSX, a syntax extension where HTML-like code is implemented in a JavaScript file, can be added to Markdown documents.'
Subjects:
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'Formatting'
  - 'Documentation'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

**MDX** is an extension to [Markdown](https://www.codecademy.com/resources/docs/markdown) that allows developers to include JSX and import components like interactive charts and alerts to make Markdown documents that contain lengthy content more engaging.

## Syntax

There is not specific set standard for adding MDX, so for the sake of this entry, the information below shows pseudo MDX code:

```pseudo
import React from 'react';

const MyComponent = () => {
return <h1>This is a React component</h1>;
};

// This is an MDX file
const MyMDX = () => {
return (
<>
<h1>This is a heading</h1>
<MyComponent />
</>
);
};

export default MyMDX;
```

## Example

In the below code snippet, the variable, `cookies`, is used throughout the MDX file to provide explanations to children on why they are delicious.

```md
import { cookies } from './path/to/your/file.js';

# {cookies}

## Introduction

Hello, kids! Today, we're going to learn about **{cookies}**!

## Why {cookies} are important?

{cookies} are important because they are delicious treats that we can eat! They come in different flavors and shapes.

## Examples of {cookies}

Here are some examples of {cookies}:

- Chocolate chip cookies are yummy with chunks of chocolate.
- Oatmeal cookies have a chewy texture and sometimes have raisins or nuts.
- Sugar cookies are sweet and can be decorated with icing or sprinkles.
- Peanut butter cookies are nutty and made with peanut butter.
  That's it for now! Hope you enjoyed learning about **{cookies}** and maybe you can have a one as a treat too!
```
