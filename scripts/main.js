var url = 'http://192.168.0.167/led-cmd';


$("#target").submit(function (event) {
    var $form = $(this);
    var red = $form.find("input[name='red']").val();
    var green = $form.find("input[name='green']").val();
    var blue = $form.find("input[name='blue']").val();
    setLight(red, green, blue, $(this).find("#btnSubmit"));
    event.preventDefault();
});


$('#leds-off').bind('click', function () {
    setLight(0, 0, 0, this);
    event.preventDefault();

});

$('#leds-on').bind('click', function () {
    setLight(127, 127, 127, this);
    event.preventDefault();


});

$(document).on('click', '.lastCommand', function () {

    var red = $(this).attr('red');
    var green = $(this).attr('green');
    var blue = $(this).attr('blue');
    setLight(red, green, blue, this);
    event.preventDefault();
});

$(document).ready(function () {
    for (var key in localStorage) {
        var value = JSON.parse(localStorage[key]);

        $("#lastCommands")
            .append('<li><a ' +
                'class="lastCommand"' +
                'red="' + value.red + '"' +
                ' green="' + value.green + '"' +
                ' blue="' + value.green + '"' +
                '>' +
                value.red + ' ' +
                value.green + ' ' +
                value.blue + ' ' +
                '</a>');
    }
});


function setLight(red, green, blue, context) {
    spinner = $(context).children(".loading-spinner");
    spinner.css("visibility", "visible");
    var posting = $.post(url, {red: red, green: green, blue: blue});
    posting.done(function (data) {
        spinner.css("visibility", "hidden");
    });

    timeStamp = Date.now() / 1000 | 0;

    if (true == isNaN(red) || '' == red) {
        red = 0;
    }
    if (true == isNaN(green) || '' == green) {
        green = 0;
    }
    if (true == isNaN(blue) || '' == blue) {
        blue = 0;
    }
    console.log(blue);
    colorValueObject = {red: red, green: green, blue: blue};
    localStorage.setItem(timeStamp, JSON.stringify(colorValueObject));

}

