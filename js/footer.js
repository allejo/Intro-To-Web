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

function setGlobalClass (cookieName, className, regex) {
    if (typeof disableSettings !== 'undefined' && disableSettings[cookieName] === true) {
        return;
    }

    var $html = $("html");

    $html.removeClass(makeRemoveClassHandler(regex));
    $html.addClass(className);
}

function createSetting (form, cookieName, prefix, regex) {
    var cookieValue = readCookie(cookieName);

    if (cookieValue) {
        setGlobalClass (cookieName, prefix + "-" + cookieValue, regex);
    }

    $(form + " input[value=" + cookieValue + "]").prop('checked', true);
    $(form).change(function () {
        var $this = $(this);
        var color = $this.find("[name=" + cookieName + "]:checked").val();

        setGlobalClass (cookieName, prefix + "-" + color, regex);
        createCookie(cookieName, color);
    });
}

$(function () {
    createSetting("#site-color-scheme", "siteColorScheme", "t", /^t-/);
    createSetting("#code-color-scheme", "codeColorScheme", "code", /^code-/);
});
