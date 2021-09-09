---
Title: 'Inheritance'
Description: 'In Ruby, inheritance describes the relation between classes. Inheritance is expressed when the < is used to connect the parent class, Animal, with the child class, Dog: rb class Animal def initialize(species) @species = species end'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Inheritance'
CatalogContent:
  - 'learn-ruby'
  - 'paths/front-end-engineer-career-path'
---

In Ruby, inheritance describes the relation between classes.

## Syntax

Inheritance is expressed when the `<` is used to connect the parent class, `Animal`, with the child class, `Dog`:

```rb
class Animal
  def initialize(species)
    @species = species
  end

  def species
    @species
  end
end

class Dog < Animal
  def initialize(species, name)
    super(species)
    @name = name
  end
end

snoop = Dog.new("Long-Beach Labrador", "Calvin")

puts snoop.species # Output: Long-Beach Labrador
```

The `Dog` class inherits all the methods from its parent `Animal` class, including `.species`.

## Overriding Methods

An inheriting child class can override methods defined in its parent and replace with code specific to it:

```rb
class Animal
  def initialize(species)
    @species = species
  end

  def species
    @species
  end

  def make_sound
    "The animal made a sound that was hard to tell."
  end
end

class Dog < Animal
  def initialize(species, name)
    super(species)
    @name = name
  end

  def name
    @name
  end

  def make_sound
    "Bark!"
  end
end

snoop = Dog.new("Long-Beach Labrador", "Calvin")

puts snoop.make_sound # Output: Bark!
```

The `.make_sound` method from `Animal` was overridden in `Dog` with a return string specific to that class.
