---
Title: 'useReducer()'
Description: 'Allows you to add a reducer to your component.'
Subjects:
  - 'Web Development'
Tags:
  - 'Components'
  - 'React'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The **`useReducer()`** hook in React allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, **`useReducer()`** may be useful. It allows you add a reducer to your component. It takes in the reducer function and an initialState as arguments. The **`useReducer()`** also returns an array of the current state and a dispatch function.

## Syntax

The `useReducer()` hook accepts three arguments.

```pseudo
useReducer(reducer, initialState, init)
```

The `reducer` function contains your custom state logic and the `initialStatecan` be a simple value, but generally will contain an object. The `init` argument is optional and is used to initialize the state.

The `useReducer` Hook returns the current `state` and a `dispatch` method.

## Example 1

In this example, we use `useReducer` to keep track of the score of two players.

```jsx
import { useReducer } from 'react';
import { createRoot } from 'react-dom/client';

const initialScore = [
  {
    id: 1,
    score: 0,
    name: "John",
  },
  {
    id: 2,
    score: 0,
    name: "Sally",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
    default:
      return state;
  }
};

function Score() {
  const [score, dispatch] = useReducer(reducer, initialScore);

  const handleIncrease = (player) => {
    dispatch({ type: "INCREASE", id: player.id });
  };

  return (
    <>
      {score.map((player) => (
        <div key={player.id}>
          <label>
            <input
              type="button"
              onClick={() => handleIncrease(player)}
              value={player.name}
            />
            {player.score}
          </label>
        </div>
      ))}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Score />
);
```
