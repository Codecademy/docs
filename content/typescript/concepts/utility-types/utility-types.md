---
Title: 'Utility Types'
Description: 'Helps in working with data types more efficiently.'
Subjects:
  - 'Web Development'
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Utility Types'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

Typescript consists of some predefined generic types known as Utility Types. These utility types are useful for manipulating or creating other new types in a more efficient way. Some common utility types are given below:

## Partial

Partial is used to create a type with all properties marked as optional.

### Syntax

A partial is written as:

```ts
Partial<T>;
```

where `T` is the typo you want to make all the properties optional.

## Partial Example

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

Required is used to create a type with all properties of `T` marked as required. It is the opposite of `Partial`.

### Syntax

Required in Typescript is written as:

```ts
Required<T>;
```

where `T` is the typo you want to make all the properties mandatory.

## Required Example

In this example, all the properties of the `User` interface (including the optional properties) are made mandatory:

```ts
interface User {
  name: string;
  age?: number;
}

const requiredUser: Required<User> = {
  name: 'John',
  age: 25,
};
```

## Readonly

Readonly is to mark all the properties in `T` as `readonly`, which prevents any reassignment.

### Syntax

Readonly is written as:

```ts
Readonly<T>;
```

where properties of `T` is marked as readonly.

## Readonly Example

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

```ts
Pick<T, K>;
```

where `K` are the properties you want to include from `T`.

## Pick Example

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

```ts
Omit<T, K>;
```

where `K` properties are omitted from `T`.

## Omit Example

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

```ts
Record<K, T>;
```

where `K` represents the keys and `T` represents the values.

## Record Example

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

```ts
Exclude<T, U>;
```

where `U` are the properties you want to exclude from `T`.

## Exclude Example

In this example, we exclude `apple` and `banana` from the union type, resulting in just `orange`:

```ts
type fruits = 'apple' | 'banana' | 'orange';
type ExcludedFruits = Exclude<T, 'apple' | 'banana'>; // "orange"
```

These utility types make it easier to manage and transform types, helping you write cleaner and safer code.
