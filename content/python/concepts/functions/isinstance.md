<div align="left">
  <h1>isinstance()</h1>
  <strong>Function that evaluates if a value type equates to True</strong><br>
</div>
<br>

## Description
The isinstance() function determines whether one object equals the value type desired.

## Syntax
```pseudo
isinstance(object, type)
```

## Example
```
intro = "Hello World!"

if isinstance(intro, str)
  print(f'{intro}' is a string type!')
```