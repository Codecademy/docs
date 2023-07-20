---
Title: 'Widgets'
Description: 'Building user interfaces across Apple platforms.'
Subjects:
  - 'iOS Development'
Tags:
  - 'SwiftUI'
  - 'UI'
  - 'Mobile Development'
CatalogContent:
  - 'learn-swift'
  - 'paths/ios-developer'
---

**Widgets** in SwiftUI are interactive components that provide users with glanceable information or quick access to app functionality directly from the home screen of their device.

They are mini-applications that can display dynamic content, such as weather updates, calendar events, or news headlines. The user experience is enhanced by providing at-a-glance information and quick interactions without requiring users to open the full app.

## WidgetKit

WidgetKit is a framework that allows developers to create interactive and dynamic widgets for iOS, macOS, and watchOS. Declarative syntax and powerful UI components are leveraged by SwiftUI to display various types of information such as weather updates, calendar events, news headlines, or custom data from the app.

Widgets created with WidgetKit can take advantage of system intelligence to manage resources efficiently, ensuring that updates occur at appropriate times to conserve battery life. Additionally, WidgetKit is highly customizable, allowing developers to design visually appealing and personalized experiences for users. Users are then able to configure a widget based on their preferences.

It also offers support for widget families, allowing developers to create widgets of different sizes and layouts, adapting to the available space on the user's device.

## Timeline Management

The `TimelineProvider` [protocol](https://www.codecademy.com/resources/docs/swift/protocols) enables widgets to provide timely updates and display different content based on the current context.
