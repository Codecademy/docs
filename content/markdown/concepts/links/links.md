---
Title: 'Links'
Description: 'Creates clickable hyperlinks using square brackets and parentheses to connect text to web addresses, files, or document sections'
Subjects:
  - 'Code Foundations'
  - 'Web Development'
Tags:
  - 'Files'
  - 'Link'
  - 'Syntax'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

**Links** in Markdown are clickable references that connect text to web addresses, files, or other sections within documents. They allow users to navigate between different content by creating hyperlinks using a simple, readable syntax that combines square brackets for link text and parentheses for URLs.

## Syntax

The basic syntax for creating links in Markdown uses the following format:

```pseudo
[link text](URL)
[link text](URL "title")
```

**Parameters:**

- `link text`: The visible, clickable text that appears in the document
- `URL`: The web address, file path, or anchor reference where the link points
- `title` (optional): Additional text that appears as a tooltip when hovering over the link

**Return value:**

Links render as HTML `<a>` elements with the specified text and destination, creating clickable hyperlinks in the final document.

## Example 1: Basic Markdown Link Example

Creating a hyperlink to an external website demonstrates the fundamental link syntax in Markdown:

```md
// Create a basic link to a website
Check out the [Codecademy documentation](https://www.codecademy.com/resources/docs) for more resources.
```

The output of this is:

Check out the [Codecademy documentation](https://www.codecademy.com/resources/docs) for more resources.

---

The link text "Codecademy documentation" becomes clickable and directs users to the specified URL. This example shows the most common use case for Markdown links - connecting to external web resources.

## Example 2: Link with Title Example

Adding descriptive titles to links improves accessibility and provides additional context for users:

```md
// Create a link with a descriptive title for better accessibility
Visit our [Python tutorial](https://www.codecademy.com/learn/learn-python-3 'Learn Python programming fundamentals') to start coding today.

// Multiple links with titles in a navigation context  
Explore our courses:

- [Web Development](https://www.codecademy.com/catalog/subject/web-development 'Build modern websites and web applications')
- [Data Science](https://www.codecademy.com/catalog/subject/data-science 'Analyze data and create insights')
- [Machine Learning](https://www.codecademy.com/catalog/subject/machine-learning 'Build intelligent systems and algorithms')
```

The output for this is:

Visit our [Python tutorial](https://www.codecademy.com/learn/learn-python-3 'Learn Python programming fundamentals') to start coding today.

Explore our courses:

- [Web Development](https://www.codecademy.com/catalog/subject/web-development 'Build modern websites and web applications')
- [Data Science](https://www.codecademy.com/catalog/subject/data-science 'Analyze data and create insights')
- [Machine Learning](https://www.codecademy.com/catalog/subject/machine-learning 'Build intelligent systems and algorithms')

---

The title attribute appears as a tooltip when users hover over the link, providing additional context especially useful for screen readers and accessibility tools.

## Best Practices to Create Markdown Links

### 1. Writing Effective Link Text

Always use descriptive, meaningful text that clearly indicates the link destination. Avoid generic phrases that provide no context about where the link leads.

**Good examples:**

```markdown
Read the [Python style guide](https://pep8.org) for coding standards.
Download the [latest software release](https://github.com/project/releases/latest).
```

**Avoid:**

```markdown
Click [here](https://pep8.org) for more information.
[Read more](https://github.com/project/releases/latest) about this topic.
```

### 2. URL Encoding and Special Characters

When URLs contain parentheses or special characters, encode them properly to prevent parsing issues. Replace opening parentheses with `%28` and closing parentheses with `%29`.

```markdown
// Correct way to handle URLs with parentheses
Learn about [Markdown syntax](https://en.wikipedia.org/wiki/Markdown_%28markup_language%29).

// For URLs with spaces, use angle brackets
<https://example.com/path with spaces/>
```

### 3. Reference-Style Links for Organization

Reference-style links improve document maintainability by separating link definitions from their usage. This approach works best when the same URL appears multiple times or when dealing with very long URLs.

```markdown
// Reference-style links keep the text readable
Check out our [beginner course][python-course] and [advanced topics][python-advanced].

// Link definitions can be placed anywhere in the document
[python-course]: https://www.codecademy.com/learn/learn-python-3 "Learn Python Basics"
[python-advanced]: https://www.codecademy.com/learn/learn-intermediate-python-3 "Advanced Python Concepts"
```

### 4. Internal Linking and Anchors

Create internal links to navigate within the same document using the `#` symbol followed by the section heading. Convert headings to lowercase and replace spaces with hyphens.

```markdown
// Link to sections within the same document
See the [Syntax](#syntax) section above for basic formatting rules.
Jump to [Frequently Asked Questions](#frequently-asked-questions) for common issues.
```

### 5. Accessibility Considerations

Include optional title attributes to provide additional context for screen readers and users navigating with assistive technologies. Titles appear as tooltips when hovering over links.

```markdown
// Adding titles improves accessibility
Visit our [documentation hub](https://docs.codecademy.com 'Comprehensive guides and tutorials') for detailed information.
```

## How to Format Markdown Links

### 1. Inline Link Formatting

The standard inline format places the URL directly after the link text, making it immediately visible in the source document.

```markdown
// Basic inline link structure
[Link Text](URL)

// With optional title
[Link Text](URL 'Title Text')

// Real examples
Check out [Codecademy](https://www.codecademy.com) for online courses.
Visit our [Python course](https://www.codecademy.com/learn/learn-python-3 'Learn Python programming') today.
```

### 2. Automatic URL Linking

URLs can be automatically converted to clickable links by enclosing them in angle brackets, useful for displaying the full URL as the link text.

```markdown
// Automatic linking with angle brackets
<https://www.codecademy.com>
<contact@codecademy.com>

// These render as clickable links showing the full URL
```

### 3. Email Address Linking

Email addresses follow the same pattern as URL links, creating `mailto:` links automatically when enclosed in angle brackets.

```markdown
// Email linking formats
Send questions to <support@codecademy.com>
Contact our [support team](mailto:support@codecademy.com 'Get help with your account')
```

### 4. Linking to Images and Files

Links can point to various file types including images, documents, and downloadable resources.

```markdown
// Link to downloadable files
Download the [course syllabus](https://example.com/files/syllabus.pdf 'PDF document')
View the [project diagram](https://example.com/images/architecture.png 'System architecture overview')
```

### 5. Multi-line Link Formatting

For very long URLs, maintain readability by breaking reference definitions across multiple lines while keeping the link usage clean.

```markdown
// Clean link usage
Read our comprehensive [style guide][style-guide] for best practices.

// Multi-line reference definition
[style-guide]: https://very-long-domain-name.com/documentation/
writing-style-guide/markdown-formatting-standards
"Complete Markdown Style Guide"
```

## Frequently Asked Questions

### 1. How do you hyperlink in Markdown?

Use square brackets around the link text followed by parentheses containing the URL: `[link text](URL)`. Optionally add a title in quotes after the URL.

### 2. How do you Markdown a URL with spaces?

Either encode spaces as `%20` or enclose the entire URL in angle brackets: `<URL with spaces>`. For file paths with spaces, use proper encoding or quotes.

### 3. What is the permalink in Markdown?

A permalink is a permanent link to a specific section within a document, created using the `#` symbol followed by the section heading in lowercase with hyphens replacing spaces: `[Section Link](#section-heading)`.
