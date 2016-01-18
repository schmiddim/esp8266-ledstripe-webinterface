var url = 'http://192.168.0.167/led-cmd';


$("#target").submit(function (event) {
    var $form = $(this);
    red = $form.find("input[name='red']").val();
    green = $form.find("input[name='green']").val();
    blue = $form.find("input[name='blue']").val();
    var posting = $.post(url, {red: red, green: green, blue: blue});
    event.preventDefault();
});


$('#leds-off').bind("click", function () {

    $.post(url, {red: 0, green: 0, blue: 0});
})
$('#leds-on').bind("click", function () {

    $.post(url, {red: 127, green: 127, blue: 127});

})


