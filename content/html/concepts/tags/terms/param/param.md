---
Title: '<param>'
Description: 'Used to pass parameters to a resource defined in an object tag.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
  - 'Parameters'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<param>` tag is used within an [`<object>`](https://www.codecademy.com/resources/docs/html/tags/object) tag to pass parameters to the resource it is displaying.

## Syntax

```html
<param name="parameter name" value="parameter value" />
```

The `<param>` tag uses two attributes:

- A `name` for the parameter.
- A `value` to specify the named parameter's value.

## Example

```html
<object type="audio/x-wav" data="sound.wav">
  <param name="autoplay" value="true" />
</object>
```
