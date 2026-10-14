# ZenLights 💡✨

A sleek, calming offline Lights Out grid illumination logic puzzle game built with pure vanilla web technologies (HTML5, CSS3, JavaScript) and Capacitor Android.

Tap glowing nodes across symmetrical patterns to toggle their state and their orthogonal neighbors (Up, Down, Left, Right). Your goal is to extinguish all lights to restore total serenity and clear each stage.

[![CI](https://github.com/OfferPk/zenlights/actions/workflows/ci.yml/badge.svg)](https://github.com/OfferPk/zenlights/actions/workflows/ci.yml)
[![Pages](https://github.com/OfferPk/zenlights/actions/workflows/pages.yml/badge.svg)](https://offerpk.github.io/zenlights/)
[![Android](https://github.com/OfferPk/zenlights/actions/workflows/android.yml/badge.svg)](https://github.com/OfferPk/zenlights/actions/workflows/android.yml)

---

## ✨ Features

- **100% Offline & Private**: Zero network dependencies, zero telemetry, zero advertisements. All progress, star ratings, and move records are preserved locally in your device's browser storage.
- **50 Solver-Verified Levels Across 5 Packs**:
  - **Pack 1: Dawn Awakening**: 10 gentle 3x3 ripples to master orthogonal wave mechanics (Par: 1 to 4 moves)
  - **Pack 2: Lotus Petals**: 10 balanced 4x4 symmetries and floral geometric patterns (Par: 2 to 6 moves)
  - **Pack 3: Constellations**: 10 classic 5x5 deep logic matrices and starry motifs (Par: 3 to 7 moves)
  - **Pack 4: Eclipse Matrix**: 10 intricate harmonic interference puzzles across 5x5 and 6x6 (Par: 4 to 8 moves)
  - **Pack 5: Infinite Zen**: 10 grand 6x6 meditative master challenges (Par: 4 to 10 moves)
- **Zen Free Play Generator**: Procedural random puzzle generator with selectable grid sizes (3x3, 4x4, 5x5, 6x6) and customizable complexity (Light, Balanced, Master).
- **Exact Gaussian Elimination Hint Solver**: Built-in GF(2) linear algebra engine that computes the exact optimal move sequence from any board configuration.
- **Procedural Web Audio Synthesis**: Resonant crystal bell chimes and Tibetan singing bowl overtones tuned to a meditative pentatonic scale, with victory chord crescendos and full mute control.
- **4 Radiant Color Themes**: Deep Nebula (OLED Cyan), Emerald Bamboo, Solar Amber, and Amethyst Twilight.
- **Full Player Tools**: Unlimited undo, rapid board reset, star ratings based on par efficiency, and keyboard shortcuts (`Z` undo, `R` reset, `H` hint, `M` mute).
- **PWA & Native Android**: Installable as a Progressive Web App on mobile/desktop, or packaged natively for Android via Capacitor.

---

## 🎮 Play Live

- **Web Demo**: [https://offerpk.github.io/zenlights/](https://offerpk.github.io/zenlights/)
- **Android APK**: Download the latest build from [GitHub Actions artifacts](https://github.com/OfferPk/zenlights/actions/workflows/android.yml) (`zenlights-apk`) or Releases.

---

## 📸 Screenshots

| Grid Illumination Arena | 50 Level Selector | Zen Victory Screen |
|:---:|:---:|:---:|
| *(Bioluminescent Nodes)* | *(5 Distinct Packs)* | *(3-Star Optimal Clear)* |

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js (v20+ recommended)
- npm

### Setup & Testing
```bash
# Clone repository
git clone https://github.com/OfferPk/zenlights.git
cd zenlights

# Install dependencies
npm ci

# Run unit tests (Node test runner)
npm test

# Build production web assets into www/
npm run build
```

### Android Native Build
```bash
# Add Android project (already configured)
npx cap add android

# Build and sync
npm run build
npx cap sync android

# Open in Android Studio
npx cap open android
```

---

## 📄 License

MIT License. Free and open source casual gaming by [OfferPk](https://github.com/OfferPk).
