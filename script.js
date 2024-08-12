$(".question").click(function () {

    var btn = $(this);

    var s = btn.attr("id");

    $(".ans" + s[s.length - 1]).toggle();

    var src = $("#num" + s[s.length - 1]).attr("src")
    console.log(src);

    if (src === "assets/images/icon-plus.svg") {
        $("#num" + s[s.length - 1]).attr("src", "assets/images/icon-minus.svg")
    } else {
        $("#num" + s[s.length - 1]).attr("src", "assets/images/icon-plus.svg")

    }

})