console.log("Your index.js is loaded correctly!");

$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 100 }, "slow");
    return false;
});

$('backToTopImg').hover(
function() {
    $(this).attr('src', "images\top hover.png");
},
function() {
    $(this).attr('src', '');
});