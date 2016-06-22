---
title: Working from a Design (Hover and Pseudo-Elements)
---

`:hover` is a pseudo-class. As you learned in the "CSS Vocabulary" chapter, a pseudo-class is automatically applied to elements based on certain events. In this case, the event is hovering over an element.

In this lesson, you will create a row of elements and add the `:hover` pseudo-class to the elements to make a description of the element appear underneath it.

The basic syntax of the `:hover` pseudo-class is:

```css
.selector:hover {
    property: value;
}
```

Let's take a look at an example of where a paragraph will have a yellow background when one hovers over the paragraph.

{% capture hoverSetup %}
<style>
    body {
        background-color: white;
    }

    p {
        padding: 15px;
    }
</style>
{% endcapture %}

{% capture hoverExample %}
<style>
    p:hover {
        background-color: yellow;
    }
</style>

<p> Hover over me and see what happens!</p>
{% endcapture %}

{% include sandbox.html lang="html" code=hoverExample setup=hoverSetup frameless=1 %}

## Combining CSS Selectors

Now, let's do something a little more advanced. We'll create a row of three blocks that will display a box with the name of the color of the block when you hover over it. We'll take what you learned from the previous lesson and create a row of three different colored blocks. I challenge you to do this on your own; if you need a refresher, refer back to the previous chapter.

CSS selectors cannot have spaces in their name because whitespace has special meaning: it allows you to combine or nest selectors; each whitespace denotes a new level in the hierarchy of elements.. In this lesson, we will be combining a pseudo-class and another selector meaning that when the first selector is true, then it will check for the second one will be true and so on.

In the following code snippet, when one hovers over the `.parent` element then the CSS declarations will be applied to `.child` but **only** when the parent is being hovered over.

```css
.parent:hover .child {
    display: block;
}
```

In the following example, we will be displaying the name of the color being hovered over with a opaque background. Because we want it to only be visible when we hover over it, we will make it `display: none` by default meaning it will not be displayed.

{% capture hoverSetup %}
<style>
    .row { width: 300px; }
    .row:after { content: ""; display: table; clear: both; } /* Clearfix hack */

    .square { float: left; height: 100px; position: relative; width: 100px; }

    /* Color classes */
    .color-red    { background-color: #DB4A4A; }
    .color-green  { background-color: #6DDB4B; }
    .color-yellow { background-color: #DADC4A; }
</style>
{% endcapture %}

{% capture coloredBlocks %}
<style>
    /* Content of the dropdown */
    .dropdown-content {
        display: none;
        position: absolute;
        bottom: 0;
        color: white;
        height: 100%;
        width: 100%;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.6);
    }

    /* Show the dropdown when hovered over */
    div:hover .dropdown-content {
        display: block;
    }
</style>

<div class="square color-red">
    <div class="dropdown-content">Red</div>
</div>
<div class="square color-green">
    <div class="dropdown-content">Green</div>
</div>
<div class="square color-yellow">
    <div class="dropdown-content">Yellow</div>
</div>
{% endcapture %}

{% include sandbox.html lang="html" code=coloredBlocks setup=hoverSetup frameless=1 %}

- The `display: none` property ensures that the content will be hidden at first.
- The `position: absolute` and `bottom` properties ensure that the content will appear at the block (aka it will appear at the bottom of block). By setting `bottom` to 0, then it will ensure the absolutely positioned element to be 0 pixels away from the bottom. If `top` is used, then the element would be 0 pixels away from the top.
- The `width: 100%` property ensures that the dropdown block will only be as wide as the block itself
- Using `rgba(red, green, blue, alpha)` for the background color is a way to have an opaque color by having an alpha channel.

## Pseudo-Elements

A pseudo-element is used to style specific parts of an element. An example of a pseudo-element would be to style the first letter in each specified element in the code.

The syntax for a general pseudo-element is as follows:

```css
selector::pseudo-element {
    property: value;
}
```

The two pseudo-elements that we are going to go over today are `::before` and `::after`.

As the names suggest, these pseudo-elements are pretty straightforward. They just insert some content before or after specified elements in the code. An example of the `::before` pseudo-element is as follows, where we insert some text content before the h1 element:

{% capture beforeExample %}
<style>
    h1::before {
        content: "~~~";
    }
</style>

<h1>This is a H1 header</h1>
{% endcapture %}

{% include sandbox.html lang="html" code=beforeExample %}

The `::after` pseudo-element is just as simple, except now we insert the content after the specified element. An example of this pseudo-element is as follows, where we can insert a picture after the h2 elements.

{% capture afterExample %}
<style>
    h2::after{
        background-image: url('http://emojipedia-us.s3.amazonaws.com/cache/4a/bc/4abc340cf5d893ff4bf6ebc17b29c221.png');
        background-size: cover;
        content: '';
        display: inline-block;
        height: 25px;
        margin-left: 10px;
        width: 25px;
    }
</style>

<h2>This is a H2 header</h2>
{% endcapture %}

{% include sandbox.html lang="html" code=afterExample %}

Finally, you can alter the same element with multiple pseudo-elements, meaning that you can use the `::before` and `::after` pseudo-elements to insert content before and after the same element. An example of this would be as follows, where we insert angle brackets before the h3 element and insert more angle brackets after the h3 element:

{% capture bothExample %}
<style>
    h3::before {
         content: ">>>";
    }

    h3::after {
         content: "<<<";
    }
</style>

<h3>This is a H3 header</h3>
{% endcapture %}

{% include sandbox.html lang="html" code=bothExample %}

## On Your Own

<div class="alert alert-warning">
    <strong>Heads up!</strong> Please only accept the assignment if you are part of the Youth Tech Program; otherwise, fork the repository and work there.
</div>

There is an assignment available on GitHub to practice what you have learned in this lesson.

<a href="https://github.com/YouthTechProgram/2-4-team-page" class="btn btn-primary">GitHub Repository</a>
<a href="https://classroom.github.com/assignment-invitations/75e6bdbd6048c42df078f547e2c9bf64" class="btn btn-warning">Accept Assignment</a>