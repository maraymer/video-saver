<html>
  <head>
    <link rel='stylesheet' href='css/index.css' type='text/css' media=''/>
  </head>
  <body>
    <h1>video downloader</h1>
    <label for='url'>URL:<input type='text' name='url' id='url'/></br>
    <label for='fmt'>Video Format:</label><select name='fmt' id='fmt'></select>
    <p><a href='#' id='downloadlink'>Download All Of These</a></p>
    <h2>downloads in process</h2>
    <ul id="inprocess"></ul>
    <h2>completed downloads</h2>
    <ul id="done"></ul>
    <script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js'></script>
    <script type='text/javascript' src='js/index.js'></script>
  </body>
</html>
