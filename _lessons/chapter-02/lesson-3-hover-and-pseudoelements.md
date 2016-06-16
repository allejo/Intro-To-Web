---
title: Lesson 3
---

`:hover` is a pseudo-class. As you learned in the "CSS Vocabulary" chapter, a pseudo-class is automatically applied to elements based on certain events. In this case, the event is hovering over an element. 

In this lesson, you will create a row of elements and add the `:hover` pseudo-class to the elements to make a description of the element appear underneath it.

The basic syntax of the `:hover` pseudo-class is:
```css
:hover {
    css declarations;
}
```
For example:
{% capture hoverExample %}

<!DOCTYPE html>
<html>
    <head>
        <style>
            p:hover { 
                background-color: yellow; 
            }
        </style>
    </head>
    
    <body>
        <p> Hover over me and see what happens! </p>
    </body>
</html>

{% endcapture %}

{% include sandbox.html lang="html" code=hoverExample frameless=1 %}

