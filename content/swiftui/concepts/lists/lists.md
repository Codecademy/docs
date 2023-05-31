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


Lists in **SwiftUI** are single-column containers that vertically display a collection of items. The `List` component is used to create this feature. 

##  Creating Lists 
SwiftUI offers you many ways to create lists. Say for example, your groccery list app to show the items of food you want after the navigation section. Here's how it would look: 
```
NavigationView {
List { 
Diary
Produce
Meats
} 
}
```
If you want to make your list more style, consider modifiers like `listStyle:` so it can fit whatever platform you to decide to send your app to. 

## How to list Data within the List

To add data to your list, go to the `struct ContentView:View` section 
and add an array like the one below:
```
var sections = ["Diary", "Produce", "Meats"]


```
## How to make Data Identifiable in the List 
Now that we have our items, here's how to make the list's data identifiable:
1. Add a unique `id` property to each of the list's item. For example, you could use the item's name from the array mentioned before as the id property.
2. Set the `id` property to `\.self` as shown below:
```
ForEach(sections, id: \.**self**) { fruit **in** Text (sections)}

}
```



