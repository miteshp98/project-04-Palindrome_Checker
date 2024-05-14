"use strict";

const formWrapper = document.querySelector(".form-wrapper");
const userInput = document.querySelector(".userInput");
const checkBtn = document.querySelector(".check-btn");
const result = document.querySelector(".result");

checkBtn.addEventListener("click", function () {
  checkPalindrome();
  userInput.value = "";
});

function checkPalindrome() {
  let userWord = userInput.value.toLowerCase();

  if (userWord === "") {
    alert("No Input");
    return false;
  }

  let reverseCheck = [];
  for (const input of userWord) {
    reverseCheck.push(input);
  }

  let palindromeWord = reverseCheck.reverse().join("");

  if (userWord === palindromeWord) {
    return (result.innerHTML = `Yes,<span> "${userInput.value}" </span> is a Palindrome`);
  } else {
    return (result.innerHTML = `No, <span> "${userWord}" </span>is not a Palindrome`);
  }
}
