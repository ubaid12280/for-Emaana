/* ==========================================
   FINAL PAGE
   Made with ❤️ by Ubaid
========================================== */

const message = document.getElementById("message");
const yes = document.getElementById("yes");
const no = document.getElementById("no");

const text = `

Dear Emaana ❤️

Thank you...

For every smile.

For every late night.

For every little memory.

I know...

I made mistakes.

And I'm not trying to erase them.

I just want to become better.

Almost two beautiful years...

And I'd still choose you.

Again...

Every single day.

No matter what your answer is...

Thank you

for being one of the most beautiful parts of my life.

❤️

`;

let i = 0;

function typeWriter(){

    if(i < text.length){

        message.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

typeWriter();



/* ==========================
   Floating Hearts
========================== */

function heart(){

    const h=document.createElement("div");

    h.className="heart";

    h.innerHTML="❤️";

    h.style.left=Math.random()*100+"vw";

    h.style.fontSize=(18+Math.random()*18)+"px";

    h.style.animationDuration=(6+Math.random()*3)+"s";

    document.body.appendChild(h);

    setTimeout(()=>{

        h.remove();

    },9000);

}

let heartInterval = setInterval(heart,300);



/* ==========================
   Fireworks
========================== */

function firework(){

    for(let i=0;i<18;i++){

        const f=document.createElement("div");

        f.className="firework";

        f.style.left=Math.random()*100+"vw";

        f.style.top=Math.random()*70+"vh";

        f.style.background=
        `hsl(${Math.random()*360},100%,70%)`;

        document.body.appendChild(f);

        setTimeout(()=>{

            f.remove();

        },900);

    }

}



/* ==========================
   YES BUTTON
========================== */

/* ==========================
   YES BUTTON — Grand Finale
========================== */

const finale = document.getElementById("finale");
const finaleText = document.getElementById("finale-text");
const theEnd = document.getElementById("the-end");

const closingLetter = `Emaana...

There's a moment right now where everything I've been trying to say finally has nowhere left to hide.

So here it is. The whole truth.

You didn't just make my days better.
You made me want to become someone worth staying for.

Every fight. Every silence. Every late night message.
Somehow it all led here — to this exact moment, to you saying yes.

I don't have a grand gesture bigger than this little page.
I just have me. All of me. Still choosing you. Still trying. Still yours.

Thank you for being the softest place in my whole story.

This isn't really an ending.
It's just the first page of everything after this.

❤️ Ubaid`;

yes.onclick=function(){

    // Stage 1 — Immediate celebration burst

    firework();

    let burstCount = 0;

    const burstInterval = setInterval(()=>{

        firework();
        burstCount++;

        if(burstCount >= 4){
            clearInterval(burstInterval);
        }

    },900);

    document.body.style.background=
    "linear-gradient(180deg,#ff8ab5,#ffbfd6,#fff2f7)";

    document.querySelector("h1").innerHTML=
    "Thank You ❤️";

    message.innerHTML=`

I promise...

to keep trying.

to keep caring.

to keep choosing you.

every single day.

❤️

`;

    yes.style.display="none";
    no.style.display="none";

    // Stage 2 — Dramatic pause, then reveal the closing letter

    setTimeout(()=>{

        document.body.style.transition="background 2s ease";
        document.body.style.background=
        "linear-gradient(180deg,#0b1023,#151c39,#241b4d)";

        document.querySelector(".container").style.transition="opacity 1.2s ease";
        document.querySelector(".container").style.opacity="0";

        setTimeout(()=>{

            document.querySelector(".container").style.display="none";

            finale.classList.add("show");

            clearInterval(heartInterval);
            heartInterval = setInterval(heart, 1400);

            let j = 0;

            function typeClosing(){

                if(j < closingLetter.length){

                    finaleText.innerHTML += closingLetter.charAt(j);

                    j++;

                    setTimeout(typeClosing, 28);

                } else {

                    // Stage 3 — Everything settles, story closes

                    setTimeout(()=>{

                        theEnd.classList.add("show");

                        setTimeout(()=>{

                            clearInterval(heartInterval);

                        },6000);

                    },1400);

                }

            }

            typeClosing();

        },1300);

    },4200);

}



/* ==========================
   NO BUTTON
========================== */

let count=0;

no.addEventListener("mouseenter",()=>{

count++;

const x=Math.random()*70;
const y=Math.random()*60;

no.style.position="absolute";
no.style.left=x+"vw";
no.style.top=y+"vh";

if(count==6){

no.innerHTML="🥹 Okay...";

}

if(count==10){

no.style.position="static";

no.innerHTML="❤️ I'll Stay";

}

});



/* ==========================
   Button Pulse
========================== */

setInterval(()=>{

yes.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:1800

});

},2000);

console.log("❤️ Final Page Loaded");