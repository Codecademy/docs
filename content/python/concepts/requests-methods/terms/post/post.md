---
Title: 'requests.post()'
Description: 'Makes a post request to a web server; it returns a response object.'
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

Python's `requests` module comes with a method for making a "post" request to a web server; it returns a response object.

## Syntax

```python
import requests

requests.post("url", **kwargs)
```

`**kwargs` are any number of dictionary items (named arguments) that are passed in as parameters.

## Example 1

The `.post()` method can take in various parameters. These parameters allow a user to communicate additional information to the web server, such as data or json, to send in the request body in order to create or update a resource.

```python
import requests

data = {
  "my_key":"my_value"
}

response = requests.post("https://codecademy.com", data=data)
```

## Example 2

The response object returned by the `.post` method contains various types of data, such as the webpage text, status code, and the reason for that response.

```python
import requests

data = {
  "my_key":"my_value"
}

response = requests.post("https://codecademy.com")

print(response.status_code)
# Output: 200

print(response.reason)
# Output: OK
```

Many different named parameters can be passed in to a post request. For example, they can be used to include cookies in the request, set proxies, set headers, or set a page timeout.
