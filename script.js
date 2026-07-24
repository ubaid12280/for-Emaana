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

        const revealMain = () => {

            loading.style.display = "none";
            main.style.display = "flex";

            startTyping();
            animateCardEntrance();

        };

        if (typeof gsap !== "undefined") {

            gsap.to(loading, {

                opacity: 0,
                duration: 1,
                onComplete: revealMain

            });

        } else {

            loading.style.transition = "1s";
            loading.style.opacity = "0";

            setTimeout(revealMain, 1000);

        }

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

    if (typeof gsap !== "undefined") {

        gsap.to(continueBtn,{

            scale:.92,
            duration:.15,
            yoyo:true,
            repeat:1,
            ease:"power1.inOut"

        });

    } else {

        continueBtn.style.transform = "scale(.95)";

        setTimeout(() => {
            continueBtn.style.transform = "scale(1)";
        }, 150);

    }

    continueBtn.innerHTML="Loading Next Surprise... 💖";

    setTimeout(()=>{

        alert(
`🌸 Hi Emaana ❤️

This is only the beginning...

More surprises are waiting for you.

Made with love by Ubaid 🤍`
        );

        continueBtn.innerHTML="Continue 💖";

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

    if (typeof gsap !== "undefined") {

        gsap.to(glow,{

            left:e.clientX-10+"px",
            top:e.clientY-10+"px",
            duration:.3,
            ease:"power3.out"

        });

    } else {

        glow.style.left = e.clientX-10+"px";
        glow.style.top = e.clientY-10+"px";

    }

});


/* --------------------------
   Card Entrance Animation (GSAP)
---------------------------*/

function animateCardEntrance(){

    if (typeof gsap === "undefined") {

        const card = document.querySelector(".glass-card");

        if (card) {

            card.animate([
                { transform:"translateY(80px)", opacity:0 },
                { transform:"translateY(0)", opacity:1 }
            ],{ duration:1000, easing:"ease", fill:"forwards" });

        }

        return;

    }

    const tl = gsap.timeline();

    tl.from(".glass-card",{

        opacity:0,
        y:70,
        scale:.9,
        duration:1,
        ease:"back.out(1.4)"

    })

    .from(".glass-card h3",{

        opacity:0,
        y:20,
        duration:.6

    },"-=0.5")

    .from(".glass-card p",{

        opacity:0,
        y:15,
        duration:.6

    },"-=0.2")

    .from("#continue",{

        opacity:0,
        y:15,
        scale:.8,
        duration:.6,
        ease:"back.out(2)"

    },"-=0.3");

}


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


console.log("❤️ Welcome Emaana");
console.log("Made by Ubaid");