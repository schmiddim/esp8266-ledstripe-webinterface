<?php
/**
 * enter your domain without trailing slash
 */
define('DOMAIN', 'http://ng.local');
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>ESP8266 LED Control</title>
	<link rel="stylesheet" href="<?php echo DOMAIN;?>/assets/css/main.css">
</head>
<body ng-app="myApp">
<div class="container">
	<div class="header clearfix">
		<nav>
			<ul class="nav nav-pills pull-right">
				<li role="presentation" class="active"><a href="#">Home</a></li>
				<li role="presentation"><a href="#">About</a></li>
				<li role="presentation"><a href="#">Contact</a></li>
			</ul>
		</nav>
		<h3 class="text-muted">Light Control</h3>
	</div>
	<div class="jumbotron" ng-controller="formCtrl as FormController">
		<form role="form" id="target"  ng-submit="FormController.submitValues()">
			<div class="form-group">
				<label for="red">Red</label>
				<input type="number" min="0" max="255" class="form-control"  name="red" ng-model="color.red" value="127">
			</div>
			<div class="form-group">
				<label for="green">Green</label>
				<input type="number" min="0" max="255" class="form-control" name="green" ng-model="color.green" value="127">
			</div>
			<div class="form-group">
				<label for="blue">Blue</label>
				<input type="number" min="0" max="255" class="form-control"  name="blue"  ng-model="color.blue" value="127">
			</div>

			<button   type="submit" class="btn btn-default" ><i class="loading-spinner fa fa-spinner fa-spin"></i> Change Color</button>
		</form>
		<br/>
		<button type="button" id="leds-off" class="btn btn-danger btn-lg"  ng-click="FormController.turnLightOff()"><i class="loading-spinner fa fa-spinner fa-spin"></i> Leds off</button>
		<button type="button" id="leds-on" class="btn  btn-primary btn-lg"  ng-click="FormController.turnLightOn()"><i class="loading-spinner fa fa-spinner fa-spin"></i> Leds on</button>
	</div>
	<footer class="footer">
		<p><a href="https://www.radikalblogger.de">© 2016 Michael Schmitt</a></p>
	</footer>

</div>
<script src="<?php echo DOMAIN;?>/assets/scripts/theme.min.js"></script>

</body>
</html>
