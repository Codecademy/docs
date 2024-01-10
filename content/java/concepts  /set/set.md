Title: 'Java-TreeSet'

Description: 'Add treeSet implementation: ex. Set set = new TreeSet<>()' 

Subjects:
  - 'Computer science'

Tags:
  - 'Sets'
  - 'Strings'

CatalogContent:
  - 'learn-java'

Definition:
Tree set is a sorted collection. It stores unique elements and sorts them in ascending order. 

Tree set may be helpful for a string set beacause if someone add some String twice, program will show it only once.



import java.util.*;
public class MyClass {
  public static void main(String[] args) {
    Set <String> treeset = new TreeSet<>();
    treeset.add("Diablo III");
    treeset.add("The Witcher");
    treeset.add("Doom");
    treeset.add("Doom");

    System.out.println(treeset);
  }
}

Output: [Diablo III, Doom, The Witcher]






