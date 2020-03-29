function displayCards(searchResult) {
  //  console.log(searchResult);
  queryURL =
    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" +
    searchResult +
    "&tsyms=USD" +
    "&api_key=53590ae0afe52791fd1298ab52e1e95eebc6d048a9a5269b84d68debace612c0";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    //   console.log("got price query");
    var responseData = response.DISPLAY;
    for (let [coinID, coinValues] of Object.entries(responseData)) {
      for (let [coinFiat, coinDisplayValues] of Object.entries(coinValues)) {
        buildCard(coinID, coinDisplayValues);
      }
    }
  });

  function buildCard(coin_id, coinDisplayValues) {
    var { PRICE, VOLUME24HOUR, HIGH24HOUR, LOW24HOUR } = coinDisplayValues;
    // console.log(coin_id);
    // console.log(PRICE);
    var cardDiv = $("<div>")
      .addClass("col-sm-3 coinCard " + coin_id)
      .attr("id", coin_id);

    var cardHeader = $("<h4>")
      .addClass("card-header")
      .text(coin_id);

    var cardPrice = $("<div style=font-size:125%;>")
      .attr("id", "cardBack")
      .addClass("card-body")
      .text("Price: " + PRICE);

    var cardVol24hour = $("<div style=font-size:125%;>")
      .attr("id", "cardBack")
      .text("24 Hour Volume: " + VOLUME24HOUR)
      .addClass("card-body");

    var cardHigh24Hour = $("<div style=font-size:125%;>")
      .attr("id", "cardBack")
      .text("24 Hour High: " + HIGH24HOUR)
      .addClass("card-body");

    var cardLow24hour = $("<div style=font-size:125%;>")
      .attr("id", "cardBack")
      .text("24 Hour Low: " + LOW24HOUR)
      .addClass("card-body");

    var deleteBtn = $("<div>")
      .attr("id", "cardBack")
      .html(
        "<button type=button class=btn btn-outline-secondary id=deleteBtn>Delete</button>"
      )
      .addClass("card-body");

    cardDiv.append(
      cardHeader,
      cardPrice,
      cardVol24hour,
      cardHigh24Hour,
      cardLow24hour,
      deleteBtn
    );

    $("#add-crytocards").append(cardDiv);
  }
}
