---
title: Using JavaScript Templates
---

Up until this point, you have only been working with markup languages, which does not have the same lgoic or functionality as a scripting or programming language my have (e.g. C#, Python, PHP). Enter, JavaScript.

Web pages are static by design, meaning they cannot be change once the page has been loaded and the only way they may change is to reload the page. JavaScript allows you manipulate the Document Object Model (DOM), which consists of all of the elements on the page itself.

## Templates

No matter what language you are working in or what you are building, repeating yourself is the most tedious and counterintuitive thing you could possibly do. In order to prevent this, templates exist in order to be reusable and easy to actually use. When building static websites, one option for creating templates is to use [Handlebars.js](http://handlebarsjs.com/) to define and render your templates.

The first two lines are loading the respective JavaScript libraries from Content Delivery Networks (CDN). An advantage to using a CDN is that they provide servers around the world and will automatically use the closest one to the user when loading a file. However, one of the downsides is the lack of control over your users' privacy as the server hosts for CDNs will be able to see the traffic going to specific files.

The `<script>` tag is used to either reference an external JavaScript file or to write JavaScript inside of an HTML document itself. The `src` attribute is used to specify where the script is located. Similar to CSS files, you will want to keep your JavaScript in a separate file from your HTML files so you can reuse them and just like CSS, you do use the `<script>` tag inside of your `.js` files. Here, we are loading two separate JavaScript libraries:

1. [jQuery](https://jquery.com/) - A library written in JavaScript that provides a lot of functionality to be used easily.
1. [Handlebars.js](http://handlebarsjs.com/) - A templating engine in order to be able to reuse HTML when fetching content dynamically

In HTML, `<script>` tags do not render anything so we will be taking advantage of this fact and define a template of how we will display movie information. We'll give this tag an ID for easy access and define the type of script as `text/x-handlebars-template` in order to avoid any confusion and have your browser attempt to execute it as JavaScript.

Looking back at the previous lesson, the JSON object that we received from OMDb had a number of a keys such as `Title`, `Yaar`, and `Plot` in the object that was returned. Handlebars makes use of `{{ }}` to render variables so in the following template, we'll be telling it to output the specified keys inside of that HTML.

Now, this is where we start writing some basic JavaScript and make use of jQuery. The first line we'll look at is creating a variable and storing a value in it; variables are basically boxes that store some form of information whether it be an int, boolean, float, string, or object. In this case, we will be storing the IMDb movie ID in a variable for easy access so that we can easily change it or reuse it in the future.

```js
var movieID = 'tt2277860';
```

jQuery uses the `$` as an alias so all functions available in jQuery that do not require an element can be referenced in the following format: `$.functionCall()`. jQuery provides [`$.get`](http://api.jquery.com/get/), which allows us to make API calls to other URLs and gives us easy access to the data returned from the API. By reading the documentation, we can see that the first argument for the function call is the URL for the API call and the second argument is a function that handles the data in some form.

We'll be making an API call to OMDb and display the information we got about Finding Dory. We are creating multiple variables for easy access to specific elements. In jQuery by using `$()`, we can access specific elements so we will be accessing `#movie-template`, which means we're looking for an element with this ID, and the calling the `html()` function which gives us the HTML inside of that elements so in this case, we are saving the actual template that is saved inside of this element.

Next, we will be using Handlebars to compile the template we just got by calling `Handlebars.compile()` and this will save the template in a format that can be reused by just giving it data. In the next step, we are using the compiled template we just created and are passing the `data` variable to it; the `data` variable is where the returned JSON data is stored after the API call is successful. Finally, we are accessing the `#movie-results` element and appending the compiled HTML we just created with the [`append()`](http://api.jquery.com/append/) function.

{% capture handlebarsExample %}
<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js"></script>

{% raw %}<script id="movie-template" type="text/x-handlebars-template">
  <div class="entry">
    <h3>{{Title}} ({{Year}})</h3>
    <div class="body">
      {{Plot}}
    </div>
  </div>
</script>{% endraw %}

<script>
    var movieID = 'tt2277860';

    $.get('http://www.omdbapi.com/?i=' + movieID, function(data) {
        var source   = $("#movie-template").html();
        var template = Handlebars.compile(source);
        var html     = template(data);

        $("#movie-results").append(html);
    });
</script>

<div id="movie-results"></div>
{% endcapture %}

{% include sandbox.html sandbox=false code=handlebarsExample frameless=1 lang="html" %}
