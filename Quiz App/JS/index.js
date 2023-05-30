// Accessing All the HTML elements here.
const infobox = document.querySelector(".info-box");
const Continue = document.querySelector("#continue");
const categories = document.querySelector(".categories-box");
const backbutton = document.querySelector(".backbtn button");
const QuestionBox = document.querySelector(".Question-box");
let answer_options = document.querySelector(".answer-options");
const timecount = document.querySelector("#timer");
const score = document.querySelector("#score");
const result = document.querySelector(".result-container");
let username = document.querySelector(".input-val").value;
const result_box = document.querySelector(".result-container");
const restart = document.querySelector(".restart");
const home = document.querySelector(".home");
let qu_count = 0;
let qu_numb = 1;
let userscore = 0;
let timeRef;
let numb = 300;
let count = 0;



Continue.onclick = () => {
  categories.classList.add("activeinfo");
  infobox.classList.add("disp"); 
};


backbutton.onclick = () => {
  categories.classList.remove("activeinfo");
  infobox.classList.remove("disp"); 
};


home.addEventListener("click", () => {
  setTimeout(() => {
    window.location.reload(true); 
  }, 1000);
});


printname = () => {
  const val = document.querySelector(".input-val").value;
  if (isNaN(val)) {
    document.querySelector("#displayname").innerHTML = "Welcome " + val + " 😃";
    document.querySelector(".name").innerHTML =
      "User Name : " + "<strong>" + val + "</strong>";
  } else {
    alert("Please Enter a valid Name");
  }
};


const showMynum = () => {
  timeRef = setInterval(() => {
    timecount.innerHTML = numb;
    numb--;

    
    if (numb == 0) {
      QuestionBox.classList.remove("activeQuiz");
      showResultBox();
    }
  
    if (numb < 30) {
      timecount.style.color = "red";
      timecount.style.borderColor = "red";
    }
  }, 1000);
};


function showResultBox() {
  categories.classList.remove("activeinfo");
  QuestionBox.classList.remove("activeQuiz");
  result.classList.add("activeResult");
  const name = document.querySelector(".name-result");
  const timetaken = document.querySelector(".time_taken");
  const correct = document.querySelector(".correct");
  const wrong = document.querySelector(".wrong");
  const Percentage = document.querySelector(".Percentage");
  let username = document.querySelector(".input-val").value;
  let attemp = document.querySelector(".attempts");
  nameTag =
    "<span>" +
    "<strong>" +
    username +
    "</strong>" +
    " your result is" +
    "</span>";
  name.innerHTML = nameTag;
  let total_time = Math.abs(300 - numb);
  time_tag =
    "<span>" +
    "Total Time Taken : " +
    "<strong>" +
    total_time +
    "</strong>" +
    " Sec" +
    "</span>";
  timetaken.innerHTML = time_tag;
  let correct_tag =
    "<span>" +
    "Correct Answers Are : " +
    "<strong>" +
    userscore +
    "</strong>" +
    "</span>";
  correct.innerHTML = correct_tag;
  let incorrect_tag = 10 - userscore;
  wrong.innerHTML =
    "Wrong Answers Are : " + "<strong>" + incorrect_tag + "</strong>";
  let percentage_tag = (userscore / 10) * 100;
  Percentage.innerHTML =
    "Your Percentage Are : " + "<strong>" + percentage_tag + "</strong>" + "%";
  attemp.innerHTML = " Total Attempts: " + "<strong>" + count + "</strong>";
}
