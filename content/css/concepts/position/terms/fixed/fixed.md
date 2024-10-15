---
Title: 'fixed'
Description: 'Positions an HTML element of a webpage by taking that element out of the normal flow of the document and pinning it to a specified position where it will remain fixed in place, even while scrolling the page.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Attributes'
  - 'CSS'
  - 'Design'
  - 'Development'
  - 'Elements'
  - 'Properties'
  - 'Programming'
  - 'Responsive'
  - 'Static Site'
  - 'Style'
  - 'Syntax'
  - 'UI'
  - 'UX'
  - 'Values'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Positions an [html](https://www.codecademy.com/resources/docs/html) element of a webpage by taking that element out of the normal flow of the document and pinning it to a specified [position](https://www.codecademy.com/resources/docs/css/position) where it will remain **fixed** in place, even while scrolling the page.

## Syntax
## `position: fixed;`

An element with a **fixed** position will be positioned relative to the viewport or the html element. In other words, it is fixed relative to the document it self. 

>Note: This differs from [absolute](https://www.codecademy.com/resources/docs/css/position/absolute) positioning which is positioned relative to its closest ancestor/parent element whose position is also set to a value of [relative](https://www.codecademy.com/resources/docs/css/position/relative) or **absolute** (a non-static position).

### Bottom, Left, Right, and Top
As with **absolute** and **relative** positioning, once we have positioned our **fixed** element relative to the viewport, we can manipulate its location using the position properties: 

* [bottom](https://www.codecademy.com/resources/docs/css/position/bottom)

* [left](https://www.codecademy.com/resources/docs/css/position/left)

* [right](https://www.codecademy.com/resources/docs/css/position/right)

* [top](https://www.codecademy.com/resources/docs/css/position/top)



## Example
 
### HTML
```html
<!DOCTYPE html>
<html>
  <head>
    <meta lang="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fixed Postion</title>
    <link rel="stylesheet" href="style.css" type="text/css">

  </head>
  <body>
    <nav class="fixed">
      <h1 class="content">Hello World!</h1>
    </nav>
  </nav>
  </body>    
</html>
```
In the code block (above) the nav element with the is given the fixed class in **HTML**.

### CSS

```css
html {
  box-sizing: border-box;
  background-color: black;
}

nav.fixed {
  display: inline-block;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 50px;
  left: 100px;
  background-color: white;
  border: 4px solid red;
}
```

In the code block (above) the nav element with the *class of fixed* has its position property set to **fixed** in [CSS](https://www.codecademy.com/resources/docs/css) as well as its **top** and **left** properties with values of 50px and 100px respectively.
This will render in the browser as shown in the image (below).

![Image of a fixed nav element in the browser window/viewport.]("https://raw.githubusercontent.com/Codecademy/docs/main/media/"position-fixed-example.png "CSS for the Fixed property")

Here (above) we see that the nav element has been taken out of the flow of the document and as with our **CSS** example (above), the nav element has been moved 50px from the top (which will move the nav element down 50px) and 100px from the left (which will move the nav element to the right 100px). 

>Note: Even though we have set our width property to 100%, the nav element is now out of the normal flow of the document and is overflowing the right side of the viewport.

 If the nav element were to have the **position** property set to a value of [static](https://www.codecademy.com/resources/docs/css/position/static) (default position value), the nav element would be in situ (within its original default position) and it would be flush against the top/left corner of the viewport (as seen in the example below).

![Image of a static nav element in the browser window/viewport.]("https://raw.githubusercontent.com/Codecademy/docs/main/media/"position-static-example.png "CSS for the Fixed property")

## Codebyte Example 


### HTML
```codebyte/html
<!DOCTYPE html>
<html>
    <head>
        <meta lang="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fixed Postion</title>
        <link rel="stylesheet" href="static-style.css" type="text/css">
    </head>
    <body>
        <nav class="fixed">
            <h1 class="content">Hello World!</h1>
        </nav>
    </nav>
    </body>    
</html>
```

### CSS
```codebyte/css
html {
    box-sizing: border-box;
    background-color: black;
}

nav.fixed {
    display: inline-block;
    height: 80px;
    width: 100%;
    position: fixed;
    top: 50px;
    left: 100px;
    background-color: white;
    z-index: 3;
    border: 4px solid red;
}
```