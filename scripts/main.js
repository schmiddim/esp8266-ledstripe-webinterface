var url = 'http://192.168.0.167/led-cmd';


$("#target").submit(function (event) {
    var $form = $(this);
    red = $form.find("input[name='red']").val();
    green = $form.find("input[name='green']").val();
    blue = $form.find("input[name='blue']").val();
    setLight(red, green, blue, $(this).find("#btnSubmit"))
    event.preventDefault();
});


$('#leds-off').bind("click", function () {
    setLight(0, 0, 0, this);
    event.preventDefault();

})

$('#leds-on').bind("click", function () {
    setLight(127, 127, 127, this);
    event.preventDefault();


})

function setLight(red, green, blue, context) {
    spinner = $(context).children(".loading-spinner");
    spinner.css("visibility", "visible");
    var posting = $.post(url, {red: red, green: green, blue: blue});
    posting.done(function (data) {
        spinner.css("visibility", "hidden");
    });
}

