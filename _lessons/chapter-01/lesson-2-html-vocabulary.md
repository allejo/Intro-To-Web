---
title: HTML Vocabulary
---

Hyper Text Markup Language (HTML) defines the structure of a website and is XML based.

## Angle Bracket

Angle brackets consists of an opening element (`<`) and a closing element (`>`).

## Tag

A tag is an HTML keyword surrounded by angle brackets.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>

    </body>
</html>
```

## Attribute

HTML tags use attributes to declare special values or store data. Attributes belong inside the angle brackets such as the `href` attribute inside of an anchor tag and use the following syntax: `attribute="value"`; it is convention to ensure there are **no** spaces between the equal sign and to use quotation marks. Single quotes may be used but typically are never used.

A tag with multiple attributes have them split with a single space or a new line (if the tag is too long). HTML is not sensitive to whitespace so take advantage of this to ensure your code is easy to read.

```html
<a href="#" title="I'm a title">Click me!</a>
```