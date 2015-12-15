$(document).ready(function() {

  function getQuote() {
    var quotes = ["Oooh!",
                  "Podo!",
                  "Dohdoh!",
                  "Gyul!",
                  "Dada!",
                  "Mama!",
                  "Omma!"];

    var authors = ["-Leon",
                   "-Leon",
                   "-Leon",
                   "-Leon",
                   "-Leon",
                   "-Leon",
                   "-Leon"];

   var randomNum = Math.floor(Math.random()*quotes.length);

   var randomQuote = quotes[randomNum];
   var corresAuthor = authors[randomNum];

   $('.quote').text(randomQuote);
   $('.author').text(corresAuthor);
  }
  $(".btn").on("click", function() {
    getQuote();
  });
});
