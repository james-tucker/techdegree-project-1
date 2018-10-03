// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes



// Create the getRandomQuuote function and name it getRandomQuote



// Create the printQuote funtion and name it printQuote



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quoteElement = document.getElementById("quote"),
	sourceElement = document.getElementById("source"),
	arr_placeholder = [], //this is a placeholder array that temporarily stores used quotes after they've been removed from the original array
	citeElement = document.getElementById("citation"),
	yearElement = document.getElementById("year"),
	generatedNumber; //holds a random number that is generated when getRandomQuote() is called
	
var quotes = [

	{
		quote: "You can't put a limit on anything. The more you dream, the farther you get.",
		source: "Michael Phelps"
	},
	{
		quote: "I don't want to be the next Michael Jordan, I only want to be Kobe Bryant.",
		source: "Kobe Bryant" 
	},
	{
		quote: "Some people want it to happen, some wish it would happen, others make it happen.",
		source: "Michael Jordan"
	},
	{
		quote: "He who is not courageous enough to take risks will accomplish nothing in life.",
		source: "Muhammad Ali" 
	},	
	{
		quote: "Every day of my life, I'm trying to find a way to get better.",
		source: "Ray Lewis" 
	},	
	{
		quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
		source: "Vince Lombardi"
	},	
	{
		quote: "You miss 100 percent of the shots you don't take.",
		source: "The Great One - Wayne Gretzky"
	},	
	{
		quote: "Do not let what you can not do interfere with what you can do.",
		source: "John Wooden" 
	},	
	{
		quote: "Never let your head hang down.  Never give up and sit down and grieve. Find another way!", 
		citation: "Satchel Paige"
	},	
	{
		quote: "You're never a loser, until you quit trying.",
		source: "Mike Ditka" 
	},	
	{
		quote: "If you don't have confidence, you'll always find a way not to win.",
		source: "Carl Lewis" 
	},	
	{
		quote: "It's better to fail aiming high than to succeed aiming low.",
		source: "Bill Nicholson" 
	},	

];

window.onload = function(event){
	window.setInterval(printQuote, 10000);
};





/*====================== Function(s) Declaration(s) =====================*/
function printQuote(){
	/*
	Will randomly generate a quote from the quotes array and will only repeat once after all other quotes have 
	been repeated.
	*/
	var generatedQuote = function(){ 
		/* 
		Anonymous function that stores a random generated number and returns a quotes array with the generated random 
		number as the index.
		*/
		generatedNumber = Math.floor(Math.random() * quotes.length); // stores random number
		return quotes[generatedNumber];
	}();

	quotes.splice(generatedNumber, 1); // Removes current quote based on generated number/index in the array
	arr_placeholder.push(generatedQuote); 
	quoteElement.textContent = generatedQuote.quote; 
	sourceElement.textContent = generatedQuote.source;
	
	if(generatedQuote.hasOwnProperty("citation")){
		citeElement.textContent = generatedQuote.citation;
		sourceElement.innerHTML += "<span id=\"citation\" class=\"citation\"> " + "\"" + citeElement.textContent + "\"" +" </span>";
	}
	if(generatedQuote.hasOwnProperty("year")){
		yearElement.textContent = generatedQuote.year;
		sourceElement.innerHTML += "<span id=\"year\" class=\"year\"> " + yearElement.textContent +" </span>";
	}
	if(quotes.length < 1){
		quotes = arr_placeholder.splice(0);
		arr_placeholder.splice(0, arr_placeholder.length);
	}
}

