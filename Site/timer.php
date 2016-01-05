<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Starter Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" rel="stylesheet">
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/starter-template.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
	
	<div class="container">
	<!-- time to add the controls -->
	<input id="start" name="controls" type="radio" />
	<input id="stop" name="controls" type="radio" />
	<input id="reset" name="controls" type="radio" />
	<div class="horloge">
		<img src="images/horloge.png" alt="horloge" height="42" width="42">
	</div>
	<div class="timer">	
		<div class="cell">
			<div class="numbers tensecond movesix">0 1 2 3 4 5 6</div>
		</div>
		<div class="cell">
			<div class="numbers second moveten">0 1 2 3 4 5 6 7 8 9</div>
		</div>
		<div class="cell divider"><div class="numbers">:</div></div>
		<div class="cell">
			<div class="numbers milisecond moveten">0 1 2 3 4 5 6 7 8 9</div>
		</div>
		<div class="cell">
			<div class="numbers tenmilisecond moveten">0 1 2 3 4 5 6 7 8 9</div>
		</div>
	</div>
	<!-- Lables for the controls -->
	<div id="timer_controls">
		<label for="start">Start</label>
		<!--<label for="stop">Stop</label>
		<label for="reset">Reset</label>-->
	</div>
</div>

	
</html>