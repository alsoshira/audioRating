$(function() {
  $( "#play" ).button({
    text: false,
    icons: {
      primary: "ui-icon-play"
    }
  })
  .click(function() {
    var options;
    if ( $( this ).text() === "play" ) {
      options = {
        label: "pause",
        icons: {
          primary: "ui-icon-pause"
        }
      };
    } else {
      options = {
        label: "play",
        icons: {
          primary: "ui-icon-play"
        }
      };
    }
    $( this ).button( "option", options );
  });
  $( "#stop" ).button({
    text: false,
    icons: {
      primary: "ui-icon-stop"
    }
  })
  .click(function() {
    $( "#play" ).button( "option", {
      label: "play",
      icons: {
        primary: "ui-icon-play"
      }
    });
  });
});


function greeter(sliderVals) {
  alert(sliderVals.toString());
  return(sliderVals);
}




