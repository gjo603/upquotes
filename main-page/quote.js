


var quotes = 
[
    '"The way to get started is to quit talking and begin doing." -Walt Disney',
    'jhkjjlk',
    'bee good -m jones',
    '5',
    '2',
    '3',
    '4',
    '7',
    '8', 

]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

