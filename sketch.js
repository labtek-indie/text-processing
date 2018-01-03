var inputSentence;
var changeNounButton;
var similarRhymeButton;
var lex; // lexicon string
var ritaAnalyzer;

function setup() {
	noCanvas();
	lex = new RiLexicon();

	initPageElement();

}

function initPageElement(){
	inputSentence = createInput('Mary has a little lamb');
	inputSentence.size(300);
	inputSentence.parent('sketch-holder');

	changeNounButton = createButton("Change with Random Noun");
	changeNounButton.class('buttons');
	changeNounButton.parent('buttons-holder');

	similarRhymeButton = createButton('Find Noun\'s Similar Rhyme');
	similarRhymeButton.parent('buttons-holder');
	similarRhymeButton.class('buttons');
	
	changeNounButton.mousePressed(changeNoun);
	similarRhymeButton.mousePressed(rhymeTest);
}

function changeNoun(){
	var s = inputSentence.value();
	var rs = new RiString(s);
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

function rhymeTest(){
	var s = inputSentence.value();
	var rs = new RiString(s);
	var words = rs.words(rs);
	var pos = rs.pos();

	var output = '';
	for (var i = 0; i < words.length; i++) {
		if (pos[i] === 'nn'){
			var rhyme = RiTa.rhymes(words[i]);
			output += random(rhyme);

		} else {
			output += words[i];
			output += " ";
		}
	}
	createP(output);
}
