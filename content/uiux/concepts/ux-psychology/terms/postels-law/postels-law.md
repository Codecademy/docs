---
Title: 'Postels Law'
Description: 'Postels Law, also known as the Robustness Principle, encourages systems to accept input flexibly while remaining strict in their output — a principle that applies to UX and interface design for resilience and accessibility.'
Subjects:
  - 'Web Design'
Tags:
  - 'UX'
  - 'Design Principles'
  - 'Accessibility'
CatalogContent:
  - 'intro-to-ui-ux'
  - 'paths/front-end-engineer-career-path'
---

**Postels Law**, or the **Robustness Principle**, originates from early internet protocol design and states:

> Be liberal in what you accept, and conservative in what you send. — Jon Postel

While originally intended for software protocols, this principle is widely applicable to **UX design**. It encourages flexibility and forgiveness in how systems handle user input, while still delivering predictable, high-quality output. It is especially important in forms, input validation, error handling, and accessibility.

## What It Means in UX

In UX, Postels Law urges designers to:

- Accommodate varied user input formats and behaviors
- Handle edge cases gracefully rather than failing rigidly
- Provide consistent, accessible feedback without demanding perfection from the user

The principle helps reduce user frustration by allowing users to complete tasks even when their input is not perfect, supporting a more forgiving, human-centered experience.

## Why It Matters

People do not always interact with interfaces in the exact way designers expect. If a system requires perfection, users may hit frustrating dead ends. Thus, designing with Postels Law in mind means anticipating human variability and embracing it.

### Benefits include

- **Increased usability and task success rates**
  Flexible input handling prevents user errors from turning into blockers.

- **Greater inclusivity and accessibility**
  Supporting different patterns of interaction helps users with diverse needs and tools.

- **Stronger resilience in edge cases**
  Systems are less likely to crash or behave unexpectedly under unusual input conditions.

- **Higher trust in the interface**
  When users feel understood and supported, they are more likely to engage fully with a product.

## When and Where to Apply Postels Law

Postels Law is especially useful when:

- **Designing forms or search bars**
  Let users enter phone numbers with or without dashes, spaces, or country codes and still validate successfully.

- **Handling user errors or mistyped data**
  Allow minor spelling errors in search fields and suggest corrections instead of showing zero results.

- **Designing multi-platform interactions**
  Recognize inputs from different devices (e.g. touch, keyboard, voice) without rigid expectations.

- **Building accessible interactions**
  Ensure that screen readers, keyboard navigation, and alternate input methods receive appropriate, predictable responses.

## How to Apply It in UX Design

- **Support multiple input formats**
  Whether it is date fields, email formats, or file names, accept a range of input styles and normalize them behind the scenes.

- **Add real-time validation and correction**
  Guide users gently with hints or auto-formatting instead of stopping them with hard errors.

- **Make defaults and fallbacks work intelligently**
  If input is missing or incorrect, offer smart defaults or safe assumptions to keep users moving forward.

- **Use clear, non-blaming error messages**
  Errors should inform, not shame. Make recovery easy and empathetic.

- **Avoid punishing unexpected behavior**
  Always consider how your system should respond to unusual but still valid input, and aim for graceful degradation.

![Diagram showing flexible input formats converging into a standardized system output](https://raw.githubusercontent.com/Codecademy/docs/main/media/postels-law-input-flexibility.png)

## Limitations of the Principle

- Overly liberal input handling can hide issues or create security concerns
  For example, accepting any format without validation can increase the risk of incorrect or malicious input.

- Too much flexibility can reduce learnability
  Users may not know what to expect or how to interact consistently if there are no boundaries.

- It should never compromise clarity or control
  Flexibility should support users — not confuse them.

Use Postels Law to build more resilient, forgiving, and user-friendly experiences — while still being mindful of context, constraints, and risk.
