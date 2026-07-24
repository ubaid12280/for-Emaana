/* ==========================================
   LETTER PAGE
   A Little World For Emaana ❤️
========================================== */

const envelope = document.getElementById("envelope");
const typing = document.getElementById("typing");
const button = document.getElementById("continue");

/* Letter Text */

const letter = `

Dear Emaana ❤️,

Before anything else...

I'm sorry.

Not because I wanted to win an argument...

But because I never wanted you to feel alone.

I know these days weren't easy for you.

Especially when you weren't feeling well.

And I know...

I should have cared more.

I should have asked more.

I should have understood more.

Maybe I can't change what already happened...

But I can promise you...

I'll keep trying to become better.

Not perfect...

Just better than yesterday.

Almost two beautiful years...

And I still remember our first call.

I still remember smiling for absolutely no reason.

Thank you...

For every laugh.

For every late night.

For every little memory.

And for being part of my life.

If today your heart is still angry...

I'll wait.

If it still hurts...

I'll stay.

Because...

You're worth every effort.

Love,

Ubaid ❤️

`;



/* Open Envelope */

setTimeout(() => {

    envelope.classList.add("open");

},800);



/* Typing */

let i = 0;

function typeLetter(){

    if(i < letter.length){

        typing.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeLetter,28);

    }

    else{

        button.style.display="inline-block";

    }

}

setTimeout(typeLetter,1800);



/* Floating Hearts */

setInterval(()=>{

    let heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.opacity=".7";

    heart.style.pointerEvents="none";

    heart.style.animation="heartFly 8s linear forwards";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

},900);



/* Heart Animation */

const style=document.createElement("style");

style.innerHTML=`

@keyframes heartFly{

0%{

transform:translateY(0) scale(.5);

opacity:0;

}

15%{

opacity:1;

}

100%{

transform:translateY(-120vh) scale(1.4);

opacity:0;

}

}

`;

document.head.appendChild(style);



/* Continue */

button.onclick=function(){

window.location.href="memory.html";

}



/* Cursor Blink */

setInterval(()=>{

typing.innerHTML+="";

},500);

console.log("❤️ Letter Loaded Successfully");