"use strict";

const textArea = document.querySelector(".textarea");
const totalCounter = document.querySelector(".total-counter");
const remainingCounter = document.querySelector(".remaining-counter");

textArea.addEventListener("keyup", function () {
  updateCounter();
});

const updateCounter = function () {
  const characterCounter = textArea.value.length
  totalCounter.innerText = characterCounter;
  remainingCounter.innerText = textArea.getAttribute("maxlength") - characterCounter;
};

updateCounter();