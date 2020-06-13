// ==UserScript==
// @name         Ad Blocker Blocker
// @namespace    https://github.com/jack-flash/adblockerblocker/blob/master/adblocker.js
// @version      0.1
// @description  Eliminate Ad Blocker Blocker Popups
// @author       Jack Flash
// @match        https://www.forbes.com/*
// @match        https://www.inforum.com/*
// @match        https://www.bloomberg.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

function timeFunc() {
    if($("body").hasClass("tp-modal-open")) {
        $("body").removeClass("tp-modal-open");
        $(".tp-backdrop").hide();
        $(".tp-modal").hide();
    }
    $("body[data-paywall-overlay-status='show']").removeAttr("data-paywall-overlay-status");
    $("div#graphics-paywall-overlay").remove();
    $("main.hub-main").remove();
    if($("body").hasClass("adblock-on body--no-scroll")) {
        $("body").removeClass("adblock-on body--no-scroll");
        $(".fbs-auth__adblock").hide();
    }
}

$(document).ready(function() {
    setTimeout(timeFunc,  500);
    setTimeout(timeFunc,  1000);
    setTimeout(timeFunc,  2000);
    setTimeout(timeFunc,  4000);
});