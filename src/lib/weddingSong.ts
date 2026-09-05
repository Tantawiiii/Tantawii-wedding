let audio: HTMLAudioElement | null = null;

export function getWeddingSong() {
  if (!audio) {
    audio = new Audio("/audio/leilat-omrena.mp3");
    audio.loop = true;
    audio.volume = 0.55;
  }
  return audio;
}

export function playWeddingSong() {
  const el = getWeddingSong();
  el.play().catch(() => {
    // autoplay may still be blocked until a user gesture; ignored, the
    // caller is always invoked from a click handler so this should succeed
  });
}

export function isWeddingSongPlaying() {
  return !!audio && !audio.paused;
}
