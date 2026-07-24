/* =====================================
   STORY PAGE
   For Emaana ❤️
===================================== */

const title = document.getElementById("title");
const message = document.getElementById("message");
const next = document.getElementById("next");

/* Story Lines */

const story = [

{
title:"Psst... 👀",
text:"Hi Emaana... ❤️"
},

{
title:"I'm just a Teddy 🧸",
text:"But today... Ubaid asked me to speak on his behalf."
},

{
title:"He Knows... 🥺",
text:"He knows he made a mistake..."
},

{
title:"And He's Sorry 🤍",
text:"Not because you were angry... but because you were hurting, and he wasn't there the way he should have been."
},

{
title:"Two Years ❤️",
text:"Almost two beautiful years... and he still remembers your very first call like it happened yesterday."
},

{
title:"That First Call 📞",
text:"He was nervous... smiling for no reason... and secretly hoping that call would never end."
},

{
title:"He Still Cares 🌸",
text:"If he could go back and change one thing... he would have been beside you when you needed him the most."
},

{
title:"One Small Wish ✨",
text:"He doesn't want a perfect relationship... he just wants another chance to make you smile."
},

{
title:"For You ❤️",
text:"This little website wasn't made by accident... every page is only for one person... You."
}

];

let index = 0;

/* Typing Effect */

function typeWriter(text){

message.innerHTML="";

let i=0;

let typing = setInterval(()=>{

message.innerHTML += text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},35);

}

function showStory(){

title.style.opacity=0;
message.style.opacity=0;

setTimeout(()=>{

title.innerHTML=story[index].title;

typeWriter(story[index].text);

title.style.opacity=1;
message.style.opacity=1;

},300);

}

showStory();

/* Continue */

next.onclick=function(){

index++;

if(index<story.length){

showStory();

}

else{

next.innerHTML="Open Letter ❤️";

next.onclick=function(){

window.location.href="letter.html";

}

}

}

/* Teddy Bounce Speed Random */

const teddy=document.querySelector(".teddy");

setInterval(()=>{

teddy.style.transform="translateY(-15px)";

setTimeout(()=>{

teddy.style.transform="translateY(0px)";

},500);

},2500);

/* Moon Glow */

const moon=document.querySelector(".moon");

setInterval(()=>{

moon.animate([

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

duration:3500

});

},3500);

/* Floating Hearts */

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-20px";

heart.style.fontSize=(18+Math.random()*18)+"px";

heart.style.opacity=".7";

heart.style.animation="floatHeart 8s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},800);

/* Heart Animation */

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatHeart{

0%{

transform:translateY(0);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

`;

document.head.appendChild(style);

console.log("Story Loaded ❤️");