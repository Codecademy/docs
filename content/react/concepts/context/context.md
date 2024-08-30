---
Title: 'Context'
Description: 'In React, Context can be used to manage state globally without the need of prop drilling.'
Subjects:
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The **Context** API in [React](https://www.codecademy.com/resources/docs/react) is an easy way to manage the state of some information. It lets the parent [component](https://www.codecademy.com/resources/docs/react/components) pass the information down to any other component further down the tree hierarchy without needing to pass it as a [prop](https://www.codecademy.com/resources/docs/react/props). It can be used in combination with the [`useState()`](https://www.codecademy.com/resources/docs/react/hooks/useState) hook to change the state. Typical use cases are passing themes (e.g. color, paddings, font sizes, etc.) or the authenticated user.

## Benefit

Normally, information on values is passed between components as props. But sometimes it has to be passed down several levels in the tree, also called `prop drilling`. In larger applications, this can be complicated and lead to code that is hard to maintain. With `Context` this is no longer necessary.

## API Implementation

To implement the Context API, it's necessary to first create the Context using [`createContext()`](https://www.codecademy.com/resources/docs/react/context/createContext). Afterward, the [`useContext()`](https://www.codecademy.com/resources/docs/react/hooks/useContext) hook can be used to read the context from the appropriate component.
