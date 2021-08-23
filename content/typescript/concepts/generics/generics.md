---
Title: 'Generics'
Subjects:
  - 'Web Development'
Tags:
  - 'Generics'
  - 'Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

Some data structures, such as Arrays and Maps, may be used with any kind of data contents.
TypeScript allows defining a slot for whatever generic types are desired at usage time on the name of the construct with with `<` `>` brackets surrounding name(s), like `Array<T>` or `Map<Key, Value>`.
Classes, functions, interfaces, and type aliases may be declared with a generic type; uses of them can then provide varying types in that generic slot.

In the following snippet, `Box<Value>` is a generic interface that with a generic for the value within.
Variables are then explicitly declared to be of type `Box<number>` and `Box<string>`, respectively:

```ts
interface Box<Value> {
  value: Value;
}

let numberBox: Box<number> = { value: 7 };
let stringBox: Box<string> = { value: 'Marathon' };
```

Generics can be inferred from usage when not explicitly provided.

Here, `logAndReturnValue<Value>` is inferred first to have a generic `Value` of type `Date`:

```ts
function logAndReturnValue<Value>(value: Value): Value {
  console.log(value);
  return value;
}

const result = logAndReturnValue(new Date('2021-12-21')); // Type: Date
```

Here, the `KeyValueStore` class instance is inferred to have generic `<string, number>`, and its `makePair` therefore returns type `[string, number]`:

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
