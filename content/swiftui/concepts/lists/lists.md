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
SwiftUI offers many ways to create lists. Say for example, the groccery list app can show the user's desired items of food after the navigation section. Here's how it would look: 
```
NavigationView {
List { 
View 1
View 2
View 
} 
}
```
To make the list more style, consider modifiers like `listStyle:` so it can fit whatever desired platform the list will be displayed. 

## How to list Data within the List

To add data to the list, go to the `struct ContentView:View` section 
and add an array like the one below:
```
var sections = ["Diary", "Produce", "Meats"]


```
## How to make Data Identifiable in the List 
Now that the items are listed, here's how to make the list's data identifiable:
1. Add a unique `id` property to each of the list's item. For example,  use the item's name from the array mentioned before as the id property.
2. Set the `id` property to `\.self` as shown below:
```
ForEach(sections, id: \.**self**) { fruit **in** Text (sections)}

}
```



