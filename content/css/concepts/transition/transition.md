---
Title: 'Transition'
Description: 'CSS transitions provide a way to control an animations speed and timing of the property changes.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Transitions'
  - 'Elements'
  - 'Properties'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

CSS **transitions** provide a way to control an animation's speed and timing of the property changes. Instead of having property changes take effect immediately, changes in a property can take place over a period of time.

For example, if the mouse cursor hovers over a link, the link may change color or appearance, and usually the change is instantaneous. With CSS transitions enabled, changes can occur at time intervals that follow an acceleration curve, all of which can be customized.

| Transition Property | Description                                       | Example                                      |
|---------------------|---------------------------------------------------|----------------------------------------------|
| property            | Which property the transition is for              | `transition-property: background-color;`     |
| duration            | How long a transition lasts                       | `transition-duration: 0.5s;`                 |
| timing-function     | How a transition accelerates                      | `transition-timing-function: ease-in-out;`   |
| delay               | Delay before the transition starts                | `transition-delay: 0.2s;`                    |

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
