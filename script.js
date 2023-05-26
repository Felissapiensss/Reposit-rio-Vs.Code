const Dino = document.querySelector(".Dino");
const Kacto = document.querySelector(".Kacto");
const Score = document.querySelector(".Score");
let alreadyJump = false;
let count = 0;

document.addEventListener("keydown" ,(e) =>{
if((e.code==="ArrowUp") | (e.code==="Space")){
    jump()
}
});
 function jump(){
    if(!Dino.classList.contains("jump")){
        Dino.classList.add("jump");
        alreadyJump=true
        setTimeout(() => {
            Dino.classList.remove("jump");
            alreadyJump=false
        },1100)
    }
 }
 setInterval(() =>{
    let Dinobottom = parseInt(
        window.getComputedStyle(Dino).getPropertyValue("bottom")
    );
    let Kactobottom = parseInt(
        window.getComputedStyle(Kacto).getPropertyValue("bottom")
    );
    if(Kactoleft > 40 && Kactoleft < 270 && Dinobottom <=50 && !alreadyJump){
        alert(`Game Over! Seu Score Foi:${count}`);
        count = 0;
    }
    count++;
    Score.innerHTML = `SCORE: ${count}`;
 },10)
