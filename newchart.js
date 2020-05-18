$.ajax(settings).then(function(response) {
    var {
      coin_id,
      coin_name,
      last_price,
      price_24hr_pcnt,
      volume_24hr
    } = response;

    var cardDiv = $("<div>").addClass("col-3");

    var cardDivHeader = $("<h4>")
      .addClass("card-header deleteCard")
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

    cardDiv.append(cardDivHeader, cardDivBody, coin24hr, coinVolume, deleteBtn);

    $("#add-crytocards").append(cardDiv);
  });


// TODO: Still developing deleteBtn functionality, need to get unique ids to generate for cards
$(document).on("click", "#deleteBtn", function() {
  $(this).closest('.col-3').remove();
});

function displayNews(searchResult) {
  if(searchResult=="NEO"||searchResult=="neo"){
    searchResult = "neo cryptocurrency"
  }
  var queryURL =
  "https://newsapi.org/v2/everything?language=en&q=" +
  searchResult +
  "&" +
  "sortBy=popularity&" +
  "apiKey=38c87e1ae12f4acfb71ae21131a63bce";
  console.log("S Result: " + searchResult);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    for (i = 0; i < 3; i++) {
      var articleLink = response.articles[i].url;
      var articleDesc = response.articles[i].description;
      var divCard = $("<div class = card id = newsCard>");
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
  var coinList = "";
  window.localStorage.removeItem("coins");
  location.reload();
  
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    var x = document.getElementById("charts");
    

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  })
    });

var coinPriceArray = [];
    var coinDateArray = [];

$(document).ready(function() {
  var coinList = JSON.parse(window.localStorage.getItem("coins")) || [];
  loadHistData(coinList[0]);
});
    
async function loadHistData(coin) {
 var queryURL =
    "https://min-api.cryptocompare.com/data/v2/histoday?fsym=" +
    coin +
    "&tsym=USD&limit=10&api_key=d797606d445e37e288f15360b88c112e5f8629b3437e482303471a25b1785e78";
  await $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    

    var coinArray = response.Data.Data;
    console.log(coinArray);
    for (
      let coinArrayCnt = 0;
      coinArrayCnt < coinArray.length;
      coinArrayCnt++
    ) {
      var time = Number(coinArray[coinArrayCnt].time);
      var price = Number(coinArray[coinArrayCnt].close);

      coinDateArray.push(time);
      coinPriceArray.push(price);
      
    }
    console.log(coinPriceArray);
  
    new Chart(document.getElementById("myChart"), {
      type: 'line',
      data: {
        labels:coinDateArray,
        datasets: [{ 
            data: coinPriceArray,
            label: "Bitcoin",
            borderColor: "#3e95cd",
            fill: false
          }, 
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Cryptocurrency Prices (March)'
        }
      }
    }); 
  });
}
