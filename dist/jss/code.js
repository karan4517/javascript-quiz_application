window.onload = function() {
    show(0);                                                                       //zero index se start hoga question ana

}
//question that is coming to next every page //sitejs 
let questions = [
    {
        id: 1,
        question: "What is the full form of RAM ?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Aceapt Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Central Program Unit",
            "Central Processing Unit",
            "Central Preload Unit",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "What is the full form of E-mail",
        answer: "Electronic Mail",
        options: [
            "Electronic Mail",
            "Electric Mail",
            "Engine Mail",
            "None of these"
        ]
    }
];
//questions over


//start.js
function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;

    sessionStorage.setItem("name", name);     //sessionstorage is the place where the value of user store but not permanently //

    location.href = "quizpage.html";

}
let question_count = 0;   //counter value every submition go to next funtion //sitejs 
let point = 0;

function next() {
    if(question_count == questions.length - 1 ) {         ////ERROR AYA THA POINT EK KUM ARHA THA KYOKI REDIRECT PEHLE HO JA RHA THA , HMEE PEHLE POINT BDANA H PHIR REDIRECT KRNA HAI  
        sessionStorage.setItem("time", time);
        //clearInterval(mytime);
        location.href = "end.html";
        return;
// console.log(question_count);

    }
    let user_answer = document.querySelector("li.option.active").innerHTML; //use to store ur answer if you nwant to see run on console
    
 if(user_answer == questions[question_count].answer) { //user ke answer or hamare question ke asnwer kp match kr rh hai 
            point += 10;
            sessionStorage.setItem("points", points);
     

 }
    
    //console.log(points);
    
    // console.log(user_answer);
    //now check user answer
    question_count++;
    show(question_count);

}
function show(count) {
    let question = document.getElementById("questions");
    //below lines is for options selection count class
    question.innerHTML = `<h2>${questions[count].question} </h2>  


       <ul class="option_group">                                  
              <li class="option">${questions[count].options[0]}</li> 
              <li class="option">${questions[count].options[1]}</li>
              <li class="option">${questions[count].options[2]}</li>
              <li class="option">${questions[count].options[3]}</li>
       </ul>
`;

    toggleActive();                  //calling toggleactive 

}   //this toggle function works whwn we select option , the option will became brown color in css we already fit brown color
function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {            //loop for our four iotion
        option[i].onclick = function () {                   //chech one by one through loop
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) { //condi is use when we select another then check active  class
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}



