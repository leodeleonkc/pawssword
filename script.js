"use strict";
const resizeOps = () => {
  document.documentElement.style.setProperty(
    "--vh",
    window.innerHeight * 0.01 + "px"
  );
};

resizeOps();
window.addEventListener("resize", resizeOps);

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// DOM Elements
let copyPassEl = document.getElementById("copy-pass-el");
let copyCat = document.getElementById("copycat"); // Hidden text input for copying password
let passwordEl = document.getElementById("password-el"); //Password button + display
let chirpUp = document.getElementById("generate-el"); // Generate password button

let catChatDone = document.getElementById("done");
let catChatCopied = document.getElementById("copied");

// Generate 14 random characters
function randomizer() {
  let rando = Math.floor(Math.random() * characters.length);
  return characters[rando];
}

// Calling the function

chirpUp.addEventListener("click", function () {
  // Clear Meow Meow text
  passwordEl.textContent = "";

  // Render password to the password button
  for (let i = 0; i < 14; i++) passwordEl.textContent += randomizer();

  // Kitty says "done"
  catChatCopied.classList.add("hidden");
  catChatDone.classList.remove("hidden");

  // Populating text input for copying password
  copyPassEl.innerHTML = `Tap to copy!`;
  copyCat.value = "";
  copyCat.value = passwordEl.textContent;
});

passwordEl.addEventListener("click", function () {
  copyCat.focus();
  copyCat.select();
  navigator.clipboard.writeText(copyCat.value);
  copyPassEl.innerHTML = `Copied!`;
  copyPassEl.classList.add("tap-animate");

  catChatDone.classList.add("hidden");
  catChatCopied.classList.remove("hidden");
});
