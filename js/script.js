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
  quote:"During my lifetime I have dedicated myself to this struggle of the African people. I have fought against white domination, and I have fought against black domination. I have cherished the ideal of a democratic and free society in which all persons live together in harmony and with equal opportunities. It is an ideal which I hope to live for and to achieve. But if needs be, it is an ideal for which I am prepared to die.",
  source:"Nelson Mandela",
  citation:"Rivonia trial",
  year:1964
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

// for (let i=0 ;i<quotes.length;i++){

//   console.log("the quote",quotes[i].quote);
//   console.log("the source",quotes[i].source);
//   console.log("the citation",quotes[i].citation);
//   console.log("the citation",quotes[i].source);

// }

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){

  var random = Math.ceil(Math.random()*quotes.length)-1;
  console.log("randome number",random);




  

}

getRandomQuote();

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);