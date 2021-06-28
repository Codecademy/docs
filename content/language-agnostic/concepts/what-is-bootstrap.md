---
Title: "What is Bootstrap?"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Frameworks"
  - "Bootstrap"
  - "Accessibility"
  - "Animation"
  - "Borders"
  - "Color"
  - "Flexbox"
  - "Fonts"
  - "Grid"
  - "Responsive"
  - "Style"
Catalog Content:
  -  "https://www.codecademy.com/learn/paths/web-development"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

Bootstrap is an open source CSS framework created to help style web pages with mobile first considerations in mind. It was created by Twitter internally in 2011 as a way to solve issues with design consistency across their engineering team. 

Bootstrap contains CSS, JavaScript and HTML and utilizes them to provide aesthetic improvements to the Document Object Model (DOM) elements on a web page. Additional user interface elements such as dialog boxes, tooltips, and carousels are also available to users. Since it's creation, Bootstrap has become one of the most commonly used tools on web pages today. 

## An example of a Bootstrap styled button vs a normal one.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  </head>
  
  <body>
    <div class="container">
      <h2>Button</h2>
      
      <p>The .btn-success class indicates a successful or positive action:</p>  
      
      <button type="button" class="btn btn-success">Bootstrap Styled Button</button>
      <button type="button" >Normal Button</button>
    </div>
  </body>
</html>
```
