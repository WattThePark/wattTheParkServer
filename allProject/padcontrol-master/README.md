# padcontrol

### Requirements
* python-rtmidi
* libjack-jackd2-dev libasound-dev
* Flask
* Python 2.7.X

### Launch Server

```
sudo python server.py
```

### Integrate into a website
(see index.html)

HTML:
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Example</title>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  </head>
  <body>
      <div>
        <h3 id="number">0</h3>
      </div>
  </body>
</html>
```

JS:
```
<script type="text/javascript">
          window.setInterval(function(){
              $.ajax({
               url : 'http://<server>/watt',
               type : 'GET',
               success : function(code_html, statut){
                  $("#number").text(code_html+" W");
                },
               });
          },100);
      </script>
```
