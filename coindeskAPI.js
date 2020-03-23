// $(document).ready(function() {
//   var coinList = JSON.parse(window.localStorage.getItem("coins")) || [];
//   coinList.forEach(loadHistData);
// });

// function loadHistData(coin) {
//   var queryURL =
//     "https://min-api.cryptocompare.com/data/v2/histoday?fsym=" +
//     coin +
//     "&tsym=USD&limit=10&api_key=d797606d445e37e288f15360b88c112e5f8629b3437e482303471a25b1785e78";
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     // console.log(response);
//   });
// }
