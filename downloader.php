<?php
   $url = $_POST['url'];
   $fmt = $_POST['fmt'];
   error_log( $url );
   $cmd = "/usr/bin/python /usr/bin/youtube-dl -f $fmt -t $url > /dev/null 2> /dev/null &";
  error_log( $cmd );
    shell_exec( $cmd );
  echo json_encode( $url );
?>