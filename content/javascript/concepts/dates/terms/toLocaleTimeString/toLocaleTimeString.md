---
Title: '.toLocaleTimeString()'
Description: 'Returns a modified string from a given Date object, usually for events. It is translated to a specific language format according to an event locale and other options.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Date'
  - 'Methods'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The `.toLocaleTimeString()` date method returns a modified string of a given [`Date` object](https://www.codecademy.com/resources/docs/javascript/dates), usually for events. It is translated to a specific language according to an event's `locale` and other `options`.

## Syntax

```js
const myEventDate = new Date('December 31, 2021 15:00:00');

const locale = 'en-US';

const options = {
	hour: 'numeric',
              minute: 'numeric'
    	second: 'numeric',
};

myEventDate.toLocaleTimeString(locale, options);
```

## Example Without Parameters

When used without any parameters, `.toLocaleTimeString()` returns a string with the `hour`, `minute`, and `second` options defaulted to `numeric`. How they're arranged and formatted depends on the default `locale` in which the method was used.

In the example below, `.toLocaleTimeString()` is being used in the `en-US` locale (more specifically, in the `America/Los_Angeles` timezone).

```js
const date = new Date(2021, 12, 31 2021 15:00:00);

console.log(date.toLocaleTimeString());
// Output: 15:00:00
```

## Format Based on Language/Region

Dates with a specific language format can be returned by passing a country or region's short-code (string) as the `locale` parameter, as shown in the example below:

```js
const date = new Date(2021, 11, 31 15:00:00);

// US English - hour:min:seconds
console.log(date.toLocaleTimeString('en-US'));

// Korean - desplying PM in Korean language followed by time
console.log(date.toLocaleTimeString('ko-KR'));
```

The output will be:

```shell
03:00:00 PM
오후 3:00:00```

## Format with Options

The `options` parameter can be used to provide limit  formatting to the returned time string:

```js
const birthtime = new Date(2022, 3, 11 15:00);

options = {
	hour: 'numeric',
              minute: 'numeric'
};

console.log(birthtime.toLocaleTimeString('en-US', options));
```

The output will be:

```shell
03:00 PM
```

## Codebyte Example

In the following example the variables `region` and `options` can be modified, to print the Date in a custom format:

```codebyte/javascript
const currentTime = new Date(Date.now());

const region = 'de-DE';
const options = {
 	 hour: 'numeric',
              minute: 'numeric'
    	second: 'numeric',
};

console.log(currentTime.toLocaleTimeString(region, options));
```
