---
Title: '<font>'
Description: 'The font tag used to be used to set the font of text.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
  - 'Style'
  - 'Typography'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---
  
The `<font>` tag was used to set the font of text. It is not used any more in favor of the [CSS](https://www.codecademy.com/resources/docs/css) property  [`font`](https://www.codecademy.com/resources/docs/css/typography/font-family) instead because the `<font>` tag is now depricated.

## Syntax
  
The font tag has 3 attributes but only 1 is required but you can have any combenation of them.
  
* `color`: What [color](https://www.codecademy.com/resources/docs/css/colors) the font/text should be. The color can be set to a named [color], hexadecimal or rgb.
* `face`: What font the text should be. For example to have the text be `verdana` the `face` attibute would be like this `face="verdana"`
* `size`: Sets the size of the font/text. It can use abolute units and relitive units rangeing from 1-7. Absolute units are used by `size="5"` or any other number 1-7. Relitive units are relitive the size of the `<basefont>` tag (also depricated). The size attribute would be set to `+5` or `-2`.
  
## Example
  
```html
  <font color="pink">This text is pink</font>
  <font size="5">This size is 5</font>
  <font face="verdana">This text is in verdana font</font>
```
    
![Output of the font tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/font-tag-example.png)
