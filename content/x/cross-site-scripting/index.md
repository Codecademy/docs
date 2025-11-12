
cat > content/x/cross-site-scripting/index.md



---
Title: Cross-Site Scripting (XSS)
Short Description: A type of web security vulnerability where attackers inject malicious scripts into websites viewed by other users.
---

## Definition
Cross-Site Scripting (XSS) is a security vulnerability that lets attackers inject client-side scripts into web pages viewed by other users. These scripts run in the victims’ browsers and can steal cookies, tokens or manipulate page content.

## Types of XSS
### Stored XSS
Malicious scripts are permanently stored on the server (for example, in a database) and later served to users.

### Reflected XSS
Scripts are injected via a URL or request and reflected back by the server in the response (e.g., in search results).

### DOM-based XSS
Vulnerabilities exist entirely in client-side JavaScript: the page’s DOM is modified with attacker data without proper sanitisation.

## Minimal vulnerable example
```html
<!-- vulnerable.html -->
<input id="name" />
<p id="output"></p>

<script>
  const input = document.getElementById('name');
  const output = document.getElementById('output');

  input.addEventListener('input', () => {
    // This uses innerHTML and is vulnerable to XSS
    output.innerHTML = input.value;
  });
</script>

## Example safe fix (same example)
```html
<script>
  const input = document.getElementById('name');
  const output = document.getElementById('output');

  input.addEventListener('input', () => {
    // Safer: insert untrusted text as textContent
    output.textContent = input.value;
  });
</script>


After pasting that, **press `Ctrl + D`** in Git Bash.  

✅ That will save the file as `index.md` in the folder `content/x/cross-site-scripting`.  

Once saved, we can **stage, commit, and push** it to GitHub.  

Do you want me to guide you through that next?
[