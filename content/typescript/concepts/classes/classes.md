---
Title: 'Classes'
Description: 'With TypeScript, class objects can use type annotation to describe the relationship between class members and their static types.'
Subjects:
  - 'Web Development'
Tags:
  - 'Classes'
  - 'Objects'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

With TypeScript, **`class`** objects can use type annotation to describe the relationship between class members and their static types. Classes are a core part of the JavaScript language that TypeScript respects.
In addition to type annotations, TypeScript adds a few new syntaxes to help write classes in a type-safe manner.

## Members

Class member types work similarly to parameter and variable types.

- If an initial value exists, the member's type is inferred to be that type.
- If no initial value exists, the member is implicitly of type `any` unless a type annotation exists on its name.

In the following `Box` class, `count` is inferred to be of type `number` because its initial value is `0`, while `value` is explicitly declared as type `string`.

```ts
class Box {
  count = 0;
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}
```

Therefore, asking for the `count` of a `Box` instance is of type `number`, and the `value` is of type `string`:

```ts
const myBox = new Box('stuff');
myBox.count; // Type: number
myBox.value; // Type: string
```

## Member Visibility

JavaScript has a `#` syntax to mark a member as private, meaning it can only be accessed inside its class:

```ts
class Secret {
  #value: string;

  constructor(value: string) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }
}

const mySecret = new Secret('shhh');

mySecret.getValue(); // Ok

mySecret.#value;
/* 
Error: Property '#value' is not accessible outside
class 'Secret' because it has a private identifier.
*/
```

## Public, Private, or Protected

Separately, TypeScript also supports adding `public`, `protected`, or `private` in front of a class member to indicate whether the member may be used outside that class.

- `public` (default): anybody may access that member, anywhere.
- `protected`: only the class or its derived classes may access that member.
- `private`: only the class itself may access that member.

The key difference between JavaScript's `#` syntax and TypeScript's privacy keywords are that:

- JavaScript's `#` syntax changes the name of the member.
- TypeScript's privacy keywords exist only in the type system; the member's name is not changed.

In this example, the `Base` class sets up five variables:

- The first two, `first` and `second`, are publicly accessible.
- The third, `third`, is protected and only accessible in the class or a derived class.
- The fourth and fifth, `fourth` and `fifth`, are set to private with `private` and `#`, respectively.

```ts
class Base {
  // These two are functionally equivalent
  first = '';
  public second = '';

  protected third = '';

  private fourth = '';
  #fifth = '';
}
```

The `Derived` class uses the `extends` keyword to become a child of the `Base` class. In the example below, a `.test()` method is used to borrow from members of the parent `Base` class:

```ts
class Derived extends Base {
  test() {
    this.first; // Ok: public
    this.second; // Ok: public

    this.third; // Ok: protected

    this.fourth;
    /*
    Error: Property 'fourth' is private
    and only accessible within class 'Base'.
    */

    this.fifth;
    /*
    Error: Property '#fifth' is not accessible outside
    class 'Base' because it has a private identifier.
    */
  }
}
```

The members `first`, `second`, and even the protected `third`, are all accessible within the `Derived` class definition. With `fourth` and `fifth`, however, they are both private members of `Base`. Therefore, they are not accessible inside of `Derived`.

The example below shows how some members of `Dervied` can be invoked through an instance variable, `derived`, while others are not as accessible. While `third` can be used within the actual `Derived` class, as a protected member, it cannot be used outside of the class with an instance variable.

```ts
const derived = new Derived();

derived.first; // Ok: public
derived.second; // Ok: public

derived.third;
/*
Error: Property 'third' is protected
and only accessible within class 'Base'.
*/

derived.fourth;
/*
Error: Property 'fourth' is private
and only accessible within class 'Base'.
*/

derived.fifth;
/*
Error: Property '#fifth' is not accessible outside
class 'Base' because it has a private identifier.
*/
```

## Implementing Interfaces

Classes can use the TypeScript `interface` keyword to further define the "shape" of the class object. This means that instances of the class are assignable to a given interface type.

To use interfaces with classes, we use the `implements` keyword between the class name and name of the interface followed by the opening curly bracket `{`.

In this example, the `Speaker` interface has a single `speak()` method, so the `SpeechGiver` class may be marked as implementing it:

```ts
interface Speaker {
  speak(): string;
}

class SpeechGiver implements Speaker {
  constructor(speech: string) {
    this.speech = speech;
  }

  increaseEmphasis() {
    this.speech += '!';
  }

  speak() {
    return this.speech;
  }
}
```

Classes can implement more than one interface, as well, by a comma-separated (`,`) list of any number of interfaces.

Marking a class as implementing an interface doesn't change anything about the class itself; it won't change the types of any members or implicitly add them to the class. It's purely a way to make sure the class implements the interface properly where it's declared, rather than when instances of the class happen to not match up with an interface.
