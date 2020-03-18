/* FOR REFERECE ONLY. Once index.html is updated, will use id/classes accordingly

    Add dynamic HTML to aggregate the coin.

Add cards for each coin based on data in local storage.
Add delete button that will remove from local storage and page.
Display information on card
Add data to card.
Add delete button on card


<div class="container-fluid">
<div class="row">
  <!-- I question the "aside" element here for web accessibiliy reasons, maybe list as "section" instead -->
  <aside class="col-lg-3 bg-light">
    <!-- small header above search input -->
    <h5 class="mt-1">Search for a City:</h5>
    <div class="form-inline form-group">
      <!-- input field -->
      <input class="form-control" type="text" id="search-value" />
      <!-- search button -->
      <button class="btn btn-primary" id="search-button"> <i class="fa fa-search"></i> </button>
      <button id="clrBtn">Clear</button>
    </div>
    <!-- beginning of unordered list -->
    <ul class="list-group history"></ul>
  </aside> */

function buildCard() {
  // var {
  //   coin_id,
  //   coin_name = "Neo",
  //   last_price,
  //   price_24hr_pcnt,
  //   volume_24hr,
  //   vol_24hr_pcnt
  // } = response;

  // this is a placeholder until API data becomes available
  var coin_name = "Neo";

  var cardDiv = $("<div>").addClass("col-sm-3");

  var cardDivHeader = $("<div>")
    .addClass("card-header text-center")
    .text(coin_name);

  // this is a placeholder until API data becomes available. Will save all icons in "Assets" folder
  var img =$("<img>").attr("src", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/48/NEO-icon.png");

  var cardDivBody = $("<P>")
    .addClass("card-text")
    .text("Price: $50.00");

  var coinVolume = $("<div>").text("Volume: 15000");

  var deleteBtn = $("<div>").html("<button>Delete</button>");

  // type="button" class="btn btn-outline-dark"
  // .text("Price: " + formatter.format(last_price)); <<<< this was line 73
  // cardDivH5 = $("<h5>");
  // cardDivH5.addClass("card-title");

  cardDiv.append(
    cardDivHeader,
    img,
    cardDivBody,
    coinVolume,
    deleteBtn);

  $("#cardRender").append(cardDiv);
}

// Clear button removes all items in "col-sm-3" class
$("#clrBtn").on("click", function() {
  console.log("Clearworks")
  $(".col-sm-3").remove();
});

// TODO: Still developing deleteBtn functionality, need to get unique ids to generate for cards
$("#deleteBtn").on("click", function() {
  console.log("deleteworks")
});

// Event listener for search button
$("#searchBtn").on("click", function() {
  var searchValue = $("#exampleFormControlInput1").val();
  // take the value of "exampleFormControlInput1" id and clear the value
  $("#exampleFormControlInput1").val("");
  // fire function "buildCard" with searchValue as an argument
  buildCard(searchValue);
});
