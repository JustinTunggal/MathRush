let stopbtn = document.querySelector("#stopbtn");
stopbtn.addEventListener("click", block, false);

function enemy(event){
    let block = document.querySelector(".block");

    block.style.animationName = "none";

    requestAnimationFrame(() => {
        block.style.animationName = "";
    });
}