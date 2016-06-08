---
title: Working from a Design (part 1)
---

When working on a team with graphic designers or to create mockups, it is often faster and easier to create a website design with a tool such as Photoshop, Illustrator, or MS Paint. I recommend creating a wireframe or design before you even start writing code as changing something in Photoshop will often be far quicker and easier than rewriting an entire section of a website.

The first step to creating a website is to work on the layout and overall structure of the website by dividing it up into rows and columns, this is where a grid system comes into play. At the time of writing this, most grid systems are written with floats but soon, flex boxes may become the standard and after that possibly CSS columns.

For this lesson, we will be recreating the following image with floats and absolute positioning.

![Layout Challenge 1]({{ '/assets/lessons/chapter-2/lesson-2/layout-challenge-1.jpg' | prepend: site.baseurl }})

- Each square is exactly 50x50 pixels
- Here are the hex values for the colors
    - Red: #DB4A4A
    - Purple: #DA4DC1
    - Green: #6DDB4B
    - Yellow: #DADC4A
    - Blue: #4A6CD9

Something to keep in mind is the fact that with code, there is never a wrong answer. There may be poor implementations or inefficient solutions, but that doesn't mean it's wrong unless it does not do what it's supposed to do.

## Step 1

The first step is to use our best judgement and split up the design into rows. Take note, with this example there are *several* different ways of setting this up but this tutorial will take you on only one of them.

![Layout Challenge 1 split into rows]({{ '/assets/lessons/chapter-2/lesson-2/layout-challenge-1-rows.png' | prepend: site.baseurl }})

To get started, we will need to create CSS classes that can be reused to create the individual blocks. We will have 3 different sets of classes:

- `.col-w-*` - This class will define the amount of columns an element should span horizontally. Each column has a width of 50px so how ever many columns in the class will be multiplied by 50px; for example, the `.col-w-3` class will be `3 * 50px` which gives us a width of `150px`.
- `.col-h-*` - This class will define the height an element should span. The same math as the width columns apply here. You may think of this as the amount of rows an element spans but it does **not** equate to an actual `.row` element.
- `.color-*` - This class will simply set the background colors of the elements

The `.row` class is used to maintain the width of this element and to keep all of the floated elements inside of the container. Floated elements will escape its parent container if the "clearfix hack" is not used.

When writing these classes, it is important to keep in mind to write as few classes as possible and ensure that they can be combined with other classes. In this example, to achieve an element that is 150px by 50px in size you would not want to write a class that has those dimensions hard coded; instead, you would want to have separate classes so the sizes can be reused. By combining two classes, you can achieve these dimensions and you'd be able to reuse one of those classes if you need to create an element that's 150px by 100px.

<div class="alert alert-warning" role="alert">
    <strong>Heads up!</strong> Combining classes only work when the properties can work in conjunction, for example `width` and `height` do not conflict and can work when put together. This approach does not allow you to use addition so you would not be able to combine two `.col-w-*` classes and expect to get the sum of them, instead you would just be overriding one of the values.
</div>

{% capture rowColSetup %}
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
</style>
{% endcapture %}

```css{{ rowColSetup }}```

The first row we will be creating can be seen below; each of the colored elements will be referred to as a cell. First we must define that we want a row of cells so we start by creating an element with the `row` class.

The `<div>` tag is one of the most heavily used tags in HTML and should be used for divisions in layouts or to create "objects," so to speak (more on this later). All HTML elements can use the `class` attribute, which has support for multiple classes delimited by spaces as described above.

{% capture firstRow %}
<div class="row">
    <div class="col-w-3 col-h-2 color-red"></div>
    <div class="col-w-1 col-h-1 color-green"></div>
    <div class="col-w-2 col-h-1 color-yellow"></div>
    <div class="col-w-3 col-h-1 color-purple"></div>
</div>
{% endcapture %}

{% include sandbox.html lang="html" code=firstRow setup=rowColSetup %}

@todo Write next section

{% capture secondRow %}
<div class="row">
    <div class="col-w-3 col-h-3 color-purple"></div>
    <div class="col-w-1 col-h-3 color-blue"></div>
    <div class="col-w-2 col-h-1 color-blue"></div>
    <div class="col-w-2 col-h-1 color-green"></div>
    <div class="col-w-2 col-h-1 color-red"></div>
</div>
{% endcapture %}

{% include sandbox.html lang="html" code=secondRow setup=rowColSetup %}

@todo Write last section

{% capture thirdRow %}
<div class="row">
    <div class="col-w-4 col-h-1 color-yellow"></div>
    <div class="col-w-2 col-h-1 color-red"></div>
</div>
{% endcapture %}

{% include sandbox.html lang="html" code=thirdRow setup=rowColSetup %}