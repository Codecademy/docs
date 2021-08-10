---
Title: "requests.put()"
Description: "Makes a put request to a web server; it returns a response object."
Subjects:
  - "Data Science"
Tags: 
  - "Methods"
  - "APIs"
  - "HTTP"
  - "Queries"
  - "Requests"
CatalogContent: 
  - "learn-python-3"
  - "paths/analyze-data-with-python"
---

A Python `requests` method for making a "put" request to a web server; it returns a response object.

## Syntax

```python
import requests

requests.put("url", **kwargs)
```

`**kwargs` are any number of dictionary items (named arguments) that are passed in as parameters.


Although similar to a "post" request, "put" requests are **idempotent**, meaning multiple requests have the same result. Multiple "put" requests will overwrite the same resource, and multiple "post" requests will create a new resource each time. Therfore, "put" is generally used for update operations, and "post" for create operations.

## Example 1

The `.put()` method can take in various parameters. These parameters allow a user to communicate additional information to the web server, such as data or json to send in the request body in order to create or update a resource. 

```python
import requests

json = {
  "my_key":"Hello, World!"  
}

response = requests.put("https://httpbin.org/put", json=json)
```

## Example 2

The response object returned by the `.put` method contains various types of data, such as the webpage text, JSON (if returned), status code, and the reason for that response.

```python
import requests

json = {
  "my_key":"Hello, World!"  
}

response = requests.put("https://httpbin.org/put", json=json)

print(response.status_code)
# Output: 200

print(response.json()['json']['my_key'])
# Output: "Hello, World!"
```

Many different named parameters can be passed in to a put request. For example, they can be used to include cookies in the request, set proxies, set headers or set a page timeout.

