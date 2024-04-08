/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // 1. create the pats of the sentence arrays
  let who = ["The dog", "The mailman", "The bird"];
  let action = ["ate", "threw away", "mailed", "stole"];
  let what = ["my homework", "my cellphone", "the car"];
  let when = ["yesterday!", "this morning", "last week"];

  function selectArrayElement(arrayName, arrayLength) {
    let randomNumber = Math.floor(Math.random() * arrayLength);
    let selectedElement = arrayName[randomNumber];
    return selectedElement;
  }

  let randomWho = selectArrayElement(who, who.length);
  let randomAction = selectArrayElement(action, action.length);
  let randomWhat = selectArrayElement(what, what.length);
  let randomWhen = selectArrayElement(when, when.length);

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  // 3. print the excuse on the terminal, and then in the browser
  const htmlElement = document.querySelector(".excuse");
  htmlElement.innerHTML = excuse;
};
