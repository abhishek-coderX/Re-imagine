function raf() {
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.addEventListener("beforeunload", function () {
    window.location.href = "index.html";
});

const videos = document.querySelectorAll("#content video");

videos.forEach(video => {
    video.addEventListener('timeupdate', function () {
        if (video.currentTime >= video.duration / 2) {
            video.currentTime = 0;
            video.play();
        }
    });
});