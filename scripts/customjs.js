var fighterIndex = 0;

function fillFighterSelect() {

  $.ajax({
    type: "GET",
    url: "roster.xml",
    dataType: "xml",
    success: function(response){

      $(response).find("name").each(function() {

        $("#selectFighter").append('<option value=' + $(this).text() + '> ' + $(this).text() + ' </option>');

      });

  },
  error: function() {
    alert('Error reading data while: FILLING THE SELECT MENU.');
  }
  });

}

function changeFighter(direction) {

  $.ajax({
    type: "GET",
    url: "roster.xml",
    dataType: "xml",
    success: function(response){

      if (direction == "right") {

        fighterIndex = fighterIndex + 1;
    
        if (fighterIndex > ($(response).find("name").length - 1)) {

          fighterIndex = 0;

        }
    
      }
    
      else if (direction == "left") {
    
        if (fighterIndex == 0) {

          fighterIndex = $(response).find("name").length - 1;

        }

        else {

          fighterIndex = fighterIndex - 1;

        }
    
      }
    
      else {
    
        fighterIndex = fighterIndex;
    
      }

      var fighterName = [];
      
      $(response).find("name").each(function() {

        fighterName.push($(this).text());

      });

      console.log(fighterName[fighterIndex]);

      $("#imgFighter").attr("src", "images/" + fighterName[fighterIndex] + "portrait.jpg");

      $("#fighterNameSpan").text("Name: " + $(response).find(fighterName[fighterIndex]).find("name").text());
      $("#fighterHealthSpan").text("Health: " + $(response).find(fighterName[fighterIndex]).find("health").text());
      $("#fighterAttackSpan").text("Attack: " + $(response).find(fighterName[fighterIndex]).find("attack").text());
      $("#fighterDefenseSpan").text("Defense: " + $(response).find(fighterName[fighterIndex]).find("defense").text());
      $("#fighterSpeedSpan").text("Speed: " + $(response).find(fighterName[fighterIndex]).find("speed").text());

  },
  error: function() {
    alert('An error occurred while processing data from fighters.');
  }
  });

}

