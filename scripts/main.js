$("#target").submit(function (event) {
    var $form = $(this);
    red = $form.find("input[name='red']").val();
    green = $form.find("input[name='green']").val();
    blue = $form.find("input[name='blue']").val();
    url = 'http://192.168.0.167/led-cmd';
    var posting = $.post(url, {red: red, green: green, blue: blue});
    event.preventDefault();
});