---
Title: '.delete()'
Description: 'Sends a DELETE request to a web server; it returns a response object.'
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

The **`.delete()`** method sends a DELETE request to a web server; it returns a response object.

## Syntax

```py
import requests

requests.delete("url", **kwargs)
```

`**kwargs` are any number of dictionary items (named arguments) that are passed in as parameters. The `.delete()` method can take in various parameters. These parameters allow a user to communicate additional information to the web server such as the content type that should be returned, the user's authentication, they can be used to include cookies in the request, set proxies, set user-agents, or set a page timeout.

## Example

The `.delete()` method sends a request to delete data from a web server. The response object it returns contains various types of data such as the webpage text, status code, and the reason for that response.

```py
import requests

response = requests.delete("https://httpbin.org/delete")

print(response.status_code)
# Output: 200

print(response.reason)
# Output: OK
```

## Codebyte Example

Common response codes for a DELETE request are `405`, `200`, `202`, and `204`. A response of code `405` means that the method is not allowed; `202` means that the action is pending; `200` means that the action has been enacted and that the response message describes the status, and `204` that the action has been enacted but that there is no further information.

```codebyte/python
import requests

response = requests.delete("https://www.google.com")

print(response.status_code)
# Output: 405

print(response.reason)
# Output: Method Not Allowed
```
