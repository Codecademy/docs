---
Title: 'Generics'
Description: 'Generics assign multiple types to a function or variable without the value losing that specific type information upon return.'
Subjects:
  - 'Web Development'
Tags:
  - 'Generics'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

In TypeScript, **generics** are used to assign multiple types to a function or variable without the value losing that specific type information upon return. The `any` keyword is similar in that it accommodates any and all types. However, it will not retain specific type information.

## Syntax

Generics are defined with `<` `>` brackets surrounding name(s) of the generic type(s), like `Array<T>` or `Map<Key, Value>`.

```pseudo
interface MyType<GenericValue> {
  value: GenericValue;
}

let myVar: MyType<string> = { value: 'Hello, World!' };
```

Generic types can be used with the following:

- [Classes](https://www.codecademy.com/resources/docs/typescript/classes)
- [Functions](https://www.codecademy.com/resources/docs/typescript/functions)
- [Interfaces](https://www.codecademy.com/resources/docs/typescript/interfaces)
- [Type aliases](https://www.codecademy.com/resources/docs/typescript/type-aliases)

## Example of Using Generics

In the following snippet, `Box<Value>` is a generic `interface` that with a generic `Value` type within. Next, two variables, `numberBox` and `stringBox`, are explicitly declared to be of type `Box<number>` and `Box<string>`, respectively:

```ts
interface Box<Value> {
  value: Value;
}

let numberBox: Box<number> = { value: 7 };
let stringBox: Box<string> = { value: 'Marathon' };
```

## Inferring Generic Types

Generics can be inferred from usage when not explicitly provided.

Here, `logAndReturnValue<Value>` is inferred first to have a generic `Value` of type `Date`:

```ts
function logAndReturnValue<Value>(value: Value): Value {
  console.log(value);
  return value;
}

const result = logAndReturnValue(new Date('2021-12-21')); // Type: Date
```

Here, the `KeyValueStore` class instance is inferred to have generic `<string, number>`, and its `makePair()`, therefore, returns type `[string, number]`:

```ts
class KeyValueStore<Key, Value> {
  #key: Key;
  #value: Value;

  constructor(key: Key, value: Value) {
    this.#key = key;
    this.#value = value;
  }

  makePair(): [Key, Value] {
    return [this.#key, this.#value];
  }
}

const store = new KeyValueStore('year', 2794);
const pair = store.makePair(); // Type: [string, number]
```
