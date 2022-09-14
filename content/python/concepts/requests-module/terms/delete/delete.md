---
Title: '.delete()'
Description: 'Sends a DELETE request to a web server and returns a response object.'
Subjects:
  - 'Web Development'
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

The **`.delete()`** method sends a `DELETE` request to a web server; it returns a response object.

## Syntax

```pseudo
import requests

requests.delete("url", **kwargs)
```

`**kwargs` are any number of [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) items (named arguments) that are passed in as parameters. The `.delete()` method can take in various parameters that allow a user to communicate additional information to the web server (the content type that should be returned, the user's authentication, etc.). They can also be used to include cookies in the request, set proxies, set user-agents, or set a page timeout.

## Example

The `.delete()` method sends a request to delete data from a web server. The response object it returns contains various types of data such as the webpage text, status code, and the reason for that response.

```py
import requests

response = requests.delete("https://httpbin.org/delete")

print(f"{response.status_code}: {response.reason}")
```

The following output will look like this:

```shell
200: OK
```

## Codebyte Example

Common response codes for a `DELETE` request including the following:

- `405`: The method is not allowed.
- `200`: The action has been enacted and a response message describes the status.
- `202`: The action is pending.
- `204`: The action has been enacted but there is no further information beyond that.

```codebyte/python
import requests

response = requests.delete("https://www.google.com")

print(f"{response.status_code}: {response.reason}")
```
