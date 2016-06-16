---
title: Lesson 3
---

## Hover

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

Now, let's do something a little more advanced. We'll create a row of three blocks that will display a dropdown box with the name of the color of the block when you hover over it.

{% capture hoverSetup %}
<style>
    .row { width: 300px; }
    .row:after { content: ""; display: table; clear: both; } /* Clearfix hack */

    /* Height classes */
    .col-h-1 { height: 50px; }
    .col-h-2 { height: 100px; }
    .col-h-3 { height: 150px; }

    /* Width classes */
    .col-w-1, .col-w-2,
    .col-w-3, .col-w-4 {
        float: left;
        position: relative;
    }
    .col-w-1 { width: 50px; }
    .col-w-2 { width: 100px; }
    .col-w-3 { width: 150px; }
    .col-w-4 { width: 200px; }

    /* Color classes */
    .color-red    { background-color: #DB4A4A; }
    .color-purple { background-color: #DA4DC1; }
    .color-green  { background-color: #6DDB4B; }
    .color-yellow { background-color: #DADC4A; }
    .color-blue   { background-color: #4A6CD9; }

    /* Content of the dropdown */
    .dropdown-content {
        display: none;
        position: absolute;
        top: 100px;
        color: white;
        width: 100%;
    }

    /* Show the dropdown when hovered over */
    div:hover .dropdown-content {
        background-color: black;
        display: block;
    }
</style>
{% endcapture %}

### Creating the row of colored blocks

We'll take what you learned from the previous lesson and create a row of three different colored blocks. I challenge you to do this on your own. If you need a refresher, refer back to the previous chapter. The HTML code is as follows:

{% capture coloredBlocks %}
<div class="col-w-3 col-h-2 color-red"></div>
<div class="col-w-3 col-h-2 color-green"></div>
<div class="col-w-3 col-h-2 color-yellow"></div>
{% endcapture %}

{% include sandbox.html lang="html" code=coloredBlocks setup=hoverSetup frameless=1 %}

### Adding the dropdown

This is where things ramp up. In the style sheet, you can see we added the declaration of `.dropdown-content`:
```
.dropdown-content {
        display: none;
        position: absolute;
        top: 100px;
        width: 100%;
        color: white;
    }
```

- The `display: none` property ensures that the content will be hidden at first.
- The `position` and `top` properties ensure that the content will appear 100 pixels from the top of the block (aka it will appear right below the block)
- The `width: 100%` property ensures that the dropdown block will only be as wide as the block itself

You can see we also added a declaration for `:hover`:
```
div:hover .dropdown-content {
        background-color: black;
        display: block;
    }
```

Those lines of code will display the dropdown block when the original block is hovered over. 

{% capture dropdownExample %}
<div class="col-w-3 col-h-2 color-red">
    <div class="dropdown-content">Red</div>
 </div>
        
<div class="col-w-3 col-h-2 color-green">
    <div class="dropdown-content">Green</div>
</div>
        
<div class="col-w-3 col-h-2 color-yellow">
    <div class="dropdown-content">Yellow</div>
</div>
{% endcapture %}

{% include sandbox.html lang="html" code=dropdownExample setup=hoverSetup frameless=1 %}

## Pseudo-Elements

Now we will go over pseudo-elements. A pseudo-element is used to style specific parts of an element. An example of a pseudo-element would be to style the first letter in each specified element in the code.

The syntax for a general pseudo-element is as follows:

```css
selector::pseudo-element {
    property:value;
    }
```
The two pseudo-elements that we are going to go over today are `::before` and `::after`.

As the names suggest, these pseudo-elements are pretty straightforward. They just insert some content before or after specified elements in the code. An example of the `::before` pseudo-element is as follows, where we insert some text content before the h1 element:

```css
h1::before {
    content: "Using the before pseudo-element";
    }
```

{% capture beforeExample %}

<!DOCTYPE html>
<html>
    <head>
        <style>
        h2::before{
             content: "This is inserted using the ::before pseudo-element...";
             }
        </style>
    </head>
    
    <body>
        <h1>This is a H1 header</h1>
    </body
</html>
{% endcapture %}

{% include sandbox.html lang="html" code=beforeExample frameless=1 %}

The `::after` pseudo-element is just as simple, except now we insert the content in front of the specified element. An example of this pseudo-element is as follows, where we can insert a picture in front of the h2 elements.

{% capture afterExample %}
<!DOCTYPE html>
<html>
    <head>
        <style>
        h2::after{
             content: url(http://emojipedia-us.s3.amazonaws.com/cache/4a/bc/4abc340cf5d893ff4bf6ebc17b29c221.png);
             }
        </style>
    </head>
    
    <body>
        <h2>This is a H2 header</h2>
    </body
</html>
{% endcapture %}

{% include sandbox.html lang="html" code=afterExample frameless=1 %}

