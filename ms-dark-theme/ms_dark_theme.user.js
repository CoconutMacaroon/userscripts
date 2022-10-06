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
css.innerHTML = `
/* dark scroll-bars, dark checkboxes */
:root {
    color-scheme: dark;
    --text-color-primary: #fff;
    --text-color-secondary: #aaa;
    --border-color: #363b42;
    --background-color: #1f1f1f;
    --elevated-color: #333;
}

/* some base settings */
body {
    color: var(--text-color-primary) !important;
    background-color: var(--background-color);
}

/* form elements, inputs, dropdowns, etc. */
.dropdown-toggle {
     border-color: inherit !important;
}

.dropdown-toggle, input[type=text], input[type=number], .form-control, select {
    background-color: var(--elevated-color) !important;
    border-color: var(--border-color);
}

/* no striped tables, just have seperators */
.table-striped>tbody>tr:nth-of-type(odd) {
    background-color: inherit;
}

/* code and a few other things should use a different background color */
.navbar, .footer, code, .nav-tabs li.active a, pre {
    background-color: var(--elevated-color);
    border-width: 0;
}

/* I forgot why I added this - TODO: figure out what this was for */
.panel-body {
    background-color: var(--background-color);
}

/* set the color for code */
code, pre {
    color: var(--text-color-primary);
}

/* use a secondary color (i.e., not white) for the navbar text */
.navbar-default .navbar-nav>li>a:hover, .navbar-default .navbar-nav>li>a, .navbar-default .navbar-brand {
    color: var(--text-color-secondary);
}

/* I forgot which panel this is - TODO: figure it out */
.panel {
    border: none;
}

/* use the existing navbar color I set */
.nav-tabs li.active a, .navbar-default .navbar-nav>.active>a {
    color: inherit;
}


/* this is when we have multiple pages of info, such as in the list of domains */
.pagination li a, .pagination li span {
    background-color: var(--elevated-color);
    border-color: var(--border-color);
}

/* on the main Metasmoke page, remove strange shadow/glow effect */
.module {
    box-shadow: none;
}

.module-title a, .module-title a:visited {
    color: inherit;
}

/* TODO: The text on the charts is colored */
/* incorrectly and there is a white "glow" */
.highcharts-background {
    fill: var(--background-color);
}

small, ul.navbar-nav {
    color: var(--text-color-secondary) !important;
}

small code, ul.navbar-nav code {
    background-color: var(--background-color);
}
`;
document.getElementsByTagName('head')[0].appendChild(css);
