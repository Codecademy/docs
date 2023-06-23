---
Title: 'Enums'
Description: 'An enum, or enumeration type, is a set of named labels that each represent a number.'
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

An **enum**, or enumeration type, is a set of named labels that each represent a number.

## Syntax

By default, each entry in an enum is assigned a zero-indexed value.

```cs
enum NinjaTurtle {
  Leonardo, // 0
  Michelangelo, // 1
  Donatello, // 2
  Raphael // 3
}

Console.WriteLine((int)NinjaTurtle.Raphael == 3); // Prints "True"
```

However, specific number values can also be assigned.

```cs
enum BreadCount {
  Dozen = 12,
  BakersDozen = 13,
  Gross = 144,
  GreatGross = 1728
}
```

## Example

The following example uses an enum to identify whether a given place is a city, country, or planet.

```cs
using System.Collections.Generic;

public enum PlaceType {
  City,
  Country,
  Planet,
}

public class Place {
  public string name { get; set; }
  public PlaceType type { get; set; }

  public Place(string n, PlaceType t) {
    name = n;
    type = t;
  }
}

public class Example {
  public static void Main() {
    List<Place> places = new List<Place>();
    places.Add(new Place("Tokyo", PlaceType.City));
    places.Add(new Place("Canada", PlaceType.Country));
    places.Add(new Place("Jupiter", PlaceType.Planet));
  }
}
```

## Codebyte Example

The following example uses an enum to classify different types of log messages.

```codebyte/csharp
using System;
using System.Collections.Generic;

public enum LogLevel {
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
