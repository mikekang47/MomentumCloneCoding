const quotes = [
    {
        quote:"自强不息.",
        author:"Confucious",

    },
    {
        quote:"日新又日新.",
        author:"Confucious",   
    },
    {
        quote:"Well done is better than well said.",
        author:"Benjamin Franklin",
    },
    {
        quote:"Cogito ergo sum.",
        author:"René Descartes",
    },
    {
        quote:"Happiness can exist only in acceptance.",
        author:"Jeorge Orwell",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = `${todaysQuote.quote}`;
author.innerHTML= `-${todaysQuote.author}`;
