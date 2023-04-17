---
Title: 'Enums'
Description: 'An enum (or "Enumeration type") is a set of named labels that each represent a number.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Enums'
  - 'Data Types'
  - 'Arrays'
  - 'Vectors'
  - 'Pointers'
  - 'Memory'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

## Syntax

By default, each entry in an enum is assign a zero-indexed value.

```cs
enum NinjaTurtle {
  Leonardo, // 0
  Michelangelo, // 1
  Donatello, // 2
  Raphael // 3
}

Console.WriteLine((int)NinjaTurtle.Raphael == 3); // prints "True"
```

However, you can also choose to assign specific number values.

```cs
enum BreadCount {
  Dozen = 12,
  BakersDozen = 13,
  Gross = 144,
  GreatGross = 1728
}
```

## Codebyte Example

The following example uses an enum to classify different types of log messages.

```codebyte/csharp
using System;
using System.Collections.Generic;

enum LogLevel {
  Info,
  Warn,
  Error,
}

public class Logger {
  public HashSet<LogLevel> ShowLevels { get; set; }

  public Logger() {
    ShowLevels = new HashSet<LogLevel>();
  }

  public void Log(LogLevel level, string message) {
    if (ShowLevels.Contains(level)) {
      Console.WriteLine(message);
    }
  }
}

public class Example
{
  public static void Main()
  {
    Logger logger = new Logger();
    logger.ShowLevels.Add(LogLevel.Error);

    // "b" is logged to the console but "a" is not,
    // since only Error has been added to ShowLevels.
    logger.Log(LogLevel.Info, "a");
    logger.Log(LogLevel.Error, "b");
  }
}
```
