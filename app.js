const questionText = document.querySelector(".pertanyaan");
const optionContainer = document.querySelector(".pilihan");
const musuh = document.getElementById("musuh");
const naruto = document.getElementById("naruto");
const hasilakhir = document.getElementById('kotak');
const overlay = document.getElementById('overlay');

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let count = 0;

function setAvailableQuestions(){
    const totalQuestions = quiz.length;
    for(let i=0; i<totalQuestions; i++){
        availableQuestions.push(quiz[i])
    }
}

//set question number, text, and option
function getNewQuestion(){
    //the actual random part
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    //console.log(questionIndex)
    //get position of 'questionIndex' from 'availableQuestions' array
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove the current 'questionIndex' from 'availableQuestions' array
    availableQuestions.splice(index1,1)
    const optionLength = currentQuestion.options.length
    //push options into availableOptions array
    for(let i=0; i<optionLength; i++){
        availableOptions.push(i)
    }
    optionContainer.innerHTML = '';
    //create options in inner html
    for(let i=0; i<optionLength; i++){
        //options randomizer
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        //get the position of optionIndex from availableOptions
        const index2 = availableOptions.indexOf(optionIndex);
        //remove the option from availableOptions, so no repetition
        availableOptions.splice(index2,1);
        const option = document.createElement("button");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.className = "tombol";
        optionContainer.appendChild(option);
        option.setAttribute("onclick","getResult(this)")
    }
    questionCounter++
}

//get the result of current selection of option
function getResult(element){
    const id = parseInt(element.id);
    //result come from comparing id of clicked question to id of answer
    if(id === currentQuestion.answer){
        console.log("Answer correct");
        count+=1;
        document.getElementById("playerScore").innerHTML = "Score: " + count;
        element.classList.add("correct");
        stopAnimation();
        if(questionCounter === quiz.length){
            console.log("Congratulations, you finished the quiz!!");
            popuphasil();
            musuh.style.visibility = 'hidden';
            narutoDiam();
        }
        else{
            getNewQuestion();
            restartAnimation();
        }
    }
    else{
        console.log("Answer incorrect")
    }
}


function popuphasil(){
    kotak.classList.add('active');
    overlay.classList.add('active')
}

function stopAnimation(){
    // Hapus kelas CSS
    musuh.classList.remove("block");
}

function restartAnimation() {
    // Jalankan kelas CSS lagi
    void musuh.offsetWidth;
    musuh.classList.add("block");
}

function narutoDiam(){
    const narutoimg = naruto.querySelector("img");
    
    naruto.removeChild(narutoimg);

    const narutoimgnew = document.createElement('img');
    narutoimgnew.setAttribute('src', './image/narutodiam.png');
    naruto.appendChild(narutoimgnew);
}

function narutoBergerak(){
    const narutoimgnew = document.createElement('img');
    narutoimgnew.setAttribute('src', './image/pixil-gif-drawing-unscreen.gif');
    naruto.appendChild(narutoimgnew);
}

function musuhMuncul(){
    const musuhimgnew = document.createElement('img');
    musuhimgnew.setAttribute('src', './image/lawan.gif');
    musuh.appendChild(musuhimgnew);
}

function next(){
    if(questionCounter === quiz.length){
        console.log("Congratulations, you finished the quiz!!");
    }
    else{
        getNewQuestion();
    }
}

window.onload = function(){
    //set all questions in the array
    setAvailableQuestions();

    getNewQuestion();
    
    narutoBergerak();

    musuhMuncul();
}
