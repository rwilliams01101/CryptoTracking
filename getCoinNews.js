function displayNews(searchResult) {
  var queryURL =
    "https://min-api.cryptocompare.com/data/v2/news/?categories=" +
    searchResult +
    ",&lang=EN";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    for (i = 0; i < 3; i++) {
      var articleLink = response.Data[i].url;
      var articleDesc = response.Data[i].body;

      var divCard = $("<div class = card id = newsCard>");
      var addArticles = $("<a>");

      addArticles.attr("href", articleLink);
      var newsTitle = $("<h4>" + response.Data[i].title + "</h4>");

      addArticles.text(response.Data[i].title);
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
