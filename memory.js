/* ==========================================
   MEMORY PAGE
   A Little World For Emaana ❤️
========================================== */

const typing = document.getElementById("typing");
const next = document.getElementById("next");

/* Story */

const text = `

Do you remember our very first call? 📞

Maybe it was just another day...

But for Ubaid...

It became one of the happiest memories.

He still remembers smiling for no reason.

Those late-night talks...

The random laughs...

The little arguments...

The tiny moments...

Everything slowly became a beautiful story.

Almost two years later...

He still chooses you.

Every single day.

❤️

`;

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

typeWriter();



/* Floating Hearts */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.animationDuration=(6+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,700);



/* Cards Fade */

const cards=document.querySelectorAll(".memory-card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(60px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards"

});

}

});

});

cards.forEach(card=>observer.observe(card));



/* Button Glow */

setInterval(()=>{

next.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.06)"

},

{

transform:"scale(1)"

}

],{

duration:1800

});

},2200);



/* Continue */

next.onclick=function(){

window.location.href="gallery.html";

}



/* Console */

console.log("❤️ Memories Loaded");