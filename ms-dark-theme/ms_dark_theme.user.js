// ==UserScript==
// @name         Metasmoke Dark Theme
// @version      0.2.0
// @description  A dark-themed UI for Metasmoke
// @author       cocomac
// @match        https://metasmoke.erwaysoftware.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==


'use strict';
// todo: do it for hamburger button, maybe move autoflags/search buttons to navbar using JS
/* background color and 'other' color from https://learn.microsoft.com/en-us/windows/apps/design/style/color */
 /* border color from GitHub branch selector border */
let css = document.createElement('style');
css.type = 'text/less';
css.innerHTML = `
@text-color-primary: #fff;
@text-color-secondary: #aaa;
@border-color: #363b42;
@background-color: #1f1f1f;
@elevated-color: #333;

// dark scroll-bars, dark checkboxes
:root {
    color-scheme: dark;
}

// some base settings
body {
    color: @text-color-primary !important;
    background-color: @background-color;
}

// form elements, inputs, dropdowns, etc.
.dropdown-toggle {
     border-color: inherit !important;
}

.dropdown-toggle, input[type=text], input[type=number], .form-control, select {
    background-color: @elevated-color !important;
    border-color: @border-color;
}

// no striped tables, just have seperators
.table-striped>tbody>tr:nth-of-type(odd) {
    background-color: inherit;
}

// code and a few other things should use a different background color
.navbar, .footer, code, .nav-tabs li.active a, pre {
    background-color: @elevated-color;
    border-width: 0;
}

// I forgot why I added this - TODO: figure out what this was for
.panel-body {
    background-color: @background-color;
}

// set the color for code
code, pre {
    color: @text-color-primary;
}

// use a secondary color (i.e., not white) for the navbar text
.navbar-default .navbar-nav>li>a:hover, .navbar-default .navbar-nav>li>a, .navbar-default .navbar-brand {
    color: @text-color-secondary;
}

// I forgot which panel this is - TODO: figure it out
.panel {
    border: none;
}

// use the existing navbar color I set
.nav-tabs li.active a, .navbar-default .navbar-nav>.active>a {
    color: inherit;
}


// this is when we have multiple pages of info, such as in the list of domains
.pagination li {
    span, a {
        background-color: @elevated-color !important;
        border-color: @border-color !important;
    }
}

// I personally find having the search/flagging icons on the side weird
// so I hide them here and use JavaScript to add them to the navbar instead
//
// this really should be a seperate userscript though so I'll probably
// seperate it out later
.icon-nav-bar {
    visibility: hidden;
}

// fix giant margin-left (92px) on Skip button under the Review Posts page
a.review-submit-link {
    margin-left: inherit !important;
}

// on the main Metasmoke page, remove strange shadow/glow effect
.module {
    box-shadow: none;
}

.module-title {
    a, a:visited {
        color: inherit;
    }
}

// TODO: The text on the charts is colored
// incorrectly and there is a white "glow"
.highcharts-background {
    fill: @background-color;
}

small, ul.navbar-nav {
    color: @text-color-secondary !important;
    code {
        background-color: @background-color;
    }
}
`;
document.getElementsByTagName('head')[0].appendChild(css);
let less2 = document.createElement('script');
less2.src = "https://cdn.jsdelivr.net/npm/less";
document.getElementsByTagName('head')[0].appendChild(less2);

// generates a new element to put on the navbar from a link-title and a URL
let genNavLink = (title, url) => {
    let li = document.createElement('li');
    let link = document.createElement('a');
    link.innerText = title;
    link.href = url;
    li.appendChild(link);
    return li;
}

// items to add to the navbar
new Map([
    ["flagging", "https://metasmoke.erwaysoftware.com/flagging"],
    ["search", "https://metasmoke.erwaysoftware.com/search"]
]).forEach((url, title) => {
    // generate the element, and then add it to the navbar
    document.getElementsByClassName('navbar-nav')[0].appendChild(
        genNavLink(title, url)
    );
});
