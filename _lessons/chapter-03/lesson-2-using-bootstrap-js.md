---
title: Using Bootstrap's JavaScript
---

Bootstrap provides a [large amount of JavaScript components](http://getbootstrap.com/javascript/) you may use to build your website. By using Bootstrap's components, you no longer have to reinvent the wheel to achieve common functionality such as dropdowns, carousels, accordions, etc. This lesson won't go over *every* component available in Bootstrap but we will cover some of the more common ones.

As good practice, your website should be able to function for the most part without having JavaScript enabled but that does not mean you need to sacrifice usability for the 1% of the users who don't have JavaScript enabled. By using the `<noscript>` tag, you may put a message intended for users who have JavaScript disabled.

## Using a Modal

Modals are provided to websites so that they may create prompts for users to issue a response, to provide further information, or as a separate pop-up for a user to interact with. An example for using modal would be to confirm deleting an element or editing an item's information before you post it publicaly on a classifieds website. The following code snippets were taken directly from Bootstrap's documentation and we will disect it to see what each part does.

The first element is a `<button>`, which renders a button, but notice the two attributes that are used by Bootstrap: `data-toggle` and `data-target`. The `data-toggle` attribute specifies what type of action will occur when the button is pressed; in this example, a modal will be triggered when the button's pressed. The second attribute is the `data-target`, which is the ID of the modal itself that you would like to be activitating; be sure to include the octothorpe (`#`) when specifying the ID.

<div class="alert alert-warning"><span markdown="1">**Heads up!** Remember, IDs are unique to a single page so there should only be a single `#myModal` on your page. If you have multiple modals, be sure to change the ID for each modal.</span></div>

The next section is the actual markup for creating a modal. The syntax may look overwhelming but it shouldn't be anything that you haven't seen before or anything that is really complicated. But here's an explanation of a few the attributes you may not recognize.

- `role` - The role the element is playing; this is really important for accessibility
- `aria-*` - Every attribute starting with `aria` is related to accessibility and how assistive devices should handle the specified element. For example, an `aria-label` is a description of an element only for assistive devices and `aria-hidden` will hide an element from assistive devices if it's set to true.
- `data-*` - You may create your own custom `data-*` attributes and it would be syntactically valid HTML5. Bootstrap takes advantage of this by creating such attributes like `data-dismiss`, which specifies that it will be dismiss the parent modal.
    - Notice how there are two buttons in the `.modal-footer` section but only one button uses the `data-dismiss` attribute so only the button that uses that attribute will actually cause the modal to close.

{% capture modalExample %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>

      <div class="modal-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium maxime laudantium, nihil dolores ullam? Distinctio a consectetur, alias totam ipsam quibusdam harum ea rem nam. Fuga ullam cumque rem consequuntur.
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{% endcapture %}

{% include sandbox.html sandbox=false code=modalExample frameless=1 lang="html" %}

## Dropdowns

In this example, a lot of the same attributes from the previous example have been used. By specifying the `data-toggle` attribute to be a dropdown, the element will behave as such. It is imperative that you follow the correct hierarchy in your HTML in order for your CSS to work because, as you may have noticed by now, code is very sensitive in what its expecting and Bootstrap is no exception.

- `aria-labelledby` - Specifies what element should be considered the "label" for the follow list of elements so assisitive devices will know that the following links are relative to a specific group

{% capture dropdownExample %}
<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a>Action</a></li>
    <li><a>Another action</a></li>
    <li><a>Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a>Separated link</a></li>
  </ul>
</div>
{% endcapture %}

{% include sandbox.html sandbox=false code=dropdownExample frameless=1 lang="html" %}