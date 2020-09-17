const quotes = [
{
  name:'Stephen King',
  quote:'Get busy living or get busy dying.'
},
{
  name:'John F.Kennedy',
  quote:'Those who dare to fail miserably can achieve greatly.'
},
{
  name:'Abraham Lincoln',
  quote:"I'm a success today becouse I had a friend who believed in me and I didn't have the heart to let his down."
},
{
  name:'Leonardo Da Vanci',
  quote:'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them, They went out and happened to things.'
},
{
  name:'Leo Tolstoy',
  quote:'If you want to be happy, be.'
}
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote(){
  let number = Math.floor(Math.random()*quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}

// const simpleQuote = [
//   {
//     name:'author number 1',
//     quote:'quote number 1'
//   },
//   {
//     name:'author number 2',
//     quote:'quote number 2'
//   }
// ]
