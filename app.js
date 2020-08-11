/** @format */

const arrayOfQuotes = [
  {
    author: "Michele Ruiz",
    quote:
      "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
  },
  {
    author: "Joss Whedon",
    quote:
      "“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.”",
  },
  {
    author: "Andy Grove",
    quote: "Only the paranoid survive.",
  },
  {
    author: "Babe Ruth",
    quote: "It’s hard to beat a person who never gives up.”",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Abraham Lincoln",
    quote: "Whatever you are, be a good one.",
  },
  {
    author: "Eleanor Roosevelt",
    quote: "Do one thing every day that scares you.",
  },
  {
    author: "Aristotle",
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  },
  {
    author: "Michael Jordan",
    quote:
      "Some people want it to happen, some wish it would happen, others make it happen.",
  },
  {
    author: "Theodore Roosevelt",
    quote: "Keep your eyes on the stars, and your feet on the ground.",
  },
  {
    author: "Sel Hermon",
    quote: "Your back foot determines your forward step",
  },
  {
    author: "Sel Hermon",
    quote:
      "What you do and ignore is what another man watches with keen interest and attention",
  },
];

function generateQuote() {
  const random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  document.querySelector(
    "#quoteOutput"
  ).textContent = `\"${arrayOfQuotes[random].quote}\"`;
  document.querySelector(
    "#authorOutput"
  ).textContent = `--${arrayOfQuotes[random].author}`;
}
