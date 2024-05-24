//add speech Api
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;
var SpeechRecognitionEvent =
  SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

//set up context for the speech recognition
export let recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-UK";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  console.log("uk true")
