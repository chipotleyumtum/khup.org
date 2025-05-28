// JavaScript for aboutme.html
// Handles random quote display and music players

document.addEventListener('DOMContentLoaded', function() {
  const quotes = [
    "Learning never exhausts the mind."
  ];
  const quoteElement = document.getElementById('quote');
  if (quoteElement) {
    quoteElement.innerText = quotes[Math.floor(Math.random() * quotes.length)];
  }
});

// Simple record player functionality
function togglePlay(playerId) {
    console.log('togglePlay called with:', playerId);
    const audio = document.getElementById(playerId);
    const playBtn = document.querySelector(`[data-player="${playerId}"] .play-btn`);
    const vinyl = document.querySelector(`[data-player="${playerId}"] .vinyl-record`);
    
    console.log('Found elements:', { audio, playBtn, vinyl });
    
    if (audio && playBtn) {
        if (audio.paused) {
            console.log('Playing audio');
            audio.play().then(() => {
                console.log('Audio started playing');
                playBtn.innerHTML = '⏸️';
                playBtn.classList.add('playing');
                if (vinyl) vinyl.classList.add('spinning');
            }).catch(error => {
                console.error('Error playing audio:', error);
                alert('Error playing audio: ' + error.message);
            });
        } else {
            console.log('Pausing audio');
            audio.pause();
            playBtn.innerHTML = '▶️';
            playBtn.classList.remove('playing');
            if (vinyl) vinyl.classList.remove('spinning');
        }
    } else {
        console.error('Missing elements for player:', playerId);
    }
}

// Initialize all players
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing players...');
    
    // Test if players exist
    const hipHopAudio = document.getElementById('hipHopPlayer');
    const moonAudio = document.getElementById('moonPlayer');
    console.log('Audio elements found:', { hipHopAudio, moonAudio });
    
    // Hip-hop player
    const hipHopBtn = document.querySelector('[data-player="hipHopPlayer"] .play-btn');
    const hipHopVinyl = document.querySelector('[data-player="hipHopPlayer"] .vinyl-record');
    
    console.log('Hip-hop elements:', { hipHopBtn, hipHopVinyl });
    
    if (hipHopAudio && hipHopBtn) {
        hipHopAudio.addEventListener('ended', () => resetPlayer(hipHopBtn, hipHopVinyl));
        hipHopAudio.addEventListener('pause', () => resetPlayer(hipHopBtn, hipHopVinyl));
        hipHopAudio.addEventListener('loadstart', () => console.log('Hip-hop audio loading started'));
        hipHopAudio.addEventListener('canplay', () => console.log('Hip-hop audio can play'));
        hipHopAudio.addEventListener('error', (e) => console.error('Hip-hop audio error:', e));
    }
    
    // Moon player
    const moonBtn = document.querySelector('[data-player="moonPlayer"] .play-btn');
    const moonVinyl = document.querySelector('[data-player="moonPlayer"] .vinyl-record');
    
    console.log('Moon elements:', { moonBtn, moonVinyl });
    
    if (moonAudio && moonBtn) {
        moonAudio.addEventListener('ended', () => resetPlayer(moonBtn, moonVinyl));
        moonAudio.addEventListener('pause', () => resetPlayer(moonBtn, moonVinyl));
        moonAudio.addEventListener('loadstart', () => console.log('Moon audio loading started'));
        moonAudio.addEventListener('canplay', () => console.log('Moon audio can play'));
        moonAudio.addEventListener('error', (e) => console.error('Moon audio error:', e));
    }
    
    // Test button clicks
    const allPlayBtns = document.querySelectorAll('.play-btn');
    console.log('Found play buttons:', allPlayBtns.length);
    allPlayBtns.forEach((btn, index) => {
        console.log(`Button ${index}:`, btn);
    });
});

function resetPlayer(playBtn, vinyl) {
    if (playBtn) {
        playBtn.innerHTML = '▶️';
        playBtn.classList.remove('playing');
    }
    if (vinyl) {
        vinyl.classList.remove('spinning');
    }
}
