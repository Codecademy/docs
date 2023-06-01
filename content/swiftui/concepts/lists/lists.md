---
Title: 'Lists'
Description: 'In SwiftUI, lists are single-column containers that vertically display a collection of items.'
Subjects:  
  - 'iOS Development'
Tags:
  - 'SwiftUI'
  - 'iOS'
CatalogContent: 
  - 'learn-swift'
  - 'paths/ios-developer'
---


**Lists** in SwiftUI are single-column containers that vertically display a collection of items. The `struct` component is used to create this feature. Here is an example:
```
struct ListExample: View {
  var body: some View {
    List {
      Text("Item 1")
      Text("Item 2")
      Text("Item 3")
    }
  }
}
```

##  Creating Lists 
SwiftUI offers many ways to create lists.  One method would be static, which contains a fixed number of rows. A common example of this would be a restaurtant menu that shows a list of food items after the navigation section. Here's how it would look: 
```
NavigationView {
List { 
View 1
View 2
View 3
} 
}
```
To make the list more style, consider modifiers like `listStyle:` so it can fit whatever desired platform the list will be displayed. 
## How to list Data within the List
Say the team decides to add more rows to the menu so that customers can have more options to pick from, also know as making the list dynamic. To accomplish this task, data needs to be added to the list.   
To add data to the list, go to the `struct ContentView:View` section 
and add an array like the one below:
```
var sections = ["Appetizer", "Entree", "Dessert"]


```
## How to make Data Identifiable in the List 
Now that the items are listed, here's how to make the list's data identifiable:
1. Add a unique `id` property to each of the list's item. For example,  use the item's name from the array mentioned before as the id property.
2. Set the `id` property to `\.self` as shown below:
```
ForEach(sections, id: \.**self**) { food **in** Text (sections)}

}
```



