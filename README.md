# ⚔️ Math Battle Academy

**Math Battle Academy** is a gamified math learning platform designed for children aged 6 to 12. It perfectly weaves the syllabus-backed math practice structures of platforms like IXL with the addictive, bite-sized progression of Duolingo and casual RPG monster battles!

Children play as apprentice wizards, solving math equations to execute magic spells, deal hit-shaking damage to cute monsters, collect gold coins, unlock legendary companion pets, and conquer magical worlds!

---

## 🚀 Key Features

1. **Magical Progression Worlds**:
   * 🌳 **Number Forest** (Grade 1 Addition bonds)
   * 🦇 **Subtraction Cave** (Grade 1-2 Subtraction mechanics)
   * 🏝️ **Addition Island** (Grade 2 Double-digit carries)
   * 🏔️ **Multiplication Mountain** (Grade 3 Times tables)
   * 👑 **Fraction Kingdom** (Grade 3 Equal-sharing divisions)
2. **RPG Combat Practicing Loop**:
   * Monsters react dynamically using vector animated SVGs, floating critical hit numbers, and responsive shake/red flash effects when hit.
   * Correct answers connect magic spells to damage health bars.
   * Consecutive hits build high-damage multipliers (**Combo multiplier**)!
3. **Apprentice Backpack & Pet Shop**:
   * Earn gold coins to recruit cute companions: *Leaf Kitten*, *Aqua Puppy*, *Pyrosaur*, *Star Bunny*, and *Sparky Owl*.
4. **Gentle Educational Focus**:
   * No hard failures. If a child answers incorrectly, the game launches a beautiful **Magic Explanation Scroll** with clear, supportive hints and diagrams.
5. **Parent Dashboard**:
   * Secured behind a child-proof mathematical mental puzzle gate.
   * Breaks down detailed accuracy ratios, solved question counts, active study duration, and recommends custom curriculum actions.
   * Safe profile clearing options to allow fresh replays.

---

## 🛠️ Technology Stack

* **Core**: Next.js 15 (App Router), React 19, TypeScript.
* **Styling**: Tailwind CSS v4.0, HSL-based kids color palette, custom 3D chunky `.btn-chunky` components.
* **Animations**: Pure SVG vectors, keyframe shake indicators, floating damage indicators.
* **Rewards**: Dynamic victory fireworks using `canvas-confetti`.
* **State & DB Persistence**: Context State Provider synced with `LocalStorage` for safe client hydration and zero external server delays.

---

## 📂 Project Organization

```
src/
├── app/
│   ├── layout.tsx             # Root layout with GameStateProvider, kid-friendly SEO
│   ├── page.tsx               # Landing Page with wizard stats and parental value boards
│   ├── select-grade/          # Grade selection page (Apprentice, Mage, Sorcerer books)
│   ├── world-map/             # zig-zag RPG path with star rating nodes
│   ├── battle/                # RPG active combat screen with custom HUDs
│   ├── results/               # Fireworks splash rewards and loot totals
│   ├── profile/               # Pet Shop recruits, equipped companions, and backpack stats
│   └── parent-dashboard/      # Curriculum reports and child gate guards
├── components/
│   ├── UI/                    # 3D Chunky Buttons, Bubble Cards, XP/HP bars
│   ├── Battle/                # Animated SVG Monsters & Companion Pets, Scroll cards
│   └── Parent/                # Parent Gate security controls
├── data/
│   └── questions.ts           # Math Question Bank (120+ original QA sheets)
├── hooks/
│   └── useGameState.ts        # Custom LocalStorage hook with level/coin calculators
└── styles/
    └── globals.css            # Kids typography, custom patterns, keyframes, 3D button sheets
```

---

## 🎮 How to Play Locally

### 1. Install Dependencies
Run the command below in the terminal to set up the environment:
```bash
npm install
```

### 2. Run the Development Server
Launch the server:
```bash
npm run dev
```

### 3. Start Solving!
Open [http://localhost:3000](http://localhost:3000) in your web browser. Ensure you test in **Mobile Responsive Viewports** (e.g. iPhone 12/15) to see the beautiful mobile-first design system!
