---
Title: 'Access-Control-Allow-Origin'
Description: 'Determines which requests from other pieces of web content have access to the current resource.'
Subjects:
  - 'Code Foundations'
  - 'Web Development'
Tags:
  - 'Browsers'
  - 'Requests'
  - 'World Wide Web'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/full-stack-engineer-career-path'
---

**`Access-Control-Allow-Origin`** in a CORS response header that tells which requests from other pieces of web content (and their `origin`s) have access to the current resource and, thus, can be loaded by the browser.

## Syntax

```pseudo
Access-Control-Allow-Origin: directive
```

The `directive` is set to either of the following:

| Directive | Description                                                                                                                                                                           |
| :-------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    `*`    | This is a wildcard that tells browsers to allow requests from any content `origin` to access the resource.                                                                            |
| `origin`  | A single, specific `origin` of content made of a scheme/protocol, hostname, and port (e.g., a [URL](https://www.codecademy.com/resources/docs/general/url)).                          |
|  `null`   | Sets the `origin` to `null` (however, this should be [avoided](https://w3c.github.io/webappsec-cors-for-developers/#avoid-returning-access-control-allow-origin-null) in most cases). |

## Example

The following is an example of a response header that is set to accept requests from the `origin`, "https://www.codecademy.com/learn":

```shell
Access-Control-Allow-Origin: https://www.codecademy.com/learn
```
