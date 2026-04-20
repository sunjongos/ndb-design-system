# NDB Design System

> **Namyangju Baek Hospital (남양주백병원)** — a modern, trustworthy, empathetic healthcare interface system. Clean, highly accessible, and professional aesthetics that bridge medical professionals and patients.

**Slogan:** *"New, Different and much Better" (NDB)*

---

## About the product

Namyangju Baek Hospital is a regional spine & joint specialty hospital in Namyangju, Korea. Core services include:

- High-complexity spine surgery, spinal endoscopic surgery, Balloon-PEN (풍선 경막외 신경성형술)
- Joint Center, Neurology, Internal Medicine — integrated ERAS program
- **Tone:** Professional & reliable, yet patient-friendly and warm

This design system powers all NDB-related surfaces: **hospital homepage, internal CRM dashboards, in-clinic patient kiosks**, and patient-facing portals.

---

## Source references

- **Repo:** [`github.com/sunjongos/ndb-design-system`](https://github.com/sunjongos/ndb-design-system) (`main`)
  - `DESIGN.md` — brand tokens and usage guide (Korean, authoritative source)
  - `tailwind.config.js` — brand color + font family extension
  - `src/App.tsx` — minimal demo
- **Official logo** provided by the user: `assets/logo-ndb-official.png` — lowercase continuous **n / d / b** lettermark (green / blue / orange) with "남양주백병원" beside it and "NDB NAMYANGJU BAEK HOSPITAL" subtitle.
- **No production UI screens or Figma** — only brand tokens were in the repo. UI kit screens are designed from the documented foundations.

---

## Index of this folder

| File / folder | What it is |
|---|---|
| `README.md` | This file — brand, foundations, content rules, iconography |
| `SKILL.md` | Agent-Skill–compatible entry point |
| `colors_and_type.css` | CSS vars for colors, type, radii, shadows, motion, spacing |
| `assets/` | Logo marks (primary, compact, favicon) |
| `preview/` | Design-system preview cards (colors, type, radii, components) |
| `ui_kits/homepage/` | Marketing homepage UI kit (React/JSX, index.html demo) |
| `ui_kits/patient-portal/` | Patient dashboard / appointment UI kit |

---

## 1. Brand identity

The logo is a triad of rounded tiles spelling **n · d · b** — each tile a brand color with a distinct meaning rooted in the hospital's care philosophy.

| Color | Hex | Letter | Meaning | Typical use |
|---|---|---|---|---|
| **Healing Green** | `#92C118` | **n** | Life, healing, cleanliness, nature-aligned care | Recovery indicators, positive states, confirm/progress buttons |
| **Trust Blue** | `#0087B6` | **d** | Reliability, structural safety, medical expertise | GNB header, primary CTA, strong "trust zones" |
| **Warmth Orange** | `#F29D00` | **b** | Energy, liveliness, patient-friendly warmth | Highlight copy, attention callouts, secondary CTA, key icons |

Neutrals are pristine white (`#FFFFFF`) and ultra-light grays (`#FCFDFE`, `#F7F9FB`) for a crisp, sterile, premium look.

---

## 2. Content fundamentals

NDB speaks in **two registers** that must feel like the same hospital:

### Tone

- **Clinical confidence, never cold.** Patients are anxious; copy should reassure without being saccharine.
- **Bilingual (Korean primary, English secondary).** Korean is the hero language. English subtitles or labels are used for technical terms and international patients.
- **Plain-language medical copy.** Never use jargon where a normal word works. When a clinical term is unavoidable (e.g. "Balloon-PEN"), pair it with a one-line plain-language gloss.

### Voice & pronouns

- **Korean:** polite formal ending — `-습니다` / `-입니다` for headings and primary copy. `-세요` for calls to action. Never casual `-해` speech.
- **English:** second-person ("you") when addressing patients; institutional first-person ("we", "our team") when representing the hospital. Avoid "I".
- **Emoji:** ❌ not used. Medical context requires restraint. Use colored icons or small glyphs instead.
- **Casing:** Title Case for nav + section headers; Sentence case for buttons, form labels, and body headings. No ALL-CAPS except overline eyebrows (with tracking).

### Examples

| ✅ Do | ❌ Avoid |
|---|---|
| "진료 예약하기" / "Book an appointment" | "예약 ㄱㄱ" / "Book now!!" |
| "척추 내시경 수술 (Endoscopic Spine Surgery)" | "척추수술" with no English gloss |
| "회복 경과가 안정적입니다." | "개꿀 회복 중 😎" |
| "저희 의료진이 함께합니다" | "I'll take care of you" |
| "Warmth, expertise, and modern care — close to home." | "The #1 spine hospital you'll ever need!" |

**The vibe:** calm, confident, quietly premium. Like a well-lit clinic on a quiet morning.

---

## 3. Visual foundations

### Color usage
- **Trust Blue** is the workhorse — navigation, primary CTAs, headings emphasis, links. Default brand color for "this matters, trust it."
- **Healing Green** is reserved for **positive clinical states** — appointment confirmed, recovery on track, test results normal. Do not use as decorative accent.
- **Warmth Orange** is a **highlight/attention** color — used sparingly for eyebrow labels, key stats, warnings (not errors), secondary CTA. Never as a large background.
- **Neutrals dominate.** A typical screen is 80% white/near-white, 15% neutrals, 5% brand color.

### Typography
- Primary: **Pretendard Variable** (KR + Latin). Fallback chain: `Pretendard Variable → Pretendard → Noto Sans KR → Apple SD Gothic Neo → system sans`.
- Hierarchy is **scale-led**, not weight-led. Weights stay in 400 / 500 / 600 / 700. Avoid mixing 3+ weights in one view.
- Body copy defaults to **16px**, with **18px** preferred on patient-facing surfaces for accessibility.
- Letter-spacing tightens slightly on headlines (`-0.015em` to `-0.025em`); body stays at `0`.
- Line-height is generous (1.55–1.6) for readability; uncrowded.

### Backgrounds
- Default app surface: `--bg-app` (`#F7F9FB`) — ultra-light gray.
- Content on white cards floating on that gray. **No full-bleed photographic heroes** by default — clinical environments look staged, not authentic.
- **Gradients:** Use sparingly, and only subtle linear blends between brand tones (e.g. blue → green for "trust → healing" journey markers). No bluish-purple or neon gradients.
- **No repeating patterns/textures.** Clean, empty space is the motif.
- **Hero imagery guidance:** when photography is used, prefer warm but desaturated tones, natural light, real staff and patients (never stock-photo gleaming teeth). Avoid cold blue clinical lighting.

### Corner radii
Soft, empathetic, consistent. No sharp corners anywhere user-interactive.

- Inputs: **6px** (`--radius-sm`)
- Buttons, chips, small cards: **8px** (`--radius-md`)
- Cards, panels: **12px** (`--radius-lg`)
- Modals, hero cards: **16px** (`--radius-xl`)
- Pills / avatars: `999px`

### Shadows & elevation
Subtle, clinical. Never dramatic.

- `--shadow-xs` — input resting state
- `--shadow-sm` — default cards
- `--shadow-md` — hovered cards, dropdowns
- `--shadow-lg` — popovers, floating panels
- `--shadow-xl` — modals
- `--shadow-brand` — tinted blue shadow for feature/hero cards only

Shadows are **cool gray** (`rgba(15, 24, 34, …)`), never warm. No inner shadows. Cards are distinguished by **shadow + subtle border** together — never either alone.

### Borders
- Default: 1px `--border-subtle` (`rgba(15,24,34,0.06)`) — barely visible, just enough to separate.
- Strong divisions: `--border-default` (`#DDE4EC`).
- Focus: 3px ring in `--trust-blue` at 22% alpha, never outline (`--shadow-focus`).

### Hover / press / disabled
- **Hover:** darken 10% (brand color → `-hover` step) and/or raise shadow by one level. Buttons never change size on hover.
- **Press:** darken 20% (`-press`) and reduce shadow by one level. No scale transforms.
- **Disabled:** `opacity: 0.5`, `cursor: not-allowed`, shadow removed.
- **Focus-visible:** always show ring; never rely on color alone.

### Motion
- **Duration:** `120ms` (micro), `200ms` (default), `320ms` (emphasis). No animation longer than 400ms.
- **Easing:** `cubic-bezier(0.2, 0, 0, 1)` standard. Never bounce, never overshoot — bouncy motion feels unserious in a medical context.
- **Use cases:** hover shadow ramps, modal fade + 8px translateY-in, loading shimmer on skeletons, accordion expand. No parallax, no scroll-jacking.

### Glassmorphism / blur
Used **sparingly** on sticky headers (`backdrop-filter: saturate(180%) blur(12px)` + 85% white) and modal scrims. Never on card content.

### Transparency
- Scrims: `rgba(15, 24, 34, 0.42)` for modals.
- Disabled overlays: `rgba(255, 255, 255, 0.6)`.
- Hover tint on list rows: `rgba(0, 135, 182, 0.04)`.

### Layout & spacing
- **4px base grid.** Component spacing from `--space-1` through `--space-20`.
- Generous whitespace — information density is intentionally low. Elderly patients must be able to breathe on the page.
- Page content max-width: **1200px** marketing, **1280px** dashboards.
- Sticky GNB header (64px tall on desktop, 56px on mobile).

### Tap targets
- Minimum **44×44px** (`--tap-min`) for any interactive element — WCAG + elderly patient accessibility.
- Compact density (settings, tables): **36×36px** (`--tap-compact`), with `title` tooltips.

---

## 4. Iconography

**The NDB repo contains no proprietary icon set.** Approach:

1. **Default system:** [**Lucide Icons**](https://lucide.dev) — matched for its clean 1.5px stroke weight, rounded linecaps, and medical-appropriate clarity. Loaded from CDN:
   ```html
   <script src="https://unpkg.com/lucide@latest"></script>
   ```
2. **Style:** outline / stroke icons, **stroke-width 1.75**, rounded linecaps + linejoins. Stroke color follows text color by default (`currentColor`).
3. **Size tokens:** 16px (inline text), 20px (buttons), 24px (nav), 32px (feature cards).
4. **Filled icons:** reserved for **active/selected states only** (e.g. selected sidebar item, filled star for "favorited doctor"). Never mixed stroke + fill in the same cluster.
5. **Medical-specific icons** not in Lucide (e.g. spine, vertebra, specific organ) — use custom SVGs; when absent, use a labeled circle placeholder with a 2-letter abbreviation.
6. **Emoji:** ❌ never used in product UI.
7. **Unicode glyphs:** ❌ avoid — use real icons.
8. **Brand mark:** `assets/logo-ndb.svg` (full), `assets/logo-ndb-compact.svg` (n/d/b only), `assets/favicon.svg`.

> **Flagged substitution:** The icon system (Lucide) is a substitution — no icon set exists in the source repo. Swap for the hospital's real icon library when available.

---

## 5. Accessibility

- All body copy ≥ 16px, patient-facing ≥ 18px default.
- Minimum contrast **4.5:1** for body, **3:1** for large text. All brand colors have been paired against white/near-white with passing ratios.
- Tap targets ≥ 44×44px.
- Focus rings always visible on keyboard navigation.
- Support for "Larger Text" system setting — all type uses relative units where practical.
- No color-only signalling — pair color with icon or label (e.g. red + ⚠ icon for warnings).

---

## 6. Flagged gaps (asks for the user)

1. **Real NDB logo files** — the current marks are reconstructed from the documented n/d/b triad description. Please attach the real SVG/PNG logo.
2. **Real photography** — no brand imagery is in the repo. UI kits use gray placeholder blocks for hero/doctor imagery.
3. **Real production screens / Figma** — only brand tokens were in the repo. UI kit screens (homepage, patient portal) were designed from the documented brand foundations; please share real designs or Figma access if they exist, so we can refine toward the actual product.
4. **Korean copy review** — placeholder copy is written in plain formal Korean; a native reviewer should audit tone.
