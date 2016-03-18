
  var downloadlink = function( ) {
    var  url = $('#url').val();

    var  fmt = $('#fmt').find(":selected").val();
    if ( fmt == "" ) {}
    else {
      var data = { url : url, fmt : fmt };
      var opts = { url : "downloader.php", data : data, type :'POST', dataType : "json"  };
      $.ajax( opts ).done( function( data ) {
        $("#inprocess").html( "" );
        $("#inprocess").append( "<li>" + data + "</li>" );
      });
      $("#url").val( "" );
    }
    return false;
  };

  var pole = function() {
    var opts = { url : "status.php", type :'GET', dataType : "json"  };
    $.ajax( opts ).done( function( resp ) {
      var o = resp;
      var done = o.done;
      var inprocess = typeof( o.inprocess ) == "undefined" ? null : o.inprocess;
      if ( inprocess ) {
        $("#inprocess").html( "" );
        for ( var i = 0; i < inprocess.length; i++ ) {
          $("#inprocess").append( "<li>" + inprocess[i] + "</li>" );
        }
      }
      if ( done ) {
        $("#done").html( "" );
        for ( var i = 0; i < done.length; i++ ) {
          $("#done").append( "<li><a href='" + done[i] + "'>" + done[i] + "</a></li>" );
        }
      }
    });
    setTimeout( pole, 10000 );
  };

  var lastValue = "";
  var onurl = function() {
    var url = $("#url").val();
    if ( typeof(url) == "undefined" ) {}
    else {
      if ( url != lastValue ) {
        var data = { url : url };
        var opts = { url : "formats.php", data : data, type :'POST', dataType : "json"  };
        $.ajax( opts ).done( function( data ) {
          $("#fmt").html( "" );
          var o = JSON.parse( data[0] );
          var formats =  o.formats;
          for ( var i = 0; i < formats.length; i++ ) {
            var  raw = formats[i].format;
            var    a = raw.split("-");
            var   id = a[0].trim();
            var text = a[1].trim();
            $("#fmt").append( "<option value='" + id + "'>" + text + "</option>");
          }
        });
      }
    }
  };

  var init_index = function() {
    $("#downloadlink").click( downloadlink );
    pole();
    $("#url").on('change keyup paste', onurl );
    $("#fmt").append( "<option>Enter a url to get format</option>");
  };
  $(document).ready( init_index );
