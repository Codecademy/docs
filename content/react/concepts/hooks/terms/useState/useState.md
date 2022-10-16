---
Title: 'useState()'
Description: "Returns the current state of the component and its setter. State must be changed through the setter only. Don't mutate it directly as it may caused unexpected behavior."
Subjects:
  - 'Web Development'
Tags:
  - 'React'
  - 'useState'
CatalogContent:
  - 'react-101'
  - 'paths/front-end-engineer-career-path'
---

The `useState()` returns the current state of the component and its setter. State must be changed through the setter only. Don't mutate it directly as it may caused unexpected behavior.

## Syntax

The `useState()` hook accepts an initial value as its parameter. If no value is passed, it will be `undefined`.

The return value is an array whose first and second elements are the current state and state setter respectively. Those variables can be obtained through array destructuring.

```js
const [state, setState] = useState(initialValue);
```

The variables names themselves don't have to be `state` and `setState`. It depends on the context of the component. Say, you are creating a stopwatch component, you can name them as the following

```js
const [time, setTime] = useState(0);
```

**Note:** In cases where the state is an `object` or `array`, changing them through the setter must be done without changing the original object or array (see Example #2 below)

## Example #1

A controlled input whose value depends on the `name` state and changes it through `setName` setter on `onChange` event.

```js
function ProfileName() {
  const [name, setName] = useState('');

  function handleChange(event) {
    /*
     Sets the name state to the value of
     the input after the onChange event.
    */
    setName(event.currentTarget.value);
  }

  return <input value={name} onChange={handleChange} />;
}
```

## Example #2

A component to hold list of favorite foods. Items can be deleted by clicking it.

```js
function FavoriteFoodList() {
  const [foods, setFoods] = useState(['pizza', 'hot dog']);

  function handleDeleteFood(deletedIndex) {
    /*
      Don't do delete foods[index]
      or foods.splice(index, 1)
      
      Instead, you can use the .filter() method 
      to exclude the item at deletedIndex
    */
    const filteredItems = foods.filter((food, index) => index !== deletedIndex);

    setFoods(filteredItems);
  }

  return (
    <div>
      {foods.map((item, index) => (
        <button onClick={() => handleDeleteFood(index)}>{item}</button>
      ))}
    </div>
  );
}
```
