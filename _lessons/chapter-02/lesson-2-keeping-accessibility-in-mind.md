---
title: Keeping Accessibility in Mind
---

When building a website, the design of it is extremely important. How many times have you visited a dated website and thought, "this website looks like a scam"? It is important to make sure your website looks professional and appropriate for your type of business or content. However, you must keep in mind that all sorts of people may be visiting your website including people who may have disabilities. This includes but is not limited to:

- Lack of motor skills, so keyboard is the only way to navigate a website
- Color blindness, so contrast with what you build must be evident
- Blindness would render images with text utterly useless

If you are working for a large company or government, then accessibility is extremely important as it's not just kindness and supporting users but often it's required by law. [WebAIM](http://webaim.org/intro/) has several excellent resources on how to ensure your website is accessible and tools to test your website.

## Color Contrast

WebAIM has a [contrast checker](http://webaim.org/resources/contrastchecker/), which will tell you if your combination of colors are accessible. As a rule of thumb, ensuring that WCAG AA passes will suffice because [WCAG AAA has such a high demand](https://www.w3.org/TR/WCAG20/#conformance-reqs) that it will often have a high impact on design that most organizations will not be able to achieve it.

## Navigation

Not everyone may be able to use a mouse so it is really important that your website can be navigated with just the keyboard. A way to check this is to load a website and just start hitting tab and it will cycle through every link, button, and input field available on the page; pressing enter on a link or button will take you to that link or perform an action, respectively. Being able to skip content is also very important because if you have a screen reader and a *really* big menu bar, the screen reader will read through *every. single. menu item.*

## Text in Images & Buttons

A long time ago (*in a galaxy far far away...*), designing buttons as images was a common practice and when you hovered over them, the image would change to a "highlighted" version of the image. Now, this can be achieved with CSS alone and this is how it **should** be achieved. Images can have a `alt` attribute to describe what the image is describing but that's often not enough to make an image accessible.

![Inaccessible image]({{ '/assets/lessons/chapter-2/lesson-2/inaccessible-button.gif' | prepend: site.baseurl }})

Here is an example of what **not** to do and why:

- The image has a background color;if the website background color were to change, you would have to update *every. single. button.*
- You may have an `alt` attribute to state "Subscribe to our newsletter" but screen readers will not know that this image is actually a button that will perform an action. There are workarounds like using `role="button"` as an attribute but it is far better to use `<button>` as it's compliant to accessibility standards.
- You have to design several dozen buttons for your website and two shades of each, mind you
- Images like this cannot be translated with tools such as Google Chrome's native translate options or if there's an explicit widget to translate the website for people who may not speak the language of your website
