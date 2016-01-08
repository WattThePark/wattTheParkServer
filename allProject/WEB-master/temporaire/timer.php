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
	<link href="css/accueil.css" rel="stylesheet">
    <link href="css/timer.css" rel="stylesheet">
	
	<script type="text/javascript" src="js/timer.js"></script>

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
<body>
	<div class="container">
	
			
		<div class="jumbotron">
			<span id="chronotime">0:00:00:00</span>
<form name="chronoForm">
    <input type="button" name="startstop" value="start!" onClick="chronoStart()" />
    <input type="button" name="reset" value="reset!" onClick="chronoReset()" />
    <script type="text/javascript" src="js/timer.js"></script>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<p>
			<center>
			<div id="mydiv">
			
				<img id="image" src="images/batterie.png">
				<h2 id="text"></h>

				<script type="text/javascript" src="js/pile.js"></script>
				
			</div>
			</center>
		
			</p>
			<br/>
			<br/>
			<br/>
			<div class="boutons">
				<p>
				<a class="btn btn-lg btn-success" href="./accueil.php" role="button">Quitter</a>
				<a class="btn btn-lg btn-success" href="./records.php" role="button">Records</a>
				</p>		
			</div>				
		</div>
		<footer class="footer">
			<p>Projet Intensif 2016 - Groupe 7 - Watt The Park </p>
		</footer>
	</div>
		

</body>
	
</html>