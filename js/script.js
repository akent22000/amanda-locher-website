const tag = document.getElementById("tag");
let chosenTag = `humorous`;

tag.addEventListener("change", () => {
	chosenTag = tag.name;
});

async function generateTagOptions() {
	let outPut = ``;

	try {
		const response = await fetch(`https://api.quotable.io/tags?sortBy=name&order=-1`);

		if (!response.ok) {
			throw new Error("Request failed.");
		}

		const data = await response.json();
    console.log(data);

		tag.removeAttribute("disabled");

		data.forEach((tag) => {
			outPut += `<option value="${tag.name}">${tag.name}</option>`;
		});

		tag.innerHTML = outPut;
		tag[3].selected = true;
	} catch {
		console.error(error);
	}
}
generateTagOptions();



// Powered by Quotable
// https://github.com/lukePeavey/quotable

document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const button = document.querySelector("button");
  const quote = document.querySelector("blockquote p");
  const cite = document.querySelector("blockquote cite");

  async function updateQuote() {
    // Fetch a random quote from the Quotable API

    // const response = await fetch("https://api.quotable.io/random?tags=technology");
    const response = await fetch(`https://api.quotable.io/quotes/random?tags=${chosenTag}`);
    //    "slug": "humorous", "success", "slug": "motivational", inspirational, 


    const data = await response.json();
    console.log(data);
    if (response.ok) {
      // Update DOM elements
      quote.textContent = data[0].content;
      cite.textContent = '-' + ' ' + data[0].author;
      console.log("Is this working?");
      console.log(data[0].author);
      console.log(data);
    } else {
      quote.textContent = "An error occured";
    }
  }

  // Attach an event listener to the `button`
  button.addEventListener("click", updateQuote);

  // call updateQuote once when page loads
  updateQuote();
});



// Get the button element
const button = document.querySelector('button');

// Add a mouseover event listener
button.addEventListener('mouseover', () => {
  // Change the button's background color
  button.style.backgroundColor = 'blue';
});

// Add a mouseout event listener
button.addEventListener('mouseout', () => {
  // Change the button's background color back to its original color
  button.style.backgroundColor = '';
});







// let btn = document.getElementById("myBtn");
// btn.addEventListener("click", renderData);




