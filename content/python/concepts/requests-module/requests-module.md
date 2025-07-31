---
Title: 'Requests Module'
Description: 'HTTP library for Python that makes sending HTTP requests straightforward and human-friendly.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'APIs'
  - 'HTTP'
  - 'Libraries'
  - 'Requests'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`requests`** module in Python is an HTTP library that makes sending [HTTP](https://www.codecademy.com/resources/docs/general/http) requests straightforward and human-friendly. It abstracts the complexities of making HTTP requests behind a simple [API](https://www.codecademy.com/resources/docs/general/api), allowing developers to send HTTP/1.1 requests without manually adding query strings to URLs or form-encoding POST data.

## Installing `requests`

To install the requests module, use [`pip`](https://www.codecademy.com/resources/docs/python/pip):

```pseudo
pip install requests
```

## Syntax

```pseudo
requests.get(url, params={key: value}, **kwargs)
```

**Parameters:**

- `url`: The URL to send the request to
- `params` (Optional): Dictionary containing query parameters to append to the URL
- `**kwargs` (Optional): Additional optional arguments such as headers, cookies, authentication, timeout, and other request configuration options

**Return value:**

Returns a `Response` object containing the server's response to the HTTP request, including status code, headers, content, and other response metadata.

## Common Methods in the `request` Module

The requests module provides several HTTP methods:

- **GET** ([`get()`](https://www.codecademy.com/resources/docs/python/requests-module/get)): Retrieve data from a server
- **POST** ([`post()`](https://www.codecademy.com/resources/docs/python/requests-module/post)): Send data to a server to create/update a resource
- **PUT** ([`put()`](https://www.codecademy.com/resources/docs/python/requests-module/put)): Update existing data on a server
- **DELETE** ([`delete()`](https://www.codecademy.com/resources/docs/python/requests-module/delete)): Remove data from a server
- **PATCH** (`patch()`): Apply partial modifications to a resource
- **HEAD** ([`head()`](https://www.codecademy.com/resources/docs/python/requests-module/head)): Retrieve headers only (no body content)

## Example 1: Basic GET Request Using Python's `requests` Module

This example demonstrates how to make a simple GET request and access the response:

```py
import requests

# Make a GET request to a web API
response = requests.get('https://jsonplaceholder.typicode.com/posts/1')

# Print the status code and response content
print(f"Status Code: {response.status_code}")
print(f"Content: {response.json()}")
```

The output of the above code will be:

```shell
Status Code: 200
Content: {'userId': 1, 'id': 1, 'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'}
```

The above code sends a GET request to a JSON placeholder API and prints the HTTP status code and the JSON response content. The `requests.get()` method returns a Response object containing all the response information.

## Example 2: Using `requests` Module in Python to POST Request with Data

This example shows how to send data to a server using a POST request with JSON payload:

```py
import requests

# Data to send in the request body
user_data = {
  'name': 'John Doe',
  'email': 'john.doe@example.com',
  'age': 30
}

# Make a POST request with JSON data
response = requests.post(
  'https://jsonplaceholder.typicode.com/users',
  json=user_data
)

# Check if the request was successful
if response.status_code == 201:
  print("User created successfully!")
  print(f"Response: {response.json()}")
else:
  print(f"Error: {response.status_code}")
```

The output of the above example will be:

```shell
User created successfully!
Response: {'name': 'John Doe', 'email': 'john.doe@example.com', 'age': 30, 'id': 11}
```

This example creates a new user by sending a POST request with JSON data. The `json` parameter automatically serializes the Python dictionary to JSON and sets the appropriate Content-Type header.

## Example 3: Handling API Authentication With the `requests` Module

This example demonstrates how to make authenticated requests using API keys or basic authentication:

```py
import requests
from requests.auth import HTTPBasicAuth

# Example 1: API Key authentication
api_key = 'your-api-key-here'
headers = {
  'Authorization': f'Bearer {api_key}',
  'Accept': 'application/json'
}

response = requests.get(
  'https://api.github.com/user',
  headers=headers
)

# Example 2: Basic authentication
response_basic = requests.get(
  'https://httpbin.org/basic-auth/user/pass',
  auth=HTTPBasicAuth('user', 'pass')
)

# Check responses
if response.status_code == 200:
  print("API Key authentication successful")
  print(f"User data: {response.json()}")

if response_basic.status_code == 200:
  print("Basic authentication successful")
  print(f"Response: {response_basic.json()}")
```

The output of the above code will be:

```shell
Basic authentication successful
Response: {'authenticated': True, 'user': 'user'}
```

This example shows two common authentication methods: API key authentication using headers and HTTP Basic authentication using the `auth` parameter. Both approaches are commonly used when working with protected APIs.

## Frequently Asked Questions

### 1. What is the difference between `data` and `json` parameters in requests?

The `data` parameter sends form-encoded data, while `json` automatically serializes Python objects to JSON format and sets the Content-Type header to application/json.

### 2. How do I handle timeouts in requests?

Use the `timeout` parameter: `requests.get(url, timeout=10)` to set a 10-second timeout.

### 3. How can I disable SSL certificate verification?

Set `verify=False` in your request: `requests.get(url, verify=False)`. However, this is not recommended for production.
