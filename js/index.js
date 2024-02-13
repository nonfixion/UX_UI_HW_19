console.log("Your index.js is loaded correctly!");

$("#backToTopImg").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});