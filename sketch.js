var inputSentence;
var button;
var lex; // lexicon string

function setup() {
	noCanvas();
	lex = new RiLexicon();

	inputSentence = createInput('I am not a crook');
	inputSentence.size(300);
	button = createButton('Submit');

	inputSentence.changed(RiTaAnalyze);
	button.mousePressed(RiTaAnalyze);

	// inputSentence.changed(NLPAnalyze);
	// button.mousePressed(NLPAnalyze);

	// var doc = window.nlp('one-million two-thousand five-hundred and sixty-five point two');
  //
  // doc.values().toNumber();
  // document.body.innerHTML = doc.out('text');

}

function NLPAnalyze(){
	var s = inputSentence.value();
	var nlp_sentence = nlp(s).sentences(); // also could be nlp_sentence = nlp(s)
	var s_length = nlp_sentence.list[0].terms.length;

	console.log(s_length);
	// create output string model
	// var out = '';
	// for (var i = 0; i < s_length; i++) {
  //
	// }

	createP(out);

	// var plural = nlp_sentence.nouns().toPlural().out('text');
  //

}

function RiTaAnalyze(){
	var s = inputSentence.value();
	var rs = new RiString(s);
	// rs.analyze();
	var words = rs.words(rs);
	var pos = rs.pos();
	// console.log(words);

	var output = '';
	for (var i = 0; i < words.length; i++) {
		if (pos[i] === 'nn'){
			output += lex.randomWord('nn');
		} else {
			output += words[i];
			output += " ";
		}
	}
	createP(output);
}
