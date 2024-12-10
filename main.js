<<<<<<< HEAD


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



=======


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



>>>>>>> 767f567a4cf9d36e9c4c5653b66c17496c088d8f
