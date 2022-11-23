---
Title: 'URL'
Description: 'Uniform Resource Locators (URLs) refer to where a resource can be found.'
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

A **Uniform Resource Locator (URL)** refers to where a resource can be found. This includes locations for web pages and media such as [images](https://www.codecademy.com/resources/docs/html/images) and [videos](https://www.codecademy.com/resources/docs/html/videos). URLs use protocols to perform different tasks with these resources including:

- Web browsing with [HTTP/HTTPS](https://www.codecademy.com/resources/docs/general/http)
- Transferring files with FTP/SFTP
- Sending emails with SMTP

## Syntax

```pseudo
|----------------------------URL-------------------|
|        |--------------------------URN------------|------|
scheme://domain:port/path/to/resource?query=params#fragment
|----------------------------URI--------------------------|
```

Since URLs and [URNs](https://www.codecademy.com/resources/docs/general/urn) are a subset of [URIs](https://www.codecademy.com/resources/docs/general/uri), the syntax can be similar. However, URLs use a `scheme` that describes the protocol used to find the resource. Next, a `domain` and possible `port` number are used to describe the authority behind the resource.

## Example

```shell
https://www.codecademy.com/resources/blog/what-is-web-development/
```

The example above uses the following:

- A protocol scheme (`http`) to connect to the Internet
- A subdomain (`www`) for the world-wide web
- A domain (`codecademy.com`) to a website
- A path (`/resources/blog/what-is-web-development/`), which locates the specific resource

> **Note:** URLs follow a standard format that always uses a forward slash (/) as the path separator regardless of the operating system.
