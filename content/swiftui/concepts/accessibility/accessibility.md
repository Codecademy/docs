---
Title: 'Accessibility'
Description: 'Accessibility in SwiftUI refers to the built-in tools and available techniques to create inclusive user interfaces.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Accessibility'
  - 'SwiftUI'
  - 'iOS'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**[Accessibility](https://www.codecademy.com/resources/docs/uiux/design-methodologies/accessibility)** in SwiftUI refers to the built-in tools and available techniques to create user interfaces for individuals with diverse needs.

## The Importance of Accessibility

Creating accessible apps with SwiftUI is necessary to meet accessibility guidelines. Furthermore, it creates [inclusive design](https://www.codecademy.com/resources/docs/uiux/design-methodologies/inclusive-design) and user-friendly experiences. Standard accessibility features work by default to ensure that an app is accessible for everyone, while accessibility modifiers enable developers to further customize the app's accessibility features. Utilizing these tools and following best practices can have the following benefits:

- Ensure the app is usable by people with visual, motor, auditory, and cognitive needs.
- Support **situational impairments** such as bright sunlight, one-handed use, or noisy environments.
- Ensure compliance with platform requirements and legal accessibility standards.
- Expand the app's potential audience to the widest range of users.

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
      Image("info")
          .accessibilityLabel("Information")
          .accessibilityHint("Opens the information page")
  }
  ```

  The `.accessibilityLabel()` provides a concise name for assistive technologies, and `.accessibilityHint()` describes the result of interacting with the element.

- `.accessibilityValue()` modifier can define the value associated with the element, such as sliders:

  ```swift
  @State private var sliderValue = 50.0

  var body: some View {
      Slider(value: $sliderValue, in: 0...100)
          .accessibilityValue("\(Int(sliderValue)) percent")
      Text("Value: \(Int(sliderValue))")
  }
  ```

  This will render a slider while providing context to screen readers about the slider's current value.

- `.accessibilityAddTraits()` and `.accessibilityRemoveTraits()` modifiers adjust the traits of an element. These are preferred over `.accessibilityTraits()` because they modify existing traits rather than replacing them:

  ```swift
  var body: some View {
      Text("Terms and Conditions")
          .onTapGesture { /* open link */ }
          .accessibilityAddTraits(.isLink)
  }
  ```

  This adds the `.isLink` trait to a tappable `Text` view, informing assistive technologies that the element behaves as a link.

  > **Note:** Standard views like `Button` already include appropriate traits automatically, so adding `.isButton` to a `Button` is redundant.

- `.accessibilityAction()` modifier can enhance interactive elements by adding accessibility-specific actions. The following example shows a toggle button with a custom accessibility action:

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

  This will render a button with yellow [background](https://www.codecademy.com/resources/docs/swiftui/viewmodifier/background), as the initial state of `isButtonPressed` is `false`, with the `"Toggle"` text. When the button is pressed, the background color will change to purple. The `.accessibilityAction()` modifier adds an accessibility action to the button for toggling the color and providing context-specific actions.

- `.accessibilityElement(children:)` controls how child views appear in the accessibility tree. The three options are `.combine` (merges children into one element), `.contain` (keeps children as separate elements), and `.ignore` (hides children from assistive technologies):

  ```swift
  var body: some View {
      HStack {
          Image(systemName: "star.fill")
          Text("Favorites")
      }
      .accessibilityElement(children: .combine)
  }
  ```

  This combines the image and text into a single accessibility element so VoiceOver reads "Favorites" in one pass instead of announcing two separate elements.

- `.accessibilityIdentifier()` assigns a stable identifier to a view for use in UI testing. Unlike `.accessibilityLabel()`, this value is not visible to users through assistive technologies.

- `.accessibilityInputLabels()` provides alternative labels that Voice Control users can speak to interact with an element:

  ```swift
  var body: some View {
      Button("Submit Order") {
          // Submit action
      }
      .accessibilityInputLabels(["Submit Order", "Submit", "Order"])
  }
  ```

  This lets Voice Control users say "Submit" or "Order" as shorthand to activate the button.

## Accessibility Techniques

In addition to accessibility modifiers, some general techniques can help design interfaces that accommodate diverse needs:

- Adjusting focus management with `@FocusState` and the `.focused()` modifier allows control over which element initially gets focus, enhancing the user experience for keyboard and screen reader users:

  ```swift
  @FocusState private var isUsernameFocused: Bool

  var body: some View {
      TextField("Username", text: $username)
          .focused($isUsernameFocused)
          .onAppear {
              isUsernameFocused = true
          }
  }
  ```

  When the view appears, the keyboard will automatically be shown, and the cursor will be placed in the [TextField](https://www.codecademy.com/resources/docs/swiftui/views/textfield), ready for user input.

- Using **`@AccessibilityFocusState`** and `.accessibilityFocused()` allows programmatically moving VoiceOver focus to important elements such as error messages (iOS 15+):

  ```swift
  @AccessibilityFocusState private var isErrorFocused: Bool
  @State private var errorMessage = ""

  var body: some View {
      VStack {
          Text(errorMessage)
              .accessibilityFocused($isErrorFocused)
          Button("Save") {
              errorMessage = "Name is required."
              isErrorFocused = true
          }
      }
  }
  ```

  After the error message appears, VoiceOver focus moves to it so the user is immediately informed.

- Supporting **Dynamic Type**: SwiftUI's built-in text styles (e.g., `.font(.body)`, `.font(.headline)`) automatically scale with the user's preferred text size. For custom values like spacing or icon sizes, use the **`@ScaledMetric`** property wrapper:

  ```swift
  @ScaledMetric(relativeTo: .body) private var iconSize = 24.0

  var body: some View {
      Image(systemName: "heart.fill")
          .resizable()
          .frame(width: iconSize, height: iconSize)
  }
  ```

  The `iconSize` value scales proportionally when the user changes their Dynamic Type setting, keeping the icon visually balanced with surrounding text.

- Using **accessibility traits**: Traits like `.isButton`, `.isHeader`, `.isImage`, and `.isLink` communicate an element's role to assistive technologies. Apply them with `.accessibilityAddTraits()` to help screen reader users understand the purpose of each element and navigate by headings or links.

- Controlling **reading order** with `.accessibilitySortPriority()`: By default, VoiceOver reads elements in their layout order. Use `.accessibilitySortPriority()` to adjust this — higher values are read first:

  ```swift
  var body: some View {
      VStack {
          Text("Details")
              .accessibilitySortPriority(0)
          Text("Important Alert")
              .accessibilitySortPriority(1)
      }
  }
  ```

  VoiceOver will read "Important Alert" before "Details" even though it appears second in the layout.

- VoiceOver integration during development: VoiceOver is a built-in screen reader for iOS and macOS to assist visually impaired users. VoiceOver automatically interacts with the accessibility labels, hints, traits, and other modifiers applied to UI elements. Enable it on a testing device and navigate through the app's interface to identify areas where labels are missing, navigation might be confusing, or interactions are not intuitive.

- [Gesture](https://www.codecademy.com/resources/docs/swiftui/gestures) design: Creating intuitive gestures that align with user expectations. Prioritize familiar gestures like single-finger taps and two-finger swipes for navigation. Ensure haptic feedback for gesture confirmation, benefiting users with visual impairments. Test gestures with VoiceOver enabled to guarantee compatibility with screen readers.

## Recent Accessibility Features

Apple introduced several accessibility enhancements in iOS 26 (WWDC 2025):

- **Assistive Access integration**: Apps can now provide a simplified experience for users who enable Assistive Access. The new `AssistiveAccess` scene type lets developers define a tailored interface, and the `UISupportsAssistiveAccess` Info.plist key declares that an app supports this mode.
- **Accessibility Reader**: A systemwide reading mode that presents content in a focused, scrollable text view. Apps that use standard text views and support Dynamic Type benefit from this feature automatically.
- **Liquid Glass design considerations**: The new visual language introduces translucent surfaces that can reduce text contrast. Test with the "Increase Contrast" accessibility setting enabled to ensure all text and controls remain legible over Liquid Glass materials.

## Best Practices

The following best practices help developers create SwiftUI apps that provide an accessible and enjoyable user experience:

- Test with VoiceOver, Voice Control, and Switch Control on real devices to verify that every element is reachable and understandable.
- Use Xcode's Accessibility Inspector to audit labels, traits, and actions across every screen.
- Test with multiple Dynamic Type sizes, including the largest accessibility sizes, to ensure readable text and adaptive layouts.
- Prefer `Button` and `Link` over `.onTapGesture` for interactive elements so that correct traits and focus behavior are provided automatically.
- Use `.accessibilityElement(children: .combine)` to group related views and `.accessibilityElement(children: .ignore)` for purely decorative views.
- Provide meaningful `.accessibilityLabel()` values — for example, "Profile photo" rather than "Image of profile photo."
- Involve users with disabilities in beta testing for valuable, real-world feedback.
