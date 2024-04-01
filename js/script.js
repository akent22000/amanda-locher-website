//////////////////////////////////////////////////////////
//#1 eventListener - DOM
// Load
document.addEventListener('DOMContentLoaded', () => welcome(), fadeIn());

/////////////////////////////////////////////////////////

// Define api urls
let apiUrl = 'https://api.quotable.io/random?tags='

let motivationalUrl = 'motivational';
let happyUrl = 'happiness'
let friendlyUrl = 'friendship';
let sillyUrl = 'humorous';
let techyUrl = 'technology';

let endPoint = ``;
let choiceUrl = `${apiUrl}${endPoint}`;

/////////////////////////////////////////////////////////

// Create user name prompt
async function welcome() {

  let personName = prompt("Please enter your name:", "Harry Potter");
  let welcomeGreeting = document.createElement('div');

  // //create and display button options
  welcomeGreeting.innerHTML =
    `
    <p id="fade" class="welcome">Welcome, ${personName}! <br>How are you feeling today?</p>
      `

  let containerDiv = document.querySelector('.container');
  containerDiv.prepend(welcomeGreeting)
}

/////////////////////////////////////////////////////////

// Fetch api data, then turn response into json, then start quote card function and feed data into that function
async function fetchQuoteOption() {
  fetch(`${apiUrl}${endPoint}`)
    .then(res => res.json())
    .then(data => {
      generateQuoteCard(data)

    })
}

/////////////////////////////////////////////////////////

// Display quote objects on html page
async function generateQuoteCard(data) {
  const authorName = data.author;
  const quoteText = data.content;
  let quoteTags = data.tags;
  // let text = quoteTags.join(", ");

  // is data.tags an array? True
  // let result = Array.isArray(quoteTags);
  // console.log(result);

  // returns array of tags
  const tagsArray = data.tags.map(myFunction);
  function myFunction(value, index, array) {

    if (value.includes("Happiness")) {
      value = 'Happiness';
      quoteTags = value;
      console.log(value);

    } else if (value.includes("Motivational")) {
      value = 'Motivational';
      quoteTags = value;
      console.log(value);

    } else if (value.includes("Friendship")) {
      value = 'Friendship';
      quoteTags = value;
      console.log(value);

    } else if (value.includes("Humorous")) {
      value = 'Humorous';
      quoteTags = value;
      console.log(value);

    } else if (value.includes("Technology")) {
      value = 'Technology';
      quoteTags = value;
      console.log(value);

    }
    // console.log(value);

    return value;
  }
  console.log(tagsArray);


  // go through array and only display cooresponding tag
  card.innerHTML = `
  <divclass="blockquote-wrapper">
  <div class="blockquote">
    <h1>${quoteText}</h1>
    <h4>- ${authorName}</h4>
    <p class="tags">Mood: ${quoteTags}</p>
</div>
</div>
    `

};


//////////////////////////////////////////////////////////

//#2 eventListener - mouse click
// Grab each button by ID, then re-assign endpoint URL based on button clicked, start fetch function
document.getElementById("happyBtn").addEventListener("click", happyFunction);

function happyFunction() {
  endPoint = 'happiness';

  fetchQuoteOption();
  let element = document.getElementById("card");
  element.classList.toggle("mystyle");

};


// motivational button click, trying to change endpoint literal here
document.getElementById("motivationalBtn").addEventListener("click", motivationalFunction);

function motivationalFunction() {
  endPoint = 'motivational';

  fetchQuoteOption();
  let element = document.getElementById("card");
  element.classList.toggle("mystyle");
};

// friendlyUrl button click, trying to change endpoint literal here
document.getElementById("friendlyBtn").addEventListener("click", friendlyFunction);

function friendlyFunction() {
  endPoint = 'friendship';

  fetchQuoteOption();
  let element = document.getElementById("card");
  element.classList.toggle("mystyle");
};

// silly button click, trying to change endpoint literal here
document.getElementById("humorousBtn").addEventListener("click", sillyFunction);

function sillyFunction() {
  endPoint = 'humorous';

  fetchQuoteOption();
  let element = document.getElementById("card");
  element.classList.toggle("mystyle");

};

// techy button click, trying to change endpoint literal here
document.getElementById("techyBtn").addEventListener("click", techyFunction);

function techyFunction() {
  endPoint = 'technology';

  fetchQuoteOption();
  let element = document.getElementById("card");
  element.classList.toggle("mystyle");

};


//////////////////////////////////////////////////////////

//#3 eventListener - mouse move, down, and up
// Grab each button by ID, then re-assign endpoint URL based on button clicked, start fetch function
let mouseCursor = document.querySelector(".cursor")

window.addEventListener("mousemove", cursor)

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px"
  mouseCursor.style.left = e.pageX + "px"

}

window.addEventListener("mousedown", () => {
  mouseCursor.classList.add("mouse-down")

})

window.addEventListener("mouseup", () => {
  mouseCursor.classList.remove("mouse-down")

})





// Fancy stuff
//////////////////////////////////////////////////////////

//TEXT FADE
// const text = document.getElementById("fade");
let opacity = 0;
let intervalID = 0;

// window.onload = fadeIn;

function fadeIn() {
  setInterval(showFade, 200);
}

function showFade() {
  if (opacity < 1) {
    opacity = opacity + 0.1;
    document.getElementById("fade").style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }

}


//////////////////////////////////////////////////////////

// function myFunction() {
//   document.getElementById("container").style.backgroundImage = "url(https://buffer.com/library/content/images/2023/10/free-images.jpg)";

// }
// myFunction();






//   const para1 = document.createElement("p");
//   const node = document.createTextNode(data.content);
//   const para2 = document.createElement("p");
//   const node2 = document.createTextNode('-' + data.author);
//   const para3 = document.createElement("p");
//   const node3 = document.createTextNode(data.tags);
//   para1.setAttribute('class', 'blockquote');
//   para2.setAttribute('class', 'blockquote');
//   para3.setAttribute('class', 'blockquote');

//   para1.appendChild(node);
//   para2.appendChild(node2);
//   para3.appendChild(node3);

//   const element = document.getElementById("cardBody");
//   element.appendChild(para1);
//   element.appendChild(para2);
//   element.appendChild(para3);


// btn.addEventListener('click', pokemonUrl);
// window.addEventListener('load', fetchQuoteOption);

