

requestAnimationFrame(raf)  
        // Redirect to index.html on page refresh
        window.addEventListener("beforeunload", function () {
            window.location.href = "index.html";
        });
    



//video wala part 


const videos = document.querySelectorAll("#content video"); 

videos.forEach(video => {
    video.addEventListener('timeupdate', function () {
        if (video.currentTime >= video.duration / 2) {
            video.currentTime = 0;
            video.play();
        }
    });
});



