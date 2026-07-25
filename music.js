/* =========================================
   Background Music — Continuous Across Pages
   For Emaana ❤️
========================================= */

(function () {

    const SONG_SRC = "audio/song.mp3"; // 🔁 replace with your file name if different

    const audio = document.createElement("audio");
    audio.src = SONG_SRC;
    audio.loop = true;
    audio.id = "bg-music";
    document.body.appendChild(audio);

    /* --------------------------
       Floating Music Button
    ---------------------------*/

    const btn = document.createElement("button");
    btn.id = "music-toggle";
    btn.innerHTML = "🎵";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.width = "52px";
    btn.style.height = "52px";
    btn.style.borderRadius = "50%";
    btn.style.border = "none";
    btn.style.background = "#ff4d88";
    btn.style.color = "#fff";
    btn.style.fontSize = "22px";
    btn.style.cursor = "pointer";
    btn.style.boxShadow = "0 8px 20px rgba(255,77,136,.4)";
    btn.style.zIndex = "9999";
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "center";
    btn.style.transition = ".3s";
    document.body.appendChild(btn);

    /* --------------------------
       Restore Saved Position
    ---------------------------*/

    const savedTime = parseFloat(sessionStorage.getItem("musicTime")) || 0;
    const wasPlaying = sessionStorage.getItem("musicPlaying") === "true";

    audio.addEventListener("loadedmetadata", () => {
        audio.currentTime = savedTime;
    });

    function updateIcon() {
        btn.innerHTML = audio.paused ? "🎵" : "⏸";
    }

    function tryAutoplay() {
        if (wasPlaying) {
            audio.play()
                .then(updateIcon)
                .catch(() => {
                    // Autoplay blocked by browser — user just taps the button once
                    updateIcon();
                });
        } else {
            updateIcon();
        }
    }

    tryAutoplay();

    /* --------------------------
       Toggle Play / Pause
    ---------------------------*/

    btn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        updateIcon();
    });

    /* --------------------------
       Keep Position Synced
    ---------------------------*/

    audio.addEventListener("timeupdate", () => {
        sessionStorage.setItem("musicTime", audio.currentTime);
        sessionStorage.setItem("musicPlaying", (!audio.paused).toString());
    });

    audio.addEventListener("play", () => {
        sessionStorage.setItem("musicPlaying", "true");
        updateIcon();
    });

    audio.addEventListener("pause", () => {
        sessionStorage.setItem("musicPlaying", "false");
        updateIcon();
    });

})();
