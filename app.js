/**
 * Canvas Draw — JavaScript Drawing Logic
 * Handles mouse/touch drawing, color selection, brush size, eraser, clear, and download.
 */

const state = {
  isDrawing: false,
  currentColor: '#1A1A1A',
  brushSize: 4,
  tool: 'pencil', // 'pencil' | 'eraser'
  lastX: 0,
  lastY: 0,
};

// ─── DOM references ──────────────────────────────────────────────────────────
const canvas = document.getElementById('draw-canvas');
const ctx = canvas.getContext('2d');

// ─── Canvas setup ─────────────────────────────────────────────────────────────
function resizeCanvas() {
  const parent = canvas.parentElement;
  const dpr = window.devicePixelRatio || 1;

  // Store current canvas content before resizing
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Set display size to fill parent
  canvas.style.width = parent.clientWidth + 'px';
  canvas.style.height = parent.clientHeight + 'px';

  // Set actual canvas resolution (DPR-scaled)
  canvas.width = parent.clientWidth * dpr;
  canvas.height = parent.clientHeight * dpr;

  // Scale context for DPR
  ctx.scale(dpr, dpr);

  // Ensure canvas has a white background (before restoring content)
  fillCanvasWhite();

  // Restore content (clipped to fit if canvas grew)
  ctx.putImageData(imageData, 0, 0);

  // Drawing settings
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
}

function fillCanvasWhite() {
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// ─── Coordinate normalization ─────────────────────────────────────────────────
function getCanvasCoordinates(e) {
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;

  let clientX, clientY;
  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else if (e.changedTouches && e.changedTouches.length > 0) {
    clientX = e.changedTouches[0].clientX;
    clientY = e.changedTouches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }

  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

// ─── Drawing helpers ──────────────────────────────────────────────────────────
function drawDot(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, state.brushSize / 2, 0, Math.PI * 2);
  ctx.fillStyle = getStrokeColor();
  ctx.fill();
}

function getStrokeColor() {
  return state.tool === 'eraser' ? '#FFFFFF' : state.currentColor;
}

function startDrawing(e) {
  e.preventDefault();
  state.isDrawing = true;
  const coords = getCanvasCoordinates(e);
  state.lastX = coords.x;
  state.lastY = coords.y;
  drawDot(coords.x, coords.y);
}

function draw(e) {
  if (!state.isDrawing) return;
  e.preventDefault();

  const coords = getCanvasCoordinates(e);

  ctx.beginPath();
  ctx.moveTo(state.lastX, state.lastY);
  ctx.lineTo(coords.x, coords.y);
  ctx.strokeStyle = getStrokeColor();
  ctx.lineWidth = state.brushSize;
  ctx.stroke();

  state.lastX = coords.x;
  state.lastY = coords.y;
}

function stopDrawing() {
  state.isDrawing = false;
}

// ─── Event listeners — Mouse ──────────────────────────────────────────────────
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

// ─── Event listeners — Touch ──────────────────────────────────────────────────
canvas.addEventListener('touchstart', startDrawing, { passive: false });
canvas.addEventListener('touchmove', draw, { passive: false });
canvas.addEventListener('touchend', stopDrawing);

// ─── Color swatches ────────────────────────────────────────────────────────────
const swatches = document.querySelectorAll('.color-swatch');
swatches.forEach((swatch) => {
  swatch.addEventListener('click', () => {
    // Update selection visual
    swatches.forEach((s) => s.classList.remove('selected'));
    swatch.classList.add('selected');

    // Update state
    state.currentColor = swatch.dataset.color;

    // Reset tool to pencil when selecting a color
    if (state.tool === 'eraser') {
      state.tool = 'pencil';
      document.getElementById('eraser-btn').classList.remove('active');
    }
  });
});

// ─── Brush size slider ────────────────────────────────────────────────────────
const brushSlider = document.getElementById('brush-size');
const brushLabel = document.getElementById('brush-size-label');

brushSlider.addEventListener('input', () => {
  state.brushSize = parseInt(brushSlider.value, 10);
  brushLabel.textContent = state.brushSize + 'px';
});

// ─── Eraser button ────────────────────────────────────────────────────────────
const eraserBtn = document.getElementById('eraser-btn');
eraserBtn.addEventListener('click', () => {
  if (state.tool === 'pencil') {
    state.tool = 'eraser';
    eraserBtn.classList.add('active');
  } else {
    state.tool = 'pencil';
    eraserBtn.classList.remove('active');
  }
});

// ─── Clear button ─────────────────────────────────────────────────────────────
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  fillCanvasWhite();
});

// ─── Download button ──────────────────────────────────────────────────────────
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
  const dataUrl = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = 'canvas.png';
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// ─── Window resize ─────────────────────────────────────────────────────────────
window.addEventListener('resize', resizeCanvas);

// ─── Initialize ───────────────────────────────────────────────────────────────
resizeCanvas();