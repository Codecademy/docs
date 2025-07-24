---
Title: 'flex-grow'
Description: 'Specifies how much a flex item should grow relative to other flex items.'
Subjects:
  - 'Code Foundations'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'CSS'
  - 'Flexbox'
  - 'Responsive'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`flex-grow`** property is a CSS [flexbox](https://www.codecademy.com/resources/docs/css/flexbox) property that defines how much a flex item should grow relative to the remaining flex items inside the same flex container. It specifies the grow factor of a flex item, which determines how much of the available space in the flex container should be assigned to that item.

## Syntax

```pseudo
flex-grow: <number>
```

**Parameters:**

- `<number>`: A unitless number that specifies the grow factor for the flex item. The default value is 0, which means the item will not grow to fill available space.

**Return value:**

This property does not return a value. It modifies the behavior of how flex items distribute available space within their container.

## Example 1: Basic Usage of `flex-grow`

This example demonstrates the fundamental concept of `flex-grow` with three flex items having different grow factors:

The HTML code is:

```html
<div class="container">
  <div class="item item1">Item 1</div>
  <div class="item item2">Item 2</div>
  <div class="item item3">Item 3</div>
</div>
```

The CSS code is:

```css
.container {
  display: flex;
  width: 100%;
  height: 60px;
  border: 2px solid #333;
}

.item {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  margin: 5px;
  text-align: center;
}

.item1 {
  flex-grow: 1;
}

.item2 {
  flex-grow: 2;
}

.item3 {
  flex-grow: 1;
}
```

The output of this code is:

![Three flex items in a horizontal container where the middle item (Item 2) is twice as wide as the other two items due to flex-grow: 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/flex-grow1.png)

In this example, Item 2 will grow twice as much as Item 1 and Item 3 because it has a **flex-grow** value of 2, while the others have a value of 1. The available space is distributed proportionally based on these values.

## Example 2: Creating a Responsive Navigation Bar Using `flex-grow`

This example shows how to use `flex-grow` to create a responsive navigation bar where the search input expands to fill available space:

The HTML code is:

```html
<nav class="navbar">
  <div class="nav-brand">Logo</div>
  <input type="text" class="search-input" placeholder="Search..." />
  <div class="nav-links">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>
```

The CSS code is:

```css
.navbar {
  display: flex;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  color: white;
}

.nav-brand {
  font-weight: bold;
  margin-right: 20px;
}

.search-input {
  flex-grow: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  margin: 0 20px;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
}
```

The output of this code is:

![A horizontal navigation bar created using CSS flex-grow, featuring a logo on the left, an expandable search input in the center, and navigation links on the right](https://raw.githubusercontent.com/Codecademy/docs/main/media/flex-grow2.png)

In this navigation bar, the search input has `flex-grow: 1`, which means it will expand to fill all available space between the logo and navigation links, creating a responsive layout that works on different screen sizes.

## Example 3: Using `flex-grow` to Build a Dashboard Layout

This example demonstrates using `flex-grow` to create a dashboard layout with a sidebar and main content area:

The HTML code is:

```html
<div class="dashboard">
  <aside class="sidebar">
    <h3>Navigation</h3>
    <ul>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Analytics</a></li>
      <li><a href="#">Reports</a></li>
      <li><a href="#">Settings</a></li>
    </ul>
  </aside>
  <main class="main-content">
    <h1>Dashboard Content</h1>
    <p>This is the main content area that expands to fill available space.</p>
    <div class="content-cards">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
    </div>
  </main>
</div>
```

The CSS code is:

```css
.dashboard {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
}

.sidebar h3 {
  margin-top: 0;
  border-bottom: 1px solid #34495e;
  padding-bottom: 10px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 10px 0;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  display: block;
  border-radius: 4px;
}

.sidebar ul li a:hover {
  background-color: #34495e;
}

.main-content {
  flex-grow: 1;
  background-color: #ecf0f1;
  padding: 30px;
  overflow-y: auto;
}

.content-cards {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.card {
  flex-grow: 1;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

The output of this code is:

![A full-screen dashboard layout using CSS flex-grow, with a dark sidebar on the left containing a navigation menu and a light main content area on the right displaying three equal-width cards](https://raw.githubusercontent.com/Codecademy/docs/main/media/flex-grow3.png)

In this dashboard layout, the sidebar has a fixed width, while the main content area uses `flex-grow: 1` to expand and fill all remaining horizontal space. The cards within the main content also use `flex-grow: 1` to distribute space equally among themselves.

## Frequently Asked Questions

### 1. What is the difference between Flex 1 and Flex Grow?

`flex-grow` is a specific property that only controls how much a flex item should grow, while `flex: 1` is a shorthand property that sets `flex-grow: 1`, `flex-shrink: 1`, and `flex-basis: 0%` simultaneously. Using `flex: 1` is often preferred as it provides more predictable behavior.

### 2. How to increase flex size?

To increase the size of a flex item, you can increase its `flex-grow` value. Higher values make the item take up more of the available space. For example, changing from `flex-grow: 1` to `flex-grow: 2` will make the item grow twice as much relative to other items.

### 3. How to flex grow vertically?

`flex-grow` works along the main axis of the flex container. To make items grow vertically, set the flex container's `flex-direction` to `column` or `column-reverse`. The `flex-grow` property will then distribute available vertical space among the flex items.

### 4. Can Flex grow larger than parent?

No, `flex-grow` cannot make a flex item larger than its parent container. It only distributes available space within the container. If you need items to overflow their container, you would need to use different CSS properties like `width`, `height`, or `transform`.

### 5. What is CSS flexbox used for?

CSS flexbox is used for creating flexible and responsive layouts. It's particularly useful for distributing space among items in a container, aligning items, and creating layouts that adapt to different screen sizes. Common use cases include navigation bars, card layouts, centering content, and building responsive grid systems.
