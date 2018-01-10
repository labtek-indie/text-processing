var inputSentence;
var changeNounButton;
var similarRhymeButton;
var nlpButton;
var lex; // lexicon string
var ritaAnalyzer;
var inputString = 'Mary has a little lamb';
var dropdownString;
var rawText1, rawText2, rawText3, raw4;

function setup() {
	noCanvas();
	lex = new RiLexicon();

	rawText1 = loadStrings("data/Bon Jovi Always.txt")
	rawText2 = loadStrings("data/State of Union 05.txt")
	rawText3 = loadStrings("data/Weezer Lyrics.txt")
	rawText4 = loadStrings("data/Friends Episode Transcript.txt")

	initPageElement();

}

function initPageElement(){
	inputSentence = createInput(inputString);
	inputSentence.size(300);
	inputSentence.parent('sketch-holder');

	changeNounButton = createButton("Change with Random Noun");
	changeNounButton.class('buttons');
	changeNounButton.parent('buttons-holder');

	similarRhymeButton = createButton('Find Noun\'s Similar Rhyme');
	similarRhymeButton.parent('buttons-holder');
	similarRhymeButton.class('buttons');

// 	nlpButton = createButton('NLP Analyze');
// 	nlpButton.parent('buttons-holder');
// 	nlpButton.class('buttons');

	changeNounButton.mousePressed(changeNoun);
	similarRhymeButton.mousePressed(similarRhyme);
// 	nlpButton.mousePressed(nlpTest);
}

function changeNoun(){
	inputString = inputSentence.value();
	var rs = new RiString(inputString);
	var words = rs.words(rs);
	var pos = rs.pos();

	var output = '';
	for (var i = 0; i < words.length; i++) {
		if (pos[i] === 'nn'){
			output += lex.randomWord('nn');
			if (!(i === words.length-1)){
				output += " ";
			}

		} else {
			output += words[i];
			output += " ";
		}
	}
	createP(output);
}

function similarRhyme(){
	inputString = inputSentence.value();
	var rs = new RiString(inputString);
	var words = rs.words(rs);
	var pos = rs.pos();

	var output = '';
	for (var i = 0; i < words.length; i++) {
		if (pos[i] === 'nn'){
			var rhyme = RiTa.rhymes(words[i]);
			output += random(rhyme);
			output +=" ";
		} else {
			output += words[i];
			output += " ";
		}
	}
	createP(output);
}

function nlpTest(){
	inputString = inputSentence.value();
	var nlpString = nlp(rawText);

	var people = nlpString.people().out('text');
	var topics = nlpString.topics().out('frequency');
	console.log(topics);
	var verbs = nlpString.verbs().slice(0,50).out('frequency')

	var output = topics;
}
