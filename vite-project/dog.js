//set up states for dog animation
import { spriteAnimations } from "./dog-states";
//set up context for the speech recognition
import { recognition } from "./recognition";

import { dogState } from "./result";

export function listen(){
//reference for the code: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

//on click call the api to listen
document.getElementById("canvas1").onclick = () => {
  recognition.start();
  document.getElementById("ouput").innerHTML = "Rex is listening...";
};

  //stop the api from listening after the sound input is over
  recognition.onspeechend = () => {
    recognition.stop();
  };

  //check if there is an error and if so print it in the console
  recognition.onerror = (event) => {
    console.log("Error occurred in recognition: " + event.error);
  };
  
  //reference for the code: https://youtu.be/GFO_txvwK_c

  //set the context for the canvas
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  const CANVAS_WIDTH = (canvas.width = 600);
  const CANVAS_HEIGHT = (canvas.height = 600);

  //create the dog image
 const dogImage = new Image();
  dogImage.src = "./img/shadow_dog.png";
  const spriteWidth = 575;
  const spriteHeight = 523; 
  let gameFrame = 0; 
  const staggerFrames = 5; 

  //animate the dog
  function animate() {
    //clear the canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    //set up the frame rate of the animation and the postion
    let position =
      Math.floor(gameFrame / staggerFrames) %
      spriteAnimations[dogState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[dogState].loc[position].y;
    //draw the dog
    ctx.drawImage(
      dogImage,
      frameX,
      frameY,
      spriteWidth,
      spriteHeight,
      0,
      0,
      spriteWidth,
      spriteHeight
    );

    gameFrame++;
    requestAnimationFrame(animate);
  }
  animate();
}

