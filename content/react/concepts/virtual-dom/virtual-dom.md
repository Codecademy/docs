---
Title: 'Virtual DOM'
Description: 'In React, virtual DOM is a conceptual representation of the actual DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.'
Subjects:
  - 'Web Development'
Tags:
  - 'Conceptual'
  - 'DOM'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

In React, **virtual DOM** is a conceptual representation of the actual DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

With virtual DOM, when changes are made to the UI and there's a re-render, they are compared to the relevant branches in the DOM-tree. Then, the changes are applied to the DOM-tree.

![React virtual DOM compared with the Real DOM](https://i.imgur.com/dIejeNk.png)

The virtual DOM is not to be confused with the Shadow DOM, or any other technology or concept.

## How It Works

During a render of a [JSX](https://www.codecademy.com/resources/docs/react/jsx) element, every single virtual DOM object gets updated. This sounds incredibly inefficient, but the cost is insignificant because the virtual DOM can update so quickly. Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.

By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called “diffing.”

Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM. For example, if changes were made to a list item, React would know to rebuild the one checked-off list item, and leave the rest of the list alone.

This makes a big difference! React can update only the necessary parts of the DOM. React’s reputation for performance comes largely from this innovation.

In summary, here’s what happens trying to update the DOM in React:

1. The entire virtual DOM gets updated.
2. The virtual DOM gets compared to what it looked like before it was updated. React figures out which objects have changed.
3. Only the objects that were changed get updated on the real DOM.
4. Changes on the real DOM cause the screen to change.
