/* FOR REFERECE ONLY. 

Add dynamic HTML to aggregate the coin.

Add cards for each coin based on data in local storage.
Add delete button that will remove from local storage and page.
Display information on card
Add data to card.
Add delete button on card */
var coin_id = "";
function searchStart() {
var searchValue = "btc";

// this is a placeholder until API data becomes available
// var coin_name = "Neo";
// beginning of changes
// BravenewCoin 
var settings = {
  async: true,
  crossDomain: true,
  url:
  "https://bravenewcoin-v1.p.rapidapi.com/ticker?show=usd&coin=" +
  searchValue,
  method: "GET",
  headers: {
    "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
    "x-rapidapi-key": "3cdd6db29bmshe1fcadac9208badp13fe1ajsna4db56902884"
  }
};
$.ajax(settings).then(function(response) {
  // console.log(response);
  // console.log(searchValue);
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
});
}

// end of changes
function buildCard(response) {

  var cardDiv = $("<div>").addClass("col-sm-3");

  var cardDivHeader = $("<div>")
    .addClass("card-header")
    .text(coin_name);

  // this is a placeholder until API data becomes available. Will save all icons in "Assets" folder
  var img = $("<img>").attr(
    "src",
    "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/48/NEO-icon.png"
  );

  var cardDivBody = $("<P>")
    .addClass("card-text")
    .text("Price: $50.00");

  var coinVolume = $("<div>").text("Volume: 15000");

  var deleteBtn = $("<div>").html("<button id=deleteBtn>Delete</button>");

  // type="button" class="btn btn-outline-dark"
  // .text("Price: " + formatter.format(last_price)); <<<< this was line 73
  // cardDivH5 = $("<h5>");
  // cardDivH5.addClass("card-title");

  cardDiv.append(cardDivHeader, img, cardDivBody, coinVolume, deleteBtn);

  $("#cardRender").append(cardDiv);
}

// Clear button removes all items in "col-sm-3" class
$("#clrBtn").on("click", function() {
  $(".col-sm-3").remove();
});

// TODO: Still developing deleteBtn functionality, need to get unique ids to generate for cards
$(document).on("click", '#deleteBtn', function() {

  console.log("delete is working");
});

// Event listener for search button
$("#searchBtn").on("click", function() {
  var searchValue = $("#exampleFormControlInput1").val();
  // take the value of "exampleFormControlInput1" id and clear the value
  $("#exampleFormControlInput1").val("");
  // fire function "buildCard" with searchValue as an argument
  searchStart(searchValue);
});
