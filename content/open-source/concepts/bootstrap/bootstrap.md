---
Title: 'Bootstrap'
Description: 'Bootstrap is an open-source CSS framework created to help style web pages with mobile-first considerations in mind.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Bootstrap'
  - 'Accessibility'
  - 'Animation'
  - 'Borders'
  - 'Color'
  - 'Flexbox'
  - 'Fonts'
  - 'Frameworks'
  - 'Grid'
  - 'jQuery'
  - 'Open Source'
  - 'Responsive'
  - 'Style'
CatalogContent:
  - 'paths/front-end-engineer-career-path'
  - 'paths/computer-science'
---

[**Bootstrap**](https://getbootstrap.com/) is an open-source [CSS](https://www.codecademy.com/resources/docs/css) [framework](https://www.codecademy.com/resources/docs/general/framework) created to help style web pages with mobile-first considerations in mind. It was created internally at Twitter in 2011 as a way to solve issues with design consistency across their engineering team. Since its creation, Bootstrap has become one of the most commonly used tools on web pages today.

Bootstrap utilizes web technologies like [HTML](https://www.codecademy.com/resources/docs/html), CSS, and [JavaScript](https://www.codecademy.com/resources/docs/javascript) to provide aesthetic improvements to the Document Object Model (DOM) elements on a web page. Additional user interface elements such as dialog boxes, tooltips, and carousels are also available to users.

## Installation

There are several ways to [install Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/download/) and its source files.

For JavaScript, Bootstrap can be used with a package manager like [npm](https://www.codecademy.com/resources/docs/javascript/npm) or [Yarn](https://classic.yarnpkg.com/en/package/bootstrap):

```shell
## npm
npm install bootstrap

## yarn
yarn add bootstrap
```

For [Ruby](https://www.codecademy.com/resources/docs/ruby) applications, it can be installed as a [gem](https://www.codecademy.com/resources/docs/ruby/gems) with a dependency tool like [Bundler](https://bundler.io/):

```ruby
gem 'bootstrap', '~> 5.0.2'
```

Another way to install Bootstrap for Ruby, but without a tool like Bundler, is with the following command:

```shell
gem install bootstrap -v 5.0.2
```

Instead of being downloaded, Bootstrap's source files can be linked directly into an HTML file via [CDN](https://www.codecademy.com/resources/docs/general/cdn):

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
  crossorigin="anonymous"
></script>
```

## Themes

As its popularity grew, people started creating templates based on Bootstrap in order to accelerate the web development process even further. There are many websites out there dedicated to sharing and buying custom templates based on Bootstrap.

Here are the official themes built or reviewed by Bootstrap's creators: https://themes.getbootstrap.com

## Example: Normal Button vs Bootstrap Button

In the example below, Bootstrap is linked into an HTML document via CDN and used with [jQuery](https://www.codecademy.com/resources/docs/javascript/jquery) to provide a button for positive actions.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  </head>

  <body>
    <div class="container">
      <h2>Button</h2>
      <p>The .btn-success class indicates a successful or positive action:</p>

      <button type="button" class="btn btn-success">
        Bootstrap Styled Button
      </button>
      <button type="button">Normal Button</button>
    </div>
  </body>
</html>
```
