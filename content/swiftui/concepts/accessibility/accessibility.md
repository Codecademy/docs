---
Title: 'Accessibility'
Description: 'Accessibility in SwiftUI refers to the built-in tools and available techniques to create inclusive user interfaces.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'SwiftUI'
  - 'iOS'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**[Accessibility](https://www.codecademy.com/resources/docs/uiux/accessibility)** in SwiftUI refers to the built-in tools and available techniques to create user interfaces for individuals with diverse needs.

## The Importance of Accessibility

Creating accessible apps with SwiftUI is necessary to meet accessibility guidelines. Furthermore, it creates [inclusive design](https://www.codecademy.com/resources/docs/uiux/inclusive-design) and user-friendly experiences. Standard accessibility features work by default to ensure that an app is accessible for everyone, while accessibility modifiers enable developers to further customize the app's accessibility features. Utilizing these tools and following best practices can have the following benefits:

- Ensure the app is accessible for users with specific needs.
- Enhance usability for all users.
- Ensure regulatory compliance for digital accessibility.
- Improve SEO (Search Engine Optimization) and discoverability of the app.
- Display innovation and creativity.
- Future-proof the app by preparing for future advancements.
- Expand the app's potential audience
- Create a positive brand image.
- Can create marked differentiation and set it apart from competitors.
- Can increase customer loyalty.

## Standard Accessibility Features

By default, SwiftUI provides basic accessibility labels to the most common [views](https://www.codecademy.com/resources/docs/swiftui/views), such as:

- [Button](https://www.codecademy.com/resources/docs/swiftui/views/button)
- [Text](https://www.codecademy.com/resources/docs/swiftui/views/text)
- [Text field](https://www.codecademy.com/resources/docs/swiftui/views/textfield)
- [List](https://www.codecademy.com/resources/docs/swiftui/views/list)
- [Image](https://www.codecademy.com/resources/docs/swiftui/views/image)
- Slider.

These labels describe the purpose and function of the view, making it easier for [screen reader](https://www.codecademy.com/article/how-to-setup-screen-reader) and other assistive technologies to convey meaningful information to users. SwiftUI generates these labels automatically, requiring no action from developers. For example, creating a button:

```swift
var body: some View {
    Button("Login") {
        // Login action
    }
}
```

This will render a button with default styles and the `"Login"` text, ensuring its visibility to screen readers and adaptive technologies.

## Accessibility Modifiers

SwiftUI provides a range of modifiers to fine-tune the accessibility of an app's elements. Here are some of the most crucial ones:

- `.accessibilityLabel()` and `.accessibilityHint()` modifiers are used to specify custom labels and hints for elements:

  ```swift
  var body: some View {
      Image("info").accessibilityLabel("Information icon")
  }
  ```

  This will render the image while providing a more precise description to assistive technologies.

- `accessibilityValue()` modifier can define the value associated with the element, such as sliders:

  ```swift
  @State private var sliderValue = 50.0

  var body: some View {
      Slider(value: $sliderValue, in: 0...100)
          .accessibilityValue("\(Int(sliderValue)) percent")
      Text("Value: \(Int(sliderValue))")
  }
  ```

  This will render a slider while providing context to screen readers about the slider's current value.

- `.accessibilityTraits()` modifier can indicate the traits of an element:

  ```swift
  var body: some View {
      Button("Login") {
          // Login action
      }
      .accessibilityTraits(.button)
  }
  ```

  This will render the button while informing screen readers and other assistive technologies that the element is a button.

- `AccessibilityInputLabels` and `AccessibilityActions` modifiers can enhance interactive elements by adding context and accessibility-specific actions. The following example shows a toggle button with `AccessibilityActions` modifier:

  ```swift
  @State private var isButtonPressed = false

  var body: some View {
      Button(action: {
          self.isButtonPressed.toggle()
      }) {
          Text("Toggle")
              .background(isButtonPressed ? Color.purple : Color.yellow)
      }
      .accessibilityAction(named: "Toggle Color") {
          self.isButtonPressed.toggle()
      }
  }
  ```

  This will render a button with yellow [background](https://www.codecademy.com/resources/docs/swiftui/viewmodifier/background), as the initial state of `isButtonPressed` is `false`, with the `"Toggle"` text. When the button is pressed, the background color will change to purple. The `accessibilityAction` modifier adds an accessibility action to the button for toggling the color and providing context-specific actions.

## Accessibility Techniques in SwiftUI

In addition to accessibility modifiers, some general techniques can help design interfaces that accommodate diverse needs:

- Adjusting focus management with the `.focused()` modifier lets you control which element initially gets focus, enhancing the user experience for keyboard and screen reader users. The following example creates a text field:

  ```swift
  var body: some View {
      TextField("Username", text: $username)
          .focused($username, equals: true)
  }
  ```

  This will render a `TextField`, and when the view appears, the keyboard will automatically be shown, and the cursor will be placed in the `TextField`, ready for user input.

- Using modifiers for Dynamic Type: SwiftUI supports Dynamic Type, which means an app's text can adapt to a user's preferred text size:

  ```swift
  var body: some View {
      Text("Accessibility in SwiftUI")
          .font(.body)
          .scaledFont(size: 18)
  }
  ```

  In the example above, the `Text` element is initially set with the [`.font()`](https://www.codecademy.com/resources/docs/swiftui/viewmodifier/font) modifier with `.body` value, and then the `.scaledFont()` modifier is applied to adjust the font size to `18` points. This ensures the text remains legible even as the user changes their preferred text size settings.

- Using semantic views and tags: Semantic views and tags like `.button`, `.image`, `.heading`, and `.link` for role-specific styling can aid the visual appearance and interactions of the app while also enhancing screen reader users' navigation experiences.
- VoiceOver Integration during development: VoiceOver is a built-in screen reader for iOS and macOS to assist visually impaired users. VoiceOver automatically interacts with the accessibility labels, hints, traits, and other modifiers you apply to your UI elements. You can enable it on your testing device and navigate through the app's interface to identify areas where labels are missing, navigation might be confusing, or interactions aren't intuitive and make real-time adjustments.
- [Gesture](https://www.codecademy.com/resources/docs/swiftui/gestures) design: Creating intuitive gestures that align with user expectations. Prioritize familiar gestures like single-finger taps and two-finger swipes for navigation. Ensure haptic feedback for gesture confirmation, benefiting users with visual impairments. Test gestures with VoiceOver enabled to guarantee compatibility with screen readers.

## Best Practices for Accessibility

Along with accessibility modifiers and techniques, the following best practices can help developers create apps that provide a more accessible and enjoyable user experience:

- Comprehensive Testing:
  - Regularly test your app with screen readers like VoiceOver to ensure proper labeling and conveyed information.
  - Verify keyboard navigation functionality for all interactive elements.
  - Test with various Dynamic Type settings to ensure readable text and adaptive layouts.
    -Perform contrast testing for text and graphics visibility.
- Real-World Simulations:
  - Test with real content instead of placeholders to replicate authentic usage scenarios.
  - Verify logical and intuitive focus order for VoiceOver and keyboard navigation.
- Tools and Engagement:
  - Utilize Xcode's [Accessibility Inspector](https://developer.apple.com/videos/play/wwdc2019/257/) to identify issues.
  - Involve users with disabilities in beta testing for valuable feedback.
  - Create user-friendly channels for accessibility-related feedback.
- Continuous Improvement:
  - Stay updated with evolving accessibility guidelines and best practices.
  - Learn about different disabilities to make informed design choices. Sites like [W3C](https://www.w3.org/WAI/tips/) are often recommended to learn about this topic.
