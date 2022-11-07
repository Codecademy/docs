---
Title: '<section>'
Description: 'Divides content inside of html document into semantic groups.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Section'
  - 'Semantic'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<section>`** element is used to divide content inside of the [html](https://www.codecademy.com/resources/docs/html) document into ***semantic*** groups.

## Syntax

```html
<section>
    <!-- Content -->
</section>
```

## Example

```html
<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <section class="theme-A">
            <!-- Content about theme A-->
        </section>
        <section class="theme-B">
            <!-- Content about theme B-->
        </section>
    </body>
</html>
```

Visually it provides the same output as [`<div>`](https://www.codecademy.com/resources/docs/html/elements/div) element but the difference is that provides easier reading and understanding of the code.

An example of the `<section>` element is that it can also be nested inside [`<form>`](https://www.codecademy.com/resources/docs/html/forms) element to distinguish different *form* sections.

```html
<form>
    <!-- First section of the form -->
    <section class="info">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname">
        <label for="email">E-mail:</label><br>
        <input type="text" id="email" name="email">
    <section>
    
    <!-- Second section of the form -->
    <section class="hobby">
        <input type="checkbox" id="football" name="football" value="Football">
        <label for="football"> I love football</label><br>
        <input type="checkbox" id="basketball" name="basketball" value="Basketball">
        <label for="basketball"> I love basketball</label><br>
        <input type="checkbox" id="dance" name="dance" value="Dance">
        <label for="dance"> I love dancing</label>
    <section>
</form>
```