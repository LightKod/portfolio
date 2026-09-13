import { useEffect, useState } from "react";

// Change this value to "ascii" to restore the animated ASCII artwork.
const ART_MODE = "image";

function orbFrame(angle) {
  const width = 42, height = 20, pixels = Array(width * height).fill(" "), depth = Array(width * height).fill(-Infinity);
  for (let a = 0; a < Math.PI * 2; a += 0.065) for (let b = 0; b < Math.PI * 2; b += 0.035) {
    const radius = 1.45 + 0.62 * Math.cos(a), x = radius * Math.cos(b), y = radius * Math.sin(b), z = 0.62 * Math.sin(a);
    const ry = y * Math.cos(angle) - z * Math.sin(angle), rz = y * Math.sin(angle) + z * Math.cos(angle);
    const xx = Math.round(width / 2 + (x * 0.92 - ry * 0.39) * 8.5), yy = Math.round(height / 2 + (x * 0.39 + ry * 0.92) * 4), index = yy * width + xx;
    if (xx >= 0 && xx < width && yy >= 0 && yy < height && rz > depth[index]) { depth[index] = rz; pixels[index] = ".:;=+*#%@"[Math.max(0, Math.min(8, Math.floor((rz + 2.1) * 2.1)))]; }
  }
  return Array.from({ length: height }, (_, i) => pixels.slice(i * width, (i + 1) * width).join("")).join("\n");
}

export default function AsciiArt() {
  const [frame, setFrame] = useState(() => orbFrame(0.65));
  useEffect(() => { const preference = window.matchMedia("(prefers-reduced-motion: reduce)"); let timer; let angle = 0.65; const sync = () => { clearInterval(timer); if (!preference.matches) timer = setInterval(() => { if (!document.hidden) setFrame(orbFrame(angle += 0.035)); }, 100); }; sync(); preference.addEventListener("change", sync); return () => { clearInterval(timer); preference.removeEventListener("change", sync); }; }, []);
  return <div className="mono-ascii" role="img" aria-label={ART_MODE === "image" ? "Portfolio artwork" : "Slowly rotating ASCII torus"}>{ART_MODE === "image" ? <img src={`${import.meta.env.BASE_URL}art.png`} alt="Portfolio artwork" /> : <><span className="ascii-cross">+</span><pre aria-hidden="true">{frame}</pre></>}</div>;
}
