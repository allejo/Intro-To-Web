---
title: The Basics of a Website
---

Every website is made up of 3 fundamental technologies: HTML, CSS, and Javascript. There are plenty of websites built with languages such as C#, PHP, Python, or Ruby but those languages simply generate the HTML of a specific page.

Taking a look at Facebook as an example, it is written in PHP generates HTML. Why would you want to generate HTML? A website such as Facebook has nothing but user submitted content such as statues, comments, photos, notes, etc. There is no way you can manually create timelines and unique newsfeeds for *every. single. user*.

There are code samples of how a language looks like but don't worry about understanding it, we'll get to a detailed explaining in the coming chapters.

## HTML - The structure

HTML is the structure of the website, it defines **how** elements on a website are rendered and where they are placed.

- Should something be inside of a bullet point list or should they be numbered?
- Should the sidebar be on the left hand size or the right hand side?

This is what HTML looks like:

```html
<!-- this is a comment -->
<body>
    <header class="page-header">
        ...
    </header>

    <footer>
        ...
    </footer>
</body>
```

## CSS - The Beauty

CSS defines how a website looks; e.g. the colors, the width of elements, fonts, etc. Without CSS, sidebars could not exist because every element in HTML will take up an entire row (more on this later).

Here are a few things you can do with CSS:

- Different font colors, sizes, and styles
- Rounded edges
- Borders around elements
- Spacing around elements

This is what CSS looks like:

```css
/* this is a comment */
.page-header {
    border-bottom: 1px solid #EFEFEF;
    color: #00FF00;
    font-family: sans-serif;
    margin-bottom: 15px;
    padding-bottom: 15px;
}
```

## JavaScript - The Functionality

_JavaScript (JS) is not to be confused with Java, which is an entirely different language! The names are **not** interchangeable and will be laughed at if you confuse them; possibly lose credibility at a job interview too._

HTML by design is a static language meaning that once a page is loaded, you cannot change how it looks or how it behaves. Have you ever been on YouTube clicked on "Show All Replies" in the comment section? Once you click on that, more replies are shown and that is what JS.

This is what JS looks like with jQuery:

```js
$(function() {
    $(".accordion").click(function() {
        var $this = $(this);

        if ($this.data('status') === 'opened') {
            // close it
        } else {
            // open it
        }
    });
});
```