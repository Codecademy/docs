---
Title: "requests.delete()"
Description: "Makes a delete request to a web server; it returns a response object."
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

 

A method for making a "delete" request to a web server; it returns a response object. 

## Syntax

```python
import requests

requests.delete("url", **kwargs)
```

`**kwargs` are any number of dictionary items (named arguments) that are passed in as parameters.

## Example 1

The `.delete()` method sends a request to delete data from a web server. The response object it returns contains various types of data such as the webpage text, status code, and the reason for that response.

```python
import requests

response = requests.delete("https://httpbin.org/delete")

print(response.status_code)
# Output: 200

print(response.reason)
# Output: OK
```

## Example 2

Common response codes for a delete request are `405`, `200`, `202`, and `204`. A response of code `405` means that the method is not allowed; `202` means that the action is pending; `200` means that the action has been enacted and that  the response message describes the status, and `204` that the action has been enacted but that there is no further information.

```python
import requests

response = requests.delete("https://www.google.com")

print(response.status_code)
# Output: 405

print(response.reason)
# Output: Method Not Allowed
```


## Example 3

The `.delete()` method can also take in various parameters. These parameters allow a user to communicate additional information to the web server such as the content type that should be returned, and the user's authentication.

```python
import requests

headers = {
  "accept": "application/json",
  "authorization": "bearer token TOKEN"
}

response = requests.delete("https://codecademy.com", headers=headers)
```

Many different named parameters can be passed in to a get request. For example, they can be used to include cookies in the request, set proxies, set user-agents, or set a page timeout. 
