---
Title: 'Utility Types'
Description: 'Helps in working with data types more efficiently.'
Subjects:
  - 'Web Development'
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Utility Types'
  - 'Data Types'
  - 'TypeScript'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

TypeScript consists of several predefined generic types known as **Utility Types**. These utility types are useful for manipulating or creating new types more efficiently.

## Partial

Partial is a utility type that is used to create a type where all properties are marked as optional.

### Syntax

A partial is written as:

```pseudo
Partial<T>;
```

Where `T` is the typo you want to make all the properties optional.

### Partial Example

In this example, all the properties of the `User` interface are optional:

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

const partialUser: Partial<User> = {
  name: 'John',
};
```

## Required

`Required` is a utility type that is used to create a type with all properties of `T` marked as `Required`. It is the opposite of `Partial`.

### Syntax

`Required` in Typescript is written as:

```pseudo
Required<T>;
```

Where `T` is the typo you want to make all the properties mandatory.

### Required Example

In this example, all the properties of the `User` interface (including the optional properties) are made mandatory:

```ts
interface User {
  name: string;
  age?: number;
}

const requiredUser: Required<{ name: string; age: number }> = {
  name: 'John',
  age: 25,
};
```

## Readonly

`Readonly` is a utility type that marks all the properties in `T` as `readonly`, preventing any reassignment.

### Syntax

`Readonly` is written as:

```pseudo
Readonly<T>;
```

Where properties of `T` is marked as `Readonly`.

### Readonly Example

In this example, attempting to reassign the value of `readonlyUser.age` generates an error:

```ts
interface User {
  name: string;
  age: number;
}

const readonlyUser: Readonly<User> = {
  name: 'John',
  age: 30,
};

readonlyUser.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.
```

## Pick

Pick allows you to create a new type by selecting a set of properties `K` from an existing type `T`.

### Syntax

Pick is written as:

```pseudo
Pick<T, K>;
```

where `K` are the properties you want to include from `T`.

### Pick Example

In this example, `Pick` is used to create a type from `User` that includes only the `name` and `email` fields, omitting `age`, without needing to declare a new interface:

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

const pickedUser: Pick<User, 'name' | 'email'> = {
  name: 'John',
  email: 'john@example.com',
};
```

## Omit

Omit allows you to create a new type by excluding a set of properties `K` from an existing type `T`.

### Syntax

Omit is written as:

```pseudo
Omit<T, K>;
```

where `K` properties are omitted from `T`.

### Omit Example

In this example, we removed the `age` property from the `User` interface:

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

const omittedUser: Omit<User, 'age'> = {
  name: 'John',
  email: 'john@example.com',
};
```

## Record

Record helps you give cleaner type to `objects`.

### Syntax

Record is written as:

```pseudo
Record<K, T>;
```

where `K` represents the keys and `T` represents the values.

### Record Example

In this example, it ensures that the keys are `strings` and the values are `numbers`.

```ts
type Users = Record<string, number>;

const userRoles: Users = {
  admin: 1,
  user: 2,
  guest: 3,
};
```

## Exclude

Excludes from `T` those types that are assignable to `U`.

### Syntax

Exclude is written as:

```pseudo
Exclude<T, U>;
```

where `U` represents the types you want to exclude from the union type`T`.

### Exclude Example

In this example, we exclude `apple` and `banana` from the union type, resulting in just `orange`:

```ts
type fruits = 'apple' | 'banana' | 'orange';
type ExcludedFruits = Exclude<fruits, 'apple' | 'banana'>; // "orange"
```

These utility types make managing and transforming types easier, helping you write cleaner and safer code.
