/**
 * Generates valid PNG and SVG icons for ZenLights using Node built-in zlib & fs.
 * Zero external dependencies.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function crc32(buf) {
  let table = new Int32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? -306674912 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c;
  }
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

function makePng(width, height, getPixelRgba) {
  const bytesPerPixel = 4;
  const scanlineLength = width * bytesPerPixel;
  const rawData = Buffer.alloc((scanlineLength + 1) * height);

  for (let y = 0; y < height; y++) {
    const scanlineOffset = y * (scanlineLength + 1);
    rawData[scanlineOffset] = 0;
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixelRgba(x, y, width, height);
      const pixelOffset = scanlineOffset + 1 + x * bytesPerPixel;
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const idatData = zlib.deflateSync(rawData);

  function makeChunk(type, data) {
    const typeBuf = Buffer.from(type, 'ascii');
    const lenBuf = Buffer.alloc(4);
    lenBuf.writeUInt32BE(data.length, 0);
    const body = Buffer.concat([typeBuf, data]);
    const crcVal = crc32(body);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crcVal, 0);
    return Buffer.concat([lenBuf, body, crcBuf]);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', idatData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([pngSignature, ihdrChunk, idatChunk, iendChunk]);
}

function renderZenLightsIcon(x, y, width, height) {
  const nx = x / width;
  const ny = y / height;

  // Squircle rounded outer corner
  const cornerR = 0.22;
  const innerX = Math.abs(nx - 0.5) - (0.5 - cornerR);
  const innerY = Math.abs(ny - 0.5) - (0.5 - cornerR);
  if (innerX > 0 && innerY > 0) {
    const d = Math.sqrt(innerX * innerX + innerY * innerY);
    if (d > cornerR) return [0, 0, 0, 0];
  }

  // Deep dark obsidian background with subtle radial gradient
  const distCenter = Math.sqrt((nx - 0.5) ** 2 + (ny - 0.5) ** 2);
  let bgR = Math.floor(7 + (16 - 7) * (1 - distCenter));
  let bgG = Math.floor(11 + (25 - 11) * (1 - distCenter));
  let bgB = Math.floor(18 + (42 - 18) * (1 - distCenter));

  // 3x3 glowing node grid layout
  // Centers at 0.3, 0.5, 0.7
  const coords = [0.3, 0.5, 0.7];
  // Pattern: cross nodes are LIT (glowing cyan / white), corners are OFF (dim slate)
  const isLit = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0]
  ];

  let addedR = 0, addedG = 0, addedB = 0;

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const cx = coords[c];
      const cy = coords[r];
      const dist = Math.sqrt((nx - cx) ** 2 + (ny - cy) ** 2);
      const lit = isLit[r][c];

      if (lit) {
        // Glowing cyan node
        if (dist < 0.065) {
          // Bright white-cyan core
          const intensity = 1 - (dist / 0.065);
          addedR += 200 * intensity;
          addedG += 245 * intensity;
          addedB += 255 * intensity;
        } else if (dist < 0.16) {
          // Soft cyan halo glow
          const halo = Math.pow(1 - (dist / 0.16), 2);
          addedR += 0 * halo;
          addedG += 180 * halo;
          addedB += 255 * halo;
        }
      } else {
        // Unlit node: dark slate glass pill
        if (dist < 0.055) {
          const intensity = 1 - (dist / 0.055);
          addedR += 30 * intensity;
          addedG += 45 * intensity;
          addedB += 65 * intensity;
        }
      }
    }
  }

  // Cross light beam connect lines
  if ((Math.abs(nx - 0.5) < 0.015 && ny >= 0.25 && ny <= 0.75) ||
      (Math.abs(ny - 0.5) < 0.015 && nx >= 0.25 && nx <= 0.75)) {
    addedR += 30;
    addedG += 140;
    addedB += 220;
  }

  const finalR = Math.min(255, bgR + Math.floor(addedR));
  const finalG = Math.min(255, bgG + Math.floor(addedG));
  const finalB = Math.min(255, bgB + Math.floor(addedB));

  return [finalR, finalG, finalB, 255];
}

const srcDir = path.join(__dirname, '..', 'src');
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

console.log('Generating icon-192.png...');
const icon192 = makePng(192, 192, renderZenLightsIcon);
fs.writeFileSync(path.join(srcDir, 'icon-192.png'), icon192);

console.log('Generating icon-512.png...');
const icon512 = makePng(512, 512, renderZenLightsIcon);
fs.writeFileSync(path.join(srcDir, 'icon-512.png'), icon512);

// Generate crisp vector favicon.svg
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#14213d"/>
      <stop offset="100%" stop-color="#070b12"/>
    </radialGradient>
    <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="35%" stop-color="#00f0ff"/>
      <stop offset="100%" stop-color="#0077b6" stop-opacity="0"/>
    </radialGradient>
    <filter id="neonBlur" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="16" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="512" height="512" rx="110" fill="url(#bgGlow)"/>
  
  <!-- Wave Orthogonal Beams -->
  <line x1="256" y1="130" x2="256" y2="382" stroke="#00d4ff" stroke-width="8" stroke-linecap="round" opacity="0.4" filter="url(#neonBlur)"/>
  <line x1="130" y1="256" x2="382" y2="256" stroke="#00d4ff" stroke-width="8" stroke-linecap="round" opacity="0.4" filter="url(#neonBlur)"/>

  <!-- Unlit Corner Nodes -->
  <circle cx="150" cy="150" r="26" fill="#1b2838" stroke="#2c3e50" stroke-width="4"/>
  <circle cx="362" cy="150" r="26" fill="#1b2838" stroke="#2c3e50" stroke-width="4"/>
  <circle cx="150" cy="362" r="26" fill="#1b2838" stroke="#2c3e50" stroke-width="4"/>
  <circle cx="362" cy="362" r="26" fill="#1b2838" stroke="#2c3e50" stroke-width="4"/>

  <!-- Lit Cross Nodes -->
  <circle cx="256" cy="150" r="32" fill="#00e5ff" filter="url(#neonBlur)"/>
  <circle cx="256" cy="150" r="14" fill="#ffffff"/>
  
  <circle cx="150" cy="256" r="32" fill="#00e5ff" filter="url(#neonBlur)"/>
  <circle cx="150" cy="256" r="14" fill="#ffffff"/>

  <circle cx="362" cy="256" r="32" fill="#00e5ff" filter="url(#neonBlur)"/>
  <circle cx="362" cy="256" r="14" fill="#ffffff"/>

  <circle cx="256" cy="362" r="32" fill="#00e5ff" filter="url(#neonBlur)"/>
  <circle cx="256" cy="362" r="14" fill="#ffffff"/>

  <!-- Center Active Node -->
  <circle cx="256" cy="256" r="42" fill="#00e5ff" filter="url(#neonBlur)"/>
  <circle cx="256" cy="256" r="20" fill="#ffffff"/>
</svg>`;

fs.writeFileSync(path.join(srcDir, 'favicon.svg'), faviconSvg, 'utf8');
console.log('ZenLights PNG and SVG icons generated successfully.');
