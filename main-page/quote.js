


var quotes = 
[
    'The way to get started is to quit talking and begin doing. -Walt Disney', 
   'Your Faith can move mountains and your doubt can create them',
   'Faith is like wifi - It’s invisible but it has the power to connect you to what you need.',
   'Worry ends when Faith in God begins',
   'Feed your faith and your fears will starve to death',
   'Worry looks around - Regret looks back - Faith looks forward.',
   'A gem cannot be polished without friction, nor a man perfected without trials. - Lucius Annaeus Seneca',
'Carry on.  Things will work out.  If you keep trying and praying and working - things with work out.  They always do.  If you want to die at an early age - dwell on the negative.  Accentuate the positive and you will be around for a while - Pres. Gordon B. Hinckley',
'You have not failed until you quit trying - Pres. Gordon B. Hinckley',
'If life gets too hard to stand - Kneel.  - Pres. Gordon B. Hinckley',
'Even in our trials we can experience Joy and Peace!! - Robert D. Hales',
'No matter our circumstances - no matter our challenges or trials - there is something each day to embrace and cherish.  There is something in each day that can bring gratitude and joy if only we will see and appreciate it.  - Dieter F. Uchtdorf',



]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

