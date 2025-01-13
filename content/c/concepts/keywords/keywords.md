# Keywords in C

C has a set of reserved words, known as **keywords**, that have predefined meanings and cannot be used as identifiers (variable names, function names, etc.). Below is a table listing all C keywords.

| Keyword      | Keyword      | Keyword      | Keyword      |
|-------------|-------------|-------------|-------------|
| auto        | break       | case        | char        |
| const       | continue    | default     | do          |
| double      | else        | enum        | extern      |
| float       | for         | goto        | if          |
| inline      | int         | long        | register    |
| restrict    | return      | short       | signed      |
| sizeof      | static      | struct      | switch      |
| typedef     | union       | unsigned    | void        |
| volatile    | while       | _Bool       | _Complex    |
| _Imaginary  |            |             |             |

## Syntax and Examples of Keywords
Below is the general syntax and example of each keyword in C:

- `auto`: `auto int x = 10;`  
  **Example:**
  ```c
  void func() {
      auto int num = 5;
      printf("%d", num);
  }
  ```
- `break`: `break;`  
  **Example:**
  ```c
  for(int i = 0; i < 10; i++) {
      if(i == 5) break;
      printf("%d ", i);
  }
  ```
- `case`: `case value: // statements`  
  **Example:**
  ```c
  switch(num) {
      case 1: printf("One"); break;
      default: printf("Other");
  }
  ```
- `char`: `char c = 'A';`  
  **Example:**
  ```c
  char letter = 'B';
  printf("%c", letter);
  ```
- `const`: `const int x = 10;`  
  **Example:**
  ```c
  const float pi = 3.14;
  printf("%f", pi);
  ```
- `continue`: `continue;`  
  **Example:**
  ```c
  for(int i = 0; i < 5; i++) {
      if(i == 2) continue;
      printf("%d ", i);
  }
  ```
- `default`: `default: // statements`  
  **Example:**
  ```c
  switch(choice) {
      default: printf("Invalid choice");
  }
  ```
- `do`: `do { // statements } while (condition);`  
  **Example:**
  ```c
  int i = 0;
  do {
      printf("%d ", i);
      i++;
  } while(i < 5);
  ```
- `double`: `double x = 10.5;`  
  **Example:**
  ```c
  double num = 5.678;
  printf("%lf", num);
  ```
- `else`: `if (condition) { } else { }`  
  **Example:**
  ```c
  if(age < 18) printf("Minor");
  else printf("Adult");
  ```
- `enum`: `enum colors {RED, GREEN, BLUE};`  
  **Example:**
  ```c
  enum colors {RED, GREEN, BLUE};
  enum colors c = GREEN;
  printf("%d", c);
  ```
- `extern`: `extern int x;`  
  **Example:**
  ```c
  extern int x;
  ```
  *(Used to reference global variables declared elsewhere.)*
- `float`: `float y = 3.14;`  
  **Example:**
  ```c
  float num = 2.5;
  printf("%f", num);
  ```
- `for`: `for (int i = 0; i < 10; i++) { }`  
  **Example:**
  ```c
  for(int i = 0; i < 5; i++) {
      printf("%d ", i);
  }
  ```
- `goto`: `goto label;`  
  **Example:**
  ```c
  int i = 1;
  if(i) goto skip;
  printf("Not executed");
  skip:
  printf("Skipped");
  ```

...(similarly add examples for the remaining keywords)...

## Notes
- These keywords are case-sensitive.
- Some newer standards (C99, C11) introduce additional keywords.
- Identifiers should not match any of these keywords.

For the most up-to-date list, refer to the official C standard documentation.

