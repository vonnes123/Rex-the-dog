//reference for the code: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

import { recognition } from "./recognition";

//set base player state in which the dog if found
export let dogState = "idle";

//set words that will be recognized by the speech api as commands for the dog
const commands = [
  "idle",
  "jump",
  "fall",
  "run",
  "dizzy",
  "sit",
  "roll",
  "bite",
];

//on result that is received from the speech api check if it matches on of the commands
recognition.onresult = (event) => {
  let speech = event.results[0][0].transcript;
  let speechArray = speech.split(" ");
  let match = speechArray.filter((element) => commands.includes(element));
  console.log(match);
  //change the dog animation on match
  console.log("Confidence: " + event.results[0][0].confidence);
  if (match.length >= 1) {
    dogState = match[0];
    document.getElementById("ouput").innerHTML = "Rex got the command";
  } else {
    document.getElementById("ouput").innerHTML =
      "Rex heard: ``" + event.results[0][0].transcript + "`` Try again";
  }
};
