$("button").on("click", function(){



var searchButtons = ["octopus", "squid", "cuttlefish"];
var animateUrl;

var animal = $(this).attr("data-animal");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

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

           function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons").empty();

        // Looping through the array of movies
        for (var i = 0; i < searchButtons.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var gifButtons = $("<button>");
          // Adding a class of movie to our button
          gifButtons.addClass("movie");
          // Adding a data-attribute
          gifButtons.attr("data-name", searchButtons[i]);
          // Providing the initial button text
          gifButtons.text(searchButtons[i]);
          // Adding the button to the buttons-view div
          $("#buttons").append(a);
        }

        };

      

    });




