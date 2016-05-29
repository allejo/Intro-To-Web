// Add anchors to headings
anchors.add().remove('h1');

// Site settings functionality
function makeRemoveClassHandler(regex) {
    return function (index, classes) {
        return classes.split(/\s+/).filter(function (el) {return regex.test(el);}).join(' ');
    }
}

$(function () {
    var colorScheme = readCookie("colorscheme");

    if (colorScheme) {
        $("html").removeClass(makeRemoveClassHandler(/^t-/));
        $("html").addClass("t-" + colorScheme);
    }

    $("#color-scheme input[value=" + colorScheme + "]").prop('checked', true);
});

$("#color-scheme").change(function () {
    var $this = $(this);
    var color = $this.find("[name=ui-colorscheme]:checked").val();

    $("html").removeClass(makeRemoveClassHandler(/^t-/));
    $("html").addClass("t-" + color);

    createCookie("colorscheme", color);
});
