---
Title: '.toLocaleDateString()'
Description: ' method returns a string with a language sensitive representation of the date portion of this date.'
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

# **toLocaleDateString()**

 This method returns a string with a language sensitive representation of the date portion of this date. The new locales and options arguments let applications specify the language whose formatting conventions should be used and allow to customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.

# **Syntax**
```
toLocaleDateString()
toLocaleDateString(locales)
toLocaleDateString(locales, options)
```
The locales and options arguments customize the behavior of the function and let applications specify the language whose formatting conventions should be used. In implementations, which ignore the locales and options arguments, the locale used and the form of the string returned are entirely implementation dependent.




# **Example**

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned.

 ```

 var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() without arguments depends on the implementation,

// the default locale, and the default time zone
console.log(date.toLocaleDateString());

// → "12/11/2012" if run in en-US locale with time zone America/Los_Angeles

 ```

# **Some more Examples of toLocaleDateString()**
```
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses month-day-year order
console.log(date.toLocaleDateString('en-US'));
// → "12/19/2012"

// British English uses day-month-year order
console.log(date.toLocaleDateString('en-GB'));
// → "20/12/2012"

// Korean uses year-month-day order
console.log(date.toLocaleDateString('ko-KR'));
// → "2012. 12. 20."

// Event for Persian, It's hard to manually convert date to Solar Hijri
console.log(date.toLocaleDateString('fa-IR'));
// → "۱۳۹۱/۹/۳۰"

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(date.toLocaleDateString('ar-EG'));
// → "٢٠‏/١٢‏/٢٠١٢"

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
console.log(date.toLocaleDateString('ja-JP-u-ca-japanese'));
// → "24/12/20"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(date.toLocaleDateString(['ban', 'id']));
// → "20/12/2012"
```