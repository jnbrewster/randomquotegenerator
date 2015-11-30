$(document).ready(function() {
    generate();

    function getQuotes() {
        var quotes = ["Oooooooh!", "Podo!", "Dohdoh!"];
        var authors = ["-Leon", "-Leon", "-Leon"];

        randomNum = quotes[Math.floor(Math.random()*quotes.length)];

        var randomQuote = quotes[randomNum];
        var corresAuthor = authors[randomNum];


      }

    $(".button").on( "click", function() {
    generate();
    });
});
