var inputSentence;
var changeNounButton;
var similarRhymeButton;
var nlpButton;
var lex; // lexicon string
var ritaAnalyzer;
var inputString = 'Mary has a little lamb';
var dropdownString;

function setup() {
	noCanvas();
	lex = new RiLexicon();

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

	changeNounButton.mousePressed(changeNoun);
	similarRhymeButton.mousePressed(similarRhyme);
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
