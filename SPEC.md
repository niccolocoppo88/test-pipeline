# SPEC.md — Canvas Drawing App (TEST PIPELINE)

**Based on:** DESIGN.md (Faber Castell meets Linear aesthetic)
**Stack:** HTML5 + CSS3 + Vanilla JavaScript
**Target:** GitHub Pages (`niccolocoppo/test-pipeline`)
**Deploy:** Automatic on `main` push via GitHub Pages

---

## 1. File Structure

```
test-pipeline/
├── index.html    # App shell, canvas, toolbar
├── styles.css    # All styling (CSS custom properties)
├── app.js        # Drawing logic, event handlers
├── SPEC.md       # This file
└── README.md     # Existing (keep)
```

---

## 2. HTML Components

### index.html Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Canvas Draw</title>
  <link rel="stylesheet" href="styles.css" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body>
  <!-- Toolbar -->
  <header class="toolbar" role="toolbar" aria-label="Drawing tools">
    <div class="toolbar-brand">Canvas Draw</div>

    <div class="toolbar-center">
      <!-- Color palette (swatches) -->
      <div class="color-palette" role="group" aria-label="Color selection">
        <button class="color-swatch selected" data-color="#1A1A1A" style="background:#1A1A1A" aria-label="Black" title="Black"></button>
        <button class="color-swatch" data-color="#6B7280" style="background:#6B7280" aria-label="Gray" title="Gray"></button>
        <button class="color-swatch" data-color="#3B82F6" style="background:#3B82F6" aria-label="Blue" title="Blue"></button>
        <button class="color-swatch" data-color="#EF4444" style="background:#EF4444" aria-label="Red" title="Red"></button>
        <button class="color-swatch" data-color="#22C55E" style="background:#22C55E" aria-label="Green" title="Green"></button>
        <button class="color-swatch" data-color="#F59E0B" style="background:#F59E0B" aria-label="Orange" title="Orange"></button>
        <button class="color-swatch" data-color="#FFFFFF" style="background:#FFFFFF;border:1px solid #E5E7EB" aria-label="White" title="White"></button>
      </div>

      <div class="toolbar-divider"></div>

      <!-- Brush size slider -->
      <div class="brush-size-control">
        <label for="brush-size" class="label-caps">Size</label>
        <input type="range" id="brush-size" class="slider" min="2" max="48" value="4" aria-label="Brush size" />
        <span id="brush-size-label" class="body-sm">4px</span>
      </div>
    </div>

    <div class="toolbar-actions">
      <button class="button-icon" id="eraser-btn" aria-label="Eraser" title="Eraser">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
      </button>
      <button class="button-icon" id="clear-btn" aria-label="Clear canvas" title="Clear canvas">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
      </button>
      <button class="button-icon" id="download-btn" aria-label="Download as PNG" title="Download as PNG">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
      </button>
    </div>
  </header>

  <!-- Canvas area -->
  <main class="canvas-area">
    <canvas id="draw-canvas"></canvas>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <span class="body-sm text-muted">Canvas Draw — free drawing tool</span>
  </footer>

  <script src="app.js"></script>
</body>
</html>
```

---

## 3. CSS Styling (styles.css)

### CSS Custom Properties (Design Tokens)

```css
:root {
  /* Colors */
  --color-primary: #1A1A1A;
  --color-secondary: #6B7280;
  --color-tertiary: #3B82F6;
  --color-tertiary-hover: #2563EB;
  --color-tertiary-active: #1D4ED8;
  --color-neutral: #FFFFFF;
  --color-background: #FFFFFF;
  --color-surface: #F9FAFB;
  --color-border: #E5E7EB;
  --color-text: #1A1A1A;
  --color-text-muted: #6B7280;
  --color-on-primary: #FFFFFF;
  --color-on-tertiary: #FFFFFF;

  /* Typography */
  --font-family: 'Inter', system-ui, sans-serif;
  --font-h1: 700 2rem/1.2 -0.02em;
  --font-h2: 600 1.25rem/1.3;
  --font-body-md: 400 0.9375rem/1.5;
  --font-body-sm: 400 0.8125rem/1.5;
  --font-label-caps: 600 0.6875rem/1.4 0.06em;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 120ms ease;
  --transition-base: 200ms ease;
}
```

### Component Styles

**Toolbar:** `background: var(--color-background)`, `height: 48px`, `padding: 0 var(--space-md)`, `border-bottom: 1px solid var(--color-border)`, `position: sticky; top: 0; display: flex; align-items: center; justify-content: space-between; z-index: 100;`

**Toolbar brand:** `font: var(--font-h2); color: var(--color-text); font-weight: 600;`

**Toolbar center:** `display: flex; align-items: center; gap: var(--space-md);`

**Toolbar actions:** `display: flex; align-items: center; gap: var(--space-xs);`

**Color palette:** `display: flex; align-items: center; gap: var(--space-xs);`

**Color swatch:** `width: 28px; height: 28px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); cursor: pointer; transition: var(--transition-fast);`

**Color swatch selected:** `background: var(--color-tertiary) !important; border-color: var(--color-tertiary); box-shadow: 0 0 0 2px var(--color-background), 0 0 0 4px var(--color-tertiary);`

**Color swatch hover:** `transform: translateY(-1px); box-shadow: 0 2px 4px rgba(0,0,0,0.1);`

**Brush size control:** `display: flex; align-items: center; gap: var(--space-sm);`

**Slider track:** `width: 80px; height: 4px; background: var(--color-border); border-radius: var(--radius-full); appearance: none; cursor: pointer;`

**Slider thumb:** `width: 16px; height: 16px; background: var(--color-tertiary); border-radius: var(--radius-full); appearance: none; cursor: pointer; border: none; margin-top: -6px;`

**Slider thumb hover:** `background: var(--color-tertiary-hover);`

**Button icon:** `width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: transparent; border: none; border-radius: var(--radius-md); color: var(--color-text-muted); cursor: pointer; transition: var(--transition-fast);`

**Button icon hover:** `background: var(--color-surface); color: var(--color-text);`

**Button icon active (eraser mode):** `background: var(--color-surface); color: var(--color-tertiary);`

**Canvas area:** `flex: 1; display: flex; align-items: center; justify-content: center; padding: var(--space-lg); background: var(--color-surface);`

**Canvas:** `background: var(--color-neutral); border-radius: var(--radius-lg); border: 1px solid var(--color-border); cursor: crosshair; box-shadow: 0 4px 24px rgba(0,0,0,0.06); max-width: 100%; max-height: 100%;`

**Footer:** `height: 36px; display: flex; align-items: center; justify-content: center; padding: 0 var(--space-md); border-top: 1px solid var(--color-border); background: var(--color-background);`

**Focus ring:** `:focus-visible { outline: 2px solid var(--color-tertiary); outline-offset: 2px; }`

---

## 4. JavaScript Logic (app.js)

### State

```javascript
const state = {
  isDrawing: false,
  currentColor: '#1A1A1A',
  brushSize: 4,
  tool: 'pencil', // 'pencil' | 'eraser'
  lastX: 0,
  lastY: 0,
};
```

### Canvas Setup

```javascript
const canvas = document.getElementById('draw-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = Math.max(320, rect.width - 32);
  canvas.height = Math.max(320, rect.height - 32);
  // Fill with white
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
```

### Drawing Functions

```javascript
function getCanvasCoordinates(e) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  if (e.touches) {
    return {
      x: (e.touches[0].clientX - rect.left) * scaleX,
      y: (e.touches[0].clientY - rect.top) * scaleY,
    };
  }
  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY,
  };
}

function startDrawing(e) {
  state.isDrawing = true;
  const coords = getCanvasCoordinates(e);
  state.lastX = coords.x;
  state.lastY = coords.y;
  // Draw a dot on mousedown (before move)
  drawDot(coords.x, coords.y);
}

function drawDot(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, state.brushSize / 2, 0, Math.PI * 2);
  ctx.fillStyle = state.tool === 'eraser' ? '#FFFFFF' : state.currentColor;
  ctx.fill();
}

function draw(e) {
  if (!state.isDrawing) return;
  e.preventDefault();
  const coords = getCanvasCoordinates(e);

  ctx.beginPath();
  ctx.moveTo(state.lastX, state.lastY);
  ctx.lineTo(coords.x, coords.y);
  ctx.strokeStyle = state.tool === 'eraser' ? '#FFFFFF' : state.currentColor;
  ctx.lineWidth = state.brushSize;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.stroke();

  state.lastX = coords.x;
  state.lastY = coords.y;
}

function stopDrawing() {
  state.isDrawing = false;
}
```

### Event Handlers

**Mouse:**
- `canvas.addEventListener('mousedown', startDrawing)`
- `canvas.addEventListener('mousemove', draw)`
- `canvas.addEventListener('mouseup', stopDrawing)`
- `canvas.addEventListener('mouseleave', stopDrawing)`

**Touch:**
- `canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startDrawing(e); })`
- `canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); })`
- `canvas.addEventListener('touchend', stopDrawing)`

**Color swatches:** Click sets `state.currentColor`, updates selected swatch class, resets tool to 'pencil'.

**Brush size slider:** Input updates `state.brushSize` and label display.

**Eraser button:** Toggles `state.tool` between 'pencil' and 'eraser', updates button active state.

**Clear button:** Resets canvas to white fill.

**Download button:** `canvas.toDataURL('image/png')` → creates anchor with download attribute.

### Resize Handling

```javascript
window.addEventListener('resize', () => {
  // Save current canvas as image data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  resizeCanvas();
  // Restore (canvas resized, may not fit old content perfectly — acceptable for POC)
});
```

---

## 5. Acceptance Criteria

### Task t_002: HTML Structure
- [ ] index.html exists with all elements: toolbar, canvas, footer
- [ ] Google Fonts (Inter) loaded via CDN
- [ ] All 7 color swatches present with correct hex values
- [ ] Brush size slider with min=2, max=48, default=4
- [ ] Four toolbar buttons: pencil (implicit/default), eraser, clear, download
- [ ] All buttons have aria-label and title attributes
- [ ] Canvas element has id="draw-canvas"
- [ ] scripts loaded at end of body

### Task t_003: CSS Styling
- [ ] styles.css defines all CSS custom properties from DESIGN.md tokens
- [ ] Toolbar is sticky, 48px height, full-width
- [ ] Color swatches: 28×28px, rounded 4px, selected state shows blue ring
- [ ] Slider track: 4px height, full border-radius; thumb: 16px blue circle
- [ ] Button icon: 32×32px, ghost behavior (transparent → surface on hover)
- [ ] Canvas area: centered, has rounded corners and border, min 320×320px
- [ ] Footer: 36px height, centered text
- [ ] Focus rings visible on keyboard navigation

### Task t_004: Canvas Logic (JS)
- [ ] Drawing works with mouse (mousedown → mousemove → mouseup)
- [ ] Touch drawing works (touchstart, touchmove, touchend)
- [ ] Color selection updates currentColor, swatch shows selected state
- [ ] Brush size slider updates stroke width in real time
- [ ] Label next to slider shows current size (e.g., "4px")
- [ ] Eraser tool toggles, draws in white
- [ ] Clear button resets canvas to white
- [ ] Download button exports canvas as PNG

### Task t_005: GitHub Pages Deploy
- [ ] index.html, styles.css, app.js pushed to main branch
- [ ] GitHub Pages enabled on repository
- [ ] Site accessible at https://niccolocoppo.github.io/test-pipeline/
- [ ] README.md updated with live URL

---

## 6. Dependencies

- **Fonts:** Inter via Google Fonts CDN (no local assets needed)
- **Icons:** Inline SVG (Lucide-style, no external dependency)
- **No frameworks, no build step**