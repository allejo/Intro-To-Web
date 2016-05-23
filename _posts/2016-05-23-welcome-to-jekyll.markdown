---
layout: post
title:  "Welcome to Jekyll!"
date:   2016-05-23 14:16:54 -0700
categories: jekyll update
---

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% capture code %}
<h1>Hello World</h1>
<h2>I'm a slogan</h2>

<a href="http://google.com">Google</a>
{% endcapture %}
{% include sandbox.html code=code lang="html" %}

{% capture code %}
<style>
    h1 {
        color: red;
    }
</style>

<h1>Hello World</h1>
{% endcapture %}
{% include sandbox.html code=code lang="html" %}

{% capture code %}
<style>
    strong {
        color: blue;
    }
</style>

<p><strong>Hello World</strong></p>
{% endcapture %}
{% include sandbox.html code=code lang="html" %}


{% capture code %}
.blue {
    .red {
        color: purple;
    }
}
{% endcapture %}
{% include sandbox.html code=code lang="scss" %}


{% capture code %}
$my-map: (foo, bar, quz, rock, qerty);

@each $item in $my-map {
    .#{$item} {
        content: "#{$item}";
    }
}
{% endcapture %}
{% include sandbox.html code=code lang="scss" %}
