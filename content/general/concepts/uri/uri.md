---
Title: 'URI'
Description: 'A URI is a string that returns data used by web technologies such as APIs.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Link'
  - 'URL'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/front-end-engineer-career-path'
---

A **Uniform Resource Identifier (URI)** is a string that refers to a resource used by a web technology like a browser or an [API](https://www.codecademy.com/resources/docs/general/api).

## Syntax

```pseudo
|----------------------------URL-------------------|
|        |--------------------------URN------------|------|
scheme://domain:port/path/to/resource?query=params#fragment
|----------------------------URI--------------------------|
```

URIs encompass the syntax of both [URLs](https://www.codecademy.com/resources/docs/general/url) and [URNs](https://www.codecademy.com/resources/docs/general/urn). It uses a `scheme` such as the [HTTP](https://www.codecademy.com/resources/docs/general/http) protocol to describe how the resource is retrieved. This is followed by a `domain` that ends in something like ".com" or ".gov" and may also include a `port` number. Then, a file path is described along with any possible `query` params and page `fragment`s.

## Example

Codecademy has a page on Wikipedia, which contains a section about "Features". The complete URI for this specific resource looks like this:

```shell
https://en.wikipedia.org/wiki/Codecademy#Features
```

The following is used in the example URI:

- A protocol scheme (`https`).
- A subdomain (`en`) that specifies the language for the site.
- The domain (`wikipedia.org`) containing the ".org" top-level domain.
- A directory to Codecademy's wiki page (`/wiki/Codecademy`).
- A fragment (`#Features`) linking to a specific section in the page.
