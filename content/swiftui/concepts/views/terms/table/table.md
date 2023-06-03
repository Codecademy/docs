---
Title: `Table`
Description: `A container that presents rows of data arranged in one or more columns, optionally providing the ability to select one or more members.`
Subjects: Mobile Development, iOS application, SwiftUI
Tags: SwiftUI, iOS, table, view

---

# SWIFTUI - LIST

## **A container that presents rows of data arranged in one or more columns, optionally providing the ability to select one or more members**

You commonly create tables from collections of data.
If there are more rows than can fit in the available space,  table provides vertical scrolling automatically (on macOS, the table also provides horizontal scrolling if there are more columns than can fit in the width of the view)

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
	
 



### You interact with the table by selecting one or more rows and then performing actions from the toolbar or a context menu.

To make rows of a table selectable, provide a binding to a selection variable
* Binding to a single instance of the table data’s id type creates a single-selection table
* Binding to a Set creates a table that supports multiple selections

## Styling tabels

Use tableStyle (_:) modifier to set a TableStyle for all the tables within view
* AutmaticTableStyle
* InsetTableStyle
* BorderedTableStyle







