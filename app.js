const questionText = document.querySelector(".pertanyaan");
const optionContainer = document.querySelector(".pilihan");
const musuh = document.getElementById("musuh");
const naruto = document.getElementById("naruto");
const hasilakhir = document.getElementById('kotak');
const overlay = document.getElementById('overlay');


let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableQuestionsMudah = [];
let availableQuestionsMenengah = [];
let availableQuestionsSulit = [];
let availableOptions = [];
let count = 0;


function setAvailableQuestions(){
    const totalQuestionsmudah = soalmudaharray.length;
    const totalQuestionsmenengah = soalmenengaharray.length;
    const totalQuestionssulit = soalsulitarray.length;
    for(let i=0; i<totalQuestionsmudah; i++){
        availableQuestionsMudah.push(soalmudaharray[i])
    };
    for(let i=0; i<totalQuestionsmenengah; i++){
        availableQuestionsMenengah.push(soalmenengaharray[i])
    };
    for(let i=0; i<totalQuestionssulit; i++){
        availableQuestionsSulit.push(soalsulitarray[i])
    };
}


//set question number, text, and option
function getNewQuestion(){
    if(questionCounter<10){
        //the actual random part
        const questionIndex = availableQuestionsMudah[Math.floor(Math.random() * availableQuestionsMudah.length)]
        currentQuestion = questionIndex;
        questionText.innerHTML = currentQuestion.q;
        //console.log(questionIndex)
        //get position of 'questionIndex' from 'availableQuestions' array
        const index1 = availableQuestionsMudah.indexOf(questionIndex);
        //remove the current 'questionIndex' from 'availableQuestions' array
        availableQuestionsMudah.splice(index1,1)
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
    else if(questionCounter>=10 && questionCounter<20){
        //the actual random part
        const questionIndex = availableQuestionsMenengah[Math.floor(Math.random() * availableQuestionsMenengah.length)]
        currentQuestion = questionIndex;
        questionText.innerHTML = currentQuestion.q;
        //console.log(questionIndex)
        //get position of 'questionIndex' from 'availableQuestions' array
        const index1 = availableQuestionsMenengah.indexOf(questionIndex);
        //remove the current 'questionIndex' from 'availableQuestions' array
        availableQuestionsMenengah.splice(index1,1)
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
    else if(questionCounter>=20 && questionCounter<30){
        //the actual random part
        const questionIndex = availableQuestionsSulit[Math.floor(Math.random() * availableQuestionsSulit.length)]
        currentQuestion = questionIndex;
        questionText.innerHTML = currentQuestion.q;
        //console.log(questionIndex)
        //get position of 'questionIndex' from 'availableQuestions' array
        const index1 = availableQuestionsSulit.indexOf(questionIndex);
        //remove the current 'questionIndex' from 'availableQuestions' array
        availableQuestionsSulit.splice(index1,1)
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
        if(questionCounter === 30){
            console.log("Congratulations, you finished the quiz!!");
            popuphasil();
            musuh.style.visibility = 'hidden';
            narutoDiam();
            countDown = 20;
        }
        else{
            getNewQuestion();
            stopTimer();
            restartAnimation();
            startTimer();
        }
    }
    else{
        console.log("Answer incorrect")
        popuphasil();
        narutoDiam();
        musuh.style.visibility = 'hidden';
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

var countDown = 20;
var x;

function startTimer(){
    x = setInterval(function() {
        countDown--;
    
        if(countDown === 0) {
            clearInterval(x);
            popuphasil();
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(x);
    countDown =20;
}

window.onload = function(){
    //set all questions in the array
    setTimeout(function() {
        setAvailableQuestions();

        getNewQuestion();
        
        narutoBergerak();
    
        musuhMuncul();
    
        startTimer();
    }, 200);
}



