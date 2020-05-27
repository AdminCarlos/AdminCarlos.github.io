$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "roster.xml",
        dataType: "xml",
        success: function(xml){
     
        alert("Success!!");
     
      },
      error: function() {
        alert('An error occurred while processing XML file.');
      }
      });

})

function showSpriteAndValues() {

    $fighterName = $("#selectFighter").val();
    
    $("#imgFighter").attr("src", "images/" + $fighterName + "portrait.jpg");

    
    //alert($fighterName);

}