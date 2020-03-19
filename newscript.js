$("#search").on('click', function(){
    var searchResult = $('.form-control').val();
    console.log(searchResult)
    displayNews();
})

var queryURL= "http://newsapi.org/v2/everything?q=cryptocurrencies&" +
             'sortBy=popularity&' +
              'apiKey=38c87e1ae12f4acfb71ae21131a63bce';


function displayNews(){
$.ajax({
   url: queryURL,
   method: "GET"
})
.then(function(response){
    console.log(response)
   
    for(i=0; i<3; i++){

   var articleTitle = response.articles[i].url;
    console.log(articleTitle);

    var addArticles = $("<a>");
    var addImage = $("<img>")
    addImage.attr("src", response.articles[i].urlToImage)
   
    addArticles.attr("href", articleTitle);
    addArticles.text(response.articles[i].title);
    $("#result-section").append(addImage, addArticles, "<br>");

    }
})
}
