
const probab = document.querySelector(".probab");
const next_button = QuestionBox.querySelector("#next");


probab.onclick = () => {
  const val = document.querySelector(".input-val").value;

  if (val == "") {
    alert("Please Enter Name Before Choosing Category");
    return;
  }
  categories.classList.remove("activeinfo");
  QuestionBox.classList.add("activeQuiz"); 
  document.querySelector(".title-bar").innerHTML = "PROBABILITY";
  showQuestion(0);
  queCounterprobab(1);
  showMynum()
  printname();
};


next_button.onclick = () => {
  if (qu_count < PROBABILITY.length - 1) {
    qu_count++;
    qu_numb++;
    count++;
    score.innerHTML = "score: " + userscore;
    showQuestion(qu_count);
    queCounterprobab(qu_numb);
    next_button.classList.remove("show");
  } else {
    count++;
    console.log("questons are completed");
    showResultBox();
  }
};


showQuestion = (index) => {
  const question_text = document.querySelector(".Question");

  let qu_tag =
    "<span>" +
    PROBABILITY[index].numb +
    ". " +
    PROBABILITY[index].question +
    "</span>";
  let option_tag =
    '<span class="option">' +
    PROBABILITY[index].option[0] +
    "</span>" +
    '<span class="option">' +
    PROBABILITY[index].option[1] + 
    "</span>" +
    '<span class="option">' +
    PROBABILITY[index].option[2] +
    "</span>" +
    '<span class="option">' +
    PROBABILITY[index].option[3] +
    "</span>";

  question_text.innerHTML = qu_tag;
  answer_options.innerHTML = option_tag;
  const option = answer_options.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)"); 
  }
};



function optionSelected(answer) {
  let userAns = answer.textContent;
  let correctAns = PROBABILITY[qu_count].answer;
  let alloptions = answer_options.children.length;
  if (userAns == correctAns) {
    answer.classList.add("correctAns");
    userscore += 1;
    console.log("Answer is correct"); 
  } else {
    answer.classList.add("incorrectAns");
    console.log("Answer is wrong"); 

    for (let i = 0; i < alloptions; i++) {
      if (answer_options.children[i].textContent == correctAns) {
        answer_options.children[i].classList.add("correctAns");
        console.log("working");
      }
    }
  }


  for (let i = 0; i < alloptions; i++) {
    answer_options.children[i].classList.add("disabled");
  }

  next_button.classList.add("show");
}


function queCounterprobab(index) {
  const top_question_count = QuestionBox.querySelector(".qucount");
  let totalQuestioncount =
    "<span>" + index + "/" + PROBABILITY.length + "</span>";
  top_question_count.innerHTML = totalQuestioncount;
}
