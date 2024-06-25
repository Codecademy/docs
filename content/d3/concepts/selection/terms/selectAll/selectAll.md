---
Title: '.selectAll()'
Description: 'A D3 function that selects all elements matching the provided parameter.'
Subjects:
  - 'Data Visualization'
  - 'Web Design'
Tags:
  - 'D3'
CatalogContent:
  - 'learn-d3'
  - 'paths/data-science'
---

The **`.selectAll()`** is a function within the d3 library that selects all elements matching the provided parameter. The `selectAll()` function will match against all elements that meet the parameter, as opposed to [`.select()`](https://www.codecademy.com/resources/docs/d3/selection/select), which only matches the first element.

## Syntax

```pseudo
d3.selectAll(selector)
```

- `selector`: It's a string version of an element, a saved node, or an array of nodes.

## Example

In this example, we have an HTML document as shown in the below code block:

```html
<h1>Lorem, ipsum.</h1>
<p>
  Lorem ipsum dolor sit amet, <span>consectetur adipisicing elit.</span> Tempore
  repellendus sed dignissimos eveniet quam. Nostrum.
</p>

<h2>Lorem ipsum dolor sit amet.</h2>
<p>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea harum saepe alias
  quae beatae quis corporis ratione
  <span>laudantium reprehenderit labore</span> fuga numquam, aperiam dicta
  facere earum non unde laboriosam, similique debitis qui soluta possimus
  obcaecati voluptates asperiores. Natus cumque ratione porro eveniet excepturi
  rem similique nam reiciendis debitis, itaque
  <span>pariatur dolores</span> perferendis beatae praesentium amet nulla?
  Repellendus a voluptatem sed id porro quia earum molestiae quidem tenetur
  accusamus ratione illo aut
  <span
    >similique inventore non voluptate, doloremque consectetur dignissimos
    beatae ipsum temporibus tempore?</span
  >
  Voluptatum accusamus non distinction nesciunt quis suscipit, sequi,
  necessitatibus, ut delectus praesentium iusto? Nisi sequi itaque voluptatem
  dolor!
</p>
```

The document gives the following output:

![HTML page before adding `.selectAll()` d3 query.](https://raw.githubusercontent.com/Codecademy/docs/main/media/d3-selectall-before.png)

The following code selects all `span` elements within the above page using the `.selectAll()` method:

```html
<script>
  d3.selectAll('span').style('color', 'red');
</script>
```

This gives the following output:

![HTML page before adding `.selectAll()` d3 query.](https://raw.githubusercontent.com/Codecademy/docs/main/media/d3-selectall-after.png)

> **Note:** When using d3 within an HTML page, it is required to add `<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>` inside the `head` tag.
