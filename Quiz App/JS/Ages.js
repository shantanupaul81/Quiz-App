const ages = document.querySelector(".ages");
let next3 = document.querySelector("#next3");


ages.onclick = () => {
  const val = document.querySelector(".input-val").value;

  if (val == "") {
    alert("Please Enter Name Before Choosing Category");
    return;
  }
  categories.classList.remove("activeinfo");
  QuestionBox.classList.add("activeQuiz"); 
  document.querySelector(".title-bar").innerHTML = "Ages";
  showQuestionages(0);
  queCounterage(1);
  printname();
  showMynum();
};



next3.onclick = () => {
  if (qu_count < Ages.length - 1) {
    qu_count++;
    qu_numb++;
    count++;
    score.innerHTML = "score: " + userscore;
    showQuestionages(qu_count);
    queCounterage(qu_numb);
    next_button.classList.remove("show");
    next2.classList.remove("show");
    next3.classList.remove("show");
  } else {
    count++;
    console.log("questons are completed");
    showResultBox();
  }
};


showQuestionages = (index) => {
  const question_text = document.querySelector(".Question");

  let qu_tag =
    "<span>" + Ages[index].numb + ". " + Ages[index].question + "</span>";
  let option_tag =
    '<span class="option">' +
    Ages[index].option[0] +
    "</span>" +
    '<span class="option">' +
    Ages[index].option[1] + 
    "</span>" +
    '<span class="option">' +
    Ages[index].option[2] +
    "</span>" +
    '<span class="option">' +
    Ages[index].option[3] +
    "</span>";

  question_text.innerHTML = qu_tag;
  answer_options.innerHTML = option_tag;
  const option = answer_options.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelectedages(this)"); 
  }
};



function optionSelectedages(answer) {
  let userAns = answer.textContent;
  let correctAns = Ages[qu_count].answer;
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

  next3.classList.add("show");
}



function queCounterage(index) {
  const top_question_count = QuestionBox.querySelector(".qucount");
  let totalQuestioncount = "<span>" + index + "/" + PIPES.length + "</span>";
  top_question_count.innerHTML = totalQuestioncount;
}
