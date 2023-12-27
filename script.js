const tracks = Array.from(document.querySelectorAll('audio'));

tracks.forEach(function(track) {
    track.addEventListener('play', (event) => {
      tracks.forEach(function(track) {
        if(track !== event.target) track.pause();
      })
    })
})