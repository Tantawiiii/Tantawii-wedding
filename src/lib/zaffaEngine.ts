// Generative "zaffa"-flavored loop: a warm sustained drone (mizmar-ish) plus a
// steady percussive tabla-like pulse — built entirely with oscillators/noise,
// no audio files, so it's playable instantly with zero licensing concerns.
export type ZaffaEngine = ReturnType<typeof createZaffaEngine>;

let singleton: ZaffaEngine | null = null;

export function createZaffaEngine() {
  const ctx = new (window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext })
      .webkitAudioContext)();

  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);

  const droneFilter = ctx.createBiquadFilter();
  droneFilter.type = "lowpass";
  droneFilter.frequency.value = 1200;
  droneFilter.connect(master);

  // Maqam-flavored phrase (Hz) cycling — evokes a mizmar/zaffa melodic line
  const phrase = [293.66, 329.63, 349.23, 392.0, 349.23, 329.63, 293.66, 261.63];

  let phraseIndex = 0;
  let melodyTimer: ReturnType<typeof setInterval> | null = null;
  let beatTimer: ReturnType<typeof setInterval> | null = null;
  let beatCount = 0;
  const activeNodes: { stop: () => void }[] = [];

  function playNote(freq: number) {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.value = freq;

    const gain = ctx.createGain();
    gain.gain.value = 0;
    osc.connect(gain);
    gain.connect(droneFilter);

    const attack = 0.15;
    const hold = 0.55;
    const release = 0.5;
    const peak = 0.045;

    gain.gain.linearRampToValueAtTime(peak, now + attack);
    gain.gain.setValueAtTime(peak, now + attack + hold);
    gain.gain.linearRampToValueAtTime(0, now + attack + hold + release);

    osc.start(now);
    osc.stop(now + attack + hold + release + 0.1);
    activeNodes.push({ stop: () => osc.stop() });
  }

  function playDoum() {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(48, now + 0.15);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.22, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(master);
    osc.start(now);
    osc.stop(now + 0.25);
    activeNodes.push({ stop: () => osc.stop() });
  }

  function playTak() {
    const now = ctx.currentTime;
    const bufferSize = ctx.sampleRate * 0.06;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 2500;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    noise.connect(hp);
    hp.connect(gain);
    gain.connect(master);
    noise.start(now);
    activeNodes.push({ stop: () => noise.stop() });
  }

  // Baladi-ish 8-step pattern: Doum . Tak Tak . Doum . Tak
  const pattern = [1, 0, 2, 2, 0, 1, 0, 2];

  let started = false;

  return {
    start() {
      if (started) return;
      started = true;
      playNote(phrase[phraseIndex]);
      melodyTimer = setInterval(() => {
        phraseIndex = (phraseIndex + 1) % phrase.length;
        playNote(phrase[phraseIndex]);
      }, 700);

      const stepMs = 220;
      beatTimer = setInterval(() => {
        const step = pattern[beatCount % pattern.length];
        if (step === 1) playDoum();
        if (step === 2) playTak();
        beatCount++;
      }, stepMs);

      master.gain.linearRampToValueAtTime(1, ctx.currentTime + 1.2);
    },
    setMuted(muted: boolean) {
      master.gain.linearRampToValueAtTime(muted ? 0 : 1, ctx.currentTime + 0.5);
    },
    isMuted() {
      return master.gain.value < 0.5;
    },
    resume() {
      if (ctx.state === "suspended") ctx.resume();
    },
    dispose() {
      if (melodyTimer) clearInterval(melodyTimer);
      if (beatTimer) clearInterval(beatTimer);
      activeNodes.forEach((n) => {
        try {
          n.stop();
        } catch {
          // already stopped
        }
      });
      ctx.close();
    },
  };
}

export function getZaffaEngine() {
  if (!singleton) {
    singleton = createZaffaEngine();
  }
  return singleton;
}

export function hasZaffaEngine() {
  return singleton !== null;
}
