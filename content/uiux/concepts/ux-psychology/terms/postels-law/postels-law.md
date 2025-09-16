---
Title: 'Postel’s Law'
Description: 'Postel’s Law, or the Robustness Principle, encourages flexible input handling while ensuring predictable output in UX design'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Accessibility'
  - 'Design'
  - 'UX'
CatalogContent:
  - 'intro-to-ui-ux'
  - 'paths/front-end-engineer-career-path'
---

**Postel's Law**, also called the Robustness Principle, originates from internet protocol design and is summarized as:

> "Be liberal in what you accept, and conservative in what you send." — Jon Postel

While originally intended for software protocols, this principle is widely applicable to _UX design_. It encourages flexibility and forgiveness in how systems handle user input, while still delivering predictable, high-quality output. It is especially important in forms, input validation, error handling, and accessibility.

## What It Means in UX

In UX, Postel's Law urges designers to:

- Accommodate varied user input formats and behaviors.
- Handle edge cases gracefully rather than failing rigidly.
- Provide consistent, accessible feedback without demanding perfection from the user.

This principle reduces user frustration by allowing users to complete tasks even when their input is not perfect — supporting a more forgiving, human-centered experience.

## Benefits of Postel's Law

- **Increased usability and task success rates:** Flexible input handling prevents user errors from turning into blockers.
- **Greater inclusivity and accessibility:** Supporting different patterns of interaction helps users with diverse needs and tools.
- **Stronger resilience in edge cases:** Systems are less likely to crash or behave unexpectedly under unusual input conditions.
- **Higher trust in the interface:** When users feel understood and supported, they are more likely to engage fully with a product.

## When and Where to Apply Postel's Law

Postel's Law is especially useful when:

- **Designing forms or search bars:** Let users enter phone numbers with or without dashes, spaces, or country codes and still validate successfully.
- **Handling user errors or mistyped data:** Allow minor spelling errors in search fields and suggest corrections instead of showing zero results.
- **Designing multi-platform interactions:** Recognize inputs from different devices (e.g. touch, keyboard, voice) without rigid expectations.
- **Building accessible interactions:** Ensure that screen readers, keyboard navigation, and alternate input methods receive appropriate, predictable responses.

## How to Apply It in UX Design

- **Support multiple input formats:** Whether it is date fields, email formats, or file names, accept a range of input styles and normalize them behind the scenes.
- **Add real-time validation and correction:** Guide users gently with hints or auto-formatting instead of stopping them with hard errors.
- **Make defaults and fallbacks work intelligently:** If input is missing or incorrect, offer smart defaults or safe assumptions to keep users moving forward.
- **Use clear, non-blaming error messages:** Errors should inform, not shame. Make recovery easy and empathetic.
- **Avoid punishing unexpected behavior:** Always consider how your system should respond to unusual but still valid input, and aim for graceful degradation.

![Diagram showing flexible input formats converging into a standardized system output](https://raw.githubusercontent.com/Codecademy/docs/main/media/postels-law-input-flexibility.png)

## Limitations of the Principle

- **Overly liberal input handling can hide issues or create security concerns:** For example, accepting any format without validation can increase the risk of incorrect or malicious input.
- **Too much flexibility can reduce learnability:** Users may not know what to expect or how to interact consistently if there are no boundaries.
- **It should never compromise clarity or control:** Flexibility should support users — not confuse them.

## Examples of Postel’s Law in Practice

- **Search bars that autocorrect typos or suggest queries:** Instead of showing “no results,” the system interprets the user’s intent and offers relevant alternatives.
- **Date inputs that accept multiple formats:** Fields that let users type “August 27,” “27/08/2025,” or “08-27-25” without error.
- **Phone number fields that strip spaces or symbols:** Systems that normalize input like “(123) 456-7890” into a clean format instead of blocking it.
- **Form validation that corrects capitalization or spacing errors:** Automatically formatting names or addresses while still accepting varied input.
- **E-commerce checkouts that accept minor address variations:** Matching “Street” with “St.” or recognizing mistyped zip codes to assist in delivery.
- **Search filters that don’t break with wrong case or punctuation:** Recognizing that “UX Design” and “ux design” are the same for query purposes.
