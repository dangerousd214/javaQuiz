// calling all required elements
const start_btn = document.querySelector(".start_btn button");
const rule_box = document.querySelector(".rule_box");
const exit_btn = rule_box.querySelector(".buttons .quit");
const continue_btn = rule_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

// When start button clicked show rules
start_btn.onclick = ()=>{
    rule_box.classList.add("activeInfo"); 
}

// When quit button clicked hide rules
exit_btn.onclick = ()=>{
    rule_box.classList.remove("activeInfo");
}

// if continue button clicked hide rules and display quiz
continue_btn.onclick = ()=>{
    rule_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
}