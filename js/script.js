
const apiUrl = 'https://api.quotable.io/random?tags='


const motivationalUrl = 'motivational';
let happyUrl = 'happiness'
const lovedUrl = 'friendship';
const sillyUrl = 'humorous';

let endPoint = '';
let choiceUrl = `${apiUrl}${endPoint}`;
// let endPoint = `${motivationalUrl}`;
console.log(choiceUrl)

// Welcome! How are you feeling today?
// show quote options via buttons (silly happy motivational inspirational)
async function quoteOptions() {

  let quoteTypes = document.createElement('div');

  //create and display button options
  quoteTypes.innerHTML =
    `<div class='container2'>
    <p>Welcome! How are you feeling today?</p>
        <button id="happyBtn">Happy</button>
        <button id="motivationalBtn">Motivational</button>
        <button id="lovedBtn">Loved</button>
        <button id="humorousBtn">Silly</button>
      </div>`

  let content = document.querySelector('.container');
  content.appendChild(quoteTypes)

}
quoteOptions();

// each buttons needs to do something different when clicked
async function fetchQuoteOption() {

  try {

    const response = await fetch(`${choiceUrl}`);
    const data = await response.json();
    console.log(data);

    console.log(`Why is ${endPoint} not updating?`);

  } catch (error) {
    console.error('Error:', error);
  }

}


// happy button click, trying to change endpoint literal here
document.getElementById("happyBtn").addEventListener("click", myFunction);

function myFunction() {
  let endPoint = 'happiness';

  fetchQuoteOption();

  // document.getElementById("happyBtn").innerHTML = "YOU CLICKED ME!";
  console.log(`endPoint = ${endPoint} Why does endPoint save as happiness here but not update the const in the fetch link literal?`)

}




// // // Returns motivational quote not happiness quote
// document.getElementById("happyBtn").addEventListener("click", fetchQuoteOption)

//

//

// const happy = document.getElementById("happyBtn");
// const motivational = document.getElementById("motivationalBtn");
// const loved = document.getElementById("lovedBtn");
// const silly = document.getElementById("humorousBtn");

// happy.addEventListener('click', function () {
//   let endPoint = 'happiness';
//   fetchQuoteOption();

//   console.log(endPoint)
//   console.log('button working, but not going to correct url')
// });






// join url with button option 

const box = document.getElementById("box");




