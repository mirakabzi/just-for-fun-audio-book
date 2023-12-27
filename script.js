// [stop another media] 
$("audio").on("play", function() {
    var id = $(this).attr('id');
  
    $("audio").not(this).each(function(index, audio) {
        audio.pause();
    });
    $("video").not(this).each(function(index, video) {
      video.pause();
  });
  });
  
  $("video").on("play", function() {
    var id = $(this).attr('id');
  
    $("video").not(this).each(function(index, video) {
        video.pause();
    });
    $("audio").not(this).each(function(index, audio) {
      audio.pause();
  });
  });
  // end [stop another media]