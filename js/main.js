/*global $, jQuery, alert*/

/* Javascript was nodig omdat Safari/Opera meerdere animaties op één element niet ondersteund */

$(function () {
    "use strict";
    
    setTimeout(function () {
        $(".wheel").css({
            transform: 'rotate(720deg)'
        });
    }, 1250);
    
    setTimeout(function () {
        $(".wheel").css({
            transition: 'all 10s ease-in',
            transform: 'rotate(1440deg)'
        });
    }, 16000);
    
    setTimeout(function () {
        $(".wheel").css({
            transition: 'all 10s linear',
            transform: 'rotate(2660deg)'
        });
    }, 25800);
    
    setTimeout(function () {
        $(".wheel").css({
            transition: 'all 10s ease-out',
            transform: 'rotate(3550deg)'
        });
    }, 34500);
    
    setTimeout(function () {
        $("#rails").css("animation-play-state", "paused");
        $("#bg4").css("animation-play-state", "paused");
        $("#plants").css("animation-play-state", "paused");
    }, 43500);
    
    setTimeout(function () {
        $(".wheel").css({
            transition: 'all 10s ease-in',
            transform: 'rotate(7200deg)'
        });
    }, 52000);
});