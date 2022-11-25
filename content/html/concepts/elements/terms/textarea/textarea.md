The **`<textarea>`** element defines a place for multi-line plain-text input.


## Syntax

```

<label for="area_id"> Area label </label>
<textarea id="area_id" name="area_name" rows="number of rows" cols="number of columns">
    Content 
</textarea>

```

### Attributes

| Attribute     | Data Type     | Description  |
| ------------- |-------------  | -----|
| `id`          | String        |   Links to `<label>` element |
| `name`        | String        |   Name of the table |
| `rows`        | Integer       |   Define the initial rows number|
| `cols`        | Integer       |   Define the initial columns number |


## Example

```html

<html>
    <head> </head>
    <body>
        <label for="textbox">Share your problem:</label>
        <textarea id="textbox" name="textbox"
          rows="21" cols="37">
          Okay, here's the situation...
          </textarea>
    </body>
</html>

```
