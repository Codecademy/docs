---
Title: 'Static Site Generators'
Description: 'A static site generator (SSG) is a tool used to render webpages on a server at build time, prior to when a client makes a request.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Static Site'
  - 'Server-Side Rendering'
CatalogContent:
  - 'paths/computer-science'
  - 'paths/full-stack-engineer-career-path'
---

A **static site generator (SSG)** is a tool used to render webpages on a [server](https://www.codecademy.com/resources/docs/general/server) at build time, before a client makes a request.

## Evolution of Webpage Rendering

In the early days of the web, websites were served as static pages in the form of multiple [HTML](https://www.codecademy.com/resources/docs/html) files. A client would make a request to a server and in return, receive a set of unchanging (i.e., static) resources. Any visible changes to the site would need to be made by manually editing the HTML hosted on the server.

However, as the web evolved, websites were no longer limited to providing static content. [Server-side rendering (SSR)](https://www.codecademy.com/resources/docs/general/server-side-rendering) was adopted and allowed for content to be “customized” dynamically. Content management systems (CMSs), such as WordPress and Drupal, employ an SSR approach and were introduced in response to the growing amount of content that needed to be maintained.

## How SSGs Differ from CMSs

Static site generation is a concept that leverages the benefits of static pages and CMSs. Like CMSs, the content (data) and the structure (templates) are decoupled, but instead of the server generating the page at the time of a request, the page is pre-rendered at build time. The page can now be served as a static file in response to a client request, eliminating the time associated with generating the page on demand.

## Examples of SSGs

Some commonly used SSGs include:

- [Jekyll](https://jekyllrb.com/)
- [Hugo](https://gohugo.io/)
- [Gatsby](https://www.gatsbyjs.com/)
- [Next.js](https://www.codecademy.com/resources/docs/open-source/next-js).

A comprehensive list of SSGs available in different languages is available at [staticgen.com](http://staticgen.com).

## Benefits of SSGs

- **SEO-friendliness**: Since pages are built ahead of time, they are easier for search engine web crawlers to parse in contrast to websites that require client-side rendering (e.g., single-page applications).
- **CDN-friendliness**: Pre-built pages can be served from a [content delivery network (CDN)](https://www.codecademy.com/resources/docs/general/cdn) close to the end user since there’s no need to execute server logic or obtain data from a [database](https://www.codecademy.com/resources/docs/general/database), making the page quickly accessible.
- **Security**: It’s much more challenging for bad actors to inject malicious code since the served pages are static and don’t require processing at the time of a request.
- **Scalability**: Since server-side logic is performed ahead of time, an increase in the number of concurrent users has less impact on the server load compared to SSR performed at request time. This makes it easier to scale to a large number of users, especially if using a CDN.
