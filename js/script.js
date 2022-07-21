/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//link: https://www.theguardian.com/world/2013/dec/06/nelson-mandela-life-quotes

const quote1 ={
  quote:"There is no easy walk to freedom anywhere and many of us will have to pass through the valley of the shadow of death again and again before we reach the mountain tops of our desires",
  source:"Nelson Mandela",
  citation:"Presidential address to ANC conference",
  year:1953
}

const quote2 ={
  quote:"If I had my time over I would do the same again. So would any man who dares call himself a man.",
  source:"Nelson Mandela",
  year:1962
}

const quote3 ={
  quote:"If something's important enough, you should try. Even if - the probable outcome is failure.",
  source:"Elon Musk",
}

const quote4 ={
  quote:"I have never regarded any man as my superior, either in my life outside or inside prison.",
  source:"Nelson Mandela",
  citation:"Letter written to commissioner of prisons while on Robben Island",
  year:1976
}

const quote5 ={
  quote:"Only free men can negotiate; prisoners cannot enter into contracts.",
  source:"Nelson Mandela",
  year:1985
}

const quote6 ={
  quote:" I never think of the time I have lost. I just carry out a programme because it's there. It's mapped out for me",
  source:"Nelson Mandela",
  year:1993
}

const quotes =[quote1,quote2,quote3,quote4,quote5,quote6];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr){

  var random = Math.ceil(Math.random()*quotes.length)-1;
  console.log("randome number",random);
  
  return(arr[random]);
  

}

/***
 * `printQuote` function
***/
function printQuote(){
//call the getRandomQuote fucntion 
  var quotetoDisplay = getRandomQuote(quotes);
  var HTMLstring = `<p class="quote"> ${quotetoDisplay.quote}<p>${quotetoDisplay.source}`;
  //If the random quote object has a citation property, 
  //concatenate a <span> element with the class "citation" to the HTML string.
  if(quotetoDisplay.citation != undefined){
    HTMLstring +=`<span class="citation">${quotetoDisplay.citation}</span>`
  } 
  if(quotetoDisplay.year != undefined){
    HTMLstring +=`<span class="year">${quotetoDisplay.year}</span></p>`
  }
  
  document.getElementById('quote-box').innerHTML = HTMLstring; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//element.addEventListener(event, function, useCapture)
//useCapture	Optional (default = false).
// false - The handler is executed in the bubbling phase.
// true - The handler is executed in the capturing phase.