//array to hold the value of the quotes
var arrayOfQuotes = [
  {
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want.",
  },
  {
    author: "Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  { author: "Frank Sinatra", quote: "The best revenge is massive success." },
  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Frank Zappa",
    quote: "So many books, so little time.",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
];

// Initialize a variable to store the index of the last displayed quote
var lastIndex = -1;

function generateQuote() {
  var randomIndex;

  // Generate a new random index that is different from the last one
  for (var i = 0; i < arrayOfQuotes.length; i++) {
    randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    if (randomIndex !== lastIndex) {
      break;
    }
  }

  // Update the index of the last displayed quote
  lastIndex = randomIndex;

  // Get the random quote object
  var randomQuote = arrayOfQuotes[randomIndex];

  // Update the HTML elements with the quote and author
  document.getElementById("quote").innerHTML = `"${randomQuote.quote}"`;
  document.getElementById("author").innerHTML = `-- ${randomQuote.author}`;
}
