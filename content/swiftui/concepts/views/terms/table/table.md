---
Title: 'Table'
Description: 'A container that presents rows of data arranged in one or more columns, optionally providing the ability to select one or more members.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'iOS'
  - 'Tables'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---


A **Table** is a container that presents rows of data arranged in one or more columns, optionally providing the ability to select one or more members.

Tables are commonly created from collections of data. If there are more rows than what can fit in the available space, the table provides vertical scrolling automatically. On macOS, the table also provides horizontal scrolling if there are more columns than what can fit in the width of the view.

>struct Product: Identifiable {
 let id: UUID()
 let name: String
 let color: String
 let price: Double
}

>@State private var products = [
	Product(name: "Pen", color: "Black", price: 2.99),
	Product(name: "Eraser", color: "White", price: 1.49),
	Product(name: Pencil, color: "Green", price: 0.99)
	]

>struct ProductTable: View {
	var body: some View {
		Table (products) {
			TableColumn ("Product Name", value: \.name)
			TableColumn("Product Color", value: \.color)
			TableColumn("Product Price", value: \.price) 
		}
	 }
	}
	
 



Tables are interacted with by selecting one or more rows and then performing actions from the toolbar or a context menu.

To make rows of a table selectable, provide a binding to a selection variable
* Binding to a single instance of the table data’s id type creates a single-selection table
* Binding to a Set creates a table that supports multiple selections

## Styling Tables

Use the `.tableStyle()` modifier to set a TableStyle for all the tables within view
* AutomaticTableStyle
* InsetTableStyle
* BorderedTableStyle







