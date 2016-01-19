//var url = 'http://192.168.0.167/led-cmd';
var url = '/bla.php';
var app = angular.module('myApp', []);


app.controller('formCtrl', ['$scope', '$http', 'transformRequestAsFormPost', 'communicateWithESP', function ($scope, $http, transformRequestAsFormPost, communicateWithESP) {
    $scope.color = {
        red: 255,
        green: 127,
        blue: 127

    };

    this.submitValues = function () {
        console.log($scope.color);
    };

    this.turnLightOff = function () {
        $scope.color.red = 0;
        $scope.color.green = 0;
        $scope.color.blue = 0;
        console.log($scope.color);

    };

    this.turnLightOn = function () {
        $scope.color.red = 127;
        $scope.color.green = 127;
        $scope.color.blue = 127;

        communicateWithESP.submitCommand($scope.color);


    };

}]);
app.factory('communicateWithESP', function () {
    return {
        submitCommand: function (colorValues) {
            console.log(colorValues);
            $http({
                conifg: {},
                url: url,
                method: "POST",
                transformRequest: transformRequestAsFormPost,
                data: colorValues,
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}

            }).success(function (data, status, headers, config) {
                //do something
            }).error(function (data, status, headers, config) {
                //do something
            });
        }
    }
});

/**
 * @see http://www.bennadel.com/blog/2615-posting-form-data-with-http-in-angularjs.htm
 */
// I provide a request-transformation method that is used to prepare the outgoing
// request as a FORM post instead of a JSON packet.
app.factory(
    "transformRequestAsFormPost",
    function () {
        // I prepare the request data for the form post.
        function transformRequest(data, getHeaders) {
            var headers = getHeaders();
            headers["Content-type"] = "application/x-www-form-urlencoded; charset=utf-8";
            return ( serializeData(data) );
        }

        // Return the factory value.
        return ( transformRequest );
        // ---
        // PRVIATE METHODS.
        // ---
        // I serialize the given Object into a key-value pair string. This
        // method expects an object and will default to the toString() method.
        // --
        // NOTE: This is an atered version of the jQuery.param() method which
        // will serialize a data collection for Form posting.
        // --
        // https://github.com/jquery/jquery/blob/master/src/serialize.js#L45
        function serializeData(data) {
            // If this is not an object, defer to native stringification.
            if (!angular.isObject(data)) {
                return ( ( data == null ) ? "" : data.toString() );
            }
            var buffer = [];
            // Serialize each key in the object.
            for (var name in data) {
                if (!data.hasOwnProperty(name)) {
                    continue;
                }
                var value = data[name];
                buffer.push(
                    encodeURIComponent(name) +
                    "=" +
                    encodeURIComponent(( value == null ) ? "" : value)
                );
            }
            // Serialize the buffer and clean it up for transportation.
            var source = buffer
                .join("&")
                .replace(/%20/g, "+")
                ;
            return ( source );
        }
    }
);

/*
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
 b
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

 */