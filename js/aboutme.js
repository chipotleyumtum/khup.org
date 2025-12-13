// Optimized JavaScript for aboutme.html
// Handles quote display and music players with better performance

// Cache DOM queries for better performance
const playerCache = new Map();

// Display random quote on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initQuote);
} else {
  initQuote();
}

function initQuote() {
  const quotes = ["Learning never exhausts the mind."];
  const quoteElement = document.getElementById('quote');
  if (quoteElement) {
    quoteElement.textContent = quotes[0];
  }
}

// Async function to handle audio playback with better error handling
async function togglePlay(playerId) {
  const elements = getPlayerElements(playerId);
  if (!elements) return;

  const { audio, playBtn, vinyl } = elements;

  try {
    if (audio.paused) {
      await audio.play();
      updatePlayerUI(playBtn, vinyl, true);
    } else {
      audio.pause();
      updatePlayerUI(playBtn, vinyl, false);
    }
  } catch (error) {
    // Silent fail for better UX, user can try again
    updatePlayerUI(playBtn, vinyl, false);
  }
}

// Cache DOM queries to avoid repeated lookups (O(1) instead of O(n))
function getPlayerElements(playerId) {
  if (playerCache.has(playerId)) {
    return playerCache.get(playerId);
  }

  const audio = document.getElementById(playerId);
  const playBtn = document.querySelector(`[data-player="${playerId}"] .play-btn`);
  const vinyl = document.querySelector(`[data-player="${playerId}"] .vinyl-record`);

  if (audio && playBtn) {
    const elements = { audio, playBtn, vinyl };
    playerCache.set(playerId, elements);
    return elements;
  }

  return null;
}

// Optimized UI update function
function updatePlayerUI(playBtn, vinyl, isPlaying) {
  if (!playBtn) return;
  
  playBtn.innerHTML = isPlaying ? '⏸️' : '▶️';
  playBtn.classList.toggle('playing', isPlaying);
  
  if (vinyl) {
    vinyl.classList.toggle('spinning', isPlaying);
  }
}

// Reset player to initial state
function resetPlayer(playBtn, vinyl) {
  updatePlayerUI(playBtn, vinyl, false);
}

// Initialize players with event delegation for better performance
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPlayers);
} else {
  initPlayers();
}

function initPlayers() {
  const playerIds = ['hipHopPlayer', 'moonPlayer'];
  
  // Use event delegation for better performance
  playerIds.forEach(playerId => {
    const elements = getPlayerElements(playerId);
    if (elements) {
      const { audio, playBtn, vinyl } = elements;
      
      // Use passive listeners where possible
      audio.addEventListener('ended', () => resetPlayer(playBtn, vinyl), { passive: true });
      audio.addEventListener('pause', () => resetPlayer(playBtn, vinyl), { passive: true });
    }
  });
}
