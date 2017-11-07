$(document).ready(function(){

 


var searchButtons = ["octopus", "squid", "cuttlefish"];
var animateUrl;




var searchTerm = $(this).attr("#custom-search-input");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=c3BcQjpHG5GUv3Ft5llF3ztZI2fNEc0J&limit=5";

  $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    
      for (i = 0; i < response.length; i++){
        var newDiv = $("<div>");
        var image = $("<img>");
        var imageURL = response.data[i].images.fixed_height_still.url;
        animateUrl =  response.data[i].images.fixed_height.url;
        console.log(imageURL);
        newDiv.addclass("gifDiv");
        newImage.attr("src", imageURL);
        newDiv.html(image);
        $("#gifs").prepend(newDiv)
      }

    });




function renderButtons() {
    $("#buttonDisplay").empty();

    for(i = 0; i < searchArray.length; i++){
      var button = $("<button>");
      button.addClass("buttonClass");
      button.attr("search-term", searchArray[i]);
      button.text(searchArray[i]);
      $("#buttonDisplay").append(button);
    };
  };
  });
