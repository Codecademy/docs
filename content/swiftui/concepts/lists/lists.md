---
Title: "Lists" 
Description: "Building Lists in SwiftUI"
Subjects:  
  - "iOS Development"
Tags:
  - "SwiftUI" 
  - "iOS"
CatalogContent: 
  - "learn-swift"
  - "paths/ios-developer"
---

# SwiftUI Lists

Lists in **SwiftUI** are single-column containers that vertically display a collection of items. The `List` component is used to create this feature. 

## How to Create a List

To set up your list, follow these steps:

1. Click on **File**, then click on **New**.
2. Click on **Multiplatform** and **Swift Package**.
3. Give your folder a label, then click **Create**. You will see the standard project from there.

## How to List Data within the List

To add data to your list, go to the `struct ContentView: View` section and add an array like the one below:

```swift
var fruits = ["Banana", "Cherry", "Apple"]
```

## How to list Data within the List

To add data to your list, go to the `struct ContentView:View` section 
and add an array like the one below:
```
var fruits = ["Banana", "Cherry", "Apple"]


```
## How to make Data Identifiable in the List 
Now that we have our items, here's how to make the list's data identifiable:
1. Add a unique `id` property to each of the list's item. For example, you could use the item's name from the array mentioned before as the id property.
2. Set the `id` property to `\.self` as shown below:
```
ForEach(fruits, id: \.**self**) { fruit **in** Text (fruit)}

}
```




