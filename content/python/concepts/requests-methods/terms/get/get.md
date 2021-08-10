---
Title: "requests.get()"
Description: "Makes a get request to a web server; it returns a response object."
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

 

Method for making a "get" request to a web server; it returns a response object. 

## Syntax

```python
import requests

requests.get("url", **kwargs)
```

`**kwargs` are any number of dictionary items (named arguments) that are passed in as parameters.

## Example 1

The `.get()` method sends a request for data to a web server. The response object it returns contains various types of data such as the webpage text, status code, and the reason for that response.

```python
import requests

response = requests.get("https://codecademy.com")

print(response.status_code)
# Output: 200

print(response.reason)
# Output: OK

response = requests.get("https://codecademy.com/cat-pictures")

print(response.status_code)
# Output: 404

print(response.reason)
# Output: Not Found
```

## Example 2

The `.get()` method can also take in various parameters. These parameters allow a user to communicate additional information to the web server such as the content type that should be returned, and the user's authentication.

```python
import requests

headers = {
  "accept": "application/json",
  "authorization": "bearer token TOKEN"
}

response = requests.get("https://codecademy.com", headers=headers)
```

Many different named parameters can be passed in to a get request. For example, they can be used to include cookies in the request, set proxies, set user-agents, or set a page timeout. 
