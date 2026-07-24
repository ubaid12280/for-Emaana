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

setInterval(heart,300);



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

yes.onclick=function(){

    firework();

    setInterval(firework,1200);

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

Thank you for reading this little story.

Love,

Ubaid ❤️

`;

    yes.style.display="none";

    no.style.display="none";

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