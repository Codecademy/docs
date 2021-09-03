---
Title: 'requests.head()'
Description: 'Makes a head request to a web server; it returns a response object.'
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

The `requests` module for Python includes a method for making a "head" request to a web server; it returns a response object.

## Syntax

```python
import requests

requests.head("url", **kwargs)
```

`**kwargs` are any number of dictionary items (named arguments) that are passed in as parameters.

## Example 1

The `.head()` method sends a request for data to a web server. The response object it returns contains the response headers (information about the web server's content) without including the content itself. Therefore, `.head()` is similar to `.get()`, but is usually faster.

For example, `.head()` can check to make sure a website is responding, and see what content type is returned, without actually downloading the content:

```python
import requests

response = requests.head("https://www.codecademy.com")

print(response.status_code)
# Output: 200

print(response.headers["Content-Type"])
# Output: text/html; charset=utf-8

print(response.text)
# Output: ''
```

## Example 2

The `.head()` method can also take in various parameters. These parameters allow a user to communicate additional information to the web server such as the content type that should be returned, and the user's authentication.

```python
import requests

headers = {
  "accept": "application/json",
}

response = requests.head("https://www.codecademy.com", headers=headers)

print(response.headers["Content-Type"])
# Output: application/json; charset=utf-8
```

Many different named parameters can be passed in to a head request. For example, they can be used to include cookies in the request, set proxies, set user-agents, or set a page timeout.
