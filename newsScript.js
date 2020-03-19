/* FOR REFERECE ONLY. 

Add dynamic HTML to aggregate the coin.

Add cards for each coin based on data in local storage.
Add delete button that will remove from local storage and page.
Display information on card
Add data to card.
Add delete button on card */

// var coin_id = "";
var coin_name = "";
var last_price = "";
var price_24hr_pcnt = "";
var volume_24hr = "";
var vol_24hr_pcnt = "";
// var searchResult = "";

// Clear button removes all items in "col-sm-3" class
// covered on newsScript.js
// $("#clear").on("click", function() {
//   $(".col-12").remove();
// });

// Event listener for search button
$("#search").on("click", function() {
  var searchResult = $(".form-control").val();

  // Set the value to the search result or make the variable and an empty array
  var coinList = JSON.parse(window.localStorage.getItem("coins")) || [];

  // If the item is not in the array, add it to the string and the local array.
  if (coinList.indexOf(searchResult) < 0) {
    coinList.push(searchResult.toUpperCase());
    window.localStorage.setItem("coins", JSON.stringify(coinList));
  }

  displayNews(searchResult);

  $(".form-control").val("");
  console.log("searchResult :" + searchResult);
  if (searchResult == "") {
    return;
  }
  // take the value of "exampleFormControlInput1" id and clear the value
  $("#exampleFormControlInput1").val("");
  // fire function "buildCard" with searchResult as an argument
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=" +
      searchResult,
    method: "GET",
    headers: {
      "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
      "x-rapidapi-key": "3cdd6db29bmshe1fcadac9208badp13fe1ajsna4db56902884"
    }
  };
  $.ajax(settings).then(function(response) {
    var {
      coin_id,
      coin_name,
      last_price,
      price_24hr_pcnt,
      volume_24hr,
      vol_24hr_pcnt
    } = response;
    console.log(coin_id);
    console.log(coin_name);
    console.log(last_price);
    console.log(price_24hr_pcnt);
    console.log(volume_24hr);
    var cardDiv = $("<div>").addClass("col-12");

    var cardDivHeader = $("<h4>")
      .addClass("card-header")
      .text(coin_id + " | " + coin_name);

    var cardDivBody = $("<div style=font-size:125%;>")
      .addClass("card-body")
      .text("Price: " + last_price);

    var coin24hr = $("<div style=font-size:125%;>")
      .text("Daily Variation: " + price_24hr_pcnt)
      .addClass("card-body");

    var coinVolume = $("<div style=font-size:125%;>")
      .text("Volume: " + volume_24hr)
      .addClass("card-body");

    var deleteBtn = $("<div>")
      .html("<button id=deleteBtn>Delete</button>")
      .addClass("card-body");

    // type="button" class="btn btn-outline-dark"
    // .text("Price: " + formatter.format(last_price)); <<<< this was line 73
    // cardDivH5 = $("<h5>");
    // cardDivH5.addClass("card-title");

    cardDiv.append(cardDivHeader, cardDivBody, coin24hr, coinVolume, deleteBtn);

    // $("#cardRender").append(cardDiv); cryptoCards
    $("#add-crytocards").append(cardDiv);
  });
});

// TODO: Still developing deleteBtn functionality, need to get unique ids to generate for cards
$(document).on("click", "#deleteBtn", function() {
  console.log("delete is working");
});

// $("#search").on("click", function() {
//   var searchResult = $(".form-control").val();
//   console.log(searchResult);
//   // displayNews(searchResult);

//   // $(".form-control").val("");
// });

function displayNews(searchResult) {
  var queryURL =
    "https://newsapi.org/v2/everything?q=" +
    searchResult +
    "&" +
    "sortBy=popularity&" +
    "apiKey=38c87e1ae12f4acfb71ae21131a63bce";
  console.log("S Result: " + searchResult);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    for (i = 0; i < 3; i++) {
      var articleLink = response.articles[i].url;
      var articleDesc = response.articles[i].description;

      console.log(articleLink);

      var divCard = $("<div class = card id = newsCard>");
      console.log(divCard);
      var addArticles = $("<a>");
      var addImage = $("<img>");

      addImage.attr("src", response.articles[i].urlToImage);
      addArticles.attr("href", articleLink);
      var newsTitle = $("<h4>" + response.articles[i].title + "</h4>");

      addArticles.text(response.articles[i].title);
      divCard.append(
        newsTitle,
        articleDesc,
        "<br>",
        "<h4> Read here:  </h4>",
        addArticles,
        "<br>"
      );
      $("#result-section").prepend(divCard);
    }
  });
}
$("#clear").on("click", function() {
  location.reload();
});
