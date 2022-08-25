---
Title: 'requests.request()'
Description: 'Makes seven main kinds of request to a web server: get, options, head, post, put, patch, and delete; it can also handle custom HTTP verbs if needed, and returns a response object.'
Subjects:
  - 'Data Science'
Tags:
  - 'Methods'
  - 'APIs'
  - 'HTTP'
  - 'Queries'
  - 'Requests'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The `requests` module for Python includes a `.request()` method for making seven main kinds of request to a web server: `get`, `options`, `head`, `post`, `put`, `patch`, and `delete`; it can also handle custom HTTP verbs if needed, and returns a response object.

## Syntax

```python
import requests

requests.request("method", "url", **kwargs)
```

`**kwargs` are any number of dictionary items (named arguments) that are passed in as parameters.

## Example 1

The `requests` module comes with some commonly used convenience methods such as `.get()`, `.post()`, and etc. Using one of these convenience methods has the same effect as calling the `.request()` method directly.

```python
import requests

response_1 = requests.get("https://httpbin.org/get")
response_2 = requests.request("GET", "https://httpbin.org/get")

print(response_1)
# Output: <Response [200]>

print(response_2)
# Output: <Response [200]>
```

## Example 2

The `request()` method returns a response object which contains various types of data such as the webpage text, status code, and the reason for that response.

```python
import requests

response = requests.request("POST", "https://codecademy.com")

print(response.status_code)
# Output: 200

print(response.reason)
# Output: OK
```

## Example 3

The `.request()` method can also take in various parameters. These parameters allow a user to communicate additional information to the web server such as the content type that should be returned, and the user's authentication.

```python
import requests

headers = {
  "accept": "application/json",
  "authorization": "bearer token TOKEN"
}

response = requests.request("HEAD", "https://codecademy.com", headers=headers)

print(response.headers["Content-Type"])
# Output: application/json; charset=utf-8
```

Many different named parameters can be passed in to a request. For example, they can be used to include cookies in the request, set proxies, set user-agents, or set a page timeout.
