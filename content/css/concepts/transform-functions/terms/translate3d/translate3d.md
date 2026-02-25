---
Title: 'translate3d()'
Description: 'it allows HTML developers to rotate, translate, scale and skew along the X,Y,and Z axes'
Subjects:
  - 'Web Development'
  - 'Web Design'
  - 'Computer Science'
Tags: # 
  - 'Browser compadibility'
  - 'Design'
  - 'Development'
CatalogContent: 
 - 'learn-css'
 - 'paths/Front-End Engineer Career Path
---

## Syntax

```pseudo
translate3d( tx, ty, tz )
```
The "translate3d()" function is a inbuilt function which is used to reposition an element in 3D space:

tx: This parameter holds the length of the translation corresponding to the x-axis. This parameter holds the value in form of number or percentage.

ty:This parameter holds the length of translation corresponding to the y-axis. This parameter holds the value in form of number or percentage.

tz:This parameter holds the length of translation corresponding to z-axis. This parameter holds the value in form of numbers only.

## Example

example 1:
<!DOCTYPE html>
<html>

<head>
    <title>
      CSS translate3d() function
  </title>
    <style>
        body {
            text-align: center;
        }
        
        h1 {
            color: green;
        }
        
        .translate3d_image {
            transform: translate3d(100px, 0, 0);
        }
    </style>
</head>

<body>
    <h1>GeeksforGeeks</h1>
    <h2>CSS translate3d() function</h2>

    <h4>Original Image</h4>
    <img src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" 
         alt="GeeksforGeeks logo">
    <br>

    <h4>Translated image</h4>
    <img class="translate3d_image" 
         src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" 
         alt="GeeksforGeeks logo">
</body>

</html>

example 2:
<!DOCTYPE html> 
<html> 
<head> 
    <title>CSS translate3d() function</title> 
    <style> 
        body {
            text-align:center;
        }
        h1 {
            color:green;
        }
        .GFG {
            font-size:35px;
            font-weight:bold;
            color:green;
        }
        .geeks {
            transform: translate3d(100px, 20px, 0);
        }
    </style> 
</head> 

<body> 
    <h1>GeeksforGeeks</h1>
    <h2>CSS translate3d() function</h2>
    
    <h4>Original Element</h4>
    <div class="GFG">Welcome to GeeksforGeeks</div>
    
    <h4>Translated Element</h4>
    <div class="GFG geeks">Welcome to GeeksforGeeks</div> 
</body> 
</html>
