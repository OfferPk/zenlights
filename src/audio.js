/**
 * ZenLights Procedural Web Audio Synthesizer
 * Pure Web Audio API: Crystal chimes, Tibetan singing bowl overtones, and harmonic cascades.
 * 100% offline with zero external audio assets.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ZenLightsAudio = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  let ctx = null;
  let muted = false;

  // Pentatonic scale frequencies (Hz) across 2+ octaves
  const PENTATONIC = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    392.00, // G4
    440.00, // A4
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
    880.00, // A5
    1046.50 // C6
  ];

  function initContext() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        ctx = new AudioCtx();
      }
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
  }

  function setMuted(val) {
    muted = !!val;
    try {
      localStorage.setItem('zenlights_muted', muted ? '1' : '0');
    } catch (e) {}
  }

  function isMuted() {
    return muted;
  }

  function loadMuteState() {
    try {
      muted = localStorage.getItem('zenlights_muted') === '1';
    } catch (e) {
      muted = false;
    }
    return muted;
  }

  /**
   * Play crystal bell chime on cell press
   * Frequency varies harmonically based on grid position (row + col)
   */
  function playToggle(r, c, rows, cols) {
    if (muted) return;
    initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const noteIndex = (r + c * 2) % PENTATONIC.length;
    const fundamental = PENTATONIC[noteIndex];

    // Master chime envelope
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.22, now + 0.015);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);
    masterGain.connect(ctx.destination);

    // Fundamental Sine
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(fundamental, now);
    osc1.connect(masterGain);
    osc1.start(now);
    osc1.stop(now + 0.65);

    // Crystalline Overtone (2.76x bell resonance)
    const overtoneGain = ctx.createGain();
    overtoneGain.gain.setValueAtTime(0.07, now);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    overtoneGain.connect(masterGain);

    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(fundamental * 2.756, now);
    osc2.connect(overtoneGain);
    osc2.start(now);
    osc2.stop(now + 0.45);
  }

  /**
   * Gentle undo acoustic drop
   */
  function playUndo() {
    if (muted) return;
    initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
    gain.connect(ctx.destination);

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(261.63, now + 0.25);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.25);
  }

  /**
   * Reset board tone
   */
  function playReset() {
    if (muted) return;
    initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
    gain.connect(ctx.destination);

    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(329.63, now);
    osc.frequency.exponentialRampToValueAtTime(196, now + 0.35);
    osc.connect(gain);
    osc.start(now);
    osc.stop(now + 0.35);
  }

  /**
   * Hint shimmer tone
   */
  function playHint() {
    if (muted) return;
    initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C-E-G-C shimmer
    notes.forEach((freq, idx) => {
      const delay = idx * 0.06;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.4);
      gain.connect(ctx.destination);

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + delay);
      osc.connect(gain);
      osc.start(now + delay);
      osc.stop(now + delay + 0.4);
    });
  }

  /**
   * Majestic peaceful victory arpeggio
   */
  function playWin() {
    if (muted) return;
    initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Harmonic bell sequence: C4, G4, C5, E5, G5, C6 with long resonant decay
    const notes = [261.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const delay = idx * 0.08;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.18, now + delay + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 1.2);
      gain.connect(ctx.destination);

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + delay);
      osc.connect(gain);
      osc.start(now + delay);
      osc.stop(now + delay + 1.2);

      // Add gentle octave overtone
      const highGain = ctx.createGain();
      highGain.gain.setValueAtTime(0.04, now + delay);
      highGain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.8);
      highGain.connect(ctx.destination);

      const highOsc = ctx.createOscillator();
      highOsc.type = 'triangle';
      highOsc.frequency.setValueAtTime(freq * 2, now + delay);
      highOsc.connect(highGain);
      highOsc.start(now + delay);
      highOsc.stop(now + delay + 0.8);
    });
  }

  // Auto initialize mute state
  if (typeof window !== 'undefined') {
    loadMuteState();
  }

  return {
    initContext,
    setMuted,
    isMuted,
    loadMuteState,
    playToggle,
    playUndo,
    playReset,
    playHint,
    playWin
  };
}));
