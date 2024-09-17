---

Title: 'locals()'
Description: 'The `locals()` function returns a dictionary with all the data necessary to run the program.'
Subjects: 
- 'Devloper tools'
- 'Computer science'
Tags:
- 'Dictionary' 
- 'Metadata' 
- 'Symbol'
Catalog-content: 
- 'learn python 3'
- 'paths/computer-science'

---

The **`locals()`** built-in function in Python returns a dictionary containing the current local symbol table, which maps variable names to their values in the current scope.

## Syntax

```py
locals()
```

## Example

```py
{'In': ['', 'locals()'],
 'Out': {},
 '_': '',
 '__': '',
 '___': '',
 '__builtin__': ,
 '__builtins__': ,
 '__name__': '__main__',
 '_dh': ['/home/repl'],
 '_i': '',
 '_i1': 'locals()',
 '_ih': ['', 'locals()'],
 '_ii': '',
 '_iii': '',
 '_oh': {},
 '_sh': ,
 'exit': ,
 'get_ipython': >,
 'quit': }
```

Attempting to edit an active variable by changing `locals()` does not work.
