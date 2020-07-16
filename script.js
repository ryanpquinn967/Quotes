const quotes = [
    {
        name:'Helen Keller',
        quote:'“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”'
    },
    {
        name:'Mark Twain',
        quote:'“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.”'
    },
    {
        name:'Dr. Suess',
        quote:'“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.”'
    },
    {
        name:'Marilyn Monroe',
        quote:'“I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.”'
    },
    {
        name:'Stephen King',
        quote:'“Get busy living or get busy dying.”'
    },
    {
        name:'Mark Caine',
        quote:'“The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.”'
    },

]

//target what we want, a button
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

// place an event listener in the button.
quoteBtn.addEventListener('click',displayQuote);

function displayQuote (){
    let random = Math.floor(Math.random()*quotes.length);
    console.log(random);
    quoteAuthor.innerHTML = quotes[random].name;
    quote.innerHTML = quotes[random].quote;
    
}