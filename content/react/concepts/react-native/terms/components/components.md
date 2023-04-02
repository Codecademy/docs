---
Title: 'Components'
Description: 'Describes the appearance and behavior of the UI of a mobile application.'
Subjects:
  - 'Mobile Development'
Tags:
  - 'Components'
  - 'React Native'
  - 'UI'
CatalogContent:
  - 'learn-react-native'
  - 'paths/front-end-engineer-career-path'
---

[**Components**](https://www.codecademy.com/resources/docs/react/components) are units of reusable code that describe the appearance and behavior of a mobile application's [user interface (UI)](https://www.codecademy.com/resources/docs/uiux/ui-design).

## UI Views

Represented as small, rectangular, and oftentimes nestable elements, views can display text, media, and respond to user input. React Native invokes views in their native environment with JavaScript.

![React Native to Native UI Representation](https://raw.githubusercontent.com/Codecademy/docs/main/media/react_native_UI_Views.png)

## Native Components

These previously mentioned platform-backed components are called Native Components. Whether iOS or Android, React Native creates the corresponding, platform-specific view(s) for these components at runtime. Therefore, React Native apps look, feel, and perform like Native apps.

## Core Components

React Native offers a set of essential, ready-to-use native components called core components. There are many components ranging from text to activity indicators. Most apps will use these core components:

| Core Component | Description                                                                                                                                                                                                                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<View>`       | A common container component that supports layout with flexbox, styles, touch handling, accessibility controls, and can contain other components inside such as other views. It is analogous to a non-scrolling [`<div>`](https://www.codecademy.com/resources/docs/html/elements/div) HTML element.          |
| `<Text>`       | Displays text and supports styles and touch events. It is analogous to a [paragraph element](https://www.codecademy.com/resources/docs/html/elements/p).                                                                                                                                                      |
| `<Image>`      | Displays different types of images, including from network, static, local disks, and from ‘data:’ [URI](https://www.codecademy.com/resources/docs/general/uri) scheme. It is analogous to an [image element](https://www.codecademy.com/resources/docs/html/images).                                          |
| `<TextInput>`  | Allows the input of text by the user and provides several configuration capabilities such as auto-correction, auto-capitalization, placeholder text, etc. It is analogous to an [`<input>`](https://www.codecademy.com/resources/docs/html/elements/input) element with its `type` attribute set to `"text"`. |
| `<ScrollView>` | A container that can nest multiple components and views that can scroll vertically or horizontally. It is analogous to a scrolling `div` element.                                                                                                                                                             |

## Community Components

Components can also be custom-built; there’s a big ecosystem of these community-built components that can be accessed on the [Native Directory](https://reactnative.directory/).

![React and React Native Components](https://raw.githubusercontent.com/Codecademy/docs/main/media/react_react_native_components.png)

### Examples

React Native uses the same component syntax structure for its views to display elements to the screen, like in [React.js](https://www.codecademy.com/resources/docs/react). The following examples are of a `Box` component defined as both a class and functional component:

```jsx
import React, { Component } from 'react';
import { Text } from 'react-native';

// Functional Component
const Box = () => {
  return <Text>I have a small box</Text>;
};

// Class Component
class Box extends Component {
  render() {
    return <Text>I have a small box</Text>;
  }
}

export default Box;
```

> **Note:** To test this example, either the class or function definition of the `Box` component must be commented out before doing so.

## JSX, Props, and State

Components also use [JSX](https://www.codecademy.com/resources/docs/react/jsx), accept [props](https://www.codecademy.com/resources/docs/react/props), and manage [state](https://www.codecademy.com/resources/docs/react/state).

### JSX

As in React, the JSX syntax in React Native allows elements and variables to be written inside the JavaScript:

```jsx
import React from 'react';
import { Text } from 'react-native';

const Box = () => {
  const size = “small”;
  return (
    <Text>I have a {size} box</Text>
  );
}

export default Box;
```

### Props

Most core components in React Native accept props. For example, different sizes for the `Box` component can be passed via props:

```jsx
import React from 'react';
import { View, Text } from 'react-native';

const Box = (props) => {
  return (
    <Text>I have a {props.size} box</Text>
  );
}

const BoxCollection = () => {
  return (
    <View>
      <Box size=“small” />
      <Box size=“medium” />
      <Box size=“large” />
    </View>
  );
}

export default BoxCollection;
```

### State

Like in React, components in React Native also use state to handle data that changes over time, such as with user interaction:

```jsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Box = () => {
  const [size, setSize] = useState('small');
  return (
    <View>
      <Text>I have a {size} box</Text>
      <Button color="red" onPress={() => setSize('small')} title="Small" />
      <Button color="blue" onPress={() => setSize('medium')} title="Medium" />
      <Button color="orange" onPress={() => setSize('large')} title="Large" />
    </View>
  );
};

export default Box;
```
