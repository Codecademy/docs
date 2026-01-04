---
title: "Dart Map: removeWhere()"
description: "Removes all entries from a Dart Map that satisfy a given condition."
subjects:
  - "Computer Science"
languages:
  - "Dart"
---

## Introduction

The `removeWhere()` method removes key-value pairs from a Dart `Map` when a given condition evaluates to `true`.

It iterates through each entry in the map and deletes those that match the provided predicate.

## Syntax

```dart
map.removeWhere((key, value) => condition);
```

## Example

```dart
void main() {
  Map<String, int> scores = {
    'Alice': 85,
    'Bob': 42,
    'Charlie': 67,
  };

  // Remove entries where the score is below 60
  scores.removeWhere((name, score) => score < 60);

  print(scores);
} 
```

## Output

```text
{Alice: 85, Charlie: 67}
```