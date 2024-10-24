const button = document.getElementById("button");
const quoteText = document.getElementById("quoteText");


let quotesArray = [
    "Bats frighten me. It’s time the world share my dread.",
    "You either die a hero or live long enough to see yourself become the villain.",
    "Well, I grew up in Gotham, and I turned out all right.",
    "A hero can be anyone.",
    "I fear dying in here, while my city burns, and there's no one there to save it.",
    "When the light hits the sky, it's not just a call. It's a  warning.",
    "Sometimes the truth isn't good enough, sometimes people deserve more"
]
console.log(quotesArray);

function setQuote (){
    let quote = quotesArray[Math.floor(Math.random() * quotesArray.length)]; /* to create a random quote */
    // console.log(quote);
    quoteText.textContent = quote; /* updates the h2 element with random quote*/
//   button.addEventListener("click", quoteText); /* doesnt work*/

}

setQuote(); /* calling the function*/


// ! when button is clicked, random quote is generated
//  call the function  when clicking the button 

  button.addEventListener("click", setQuote);


// ! Styling Elements using the DOM
// quoteText= id of h2 element
// quoteText.style.backgroundColor = "red";



// !Append -dont need i think
// quoteText.append(button); /*appended the button to the element*/
// button.append(quotesArray[Math.floor(Math.random() * quotesArray.length)]); /* this appends the quote to the button*/
// button.append(quotesArray); /* this appends all quotes to button*/

