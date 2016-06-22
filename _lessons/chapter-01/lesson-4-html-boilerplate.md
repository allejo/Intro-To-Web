---
title: HTML Boilerplate
---

The [HTML5 Boilerplate project](https://html5boilerplate.com) provides a project template that you may use but because it is designed to be robust, there are several options that you may or may not use. I have provided a boilerplate for all of your HTML files that has Bootstrap ready from a CDN.

Anything that goes inside of the `<head>` tags can be thought of configuration or settings for the individual page, nothing in this section will be rendered on the actual page. All of the content that will be rendered in the browser must be placed inside of the `<body>` tags.

```
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/styles.css">
    </head>

    <body>
        <script src="https://code.jquery.com/jquery-1.12.2.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    </body>
</html>
```

First create a folder in your desktop, documents, or downloads (wherever as long as you remember where it is), then create a file called `index.html` and paste this HTML boilerplate into that file. Inside of this file, you will also be creating a folder called "css" and inside of that folder, create a file called "styles.css"; this file will contain all of the styles for your website. You want to be sure that you use one style sheet for the whole website to keep a consistent look and avoid redundancy.