$("#search").on("click", function() {
  var searchResult = $(".form-control").val();
  console.log(searchResult);
  displayNews(searchResult);

  $(".form-control").val("");
});


function displayNews(searchResult) {
  var queryURL =
    "http://newsapi.org/v2/everything?q=" +
    searchResult +
    "&" +
    "sortBy=popularity&" +
    "apiKey=38c87e1ae12f4acfb71ae21131a63bce";

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
      console.log(divCard)
      var addArticles = $("<a>");
      var addImage = $("<img>");
      
      addImage.attr("src", response.articles[i].urlToImage);
      addArticles.attr("href", articleLink);
      var newsTitle = $("<h4>" + response.articles[i].title + "</h4>")
      


      addArticles.text(response.articles[i].title);
      divCard.append(newsTitle, articleDesc, "<br>", "<h4> Read here:  </h4>", addArticles,  "<br>");
      $("#result-section").prepend(divCard);


    }
  });
};
$("#clear").on('click', function(){
    location.reload();

}) ;