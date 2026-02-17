import { playSoftBlip } from './audio.js';

const canvas = document.getElementById('view');
const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
const fpsEl = document.getElementById('fps');
const burstBtn = document.getElementById('burst');

const MAX_PARTICLES = 220; // FPS優先で上限を固定
const PARTICLE_LIFE = 0.55;
const pool = [];
const active = [];

for (let i = 0; i < MAX_PARTICLES; i += 1) {
  pool.push({ x: 0, y: 0, vx: 0, vy: 0, life: 0, age: 0, size: 0, hue: 0 });
}

function spawn(x, y, count = 24) {
  const n = Math.min(count, pool.length);
  for (let i = 0; i < n; i += 1) {
    const p = pool.pop();
    const a = Math.random() * Math.PI * 2;
    const speed = 40 + Math.random() * 140;
    p.x = x;
    p.y = y;
    p.vx = Math.cos(a) * speed;
    p.vy = Math.sin(a) * speed;
    p.life = PARTICLE_LIFE;
    p.age = 0;
    p.size = 1 + Math.random() * 2.4;
    p.hue = 190 + Math.random() * 40;
    active.push(p);
  }
}

function onBurst(e) {
  const r = canvas.getBoundingClientRect();
  const x = e ? e.clientX - r.left : canvas.width / 2;
  const y = e ? e.clientY - r.top : canvas.height / 2;
  spawn(x, y, 36);
  playSoftBlip();
}

canvas.addEventListener('click', onBurst);
burstBtn.addEventListener('click', () => onBurst());

let last = performance.now();
let fpsTimer = 0;
let frames = 0;

function frame(now) {
  // dt clamp: タブ復帰時の負荷スパイクを防ぐ
  const dt = Math.min((now - last) / 1000, 0.033);
  last = now;

  ctx.fillStyle = '#020617';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = active.length - 1; i >= 0; i -= 1) {
    const p = active[i];
    p.age += dt;
    if (p.age >= p.life) {
      active.splice(i, 1);
      pool.push(p);
      continue;
    }

    p.vy += 150 * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;

    const t = 1 - p.age / p.life;
    ctx.fillStyle = `hsla(${p.hue} 95% 65% / ${t * 0.8})`;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  }

  frames += 1;
  fpsTimer += dt;
  if (fpsTimer >= 0.25) {
    const fps = Math.round(frames / fpsTimer);
    fpsEl.textContent = `FPS: ${fps} | Active: ${active.length}`;
    fpsTimer = 0;
    frames = 0;
  }

  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
