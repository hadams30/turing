/* HOLLY ADAMS MAY 2018
visit hollyadams.net/projects/turing.html for description and demo video 
github.com/hadams30/turing

To make this work I built off the previous efforts of the following excellent people:
	Daniel Shiffman: Node.js and bot tutorials youtube.com/watch?v=RF5_MPSNAtU 
	Console.log tutorials 
teamtreehouse.com/community/how-to-get-input-in-the-console-in-nodejs 
	Tolga Tezel: Twit NPM package npmjs.com/package/twit ; github.com/ttezel/twit 
	Javascript tutorials w3schools.com 
	Mike Dettmer: Markov twitter bot for evolutionary tweets 
github.com/maximumdata/markov-twitter-bot 
	Twitter API developer.twitter.com/en/docs/api-reference-index */









console.log("the bot has begun..........");

var Twit = require('twit');
var config= require('./config');
console.log('config');
var T = new Twit(config);
var numbert;

var readline = require('readline-sync');
var answer= readline.question("Big search or little search?:   ");
console.log(answer + ", cool.");
if (answer == "big"){
	numbert=10;
}else{
	numbert=1;
}

var readline = require('readline-sync');
var keywords= readline.question("What do you want to search?:   ");
console.log("Searching for " + keywords + ", cool.");
var fullsearch= keywords + ', feminist OR cunt OR woman OR bitch OR fat OR dumb OR slut OR whore OR feminazi OR tranny OR snowflake OR pussy -porn -cum -nigga -sex exclude:retweets'

var tweet = {
	status: ('searching for: ' + keywords)
}
var params = { 
	q: fullsearch,
	count: numbert
}

T.get('search/tweets', params, gotData);

function tweeted(err, data, response){
	if(err){
		console.log("something bad")
	}else{
	console.log("worked")
	}
}


function gotData(err, data, response){
	var tweets= data.statuses;
	for (var i= 0; i< tweets.length; i++){
		var retweetId = data.statuses[i].id_str;
		console.log(tweets[i].text);
		console.log('    ~~~~~     ');
	}//end of for statement
	if(!err){
				var readline = require('readline-sync');
				var answer= readline.question("Do we want to retweet?:   ");
				console.log(answer + ", cool.");
				if (answer == "yes"){
					T.post('statuses/update', tweet, tweeted);
					T.post('statuses/retweet/:id',{
						id: retweetId
					}, function(err, response){
						if(response){
							console.log('Retweeted');
						}
						if(err){
							console.log('Something Is Very Wrong');
						}
					});
				}else{
					console.log("Okay no retweet");
				}//end of call and response from if answer =yes
}//end of if(!err)
	
	console.log('done.');
}//end of gotData function