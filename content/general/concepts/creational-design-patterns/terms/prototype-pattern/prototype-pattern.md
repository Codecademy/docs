---
Title: 'Prototype Pattern'
Description: 'Adds cloning functionality to an objects class.'
Subjects:
  - 'Computer Science'
  - 'Interview Prep'
Tags:
  - 'Classes'
  - 'Conceptual'
  - 'Constructors'
  - 'Objects'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **prototype pattern** adds cloning functionality to an object's class. After the instantiation of an initial object, the prototype removes the need for the `new` keyword in creating subsequent objects at run time. New objects are created using the property values of a pre-existing object.

Two types of copying are associated with the prototype pattern:

- Shallow copy: Copies the immediate property values.
- Deep copy: Copies the immediate values, plus any referenced object.

## Example: Shallow Copy vs Deep Copy

Shown below is a model consisting of two classes: `TvSeries` and `Episode`. Cloning functionality has been added to `TvSeries` by implementing the `Cloneable` interface.

```java
public class TvSeries implements Cloneable {
  private final String name;
  private final int seriesNo;
  // Notice one or more properties are a complex type and mutable
  private final List<Episode> episodes;

  public TvSeries(String name, int seriesNo, List<Episode> episodes) {
    this.name = name;
    this.seriesNo = seriesNo;
    this.episodes = episodes;
  }

  // Shallow copy method
  @Override
  public TvSeries clone() throws CloneNotSupportedException {
    // Cast to TvSeries as super returns Object
    return (TvSeries) super.clone();
  }

  // Deep copy
  public TvSeries deepCopy() {
    // New Episode objects are created during the copy
    final List<Episode> episodes = new ArrayList<>();

    for (Episode episode : this.episodes) {
      episodes.add(new Episode(episode.getName, episode.getEpNo));
    }

    return new TvSeries(this.name, this.seriesNo, episodes);
  }

  // Getters and toString
}
```

`TvSeries` class has a list of complex objects (`Episode`) as one of its properties. Shallow copying through `clone()` will only copy the outermost `TvSeries` object and negate creating new objects to reference for the list of episodes.

The `deepCopy()` method, by comparison, iterates through the list of `Episode` to create a list of new `TvSeries` objects. This list is then used by the `TvSeries` constructor when creating a copy. The new `TvSeries` object references a new or independent list of episodes.

Below provides a model class for the complex object type `Episode` described above:

```java
public class Episode {
  private String name;
  private int epNo;

  public Episode(String name, int epNo) {
    this.name = name;
    this.epNo = epNo;
  }

  // Getters, setters, and toString
}
```

> **Note:** The properties of the `Episode` class are mutable.

The following code demonstrates a limitation of the shallow copy:

```java
public class Main {
  public static void main(String[] args) throws CloneNotSupportedException {
    // A 'new' TvSeries object is created as seriesOne
    Episode episodeOne = new Episode("Hello Friend", 13);
    final Series seriesOne = new Series("Mr Robot", 1, Collections.singletonList(episodeOne));

    // A second TvSeries object is created by shallow copying seriesOne
    final Series seriesTwo = seriesOne.clone();
    // Change the name of S2ep1
    seriesTwo.getEpisodes().get(0).setName("Unmask");
    // S2ep1 name has changed
    System.out.println(seriesTwo.getEpisodes().get(0).getName()); // Unmask
    // But, so has S1ep1 :(
    System.out.println(seriesOne.getEpisodes().get(0).getName()); // Unmask
  }
}
```

Our main method starts by creating two new objects: `episodeOne` of type `Episode` and `seriesOne` of type `Series`. `seriesOne` is then cloned using a shallow copy to instantiate `seriesTwo`, and as a result, our program now has two `Series` objects (`seriesOne` and `seriesTwo`) referencing a single list of episodes in memory. Finally, when the name of the episode is changed through its setter method, the name change appears in both Series 1 Episode 1 and Series 2 Episode 1.

Below is the same example but using the `deepCopy()` in place of `clone()`:

```java
public class Main {
  public static void main(String[] args) throws CloneNotSupportedException {
    // A 'new' TvSeries object is created as seriesOne
    Episode episodeOne = new Episode("Hello Friend", 13);
    final Series seriesOne = new Series("Mr Robot", 1, Collections.singletonList(episodeOne));

    // A second TvSeries object is created using a deep copy of seriesOne
    final Series seriesTwo = seriesOne.deepCopy();
    // Change the name of S2ep1
    seriesTwo.getEpisodes().get(0).setName("Unmask");
    // S2ep1 name has changed
    System.out.println(seriesTwo.getEpisodes().get(0).getName()); // Unmask
    // And s1ep1 name remains correct :)
    System.out.println(seriesOne.getEpisodes().get(0).getName()); // Hello Friend
  }
}
```

Rather than instantiating two `TvSeries` objects that reference a single list of episodes in memory, the `deepCopy()` creates a list of new episodes in memory by iterating over the old. There are now two `TvSeries` objects referencing two `Episode` objects in memory, and the name of each `Episode` object can be changed independently.

## UML Design

![UML diagram of a prototype](https://raw.githubusercontent.com/Codecademy/docs/main/media/prototype-uml.png)

## Example: Prototype

To illustrate the prototype pattern, below provides a real-world example, in Java, depicting potential considerations for a video streaming service. For some reason, returning `Film` or `TvSeries` objects is considered to be expensive. When providing the user with their watch history, the `UserRepository` can be used to set the needed properties from cloned objects provided by a registry.

A `UserRepository` has been created with two methods: `getUserFilmHistory()` and `getUserTvSeriesHistory()`. Both simply return a list of `Strings` representing a user's watch history.

```java
public class UserRepository {
  // Returns a list of film titles
  public List<String> getUserFilmsHistory() {
    return Arrays.asList(
      "Army of the Dead",
      "King Arthur: Legend of the Sword",
      "Total Recall",
      "Friday the 13th",
      "The General's Daughter",
      "American Gangster",
      "Replicas",
      "Army of Thieves",
      "21 Jump Street",
      "The Harder They Fall"
    );
  }

  // Returns a list of Tv show titles
  public List<String> getUserTvSeriesHistory() {
    return Arrays.asList("Maya and the Three",
      "The Thundermans",
      "Riverdale",
      "Locke and Key",
      "Catching Killers",
      "Cocomelon",
      "Maid",
      "Colin in Black and White",
      "Squid Game",
      "You"
    );
  }
}
```

To model the object types to be returned, `Film` and `TvSeries` have been outlined. They both extend an abstract parent class of `Show`. This allows us to use generics in `clone()`, making the returned object automatically cast to the correct type.

```java
public abstract class Show<T> implements Cloneable {
  // Implements clone in abstract class to make use of generics
  @Override
  public T clone() throws CloneNotSupportedException {
    return (T) super.clone();
  }
}
```

```java
// Film extends Show<Film>, so its clone method will return a Film instance
public class Film extends Show<Film> {
  private String title;
  private String format;
  private String thumbnailLocation;

  // Getters, setters, and toString
}
```

```java
// TvSeries extends Show<TvSeries>, so its clone method will return TvSeries instance
public class TvSeries extends Show<TvSeries> {
  private String title;
  private String format;
  private String thumbnailLocation;

  // Getters, setters, and toString
}
```

Finally, `ShowCache` has been made to add an object registry to the program. When `.loadCache()` is called, two template objects are created using the `new` keyword and placed in a static map. When `getShow()` is called by a client, the correct clone (taken from `showMap`) is returned, ready for its properties to be set. If the requested `showId` is not recognized, an exception is thrown.

```java
public class ShowCache {
  // A HashTable that contains the initial model object from which we clone from
  public static Hashtable<String, Show<?>> showMap = new Hashtable<>();

  // Instantiates the initial objects from which we clone from
  public static void loadCache() {
    final TvSeries tvSeries = new TvSeries();
    final Film film = new Film();
    showMap.put("Tv Series", tvSeries);
    showMap.put("Film", film);
  }

  // Returns clone of object stored in showMap to client
  public static Show<?> getShow(String showId) throws CloneNotSupportedException, ShowIdNotRecognisedException {
    // Switch statement to find out which clone is needed
    switch (showId) {
      case "Film":
        Film cashedFilm = (Film) showMap.get(showId);
        return cashedFilm.clone();
      case "Tv Series":
        TvSeries cashedTvSeries = (TvSeries) showMap.get(showId);
        return cashedTvSeries.clone();
      default:
        throw new ShowIdNotRecognisedException("Unable to get show: " + showId);
    }
  }
}
```

```java
public class ShowIdNotRecognisedException extends Throwable {
  private static final long serialVersionUID = 1;

  public ShowIdNotRecognisedException(final String message) {
    super(message);
  }
} f
```

The `Main` class below, starts the program and acts as the client in this example. It asks the registry to instantiate the initial objects to clone from before using the `UserRepository`'s data and the `getShow` method to return a list of `Film` and `TvSeries` objects representing a user's previously watched shows.

> **Note:** After the instantiation of initial objects in the registry's `.loadCache()`, all other `Film` and `TvSeries` objects are created through cloning functionality. The `new` keyword is absent.

```java
public class Main {

  public static void main(String[] args) {
    // Create initial objects
    ShowCache.loadCache();
    final UserRepository userRepository = new UserRepository();
    // For each film title, clone Film object and set appropriate properties. Return list
    final List<Film> filmHistory = userRepository.getUserFilmsHistory().stream().map(entry -> {
      Film film = null;

      try {
        film = (Film) getShow("Film").clone();
        film.setTitle(entry);
        film.setFormat(".mp4");
        film.setThumbnailLocation("films/assets/" + entry.toLowerCase().replace(" ", "_") + film.getFormat());
      } catch (CloneNotSupportedException | ShowIdNotRecognisedException e) {
        e.printStackTrace();
      }

      return film;
    }).collect(Collectors.toList());

    // For each tv show title, clone TvSeries object and set appropriate properties. Return list
    final List<TvSeries> tvSeriesHistory = userRepository.getUserTvSeriesHistory().stream().map(entry -> {
      TvSeries tvSeries = null;

      try {
        tvSeries = (TvSeries) getShow("Tv Series").clone();
        tvSeries.setTitle(entry);
        tvSeries.setFormat(".mp4");
        tvSeries.setThumbnailLocation("tv-shows/assets/" + entry.toLowerCase().replace(" ", "_") + tvSeries.getFormat());
      } catch (CloneNotSupportedException | ShowIdNotRecognisedException e) {
        e.printStackTrace();
      }

      return tvSeries;
    }).collect(Collectors.toList());

    // Print filmHistory and tvSeriesHistory to the console
    System.out.println(filmHistory);
    System.out.println(tvSeriesHistory);
  }
}
```
