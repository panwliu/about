$(function() {
    "use strict";

    $('.hide').remove();

    $.each($(".center-col"), function(i, col) {
        var $col = $(col);
        $.each($col.attr('class').split(' '), function (i, c) {
            var m = /col-(xs|sm|md|lg)-([0-9]{1,2})/g.exec(c);
            if (m !== null) {
                var w = Math.floor((12 - parseInt(m[2])) / 2);
                if (w > 0) {
                  var t = m[1];
                  var $a = $("<div>")
                      .addClass("col-"+t+"-"+w)
                      .addClass("visible-"+t+"-block");
                  $col.before($a);
                }
            }
        });
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    $('#navbar-collapsed a').click(function() {
        $('.navbar-toggle[data-target="#navbar-collapsed"]:visible').click();
    });

    // $("h1").fitText(
    //     1.2, {
    //         minFontSize: '35px',
    //         maxFontSize: '65px'
    //     }
    // );

    $('#navbar').affix({
        offset: {
            top: 50
        }
    });

    $.each($("section"), function(i, sec) {
        if(i % 2 !== 0) {
            $(sec).addClass("section-even");
        } else {
            $(sec).addClass("section-odd");
        }
    });

    var lastModified = new Date(document.lastModified);
    var lastRevision = Cookies.get("lastRevision");
    var currRevision = parseInt($("#content-revision").text());
    var lastVisit = Cookies.get("lastVisit");
    $("#last-modified").text(lastModified.toString());
    if (lastRevision !== undefined &&
        parseInt(lastRevision) - currRevision < 0) {
        $("#alert-visit").show();
    }
    Cookies.set("lastVisit", lastModified.toString(), { expires: 365 });
    Cookies.set("lastRevision", '' + currRevision, { expires: 365 });
});
