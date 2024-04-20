const quotes = [
  {
    quote: "Happiness is not mostly pleasure, but it is mostly victory.",
    author: "Harry Emerson Fosdick",
  },
  {
    quote:
      "Listen, you wanna change things in a big way, then you need to make some big changes",
    author: "Rocky Balboa",
  },
  {
    quote: "Today is life - the only life you are sure of.",
    author: "Dale Carnegie",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

randomNumber = Math.floor(Math.random() * quotes.length);
quote.innerText = quotes[randomNumber].quote;
author.innerText = quotes[randomNumber].author;
