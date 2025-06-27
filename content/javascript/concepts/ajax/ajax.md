---
Title: 'AJAX'
Description: 'AJAX (Asynchronous JavaScript and XML) is a technique that enable web pages to communicate with a server asynchronously in the background.'
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

**AJAX (Asynchronous JavaScript and XML)** is a useful technique that enables web pages to communicate with a server asynchronously in the background. This means a web page can update just a portion of its content without reloading the entire page.

AJAX is powered by several core technologies:

- **HTML/CSS**: For content and styling
- **JavaScript**: For scripting and logic
- **DOM (Document Object Model)**: For dynamic content manipulation
- **XMLHttpRequest or Fetch API**: For asynchronous server communication
- **JSON or XML**: For data exchange

## How Does AJAX Work?

Here’s a step-by-step breakdown of how AJAX works:

**Step 1**: The process begins with an event on the web page — such as:

- Clicking a button or link
- Typing into a search box
- Selecting an option from a dropdown
- Scrolling to a certain part of the page

This event is captured by a JavaScript [event handler](https://www.codecademy.com/resources/docs/javascript/event-handling) (like `onclick`, `onchange`, or `onsubmit`), which then initiates the AJAX request.

```js
document.getElementById('myButton').addEventListener('click', fetchData);
```

**Step 2**: Once the event is triggered, JavaScript initiates a request to the server using either:

- The `XMLHttpRequest` object (older but widely supported)
- The `fetch()` API (modern and promise-based)

This request can be a `GET`, `POST`, `PUT`, or `DELETE` request, depending on the purpose:

- `GET`: Get data from the server.
- `POST`: Create a new resource by sending data to the server.
- `PUT`: Update a resource in the server or create it if it doesn't exist.
- `DELETE`: Remove a resource from the server.

Using `XMLHttpRequest`:

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.send();
```

Using `fetch()`:

```js
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

**Step 3**: The browser sends the HTTP request asynchronously in the background, without disrupting the user interface. The user can keep on interacting with the page while this happens.

**Step 4**: On the server side (using PHP, Node.js, Python, etc.), the request is processed:

- Data may be read from a [database](https://www.codecademy.com/resources/docs/general/database)
- Business logic may be applied
- A response is generated — often in JSON format (e.g., `{ "status": "ok", "message": "Data loaded" }`)

**Step 5**: The server sends back a response, typically containing:

- Status codes (`200 OK`, `404 Not Found`, `500 Server Error`, etc.)
- Headers (e.g., `content-type`)
- Body (the actual data — JSON, XML, HTML, or plain text)

**Step 6**: Once the response is received, JavaScript handles it by:

- Parsing the response (e.g., converting JSON to a JS object)
- Checking for errors
- Updating the DOM to reflect the new data

```js
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('output').innerHTML = data.message;
  });
```

**Step 7**: The specific section of the page (not the whole page) is updated using the DOM API. This might involve:

- Inserting new elements
- Changing text content
- Populating forms
- Showing/hiding sections

This completes the AJAX cycle — from user interaction to server communication to page update — all without a page refresh.

## Example: Sending a `GET` Request Using `XMLHttpRequest`

Here is an example that sends a `GET` request using `XMLHttpRequest`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>AJAX Example</title>
  </head>
  <body>
    <h2>Get User Info</h2>
    <button onclick="loadUser()">Load Data</button>
    <div id="userInfo"></div>

    <script>
      function loadUser() {
        const xhr = new XMLHttpRequest(); // Step 1: Create a new request object
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true); // Step 2: Set up the request

        xhr.onload = function () {
          // Step 3: Define what happens when the response is received
          if (xhr.status === 200) {
            // Step 4: Check if the request is successful
            const user = JSON.parse(xhr.responseText); // Step 5: Parse JSON response
            document.getElementById(
              'userInfo'
            ).innerHTML = `<p>Name: ${user.name}</p><p>Email: ${user.email}</p>`; // Step 6: Update the DOM
          }
        };

        xhr.send(); // Step 7: Send the request
      }
    </script>
  </body>
</html>
```

## Frequently Asked Questions

### 1. What is the difference between `XMLHttpRequest` and `fetch()`?

- `XMLHttpRequest` is the older way of making AJAX requests.
- `fetch()` is a newer, promise-based API that simplifies the code and is more readable and modern.

### 2. What kind of data can be exchanged with AJAX?

AJAX can send and receive any type of data, but commonly it uses JSON, XML, HTML, or plain text.

### 3. Do all browsers support AJAX?

Yes, all modern browsers support AJAX. However, older browsers may require fallbacks or polyfills for full compatibility.

### 4. Does AJAX work if JavaScript is disabled in the browser?

No. Since AJAX relies on JavaScript, it will not function if JavaScript is disabled in the user's browser.

### 5. Is AJAX secure?

AJAX is no more or less secure than other web technologies. Security depends on how you implement server-side logic, handle user input, and protect endpoints from attacks like XSS, CSRF, or injection.
