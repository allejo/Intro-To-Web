// Add anchors to headings
anchors.options = {
    placement: 'left',
    visible: 'always'
};
anchors.add().remove('h1').remove('.no-anchor');

// Site settings functionality
function makeRemoveClassHandler(regex) {
    return function (index, classes) {
        return classes.split(/\s+/).filter(function (el) {return regex.test(el);}).join(' ');
    }
}

function createSetting (form, cookieName, prefix, regex) {
    var cookieValue = readCookie(cookieName);

    if (cookieValue) {
        $("html").removeClass(makeRemoveClassHandler(regex));
        $("html").addClass(prefix + "-" + cookieValue);
    }

    $(form + " input[value=" + cookieValue + "]").prop('checked', true);
    $(form).change(function () {
        var $this = $(this);
        var color = $this.find("[name=" + cookieName + "]:checked").val();

        $("html").removeClass(makeRemoveClassHandler(regex));
        $("html").addClass(prefix + "-" + color);

        createCookie(cookieName, color);
    });
}

$(function () {
    createSetting("#site-color-scheme", "siteColorScheme", "t", /^t-/);
    createSetting("#code-color-scheme", "codeColorScheme", "code", /^code-/);
});
