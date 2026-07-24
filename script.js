/* =========================================
   A Little World For Emaana ❤️
   Version 1
========================================= */

const loading = document.getElementById("loading");
const main = document.getElementById("main");
const typing = document.getElementById("typing");
const continueBtn = document.getElementById("continue");
const heartsContainer = document.querySelector(".floating-hearts");

/* --------------------------
   Loading Screen
---------------------------*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.style.opacity = "0";
        loading.style.transition = "1s";

        setTimeout(() => {

            loading.style.display = "none";
            main.style.display = "flex";

            startTyping();

        },1000);

    },2500);

});


/* --------------------------
   Typing Effect
---------------------------*/

const message =
"I've been wanting to say this properly for a while now... 🥺❤️";

let i = 0;

function startTyping(){

    typing.innerHTML="";

    let type = setInterval(()=>{

        typing.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){

            clearInterval(type);

        }

    },60);

}


/* --------------------------
   Floating Hearts
---------------------------*/

function createHeart(){

    const heart = document.createElement("span");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=
    (4+Math.random()*5)+"s";

    heart.style.fontSize=
    (18+Math.random()*25)+"px";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,250);


/* --------------------------
   Continue Button
---------------------------*/

continueBtn.addEventListener("click",()=>{

    continueBtn.innerHTML="Loading Next Surprise... 💖";

    continueBtn.style.transform="scale(.95)";

    setTimeout(()=>{

        alert(
`🌸 Hi Emaana ❤️

This is only the beginning...

More surprises are waiting for you.

Made with love by Ubaid 🤍`
        );

        continueBtn.innerHTML="Continue 💖";
        continueBtn.style.transform="scale(1)";

        window.location.href="teddy.html";

    },1200);

});


/* --------------------------
   Mouse Glow
---------------------------*/

const glow = document.createElement("div");

glow.style.position="fixed";
glow.style.width="20px";
glow.style.height="20px";
glow.style.borderRadius="50%";
glow.style.background="rgba(255,77,136,.35)";
glow.style.pointerEvents="none";
glow.style.filter="blur(12px)";
glow.style.zIndex="9999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-10+"px";
    glow.style.top=e.clientY-10+"px";

});


/* --------------------------
   Card Entrance Animation
---------------------------*/

setTimeout(()=>{

    const card=document.querySelector(".glass-card");

    if(card){

        card.animate([

            {
                transform:"translateY(80px)",
                opacity:0
            },

            {
                transform:"translateY(0)",
                opacity:1
            }

        ],{

            duration:1200,
            easing:"ease"

        });

    }

},3500);


/* --------------------------
   Background Sparkle
---------------------------*/

setInterval(()=>{

document.body.animate([

{
filter:"brightness(1)"
},

{
filter:"brightness(1.05)"
},

{
filter:"brightness(1)"
}

],{

duration:2500

});

},4000);


/* --------------------------
   Future Music Placeholder
---------------------------*/

// const music = new Audio("music.mp3");
// music.loop = true;
// music.play();


console.log("❤️ Welcome Emaana");
console.log("Made by Ubaid");