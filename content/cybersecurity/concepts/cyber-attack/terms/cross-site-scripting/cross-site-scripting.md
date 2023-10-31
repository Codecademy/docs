---
Title: 'Cross-Site Scripting (XSS)'
Description: 'Cross-site scripting is a common cyber attack where an attacker embeds malicious code on a trusted website in order to trick a user into executing it.'
Subjects:
  - 'Computer Science'
  - 'Cybersecurity'
Tags:
  - 'Cybersecurity'
  - 'Browsers'
CatalogContent:
  - 'introduction-to-cybersecurity'
  - 'path/fundamentals-of-cybersecurity'
---

**Cross-site scripting**, also known as XSS, is a type of injection attack where an attacker successfully tricks the user into executing malicious code, usually in the form of a browser side script, sent through a trusted website. XSS attacks are one of the most common cyber attacks because many websites use input from users.

## Types of XSS Attacks

There are 3 common types of cross-site scripting attacks:

1. Stored/Persistent XSS: The attacker attempts to inject malicious scripts into a web server or database. These scripts are then delivered to victims when they access specific pages on the website.
2. Reflected/Non-Persistent XSS: The attacker attempts to have the user click on a malicious link, masqueraded as a legitimate link, from the website's error message, search result, or phishing email.
3. Document Object Model (DOM) Based XSS: Involves manipulating the Document Object Model (DOM) of a web page to execute malicious scripts in the victim's browser. This can occur through various user interactions and events, not limited to the URL alone. This attack is also known as client-side XSS.

## Risks

XSS is particularly harmful because its primary target is the user, not the web browser. This attack exploits the trust that exists between the user's web browser and the web server. The malicious code is injected into the web page that's delivered from the web server to the user.

With successful XSS attacks, the attacker can:

- Hijack the victim's session cookies.
- Gain escalated privileges.
- Remotely control the web browser.
- Access the browser history.
- Gain other information stored in the victim's web browser, such as login credentials, or credit card information.

## How to Protect Against XSS

XSS can be prevented by using proper input validation and output encoding.

Input validation is used to sanitize input from users to prevent them from using HTML and other code as input.

Output encoding is used to convert all user input into a safe form. Then the input is displayed as data to the user without executing it as code in the browser. Essentially, this prevents code from being injected into the web page during delivery to the user.

As a user, you can protect yourself from XSS attacks by increasing the security for your cookie storage through your web browser settings. And you should also disable scripting languages, like JavaScript, when browsing the web.
