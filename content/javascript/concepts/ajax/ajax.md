---
Title: 'AJAX'
Description: 'AJAX is a technique that allows developers to fetch data without waiting for the page to finish reloading.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Events'
  - 'Promise'
  - 'Requests'
  - 'Servers'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

<link rel="canonical" href="https://www.codecademy.com/resources/blog/what-is-ajax/" />

**Asynchronous JavaScript and XML (AJAX)** is a programming technique that allows web developers to fetch server data without having to wait for the page to reload first.

## Syntax

AJAX requests can be used in all modern web browsers and it utilizes the built-in `XMLHttpRequest` object:

```pseudo
const request = new XMLHttpRequest();
```

## Example

Listeners can be attached to the request to execute when certain [events](https://www.codecademy.com/resources/docs/javascript/events) take place:

```js
const request = new XMLHttpRequest();

function requestListener() {
  console.log(this.responseText());
}

request.addEventListener('load', requestListener);
```

The next step is to use this object to open a request to a server using the `.open()` method, which accepts two parameters. The first is the [HTTP](https://www.codecademy.com/resources/docs/general/http) request method to use like `GET`, `POST`, and `DELETE`. The second is the resource being fetched, usually a [URL](https://www.codecademy.com/resources/docs/general/url). Then, the request can be sent with the `.send()` method:

```js
request.open('GET', 'http://www.example.org/example.txt');

// For just retrieving data
request.send();

// For updating data (POST, PUTS, etc.)
request.send(OUR_DATA_VARIABLE);
```

## History

During the 1990s, when the Web was still in its infancy, most websites returned complete web pages when first loaded on the browser. To reload any data, users had to reload the entire page. This proved to be inefficient and not good for the user experience. It also increased the load on servers and the bandwidth needed to serve data, causing longer loadtimes.

Between 1996 and 2005, Microsoft and Google began introducing asynchronous data fetches in their products:

- The [`<iframe>`](https://www.codecademy.com/resources/docs/html/iframes) element was introduced to Internet Explorer to allow data to be fetched asynchronously.
- Async data fetches were soon added to Gmail, Google Maps, and Google Suggest.

This technique was eventually labeled "AJAX" in [a 2005 article](https://immagic.com/eLibrary/ARCHIVES/GENERAL/ADTVPATH/A050218G.pdf) by Jesse James Garrett, formerly of Google. It quickly became the most popular way to build web applications.
