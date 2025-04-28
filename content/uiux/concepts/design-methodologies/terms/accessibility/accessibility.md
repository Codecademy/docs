---
Title: 'Accessibility'
Description: 'Accessibility refers to designing devices, products, and environments such that individuals with disabilities or sensory impairments can successfully use them.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'UI'
  - 'UX'
  - 'Design'
CatalogContent:
  - 'intro-to-ui-ux'
  - 'paths/front-end-engineer-career-path'
---

**Accessibility** refers to designing devices, products, and environments such that individuals with disabilities or sensory impairments can successfully use them.

## Accessibility Guidelines

The Web Content Accessibility Guidelines (WCAG) break down accessibility into [four main principles](https://www.w3.org/WAI/standards-guidelines/wcag/glance/):

- **Perceivable**: Create content that can be perceived in different ways, for example, providing text alternatives for non-text content and content that can be perceived by assistive technologies like screen readers.
- **Operable**: Enable simple operation by making all functionality available from the keyboard, helping users navigate and find content, and giving users plenty of time to consume content.
- **Understandable**: Make text readable and understandable, make content appear in predictable ways, and help users avoid and correct mistakes.
- **Robust**: Maximize compatibility with current and future user tools.

[Inclusive design](https://www.codecademy.com/resources/docs/uiux/design-methodologies/inclusive-design) focuses on designing for users of all demographics and abilities, while accessibility is specifically focused on designing for people with disabilities. Any product that doesn't consider accessibility and equity may (whether intentionally or not) exclude a portion of the population who would otherwise find it useful.

## What Accessibility Looks Like in Practice

Accessible UX design requires intentionality at every stage, from wireframing to testing:

- **Use semantic HTML structure and headings:** Proper use of elements like `<main>`, `<nav>`, `<section>`, and heading levels improves navigation for screen readers.
- **Ensure color contrast meets minimum thresholds:** Text and interactive elements must be readable in low-light conditions and by users with visual impairments.
- **Label form fields and inputs clearly:** Labels, placeholders, and instructions should be provided with screen-reader-accessible markup.
- **Avoid using color alone to convey meaning:** Use text, icons, or shapes in addition to color cues to support color-blind users.
- **Design keyboard-accessible navigation:** Users should be able to navigate and interact with all elements using just a keyboard.
- **Write meaningful link text:** Avoid vague labels like “click here”. Instead describe the purpose of each link clearly.

> **Note:** Accessibility is not just a legal or ethical requirement. It improves usability for all users, including those using small screens, older devices, or assistive technologies.

## Challenges Designers Should Consider

- **Animations and motion:** Ensure that animations respect the user's motion preference settings and avoid triggering vestibular disorders.
- **Alt text and media description:** Every image, chart, or embedded media must include an appropriate description for non-visual consumption.
- **Language and cognitive load:** Avoid jargon, acronyms, or long blocks of text that can overwhelm users with cognitive disabilities or non-native fluency.
- **Touch targets:** Buttons and links must be large enough and spaced adequately for users with limited motor control.
- **Testing tools may not catch everything:** Automated tools like axe or Lighthouse can help, but manual testing with screen readers or diverse users is still essential.
