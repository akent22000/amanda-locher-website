



// Powered by Quotable
// https://github.com/lukePeavey/quotable

document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const button = document.querySelector("button");
  const quote = document.querySelector("blockquote p");
  const cite = document.querySelector("blockquote cite");

  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quote.textContent = data.content;
      cite.textContent = data.author;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }

  // Attach an event listener to the `button`
  button.addEventListener("click", updateQuote);

  // call updateQuote once when page loads
  updateQuote();
});







// let s = 1;

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
//   circle(200, 200, s);
//   s = s + 1;
// }


// document.getElementById("myBtn").addEventListener("click", renderData);

async function fetchData() {

  try {
    //fetching the array data from api
      const response = await fetch('https://api.quotable.io/quotes/random?tags=motivational');
      const data = await response.json();
      // console.log(data);
      
      return data;
  } catch (error) {
    //log error if issues with fetching the array data from api
      console.error('Error fetching data:', error);
  }
  console.log(data);

}
fetchData();


// Function to render data in cards
async function renderData() {
  //declaring html div container
  const container = document.querySelector('.container');
  //decalring data response from fetchData function
  const data = await fetchData();

  if (!data) {
    return;

    }

  //non-mutate array 
  //data = my array
  //this is a callback function
  data.forEach(item => {
    
    //create html elements
      const card = document.createElement('div');
      card.classList.add('card');

      const content = document.createElement('h2');
      content.textContent = item.content;


      const author = document.createElement('p');
      author.textContent = item.author;

      const body = document.createElement('p');
      body.textContent = item.body;

      card.appendChild(content);
      card.appendChild(author);
      card.appendChild(body);
      container.appendChild(card);
  });
}

// Call the renderData function to display data
renderData();

let btn = document.getElementById("myBtn");
btn.addEventListener("click", renderData);




