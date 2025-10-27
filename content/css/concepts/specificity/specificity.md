Title: 'Specificity'
Description: 'Specificity describes the set of rules browsers use to determine which CSS style declaration is applied when multiple rules target the same element.'
Subjects:

'Web Development'

'Web Design'
Tags:

'Specificity'

'CSS'

'Selectors'

'Cascade'
CatalogContent:

'learn-css'

'paths/front-end-engineer-career-path'

What is Specificity?

In CSS, Specificity is the algorithm used by browsers to determine which CSS declaration is the most relevant and should be applied to an element. When multiple CSS rules target the same element and apply conflicting styles, specificity calculation helps the browser decide which rule takes precedence. Think of it as a scoring system or weight for CSS selectors.

Calculating Specificity

Specificity is typically calculated by counting the occurrences of different types of selectors within a compound selector. It's often visualized as a three or four-part number (e.g., 0,1,1,2). The categories, from highest to lowest weight, are:

Inline Styles: Styles applied directly within an HTML element's style attribute (e.g., <p style="color: red;">). These almost always win. Corresponds to the highest place value (e.g., 1,0,0,0).

IDs: Selectors that target an element by its unique ID (e.g., #main-nav). Each ID contributes to the second highest place value (e.g., 0,1,0,0).

Classes, Attributes, and Pseudo-classes: This category includes:

Class selectors (e.g., .button, .alert).

Attribute selectors (e.g., [type="submit"], [href^="https"]).

Pseudo-classes (e.g., :hover, :focus, :nth-child()).
Each selector in this group contributes to the third highest place value (e.g., 0,0,1,0).

Elements and Pseudo-elements: This category includes:

Type selectors (e.g., p, div, h1).

Pseudo-elements (e.g., ::before, ::after, ::first-line).
Each selector in this group contributes to the lowest place value (e.g., 0,0,0,1).

Note: The universal selector (*), combinators (+, >, ~,       - descendant), and the negation pseudo-class (:not()) itself do not contribute to specificity (though the selectors inside :not() do).

Comparing Specificity Values

When comparing two specificity values, compare them from left to right (highest category to lowest). The first category where one selector has a higher count wins.

1,0,0,0 (Inline Style) beats 0,1,0,0 (ID)

0,1,0,0 (ID) beats 0,0,10,0 (10 Classes) - One ID is more specific than any number of classes.

0,0,1,1 (Class + Element) beats 0,0,0,11 (11 Elements) - One class is more specific than any number of elements.

Examples

Selector

Calculation (ID, Class/Attr/Pseudo, Element/Pseudo)

Specificity

h1

(0, 0, 1)

001

.menu-item

(0, 1, 0)

010

li.menu-item

(0, 1, 1)

011

#main-nav

(1, 0, 0)

100

ul#main-nav li.active

(1, 1, 2)

112

a:hover

(0, 1, 1)

011

body #content .data p

(1, 1, 3)

113

[type="text"]

(0, 1, 0)

010

<nav id="main-nav">
  <ul>
    <li class="menu-item active"><a href="#">Home</a></li>
    <li class="menu-item"><a href="#">About</a></li>
  </ul>
</nav>

<style>
  /* Specificity: 100 */
  #main-nav {
    background-color: lightgray;
  }

  /* Specificity: 010 */
  .menu-item {
    padding: 5px;
  }

  /* Specificity: 011 */
  li.menu-item {
    list-style: none;
  }

  /* Specificity: 112 */
  ul#main-nav li.active {
    font-weight: bold; /* This rule wins for the 'Home' item */
    background-color: blue; /* This overrides #main-nav background */
  }

  /* Specificity: 011 */
  a:hover {
    color: red;
  }
</style>


Special Considerations

The !important Rule

A declaration marked with !important will override any conflicting declaration from a rule with lower or equal specificity. It essentially bypasses the normal specificity calculation for that specific property.

p {
  color: blue !important; /* Wins, unless another !important rule applies */
}

#main-content p {
  color: green; /* Specificity 101, but loses to !important */
}


If multiple conflicting declarations use !important, the one with the higher specificity among them wins. Using !important should be avoided whenever possible, as it can make CSS hard to manage and debug.

Source Order

If multiple CSS rules have the exact same specificity, the rule that appears last in the stylesheet or is loaded later takes precedence.

p { color: blue; } /* Specificity: 001 */
p { color: red; }  /* Specificity: 001 - Wins because it's later */


Understanding specificity is fundamental to writing predictable and maintainable CSS. It helps you control which styles apply and resolve conflicts effectively.