function getCoinList(coinList) {
  var settings = {
    url:
      "https://min-api.cryptocompare.com/data/blockchain/list?apiKey=4a081438c0e9a79c21e13c75ea72cf53a77c2035f2698c5d8bbc2b51eeabf18b",
    method: "GET"
  };

  $.ajax(settings).then(function(response) {
    var responseData = response.Data;
    // console.log(responseData);

    for (key in responseData) {
      $("#add-coinList").append(
        $("<option>")
          .val(key)
          .text(key)
      );
    }
  });
}

$(document).ready(function() {
  getCoinList();
});
