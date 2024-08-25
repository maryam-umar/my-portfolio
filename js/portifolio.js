// portfolio.js

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');

    // Play music when the button is clicked
    playButton.addEventListener('click', function() {
        audio.play().then(() => {
            console.log('Music is playing');
        }).catch(error => {
            console.log('Playback failed:', error);
        });
        
        // Optionally, hide the play button after the music starts playing
        playButton.style.display = 'none';
    });
});

