---
# Credit goes to: http://www.impressivewebs.com/css-terms-definitions/

title: CSS Vocabulary
---

Cascading Style Sheets (CSS) are used to, as the name suggests, style elements in a website. The CSS for a website should be in its own file with a `.css` extension in order to be reused throughout the website. The most important part about writing CSS is to make as much of it reusable.

## Comments

Comments begin with `/*` and end with `*/` and have no effect with regards to how something is styled; they allow developers to write notes and explain how or why something was done. In addition to writing notes, comments can be used to wrap CSS to disable it so it has no effect on an element; for example, this can be used to enable or disable certain parts of your stylesheet.

```css
/* Give the background of the website some color */

body {
    background-color: #EFEFEF;
}

/*
.broken-code {
    content: 'I am broken';
}
*/
```

## Rule Set

A rule set is a single section of CSS which is made up of the selector, curly braces, and respective property/value pairs.

```css
.selector {
  font-family: Arial, sans-serif;
  color: #555;
  font-size: 14px;
}
```

## Declarations

A declaration is any property/value pair inside of curly brances; multiple declarations together inside of curly braces is often to referred to as a declaration block. Each declaration uses the following syntax: `property: value;`.

- **property** - what's to the left of the colon (`:`)
- **value**    - what's to the right of the color (`:`)

```css
.selector {
    color: red;      /* property: color;     value: red */
    font-size: 14px; /* property: font-size; value: 14px; */
}
```

## Selectors

The selector of a rule set defines the element the following declarations will be applied to.

### Element Type Selector

An element type selector will apply the follow declarations to every HTML element in that page. Be careful which HTML elements you use as this can lead to unintended results; for example, writing a rule set for a `div` (the most common HTML tag) would be a mistake but writing rule set for an `a` tag would be appropriate since all anchors should be treated the same with only a few exceptions.

```css
/* matches an HTML element by name */

body {
    background-color: #EFEFEF;
}
```

### Class Selector

A class selector always begins with a period (`.`) in CSS but do **not** use the periods in HTML. Classes are the most used type of selector and should be written in a manner that the rule sets can be reused throughout the entire website. Classes are used in HTML by specifying them in the `class` attribute; e.g. (`<div class="class-1 class-2"></div>`).

```
/* matches HTML element with class="profile-picture" */

.profile-picture {
    border: 1px solid #efefef;
    padding: 5px;
}
```

### ID Selector

ID selectors begin with an octothorpe (`#`). CSS is redesigned with reusability in mind, so IDs are [typically not recommended](http://oli.jp/2011/ids/) as CSS selectors. There are valid use cases where some declarations need to be applied to a very unique element that is automatically generated and is out of your control (e.g. website builders, embedded content).

```css
/* matches HTML element with id="navigation" */

#unique-element {
    display: none;
}
```

### Universal Selector

The universal selector is defined as an asterisk (`*`) and it will apply to any element in the given context, i.e. a wild card for HTML elements. Its usage is rare and is generally discouraged, unless it's absolutely necessary, due to performance reasons.

```css
/* the asterisk character is the universal selector */

*, *:before, *:after {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
}
```

### Attribute Selector

Attribute selectors use the following syntax: `selector[attribute="value"]`. Common usage for attribute selectors in CSS are to style `<input>` tags or styling elements based on `data-` attributes.

- **selector**  - can be an element, CSS, or ID selector
- **attribute** - ties directly with HTML attributes
- **value**     - the value to look for

```css
/* matches input elements with type="text" */

input[type="text"] {
  border: solid 1px #ccc;
}
```

## Pseudo-Class

Pseudo-classes use the following syntax: `:class-name` (notice the beginning colon `:`) and are **not** declared in HTML. These psuedo-classes are automatically applied to elements based on certain events such as hovering over an element, selecting an element, or focusing on an element.

```css
/* ":hover" is the pseudo-class */

a:hover {
  text-decoration: none;
}
```

## Pseudo-Elements

Pseudo-elements use the following syntax: `::pseudo-element`; notice how there are two colons instead of one. This is intentional in order to differentiate between pseudo-classes and pseudo-elements. Just like pseudo-classes, these elements are not explicitly declared in HTML. In the following example, a new transparent element (100px by 20px) will be added *before* an `.example` element.

```css
.example::before {
  content: '';
  display: block;
  width: 100px;
  height: 20px;
}
```
