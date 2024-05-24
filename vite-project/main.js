import './scss/main.scss'
import { listen } from './dog.js'

document.querySelector("body").innerHTML = `
  <nav>
    <div class="nav-logo">
      <img src="img/dog.png" alt="dog logo" />
      <p>My Online Dog</p>
    </div>
    <a href="#demo" class="nav-button">Get Started</a>
  </nav>
  <section id="hero" class="hero">
    <div class="hero-text">
      <p>Never seen before</p>
      <h1>
      Online
      </h1>
      <h1>
      Pet dog</h1>
      <a href="#demo">Get Started</a>
    </div>
    <img src="img/big_shadow_dog.png" class="hero-img" alt="dog logo" />
  </section>
  <section id="how-it-works" class="guide">
    <h2 class="guide-heading">How it works</h2>
    <div class = "guide-container">
      <div class="guide-card">
        <img src="img/click.png" alt="dog logo"/>
        <h3>1. Click on the dog</h3>
        <p>The dog is not always listening to what you are saying. To make the dog listen for a command click on it.</p>
      </div>
      <div class="guide-card">
        <img src="img/speak.png" alt="dog logo"/>
        <h3>2. Give the dog a command</h3>
        <p>Enable access to your microphone and tell the dog what you want it to do.</p>
      </div>
      <div class="guide-card">
        <img src="img/dog-trick.png" alt="dog logo"/>
        <h3>3. Look at the dog</h3>
        <p>The dog is now doing a cute trick look at it.</p>
      </div>
    </div>
  </section>
  <section id="demo" class="demo">
    <h2 class="demo-heading">Give it a Try</h2>
    <div class="demo-container">
      <div class="demo-dog">
        <canvas id="canvas1"></canvas>
      </div>
      <div class="demo-text">
        <h3>This is Rex</h3>
        <p>Rex is the demo version of the online pet dog.
         He is very friendly and can follow a cople of commands. Here is a list of all the commands that Rex can hear:</p>
        <div class="demo-list">
          <ul>
            <li>idle</li>
            <li>jump</li>
            <li>fall</li>
            <li>run</li>
          </ul>
          <ul>
            <li>dizzy</li>
            <li>sit</li>
            <li>bite</li>
            <li>roll</li>
          </ul>
        </div>
      </div>
    </div>
    <p id="ouput">Go ahead click on him and give him a command</p>
  </section>
  <section id="get-started" class="CTA">
    <div class="CTA-container">
      <h4>Get your online pet dog now</h4>
      <a href="#" class="CTA-button">Get Started</a>
    </div>
  </section>
  <footer>
    <div class="footer-container">
      <div class="footer-section">
          <div class="nav-logo">
            <img src="img/dog_white.png" alt="dog logo" />
      </div>
      </div>
      <div class="footer-section">
        <h5>ABOUT US</h5>
        <p>Vestdijk 31T, 5611 CA Eindhoven</p>
      </div>
      <div class="footer-section">
        <h5>LEGAL STUFF</h5>
        <p>TERMS OF SERVICE</p>  
        <p>PRIVACY POLICY</p>  
        <p>SHIPING POLICY</p>  
        <p>REFUND POLICY</p>  
        <p>FAQ</p>  
      </div>
      <div class="footer-section">
        <h5>CUSTMOER SUPPORT</h5>
        <p>INFO@MAIL.COM</p>
        <p>+123 456 7890</p>
      </div>
    </div>
  </footer>
`;


document.getElementById("canvas1").onclick = () => {
  listen();
};
listen();


function scroll(){
  document.getElementById("canvas1").scrollIntoView();
}