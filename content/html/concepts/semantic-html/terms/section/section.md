---
Title: '<section>'
Description: 'Defines elements in a document, such as chapters, headings, or any other area of the document with the same theme.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Semantic'
  - 'Tags'
  - 'Elements'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<section>`** semantic HTML element defines elements in a document, such as chapters, headings, or any other area of the document with the same theme.

For example, content with the same theme such as articles about cricket can go under a single `<section>`. A website’s home page could be split into sections for the introduction, news items, and contact information.

## Syntax

```pseudo
<section>
  <!-- Elements in a document with the same theme -->
</section>
```

In the following code, we created a `<section>` element to encapsulate the code. In `<section>`, we added a `<h2>` element as a heading and an `<article>` as well.

```html
<section>
  <h2>Fun Facts About Cricket</h2>
  <article>
    <p>A single match of cricket can last up to 5 days.</p>
  </article>
</section>
```
  
There are also examples where we can use other elements that semantically fit better then `<section>` element.
  
- The first example is the `<header>` element which can be used to describe that the content inside is the header of the page.
  
```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <!-- Header of the page -->
    <header>
      <h1>Welcome to my site!</h1>
    </header>
      
    <!-- Content of the page -->
    <section></section>
    <section></section>
  </body>
</html>
```
- Second example is the `<nav>` element. It is used to describe that the content inside is a navigation system of the page.  
  
```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <!-- Navigation  of the page -->
    <nav>
      <ul>
        <li>Home</li>
        <li>Store</li>
        <li>Profile</li>
      </ul>
    </nav>
    
    <!-- Content of the page -->
    <section></section>
    <section></section>
  </body>
</html>
```
  
- The third example is the `<main>` element which is used to describe that the content inside is the main content of the page.
```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <!-- Header of the page -->
    <header>
      <h1>Welcome to my site!</h1>
    </header>
    
    <!-- Main content of the page -->
    <main>
      <section></section>
      <section></section>
    </main>
  </body>
</html>
```
  
- Another example is the `<footer>` element which is used to describe that the content inside is the footer of the page.
```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <!-- Header of the page -->
    <header>
      <h1>Welcome to my page!</h1>
    </header>
    
    <!-- Main content of the page -->
    <main>
      <section></section>
      <section></section>
    </main>
    
    <!-- Footer of the page -->
    <footer>
      <p>by: User</p>
      <span>email: user@email.com</span>
    </footer>
  </body>
</html>
```
  
## Example

Suppose the current page wants to add two sections:

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <!-- One section -->
    <section>
      <h2>Fun Facts About Cricket</h2>
      <article>
        <p>A single match of cricket can last up to 5 days.</p>
      </article>
    </section>
    <!-- Another section -->
    <section>
      <h2>Fun Facts About Cicada</h2>
      <article>
        <p>Some cicadas could explode with fungus.</p>
      </article>
    </section>
  </body>
</html>
```
