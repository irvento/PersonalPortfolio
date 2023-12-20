document.addEventListener('keydown', function(event) {
    // Check if the pressed key is 'f'
    if (event.key === 'f') {
      // Get the audio element
      var audio = document.getElementById('myAudio');

      // Check if the audio is paused or not
      if (audio.paused) {
        // If paused, play the audio
        audio.play();
      } else {
        // If playing, pause the audio
        audio.pause();
      }
    }
    if (event.key === 'n') {
      // Get the audio element
      var audio = document.getElementById('myAudio2');

      // Check if the audio is paused or not
      if (audio.paused) {
        // If paused, play the audio
        audio.play();
      } else {
        // If playing, pause the audio
        audio.pause();
      }
    }
  });
  
  function playAudio(audioSrc) {
    var audio = new Audio(audioSrc);
    audio.play();
}