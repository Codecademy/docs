---
Title: '.patch()'
Description: 'Sends a PATCH request to a specified URL to partially update a resource.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Modules'
  - 'Python'
CatalogContent:
- 'learn-python-3'
- 'paths/computer-science'
---

The **`.patch()`** method in the `requests` module is used to send a `PATCH` request to a specified URL, allowing for partial modifications of a resource. When only a subset of data needs to be updated, this method is particularly efficient, as `PATCH` can modify specific fields without requiring the replacement of the entire resource, unlike `PUT` from the [`.put()`](https://www.codecademy.com/resources/docs/python/requests-module/put) method, which overwrites the entire object.

## Syntax

```pseudo
requests.patch(url, data=None, json=None, **kwargs)
```

**Parameters:**

- `url`: URL to which the request is sent.
- `data`: (optional) Dictionary, list of tuples, bytes, or file-like object that contains the data to send.
- `json`: (optional) A JSON serializable Python object that will be sent as a JSON formatted string.
- `kwargs`: Additional keyword arguments that can be passed to the method (e.g. `headers`, `auth`, etc.).

**Return value:**

The method returns a `Response` object, which contains various information about the HTTP response returned by the server after processing the `PATCH` request.

## Example 1

In this example, the `.patch()` method is used to send a `PATCH` request to a REST API of a user management system in order to update a user's profile. The user's current data is modeled as a JSON object:

```json
{
  "id": 53,
  "name": "Lorem Ipsum",
  "email": "lorem.ipsum@example.com"
}
```

We just want to update the user's email address without changing the other fields:

```py
import requests

# URL of the API endpoint for the user
url = 'https://api.example.com/users/53'

# Updated user field
updated_data = {
  "email": "loremipsum@example.com"
}

# Sending the PATCH request
response = requests.patch(url, json=updated_data)

# Checking the response
if response.status_code == 200:
  updated_user = response.json()
  print("User updated successfully:", updated_user)
else:
  print("Failed to update user:", response.status_code, response.text)
```

A conditional `if-else` statement is used in this case to output a message indicating a successful data update, when the server status code is `200`, or an unsuccessful update otherwise.

For a updating multiple fields, it is sufficient to store all the attributes in the JSON object, as seen in the `updated_multi` variable, and pass it to the `patch()` method:

```py
updated_multi = {
  "email": "loremipsum@example.com",
  "telephone": "+00123456789"
}

response = requests.patch(url, json=updated_multi)
```

## Example 2

In the following example, custom headers (such as an Authorization token) are included in the `PATCH` request:

```py
import requests

url = "https://api.example.com/resource/17"

data = {
  "description": "This is an updated resource description."
}

headers = {
  "Authorization": "Bearer YOUR_ACCESS_TOKEN",
  "Content-Type": "application/json"
}

response = requests.patch(url, json=data, headers=headers)

if response.status_code == 200:
  print("Resource updated successfully:", response.json())
else:
  print("Failed to update resource, status code:", response.status_code)
```

## Codebyte Example

In this example, the `.patch()` method sends a `PATCH` request to a public test API to update a resource’s title:

```codebyte/python
import requests

# Public test API endpoint (JSONPlaceholder)
url = 'https://jsonplaceholder.typicode.com/posts/1'

# Data to update
data = {'title': 'Updated Title'}

# Sending the PATCH request
response = requests.patch(url, json=data)

print(response.status_code)  # Expect 200 if successful
print(response.json())       # Prints simulated updated resource
```
