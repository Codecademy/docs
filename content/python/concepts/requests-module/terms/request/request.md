---
Title: '.request()'
Description: 'Sends seven main kinds of request to a web server: get, options, head, post, put, patch, and delete; it can also handle custom HTTP verbs if needed, and returns a response object.'
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

The **`.request()`** method sends seven main kinds of request to a web server: `GET`, `OPTIONS`, `HEAD`, `POST`, `PUT`, `PATCH`, and `DELETE`; it can also handle custom HTTP verbs if needed, and returns a response object.

## Syntax

```pseudo
import requests

requests.request("method", "url", **kwargs)
```

`**kwargs` are any number of [dictionary](https://www.codecademy.com/resources/docs/python/dictionaries) items (named arguments) that are passed in as parameters. Many different named parameters can be passed into a request. For example, they can be used to include cookies in the request, set proxies, set user-agents, or set a page timeout.

The `requests` module comes with some commonly used convenience methods such as [`.get()`](https://www.codecademy.com/resources/docs/python/requests-module/get), [`.post()`](https://www.codecademy.com/resources/docs/python/requests-module/post), and etc. Using one of these convenience methods has the same effect as calling the `.request()` method directly.

## Example

The `request()` method returns a response object which contains various types of data such as the webpage text, status code, and the reason for that response.

```py
import requests

response = requests.request("POST", "https://codecademy.com")

print(f"{response.status_code}: {response.reason}")
```

The output will look like this:

```shell
200: OK
```

## Codebyte Example

The `.request()` method can also take in various parameters. These parameters allow a user to send additional information to the web server such as the content type that should be returned, and the user's authentication.

```codebyte/python
import requests

headers = {
  "accept": "application/json",
  "authorization": "bearer token TOKEN"
}

response = requests.request("HEAD", "https://codecademy.com", headers=headers)

print(response.headers["Content-Type"])
```
