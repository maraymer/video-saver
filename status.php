<?php

  function endsWith( $haystack, $needle ) {
    return $needle === "" || (($temp = strlen($haystack) - strlen($needle)) >= 0 && strpos($haystack, $needle, $temp) !== false);
  }

     $result = "";
  $inprocess = array();
       $done = array();
  $files = scandir('.');
  foreach($files as $file) {
    if ( endsWith( $file, 'part' ) ) {
      array_push( $inprocess, $file );
    }
    if ( endsWith( $file, 'mp4' ) ) {
      array_push( $done, $file );
    }
  }
  header( "Content-Type: application/json" );
  echo '{ "done" : ' . json_encode( $done ) . ', "inprocess" : ' . json_encode( $inprocess ) . ' }';
?>