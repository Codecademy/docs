---
Title: "Lists"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Lists"
  - "Paragraphs"
CatalogContent:
  - "learn-html"
  - "paths/front-end-engineer-career-path"
---

The `<li>` list item element create list items inside:

- Ordered lists `<ol>`
- Unordered lists `<ul>`

## `<ol>` Ordered List Element

The ordered list `<ol>` element creates a list of items in sequential order.

```html
<ol>
  <li>Preheat oven to 325 F 👩‍🍳</li>
  <li>Drop cookie dough 🍪</li>
  <li>Bake for 15 min ⏰</li>
</ol>
```

Each list item appears numbered by default:

1. Preheat oven to 325 F 👩‍🍳
2. Drop cookie dough 🍪
3. Bake for 15 min ⏰

## `<ul>` Unordered List Element

The unordered list `<ul>` element is used to create a list of items in no particular order. 

```html
<ul>
  <li>Play more music 🎸</li>
  <li>Read more books 📚</li>
</ul>
```

Each individual list item will have a bullet point by default:

- Play more music 🎸
- Read more books 📚

## Nesting Lists Elements 

Lists can be nested, meaning one list can be placed inside of another.

```html
<ol>
  <li>Fruits</li>
    <ul>
      <li>Apples 🍎</li>
      <li>Oranges 🍊</li>
    </ul>
  <li>Vegetables</li>
    <ul>
      <li>Tomatoes 🍅</li>
    </ul>
</ol>
```

This way, multilevel lists can be created with different indentations.

1. Fruits
    - Apples 🍎
    - Oranges 🍊
2. Vegetables
    - Tomatoes 🍅
