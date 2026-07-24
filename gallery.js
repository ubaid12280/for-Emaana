/* ==========================================
   GALLERY PAGE
   For Emaana ❤️
========================================== */

const next = document.getElementById("next");
const photos = document.querySelectorAll(".photo img");

/* =========================
   Floating Hearts
========================= */

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-30px";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.pointerEvents="none";

    heart.style.opacity=".8";

    heart.style.animation="heartFly "+(6+Math.random()*3)+"s linear forwards";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,700);


/* =========================
   Heart Animation
========================= */

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

transform:translateY(-120vh) scale(1.5);

opacity:0;

}

}

`;

document.head.appendChild(style);


/* =========================
   Create Photo Viewer
========================= */

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.85)";
overlay.style.display="none";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="9999";

const image=document.createElement("img");

image.style.maxWidth="90%";
image.style.maxHeight="85%";
image.style.borderRadius="18px";
image.style.boxShadow="0 20px 60px rgba(255,255,255,.2)";
image.style.transition=".4s";

overlay.appendChild(image);

document.body.appendChild(overlay);


/* =========================
   Open Image
========================= */

photos.forEach(photo=>{

photo.addEventListener("click",()=>{

image.src=photo.src;

overlay.style.display="flex";

});

});


/* =========================
   Close Viewer
========================= */

overlay.onclick=function(){

overlay.style.display="none";

}

document.addEventListener("keydown",e=>{

if(e.key==="Escape"){

overlay.style.display="none";

}

});


/* =========================
   Button Animation
========================= */

setInterval(()=>{

next.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.05)"

},

{

transform:"scale(1)"

}

],{

duration:1700

});

},2200);


/* =========================
   Continue
========================= */

next.onclick=function(){

window.location.href="final.html";

}


console.log("❤️ Gallery Loaded");