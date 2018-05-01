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
var key= require('./config');
console.log('config');
var Tabletop = require('tabletop');
var T = new Twit(key);

const TwitterBot = require('markov-twitter-bot')

var readline = require('readline-sync');
var minutes= readline.question("What minute do you want to send the tweet?   ");
console.log("Cool we’ll make up a tweet at 00:" + minutes + ", cool.");

const options = {
  hour: 1,
  minute: minutes,
  account: 'mx_turing',
    includeAts: false,
twitter: {
	consumer_key:         'sAuxwtmD5KmyBmP2itfYzHuhv',
    consumer_secret:      'zq1TlgkIx46cpLbmSrdCkgU718gIl1odAUtVbqti6zUmkags0m',
  	access_token_key:         '981928195577597953-Dq1QIdFN0I4zulIUw3tbmewXhr4qaTm',
  	access_token_secret:  'qMzWFUiQjbzcZrOIwRhWkEZ8LspSVeuiq3RpStsZ5fYe4',
  },
  replyTo: 'mx_turing'

}
const bot = new TwitterBot( options )


var lines = new Array(
	'At the centre of my ironic faith, my blasphemy, is the image of the cyborg.',
	'Social reality is lived social relations, our most important political construction, a world-changing fiction.',
	'This experience is a fiction and fact of the most crucial, political kind.',
	'The cyborg is a matter of fiction and lived experience that changes what counts as womens experience in the late twentieth century.',
	'I am making an argument for the cyborg as a fiction mapping our social and bodily reality.',
	'the tradition of racist, male-dominant capitalism',
	'The cyborg is a creature in a post-gender world',
	'The cyborg is resolutely committed to partiality, irony, intimacy, and perversity.',
	'No longer structured by the polarity of public and private',
	'The cyborg would not recognize the Garden of Eden; it is not made of mud and cannot dream of returning to dust.',
	'Our machines are disturbingly lively, and we ourselves frighteningly inert. ',
	'Who cyborgs will be is a radical question ',
	'Our best machines are made of sunshine ',
	'Ultimately the hardest science is about the realm of greatest boundary confusion',
	'the unnatural cyborg women making chips in Asia and spiral dancing in Santa Rita jail ',
	'a cyborg world might be about lived social and bodily realities ',
	'permanently partial identities and contradictory standpoints ',
	'There is not even such a state as being female, itself a highly complex category constructed in contested sexual scientific discourses and other social practices ',
	'I do not know of any other time in history when there was greater need for political unity to confront effectively the dominations of race, gender, sexuality, and class. ',
	'the non-innocence of the category woman ',
	'Cyborg feminists have to argue that we do not want any more natural matrix of unity ',
	'It is not just that god is dead; so is the goddess. ',
	'To be feminized means to be made extremely vulnerable; able to be disassembled, reassembled, exploited as a reserve labour force; seen less as workers than as servers.',
	'reducible to sex. ',
	'recognize oneself as fully implicated in the world ',
	'Stripped of identity ',
	'These cyborgs are the people who refuse to disappear on cue',
	'All gender performance fulfills the need for exterior maintenance ',
	'navigate the binary expectations ',
	'Exterior politics insists that gender intelligibility be present ',
	'the question is never just to pass or not to pass ',
	'In a society that assumes gender coherency and consistency, cis confusion is validation for the genderqueer lesbian ',
	'What part of a transition constitutes objectivity or determinism? ',
	'prove the unnatural state of the entrenched gender systems ',
	'emerge as a third gender that promises to transcend the binary restriction on sex imposed by the system of compulsory heterosexuality ',
	'active refusal to cooperate in the performance of intelligible genders ',
	'to have ownership of the self, to have and hold a core identity as if it were a possession ',
	'Without this identity, that agency is simply stripped away and left with nothing to fill the void ',
	'Not to have property in the self is not to be a subject, and so not to have agency ',
	'The internet and its culture have additionally awarded new possibilities for agency  ',
	'Virtuality brings a fluidity to identities which had once been fixed ',
	'avid adopters of cyber-identities dream of a time when personal agency has been separated from biological reality altogether ',
	'objective reality can slip into unimportance and anyone can portray themselves in infinite ways ',
	'exposing how tenuous the link between body and constructed identity has always been ',
	'cyber-identity and manifestations of self can act as a segway into a world without gender ',
	'pleasure in the confusion of boundaries ',
	'The cyborg is a kind of disassembled and reassembled, postmodern collective and personal self ',
	'Of course there is no real consistency. ',
	'Nothing matters more at the current moment than the idea of contradiction. ',
	'We should alter our pliable digital selves. ',
	'We should take advantage of our pliable physical selves. ',
	'Digital identity is based on decision, physical identity is based on nature. Self lies in actions made and a true representation manifests digitally. ',
	'Do we have power? ',
	'We are observed yet unnoticeable. ',
	'We live in a digital limbo of hypotheticals ',
	'What power can we have while we exist in this system? ',
	'There is little we can do to directly diversify the systematic behavior of the billions we live beside. ',
	'We are policed and can do little besides maintain physical consistency. What possible changes can we make?',
	'users of the developing system had fantasies of transcending their bodies altogether ',
	'Through this cyber-body freedom, cyberfeminists anticipated finally moving beyond gender ',
	'MINORITIES WERE SUPPOSEDLY GOING TO GET A BIG CUT OUT OF CYBERSPACE ',
	'virtuality brings a fluidity to identities which had once been fixed ',
	'The line between the virtual, imagined, constructed self and the embodied self was disintegrating ',
	'How tenuous the link between body and constructed identity has always been ',
	'We are posthumans ',
	'A win for the posthumans ',
	'posthumanism developed in tandem with the information superhighway ',
	'Virtuality offers the possibility for new realities, not a replication of the real world ',
	'The way we use the Internet reinforces normative gender roles ',
	'Accept my subjectivity as the basis of my agency ',
	'made for machine eyes',
	'man controls digitality through immensely powerful levers of social regulation that serve specific race and class interests while presenting themselves as objective.',
);

var line = Math.floor((Math.random()*70));
console.log("Selected line #" + line);
console.log(lines[line]);

var readline = require('readline-sync');
var answer= readline.question("Do we want to tweet from the archive?:   ");
console.log(answer + ", cool.");

if (answer == "yes"){
	tweetItCyb();
}else{
	console.log("Okay no tweet for now");
}

//setInterval(tweetItCyb,1000*60*60*4)

function tweetItCyb(txt){
	var tweet = {
		status: lines[line] 
	}
	T.post('statuses/update', tweet, tweeted);
	function tweeted(err, data, response){
		if(err){
			console.log("Oh no something is wrong");
		}else{
		console.log("It worked!");
		}
	}
}//end tweetItCyb


