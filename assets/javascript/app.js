


var searchButtons = ["octopus", "squid", "cuttlefish"];

console.log(searchButtons);

function displayAnimals(){

var animateUrl;


var animal = $(this).attr("data-animal");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        var results = response.data;

        for (var i = 0; i <results.length; i++) {
          

          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var animalGif = $("<img>");
         
          animalGif.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(animalGif);

          $("#gifs").prepend(gifDiv);
          
          console.log(response);
        };
      });
    };

      
      function renderButtons() {

   
        $("#buttons").empty();

    
        for (var i = 0; i < searchButtons.length; i++) {

          var gifButtons = $("<button>");
          gifButtons.addClass("movie");
   
          gifButtons.attr("data-name", searchButtons[i]);

          gifButtons.text(searchButtons[i]);
        
          $("#buttons").append(gifButtons);
          console.log(gifbuttons);
        
        };

      };

      





