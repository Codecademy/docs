---
Title: 'Notifications'
Description: 'Learn how to use notifications in SwiftUI for event handling and communication.'
Subjects:
  - 'Mobile Development'
  - 'iOS'
Tags:
  - 'SwiftUI'
  - 'Notifications'
Table of Contents:
- Introduction
- Alerts
- Action Sheets
- Toasts (Message Overlays)
- Custom Notifications
- Best Practices
---
# SwiftUI Notifications

## Introduction 

In **[SwiftUI](https://developer.apple.com/documentation/swiftui/)**, **`notifications`** refer to visual and interactive user interface components that display messages, alerts, or updates to the user. 

They are used to provide information, prompt user interaction, or display important messages within your app's user interface. 

SwiftUI provides several types of notifications that we can use to enhance the user experience. We can use modifiers and view modifiers to create and disply notifications as part of the interface. 

In Swift (using NotificationCenter) notifications are primarly a mechanism for communication between different app components.  They are also visual elements used to present information or gather inputs from the user. 

The two concepts are related and they both involve some form of communication or interaction, but they serve different purposes and are implemented differently in the respective frameworks.


## Types of SwiftUI Notifications

## 1. Alerts
An alert is a notification that presents a message or a set of options to the user. It's commonly used to display critical information or to prompt the user for a decision.

// Posting an Alert. Example:

```struct ContentView: View {
    @State private var showAlert = false

    var body: some View {
        Button("Show Alert") {
            showAlert = true
        }
        .alert(isPresented: $showAlert) {
            Alert(title: Text("Alert"), message: Text("This is an alert notification."), dismissButton: .default(Text("OK")))
        }
    }
}
```

>> `@State private var showAlert = false`: This creates a state variable named showAlert, which determines whether the alert should be shown or not.

>> `Button("Show Alert") { showAlert = true }`: A button that, when tapped, sets the showAlert state variable to true, triggering the display of the alert.

>> `.alert(isPresented: $showAlert) { ... }`: A view modifier that presents an alert when the showAlert state is true. The closure passed to .alert defines the content of the alert. In this case, it's a basic alert with a title, message, and a default "OK" button.

*This code will inform the user that an action was successful or an error occurred.*



## 2. Action Sheets

An action sheet is a notification that presents a set of choices to the user. It's often used when you want to give the user multiple options to choose from.


// Action Sheets. Example:

```struct ContentView: View {
    @State private var showActionSheet = false

    var body: some View {
        Button("Show Action Sheet") {
            showActionSheet = true
        }
        .actionSheet(isPresented: $showActionSheet) {
            ActionSheet(title: Text("Sort By"), buttons: [
                .default(Text("Name")),
                .default(Text("Date")),
                .cancel()
            ])
        }
    }
}
```

>> @State private var showActionSheet = false: This creates a state variable named showActionSheet, which determines whether the action sheet should be shown or not.

>> Button("Show Action Sheet") { showActionSheet = true }: A button that, when tapped, sets the showActionSheet state variable to true, triggering the display of the action sheet.

>> .actionSheet(isPresented: $showActionSheet) { ... }: A view modifier that presents an action sheet when the showActionSheet state is true. The closure passed to .actionSheet defines the content of the action sheet. It includes two "Name" and "Date" buttons and a "Cancel" button.

*This code will provide the user with options to select their preferred sorting order.*


## 3. Toasts (Message Overlays)
A toast is a small, temporary notification that appears at the bottom of the screen. It's typically used to display non-intrusive messages or status updates.

// Message Overlay. Example:

```struct ContentView: View {
    @State private var showToast = false

    var body: some View {
        Button("Show Toast") {
            showToast = true
        }
        .toast(isPresented: $showToast, content: {
            ToastView(message: "Data saved successfully")
        })
    }
}

struct ToastView: View {
    let message: String

    var body: some View {
        VStack {
            Text(message)
                .padding()
                .background(Color.black.opacity(0.7))
                .foregroundColor(.white)
                .cornerRadius(10)
        }
        .frame(maxWidth: .infinity, alignment: .center)
        .padding()
        .animation(.easeInOut(duration: 0.3))
    }
}
```

>> `@State private var showToast = false`: This creates a state variable named showToast, which determines whether the toast should be shown or not.

>> `Button("Show Toast") { showToast = true }`: A button, when tapped, sets the showToast state variable to true, triggering the display of the toast.

>> `.toast(isPresented: $showToast, content: { ... })`: A custom view modifier (implemented as an extension) that displays a toast when the showToast state is true. The content closure defines the content of the toast, which is an instance of the `ToastView`` view.

>> `ToastView`: A custom view that represents the toast. It contains a Text view displaying the provided message, with a dark background and white text color. The .frame, .padding, and .animation modifiers are used to control the appearance and animation of the toast.

*This code will show a short confirmation message after the user successfully saves some data.*

## 4. Custom Notifications 

We can create our own custom notifications by designing custom views and animations. These can be used to provide unique and engaging user interface elements tailored to your app's style and branding.

Custom notifications allow us to get creative with how we present information or engage users within our SwiftUI app.

The specific implementation and appearance of notifications can be customized based on our app's design and user experience goals. SwiftUI's flexible and declarative approach makes it easy to create engaging and user-friendly notifications that enhance your app's overall experience.

```struct ContentView: View {
    var body: some View {
        VStack {
            Text("Welcome to My App")
                .font(.title)
            
            Button("Show Custom Notification") {
                // Trigger custom notification display
            }
            .padding()
        }
    }
}
```

>> The code was left more open-ended to illustrate the concept of creating custom notifications. 
The focus is on the idea that you can design and implement your own custom views and animations to create unique and visually appealing notifications tailored to your app's style and branding.




## Best Practices

+ **Descriptive Names:**
Use clear and descriptive names for your notifications to convey their purpose effectively. Consider using enums to define notification names for type safety.

+ **Decoupling:** 
Utilize notifications to decouple different app components, but avoid using them excessively for closely related components. Also, use more direct communication methods for hierarchical relationships.

+ **Observer Removal:**
 Always remove observers when they are no longer needed to prevent memory leaks. Typically, remove observers in the deinit method of the observing class.

+ **Avoid Overuse:**
 While powerful, notifications should be used judiciously. Overusing them can lead to code complexity and reduced maintainability. Consider other communication patterns for more appropriate scenarios.

+ **Combine Framework:**
 If using SwiftUI, explore the Combine framework to handle notifications and asynchronous tasks in a more reactive and functional way. Combine provides publishers and subscribers for improved code readability and organization.


