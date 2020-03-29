// Event listener for search button
$(document).on("keypress", function(e) {
  if (e.which == 13) {
    $("#search").click();
  }
});

// Add code to pre-populate the notes and cards if there are coins in local storage.
$(document).ready(function() {
  var coinList = JSON.parse(window.localStorage.getItem("coins")) || [];
  coinList.forEach(displayAll);
});

function displayAll(searchResult) {
  displayNews(searchResult);
  displayCards(searchResult);
}
// Event listener for search button
$("#searchClick").on("click", function() {
  var searchResult = $(".form-control").val();
  // return if they didn't put anything in the form-controlbox
  if (searchResult == "") {
    return;
  }
  // Set form control box to null
  $(".form-control").val("");

  // Set the value to the search result or make the variable and an empty array
  var coinList = JSON.parse(window.localStorage.getItem("coins")) || [];

  // If the item is not in the array, add it to the string and the local array.
  if (coinList.indexOf(searchResult) < 0) {
    coinList.push(searchResult.toUpperCase());
    window.localStorage.setItem("coins", JSON.stringify(coinList));

    displayNews(searchResult);
    displayCards(searchResult);
  }
});

// Clears all cards and news.
$(document).on("click", "#deleteBtn", function() {
  //
  var deleteLS = this.closest(".col-sm-3").id;
  var coinList = JSON.parse(window.localStorage.getItem("coins"));
  var arrayPos = coinList.indexOf(deleteLS, coinList);
  coinList.splice(arrayPos, 1);
  window.localStorage.setItem("coins", JSON.stringify(coinList));
  var coinID = $(this)
    .closest(".coinCard")
    .remove();

  // $(this)
  // .closest(".col-sm-3")
  // .remove();
});

$("#clearClick").on("click", function() {
  var coinList = "";
  window.localStorage.removeItem("coins");
  location.reload();
});
