import React from 'react';

interface BandStageIllustrationProps {
  className?: string;
  opacity?: number;
  showSpotlights?: boolean;
}

export const BandStageIllustration: React.FC<BandStageIllustrationProps> = ({
  className = "",
  opacity = 1,
  showSpotlights = true
}) => {
  return (
    <svg
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full select-none pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <defs>
        {/* Paper texture filter */}
        <filter id="parchment-grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" result="noise" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.93  0 0 0 0 0.88  0 0 0 0 0.78  0 0 0 0.35 0"
          />
          <feBlend mode="multiply" in="SourceGraphic" result="blend" />
        </filter>

        {/* Purple watercolor wash radial gradient */}
        <radialGradient id="purple-wash-center" cx="50%" cy="42%" r="45%">
          <stop offset="0%" stopColor="#7e6093" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#9a7ba8" stopOpacity="0.25" />
          <stop offset="85%" stopColor="#8d6e9f" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#8d6e9f" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="purple-wash-left" cx="20%" cy="45%" r="35%">
          <stop offset="0%" stopColor="#6d5483" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#87699d" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#87699d" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="purple-wash-right" cx="80%" cy="45%" r="35%">
          <stop offset="0%" stopColor="#6d5483" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#87699d" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#87699d" stopOpacity="0" />
        </radialGradient>

        {/* Spotlight beams linear gradients */}
        <linearGradient id="spotlight-left" x1="180" y1="180" x2="480" y2="700" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fff8e7" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#fdf0d5" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#fdf0d5" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="spotlight-right" x1="820" y1="180" x2="520" y2="700" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fff8e7" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#fdf0d5" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#fdf0d5" stopOpacity="0" />
        </linearGradient>

        {/* Green acoustic guitar gradient */}
        <linearGradient id="green-guitar-grad" x1="360" y1="480" x2="480" y2="600" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3d8b5c" />
          <stop offset="60%" stopColor="#296b44" />
          <stop offset="100%" stopColor="#1e5233" />
        </linearGradient>

        {/* Sunburst acoustic guitar gradient */}
        <radialGradient id="sunburst-grad" cx="200" cy="540" r="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f5a623" />
          <stop offset="55%" stopColor="#c85a17" />
          <stop offset="100%" stopColor="#5c2605" />
        </radialGradient>

        {/* Bass guitar wood gradient */}
        <radialGradient id="bass-wood-grad" cx="750" cy="540" r="75" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e8a862" />
          <stop offset="60%" stopColor="#c57c32" />
          <stop offset="100%" stopColor="#6e3e10" />
        </radialGradient>

        {/* Cajon wood grain */}
        <linearGradient id="cajon-front" x1="580" y1="550" x2="660" y2="660" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#deb887" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
      </defs>

      {/* ========================================================================= */}
      {/* 1. AGED PARCHMENT BACKGROUND & VINTAGE WATERCOLOR STAINS */}
      {/* ========================================================================= */}
      <rect width="1000" height="1000" fill="#f4ebd9" />
      
      {/* Tea stain patina around edges */}
      <path
        d="M0 0 C300 20 700 -10 1000 0 L1000 1000 C750 980 250 990 0 1000 Z"
        fill="#eadeca"
        opacity="0.6"
      />
      <circle cx="920" cy="80" r="180" fill="#dfcbb2" opacity="0.3" filter="blur(30px)" />
      <circle cx="80" cy="920" r="200" fill="#dfcbb2" opacity="0.3" filter="blur(30px)" />
      <circle cx="80" cy="80" r="150" fill="#dfcbb2" opacity="0.25" filter="blur(25px)" />

      {/* ========================================================================= */}
      {/* 2. PURPLE WATERCOLOR STAGE LIGHTING WASHES & SPOTLIGHT BEAMS */}
      {/* ========================================================================= */}
      <rect x="0" y="150" width="1000" height="600" fill="url(#purple-wash-center)" />
      <rect x="0" y="200" width="400" height="500" fill="url(#purple-wash-left)" />
      <rect x="600" y="200" width="400" height="500" fill="url(#purple-wash-right)" />

      {/* Watercolor splashes and blotches */}
      <path
        d="M120 300 C80 250 140 190 200 220 C280 240 260 320 220 360 C160 400 140 340 120 300 Z"
        fill="#7f6294"
        opacity="0.3"
      />
      <path
        d="M800 280 C740 220 820 180 880 210 C940 250 920 340 860 370 C810 390 790 320 800 280 Z"
        fill="#7f6294"
        opacity="0.3"
      />
      <path
        d="M420 220 C360 180 480 150 560 170 C640 200 620 260 550 280 C480 300 440 250 420 220 Z"
        fill="#9677a8"
        opacity="0.25"
      />

      {showSpotlights && (
        <g opacity="0.85">
          {/* Angled Spotlight Cone Left */}
          <polygon points="120,240 280,180 560,780 380,820" fill="url(#spotlight-left)" />
          {/* Angled Spotlight Cone Right */}
          <polygon points="880,240 720,180 440,780 620,820" fill="url(#spotlight-right)" />
          {/* Hanging vintage stage light box on left wall */}
          <polygon points="125,245 190,255 180,335 125,325" fill="#e8dac4" stroke="#2c2824" strokeWidth="2.5" />
          <ellipse cx="155" cy="290" rx="16" ry="24" fill="#6d5483" opacity="0.4" stroke="#2c2824" strokeWidth="1.8" />
        </g>
      )}

      {/* ========================================================================= */}
      {/* 3. STAGE RISER, FLOORBOARDS & AMPLIFIER CABINETS */}
      {/* ========================================================================= */}
      {/* Stage Wood Floor Lines */}
      <g stroke="#3a332a" strokeWidth="1.2" opacity="0.45">
        <line x1="20" y1="740" x2="980" y2="740" />
        <line x1="10" y1="820" x2="990" y2="820" />
        <line x1="0" y1="900" x2="1000" y2="900" />
        {/* Floor plank angles */}
        <line x1="160" y1="740" x2="110" y2="920" strokeWidth="0.8" />
        <line x1="340" y1="740" x2="300" y2="920" strokeWidth="0.8" />
        <line x1="560" y1="740" x2="550" y2="920" strokeWidth="0.8" />
        <line x1="720" y1="740" x2="740" y2="920" strokeWidth="0.8" />
        <line x1="880" y1="740" x2="920" y2="920" strokeWidth="0.8" />
      </g>

      {/* Center Drum/Cajon Stage Platform Riser */}
      <polygon
        points="340,680 720,680 735,725 330,725"
        fill="#e2d4c0"
        stroke="#2c2824"
        strokeWidth="2.5"
      />
      <line x1="330" y1="725" x2="735" y2="725" stroke="#2c2824" strokeWidth="2.5" />

      {/* Stage Amp Left */}
      <g>
        <rect x="250" y="570" width="105" height="140" rx="4" fill="#ded0bc" stroke="#2c2824" strokeWidth="2.5" />
        <rect x="260" y="605" width="85" height="95" rx="2" fill="#4a4237" stroke="#2c2824" strokeWidth="1.8" />
        {/* Amp grille weave */}
        <line x1="262" y1="625" x2="343" y2="625" stroke="#bda88e" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="262" y1="650" x2="343" y2="650" stroke="#bda88e" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="262" y1="675" x2="343" y2="675" stroke="#bda88e" strokeWidth="1" strokeDasharray="3 2" />
        {/* Knobs */}
        <circle cx="272" cy="588" r="4" fill="#2c2824" />
        <circle cx="288" cy="588" r="4" fill="#2c2824" />
        <circle cx="304" cy="588" r="4" fill="#2c2824" />
        <circle cx="320" cy="588" r="4" fill="#2c2824" />
      </g>

      {/* Stage Amp Right */}
      <g>
        <rect x="850" y="540" width="115" height="170" rx="4" fill="#ded0bc" stroke="#2c2824" strokeWidth="2.5" />
        <rect x="860" y="580" width="95" height="120" rx="2" fill="#4a4237" stroke="#2c2824" strokeWidth="1.8" />
        {/* Amp grille weave */}
        <line x1="862" y1="610" x2="953" y2="610" stroke="#bda88e" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="862" y1="640" x2="953" y2="640" stroke="#bda88e" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="862" y1="670" x2="953" y2="670" stroke="#bda88e" strokeWidth="1" strokeDasharray="3 2" />
        {/* Knobs */}
        <circle cx="875" cy="558" r="4" fill="#2c2824" />
        <circle cx="895" cy="558" r="4" fill="#2c2824" />
        <circle cx="915" cy="558" r="4" fill="#2c2824" />
        <circle cx="935" cy="558" r="4" fill="#2c2824" />
      </g>

      {/* ========================================================================= */}
      {/* 4. PERCUSSIONIST ON CAJÓN (CENTER BACKGROUND) */}
      {/* ========================================================================= */}
      <g id="percussionist-cajon">
        {/* Wooden Cajon Box Drum */}
        <polygon
          points="585,555 665,555 675,665 585,665"
          fill="url(#cajon-front)"
          stroke="#2c2824"
          strokeWidth="2.5"
        />
        <line x1="665" y1="555" x2="675" y2="665" stroke="#2c2824" strokeWidth="2" />
        {/* Cajon soundhole shadow indication */}
        <ellipse cx="630" cy="610" rx="14" ry="20" fill="#7a5522" opacity="0.4" />

        {/* Percussionist Body & Legs */}
        {/* Left Leg sitting */}
        <path
          d="M585 530 C560 540 535 570 540 610 C545 640 560 650 580 660 L540 665"
          fill="#6b7280"
          stroke="#2c2824"
          strokeWidth="2.2"
        />
        {/* Right Leg sitting */}
        <path
          d="M660 530 C675 540 690 570 685 610 C680 640 670 650 665 660 L700 665"
          fill="#6b7280"
          stroke="#2c2824"
          strokeWidth="2.2"
        />

        {/* Shoes */}
        <polygon points="535,660 585,660 580,672 530,672" fill="#374151" stroke="#2c2824" strokeWidth="1.8" />
        <polygon points="665,660 715,660 710,672 660,672" fill="#374151" stroke="#2c2824" strokeWidth="1.8" />

        {/* Torso & Shirt */}
        <path
          d="M580 440 C570 470 565 500 575 540 L670 540 C680 500 675 470 665 440 Z"
          fill="#9ca3af"
          stroke="#2c2824"
          strokeWidth="2.2"
        />

        {/* Arms playing cajon */}
        <path d="M575 450 C560 480 565 520 590 555" stroke="#2c2824" strokeWidth="2.5" fill="none" />
        <path d="M665 450 C680 480 675 520 650 555" stroke="#2c2824" strokeWidth="2.5" fill="none" />
        {/* Hands on cajon */}
        <circle cx="590" cy="555" r="7" fill="#e5c3a6" stroke="#2c2824" strokeWidth="1.5" />
        <circle cx="650" cy="555" r="7" fill="#e5c3a6" stroke="#2c2824" strokeWidth="1.5" />

        {/* Head, Cap & Singing Face */}
        <circle cx="638" cy="405" r="18" fill="#e5c3a6" stroke="#2c2824" strokeWidth="2" />
        {/* Baseball Cap (backward) */}
        <path d="M620 395 C625 375 650 375 658 395 C668 398 672 405 660 405 Z" fill="#4b5563" stroke="#2c2824" strokeWidth="2" />
        {/* Singing mouth */}
        <ellipse cx="648" cy="415" rx="3" ry="5" fill="#2c2824" />
        
        {/* Vocal Mic on Percussionist */}
        <path d="M700 450 L660 422" stroke="#2c2824" strokeWidth="2" />
        <circle cx="660" cy="422" r="4" fill="#2c2824" />
      </g>

      {/* ========================================================================= */}
      {/* 5. RHYTHM GUITARIST (LEFT) */}
      {/* ========================================================================= */}
      <g id="rhythm-guitarist">
        {/* Legs & Pants */}
        <path
          d="M175 570 L170 750 L215 750 L205 580"
          fill="#78716c"
          stroke="#2c2824"
          strokeWidth="2.4"
        />
        <path
          d="M210 580 L225 745 L270 745 L250 570"
          fill="#78716c"
          stroke="#2c2824"
          strokeWidth="2.4"
        />
        {/* Boots */}
        <polygon points="160,745 220,745 215,770 155,770" fill="#292524" stroke="#2c2824" strokeWidth="2" />
        <polygon points="220,740 280,740 275,765 215,765" fill="#292524" stroke="#2c2824" strokeWidth="2" />

        {/* Plaid / Checkered Shirt & Body */}
        <path
          d="M130 405 C140 440 145 490 155 575 L260 575 C270 490 270 440 260 405 Z"
          fill="#d6d3d1"
          stroke="#2c2824"
          strokeWidth="2.4"
        />
        {/* Plaid lines */}
        <path d="M150 415 L170 570 M180 410 L195 570 M210 410 L220 570 M240 415 L245 570" stroke="#78716c" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M140 450 L260 450 M145 490 L265 490 M150 530 L260 530" stroke="#78716c" strokeWidth="1.2" strokeDasharray="3 3" />

        {/* Acoustic Sunburst Guitar */}
        <g>
          {/* Guitar Body */}
          <path
            d="M135 520 C120 550 135 600 185 610 C235 620 270 580 270 540 C270 500 230 490 205 505 C185 480 150 490 135 520 Z"
            fill="url(#sunburst-grad)"
            stroke="#2c2824"
            strokeWidth="2.5"
          />
          {/* Soundhole & Bridge */}
          <circle cx="205" cy="545" r="14" fill="#2c2824" />
          <rect x="180" y="575" width="26" height="7" rx="2" fill="#2c2824" />
          {/* Guitar Neck pointing up-right */}
          <polygon points="205,520 370,460 365,475 200,535" fill="#451a03" stroke="#2c2824" strokeWidth="2" />
          {/* Headstock */}
          <polygon points="365,455 385,450 380,480 360,480" fill="#2c2824" stroke="#2c2824" strokeWidth="1.5" />
          {/* Guitar Strap */}
          <path d="M160 420 Q 150 470 170 520" stroke="#292524" strokeWidth="4" fill="none" />
        </g>

        {/* Arms & Hands Strumming */}
        <path d="M130 415 C115 450 135 500 175 530" stroke="#2c2824" strokeWidth="3" fill="none" />
        <circle cx="175" cy="530" r="8" fill="#e5c3a6" stroke="#2c2824" strokeWidth="1.6" />
        <path d="M260 415 C290 440 330 450 320 480" stroke="#2c2824" strokeWidth="3" fill="none" />
        <circle cx="320" cy="480" r="8" fill="#e5c3a6" stroke="#2c2824" strokeWidth="1.6" />

        {/* Head, Curly Hair & Face */}
        <circle cx="225" cy="365" r="22" fill="#e5c3a6" stroke="#2c2824" strokeWidth="2" />
        {/* Dark Wavy Hair */}
        <path
          d="M200 375 C190 350 205 325 235 330 C260 335 255 370 250 385 C240 370 230 350 215 365 Z"
          fill="#292524"
          stroke="#2c2824"
          strokeWidth="2"
        />
        {/* Mustache & Singing Profile */}
        <path d="M235 368 C242 366 248 372 245 378" stroke="#2c2824" strokeWidth="2" fill="none" />
        <ellipse cx="240" cy="374" rx="3" ry="5" fill="#2c2824" />

        {/* Vocal Mic Stand in front of Rhythm Guitarist */}
        <g stroke="#2c2824" strokeWidth="2.5">
          <line x1="220" y1="810" x2="260" y2="400" />
          <line x1="260" y1="400" x2="280" y2="385" strokeWidth="3" />
          <circle cx="280" cy="385" r="6" fill="#2c2824" />
          {/* Tripod Base */}
          <line x1="220" y1="810" x2="190" y2="830" strokeWidth="2.5" />
          <line x1="220" y1="810" x2="250" y2="830" strokeWidth="2.5" />
        </g>
      </g>

      {/* ========================================================================= */}
      {/* 6. LOUIS ESTERHUIZEN - LEAD SINGER & GREEN GUITAR (CENTER) */}
      {/* ========================================================================= */}
      <g id="louis-esterhuizen-lead">
        {/* Legs & Dark Fitted Trousers */}
        <path
          d="M410 590 L420 780 L470 780 L455 600"
          fill="#44403c"
          stroke="#2c2824"
          strokeWidth="2.6"
        />
        <path
          d="M455 600 L470 780 L520 780 L495 590"
          fill="#44403c"
          stroke="#2c2824"
          strokeWidth="2.6"
        />
        {/* Vintage Leather Boots */}
        <polygon points="410,780 475,780 470,820 405,820" fill="#1c1917" stroke="#2c2824" strokeWidth="2.2" />
        <polygon points="470,780 535,780 530,820 465,820" fill="#1c1917" stroke="#2c2824" strokeWidth="2.2" />

        {/* Torso / Dark Long-Sleeve Shirt */}
        <path
          d="M370 410 C360 460 375 520 395 595 L510 595 C530 520 545 460 535 410 Z"
          fill="#3b2d42"
          stroke="#2c2824"
          strokeWidth="2.6"
        />
        {/* V-neck collar */}
        <polygon points="440,410 455,445 470,410" fill="#e5c3a6" stroke="#2c2824" strokeWidth="2" />

        {/* Brown Leather Guitar Strap across shoulder */}
        <path d="M490 410 L380 540" stroke="#78350f" strokeWidth="8" strokeLinecap="round" />

        {/* Emerald Green Acoustic Guitar */}
        <g>
          {/* Guitar Body */}
          <path
            d="M360 500 C340 530 350 585 410 600 C470 610 515 570 515 530 C515 485 465 470 435 490 C410 465 375 475 360 500 Z"
            fill="url(#green-guitar-grad)"
            stroke="#2c2824"
            strokeWidth="2.8"
          />
          {/* Soundhole & White rosette rim */}
          <ellipse cx="435" cy="535" rx="16" ry="18" fill="#1e293b" stroke="#f1f5f9" strokeWidth="2" />
          {/* Wooden Bridge */}
          <rect x="405" y="565" width="34" height="9" rx="2" fill="#2c2824" />
          {/* Guitar Neck extending right */}
          <polygon points="435,510 655,465 650,485 430,528" fill="#3e2723" stroke="#2c2824" strokeWidth="2.2" />
          {/* Headstock with 6 tuning pegs */}
          <polygon points="650,460 675,455 670,490 645,490" fill="#2c2824" stroke="#2c2824" strokeWidth="1.8" />
          <circle cx="658" cy="455" r="2.5" fill="#f59e0b" />
          <circle cx="668" cy="455" r="2.5" fill="#f59e0b" />
          <circle cx="658" cy="495" r="2.5" fill="#f59e0b" />
          <circle cx="668" cy="495" r="2.5" fill="#f59e0b" />
        </g>

        {/* Left Arm holding microphone to mouth */}
        <path d="M375 425 C345 440 350 490 415 390" stroke="#2c2824" strokeWidth="3.2" fill="none" />
        {/* Hand around microphone */}
        <circle cx="415" cy="390" r="9" fill="#e5c3a6" stroke="#2c2824" strokeWidth="1.8" />
        {/* Dynamic Handheld Microphone */}
        <g>
          <rect x="390" y="375" width="30" height="14" rx="4" fill="#2c2824" transform="rotate(-20 405 382)" />
          <circle cx="420" cy="378" r="8" fill="#475569" stroke="#2c2824" strokeWidth="1.5" />
          {/* Mic cable spiraling down to floor */}
          <path
            d="M390 385 C360 450 350 550 370 650 C380 720 370 780 340 810"
            stroke="#1c1917"
            strokeWidth="2.2"
            fill="none"
          />
        </g>

        {/* Right Arm fretting/strumming green guitar neck */}
        <path d="M525 425 C565 445 580 490 575 505" stroke="#2c2824" strokeWidth="3.2" fill="none" />
        <circle cx="575" cy="505" r="9" fill="#e5c3a6" stroke="#2c2824" strokeWidth="1.8" />

        {/* Head, Long Wavy Hair, Beard & Singing Expression */}
        <circle cx="455" cy="360" r="26" fill="#e5c3a6" stroke="#2c2824" strokeWidth="2.2" />
        {/* Long Wavy Blonde/Light-Brown Hair Flowing Over Shoulders */}
        <path
          d="M425 365 C410 330 435 295 470 300 C505 305 510 345 500 395 C485 410 475 390 460 380 C445 400 425 410 415 390 Z"
          fill="#a16207"
          stroke="#2c2824"
          strokeWidth="2.2"
        />
        {/* Hair highlights and curls */}
        <path d="M430 345 C440 370 425 395 415 420" stroke="#ca8a04" strokeWidth="1.5" fill="none" />
        <path d="M495 345 C485 370 500 395 505 420" stroke="#ca8a04" strokeWidth="1.5" fill="none" />

        {/* Beard & Mustache */}
        <path
          d="M440 365 C435 385 450 400 470 395 C475 385 470 365 460 365 Z"
          fill="#78350f"
          stroke="#2c2824"
          strokeWidth="1.6"
        />
        {/* Open Mouth Singing Passionately */}
        <ellipse cx="442" cy="372" rx="5" ry="7" fill="#2c2824" />
        {/* Closed Eyes / Brow emotion */}
        <path d="M440 350 C446 348 452 350 456 354" stroke="#2c2824" strokeWidth="2.2" fill="none" />
      </g>

      {/* ========================================================================= */}
      {/* 7. ACOUSTIC BASSIST WITH GLASSES & BEARD (RIGHT) */}
      {/* ========================================================================= */}
      <g id="acoustic-bassist">
        {/* Legs & Charcoal Pants */}
        <path
          d="M725 570 L730 735 L780 735 L765 580"
          fill="#374151"
          stroke="#2c2824"
          strokeWidth="2.5"
        />
        <path
          d="M765 580 L785 735 L835 735 L810 570"
          fill="#374151"
          stroke="#2c2824"
          strokeWidth="2.5"
        />
        {/* Boots */}
        <polygon points="720,730 785,730 780,755 715,755" fill="#1f2937" stroke="#2c2824" strokeWidth="2" />
        <polygon points="780,730 845,730 840,755 775,755" fill="#1f2937" stroke="#2c2824" strokeWidth="2" />

        {/* Charcoal Black Sweater / Long Sleeve */}
        <path
          d="M685 400 C675 440 690 500 705 575 L825 575 C845 500 855 440 840 400 Z"
          fill="#1f2937"
          stroke="#2c2824"
          strokeWidth="2.5"
        />

        {/* Cutaway Acoustic Bass Guitar */}
        <g>
          {/* Bass Body */}
          <path
            d="M685 520 C670 550 685 605 740 615 C795 625 830 580 830 540 C830 495 785 480 755 500 C730 475 700 485 685 520 Z"
            fill="url(#bass-wood-grad)"
            stroke="#2c2824"
            strokeWidth="2.8"
          />
          {/* Soundhole */}
          <ellipse cx="755" cy="545" rx="15" ry="17" fill="#1c1917" stroke="#92400e" strokeWidth="2" />
          {/* Bass Bridge */}
          <rect x="730" y="575" width="30" height="8" rx="2" fill="#2c2824" />
          {/* Long Bass Neck extending up-right */}
          <polygon points="755,515 925,370 915,385 750,535" fill="#3e2723" stroke="#2c2824" strokeWidth="2.5" />
          {/* 4 Large Bass Tuning Pegs Headstock */}
          <polygon points="920,360 945,350 935,390 910,390" fill="#2c2824" stroke="#2c2824" strokeWidth="2" />
          <circle cx="925" cy="355" r="3.5" fill="#f59e0b" />
          <circle cx="940" cy="355" r="3.5" fill="#f59e0b" />
          <circle cx="920" cy="395" r="3.5" fill="#f59e0b" />
          <circle cx="935" cy="395" r="3.5" fill="#f59e0b" />
          {/* 4 Thick Bass Strings */}
          <line x1="755" y1="575" x2="925" y2="365" stroke="#e2e8f0" strokeWidth="1.5" />
          <line x1="758" y1="575" x2="928" y2="368" stroke="#e2e8f0" strokeWidth="1.3" />
        </g>

        {/* Arms & Hands Plucking Bass */}
        <path d="M685 410 C665 440 680 490 725 525" stroke="#2c2824" strokeWidth="3" fill="none" />
        <circle cx="725" cy="525" r="8" fill="#e5c3a6" stroke="#2c2824" strokeWidth="1.6" />
        <path d="M840 410 C870 435 860 480 820 495" stroke="#2c2824" strokeWidth="3" fill="none" />
        <circle cx="820" cy="495" r="8" fill="#e5c3a6" stroke="#2c2824" strokeWidth="1.6" />

        {/* Head, Glasses, Full Beard & Long Hair */}
        <circle cx="765" cy="365" r="25" fill="#e5c3a6" stroke="#2c2824" strokeWidth="2.2" />
        {/* Full Long Wavy Hair */}
        <path
          d="M735 370 C725 330 750 295 785 300 C820 305 825 345 815 390 C800 405 790 385 770 380 C755 400 735 410 725 385 Z"
          fill="#451a03"
          stroke="#2c2824"
          strokeWidth="2.2"
        />
        {/* Distinctive Glasses Frames */}
        <rect x="745" y="355" width="14" height="10" rx="2" fill="none" stroke="#1c1917" strokeWidth="2.2" />
        <rect x="765" y="355" width="14" height="10" rx="2" fill="none" stroke="#1c1917" strokeWidth="2.2" />
        <line x1="759" y1="360" x2="765" y2="360" stroke="#1c1917" strokeWidth="2.2" />
        {/* Full Beard */}
        <path
          d="M745 370 C740 395 760 410 780 405 C790 395 785 370 775 370 Z"
          fill="#451a03"
          stroke="#2c2824"
          strokeWidth="1.8"
        />
      </g>

      {/* ========================================================================= */}
      {/* 8. STAGE FLOOR MONITORS & CABLES (FRONT FOREGROUND) */}
      {/* ========================================================================= */}
      {/* Left Stage Wedge Monitor Speaker */}
      <polygon
        points="65,720 185,735 210,815 80,830"
        fill="#262626"
        stroke="#171717"
        strokeWidth="2.5"
      />
      <line x1="185" y1="735" x2="210" y2="815" stroke="#404040" strokeWidth="2" />
      {/* Monitor speaker grill texture */}
      <ellipse cx="140" cy="775" rx="35" ry="25" fill="#171717" stroke="#404040" strokeWidth="1.5" strokeDasharray="3 2" />

      {/* Right Stage Wedge Monitor Speaker */}
      <polygon
        points="740,735 915,720 900,820 725,830"
        fill="#262626"
        stroke="#171717"
        strokeWidth="2.5"
      />
      <line x1="740" y1="735" x2="725" y2="830" stroke="#404040" strokeWidth="2" />
      <ellipse cx="820" cy="775" rx="40" ry="28" fill="#171717" stroke="#404040" strokeWidth="1.5" strokeDasharray="3 2" />

      {/* Curled cables on wooden floor */}
      <path
        d="M210 820 C240 850 300 840 360 820 C420 800 500 810 560 830 C620 850 700 840 735 825"
        stroke="#171717"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M80 835 C120 870 200 880 280 860 C360 840 450 860 520 880 C600 900 700 890 770 860"
        stroke="#171717"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />

      {/* Subtle vintage sparkle in bottom right */}
      <path
        d="M860 860 Q 875 860 875 845 Q 875 860 890 860 Q 875 860 875 875 Q 875 860 860 860 Z"
        fill="#f59e0b"
        opacity="0.35"
      />
    </svg>
  );
};
