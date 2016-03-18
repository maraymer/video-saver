<?php
  $url = $_POST['url'];
  $cmd = "/usr/bin/python /usr/bin/youtube-dl --skip-download -j $url";
  exec( $cmd, $output );
  echo json_encode( $output );
?>