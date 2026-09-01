import React from 'react';

/**
 * Botanical & Engraved Folk Art Assets
 * Directly matching the authentic concert poster artwork:
 * - Engraved steel-blue portrait of Louis Esterhuizen singing into mic with acoustic guitar
 * - Crimson layered folk roses (#c02b20, #9e1c14)
 * - Dusty slate-blue anemones & bellflowers (#607897)
 * - Coral-orange poppies (#eb4c2d)
 * - Golden marigold blossoms (#f5a623)
 * - Olive & forest foliage (#3d5c38)
 * - Vintage parchment background (#f5f2e9)
 */

export const PaperTextureBackground: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-multiply ${className}`} xmlns="http://www.w3.org/2000/svg">
    <filter id="paper-grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
      <feColorMatrix type="matrix" values="0 0 0 0 0.94  0 0 0 0 0.92  0 0 0 0 0.88  0 0 0 0.25 0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#paper-grain)" />
  </svg>
);

/**
 * Detailed vintage woodcut / etched engraving of Louis Esterhuizen singing with microphone and acoustic guitar
 */
export const LouisEngravingIllustration: React.FC<{ className?: string; color?: string; opacity?: number }> = ({
  className = "",
  color = "#5a7088",
  opacity = 0.42
}) => {
  return (
    <svg
      viewBox="0 0 700 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full pointer-events-none select-none ${className}`}
      style={{ opacity }}
    >
      <g stroke={color} strokeLinecap="round" strokeLinejoin="round">
        {/* === GUITAR NECK & STRINGS (Angled bottom right) === */}
        <g strokeWidth="1.6">
          {/* Fretboard edges */}
          <path d="M380 620 L680 430" />
          <path d="M410 650 L710 460" />
          <path d="M380 620 L410 650" fill={color} fillOpacity="0.08" />
          
          {/* Guitar Strings */}
          <path d="M384 624 L684 434" strokeWidth="0.9" />
          <path d="M388 628 L688 438" strokeWidth="0.9" />
          <path d="M392 632 L692 442" strokeWidth="0.9" />
          <path d="M396 636 L696 446" strokeWidth="0.9" />
          <path d="M400 640 L700 450" strokeWidth="1.1" />
          <path d="M404 644 L704 454" strokeWidth="1.2" />

          {/* Frets */}
          <path d="M410 600 L430 635" strokeWidth="1.4" />
          <path d="M445 578 L465 613" strokeWidth="1.4" />
          <path d="M480 556 L500 591" strokeWidth="1.4" />
          <path d="M515 534 L535 569" strokeWidth="1.4" />
          <path d="M550 512 L570 547" strokeWidth="1.4" />
          <path d="M585 490 L605 525" strokeWidth="1.4" />
          <path d="M620 468 L640 503" strokeWidth="1.4" />
          <path d="M655 446 L675 481" strokeWidth="1.4" />

          {/* Acoustic Guitar Body curve outline */}
          <path d="M360 640 C340 580 320 540 370 480 C400 450 450 440 500 460" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M390 670 C440 680 520 660 560 610" strokeWidth="2" />
        </g>

        {/* === MICROPHONE & BOOM STAND === */}
        <g strokeWidth="1.8">
          {/* Mic stand arm */}
          <path d="M410 260 L680 350" strokeWidth="3" />
          <path d="M412 266 L682 356" strokeWidth="1.2" />
          <path d="M630 333 L670 410" strokeWidth="2.5" />
          
          {/* Mic clip connector */}
          <rect x="390" y="242" width="24" height="22" rx="3" fill={color} fillOpacity="0.15" strokeWidth="1.6" transform="rotate(18 402 253)" />
          
          {/* Dynamic Microphone Body */}
          <path d="M370 238 L430 256 L424 274 L364 256 Z" fill={color} fillOpacity="0.1" strokeWidth="1.8" />
          <path d="M375 239 L370 257" strokeWidth="1.5" />
          <path d="M390 244 L385 262" strokeWidth="1.5" />
          <path d="M405 249 L400 267" strokeWidth="1.5" />

          {/* Mic Grille (mesh dome) */}
          <path d="M364 256 C342 250 330 242 334 230 C338 218 354 216 376 222 L370 238" fill={color} fillOpacity="0.2" strokeWidth="2" />
          {/* Crosshatch on mic grille */}
          <path d="M340 240 L368 224" strokeWidth="1" />
          <path d="M344 246 L372 230" strokeWidth="1" />
          <path d="M350 252 L378 236" strokeWidth="1" />
          <path d="M340 226 L366 250" strokeWidth="1" />
          <path d="M348 222 L374 246" strokeWidth="1" />
          <path d="M356 220 L378 240" strokeWidth="1" />
        </g>

        {/* === LOUIS ESTERHUIZEN PORTRAIT PROFILE (Singing) === */}
        {/* Forehead, Nose, Lips, Chin */}
        <path
          d="M220 180 C230 190 240 200 242 220 C244 230 250 236 260 238 C270 240 282 248 284 255 C282 260 274 262 268 264 C272 268 280 272 278 278 C270 286 260 286 254 290 C248 296 244 310 246 324 C248 340 240 355 220 370"
          strokeWidth="2.2"
        />

        {/* Eye & Brow */}
        <path d="M226 218 C232 216 238 218 244 222" strokeWidth="1.8" />
        <path d="M230 224 C234 222 238 224 240 226" strokeWidth="1.5" />
        <path d="M218 210 C226 206 236 208 244 214" strokeWidth="2.4" />

        {/* Cheekbone & Ear */}
        <path d="M190 240 C182 248 180 265 186 276 C192 284 198 280 200 270 C202 260 198 248 190 240 Z" strokeWidth="1.6" />
        <path d="M188 250 C186 256 188 266 192 270" strokeWidth="1.2" />

        {/* Mustache & Open Mouth Singing */}
        <path d="M262 262 C255 264 245 268 240 274 C244 278 255 276 266 270" strokeWidth="1.8" fill={color} fillOpacity="0.15" />
        <path d="M258 274 C264 278 260 284 252 284" strokeWidth="1.5" />

        {/* Wavy / Curly Long Hair Engraving */}
        <g strokeWidth="1.4">
          <path d="M210 160 C180 140 140 160 120 190 C100 220 95 260 90 300 C85 340 70 380 60 420" />
          <path d="M230 170 C200 150 160 170 140 200 C120 230 115 270 110 310 C105 350 90 400 80 450" />
          <path d="M190 150 C160 140 130 170 110 210 C90 250 85 300 80 350 C75 400 65 450 50 500" />
          
          {/* Hair curls and waves */}
          <path d="M130 220 C145 240 135 260 120 270 C105 280 115 310 130 320" />
          <path d="M150 250 C165 270 155 295 140 305 C125 315 135 345 150 355" />
          <path d="M170 280 C185 300 175 325 160 335 C145 345 155 375 170 385" />
          <path d="M140 330 C155 350 145 375 130 385 C115 395 125 425 140 435" />
          <path d="M110 280 C125 300 115 325 100 335 C85 345 95 375 110 385" />
          
          {/* Crown and top curls */}
          <path d="M220 160 C210 140 180 130 160 145 C140 160 160 180 180 175" />
          <path d="M240 175 C230 155 200 145 180 160 C160 175 180 195 200 190" />
          <path d="M260 190 C250 170 220 160 200 175" />
        </g>

        {/* Beard, Jawline & Neck Hatching */}
        <g strokeWidth="1.2">
          <path d="M240 300 C230 320 215 340 195 350 C175 360 160 380 150 410" />
          <path d="M230 310 C220 330 205 350 185 360 C165 370 150 390 140 420" />
          <path d="M220 320 C210 340 195 360 175 370 C155 380 140 400 130 430" />
          
          {/* Facial cross-hatch shading */}
          <path d="M220 230 L228 245" />
          <path d="M224 232 L232 247" />
          <path d="M228 234 L236 249" />
          <path d="M210 260 L220 275" />
          <path d="M214 262 L224 277" />
          <path d="M218 264 L228 279" />
          <path d="M200 290 L212 308" />
          <path d="M206 292 L218 310" />
          <path d="M212 294 L224 312" />
        </g>

        {/* Shoulders, Vest & Clothing Etching */}
        <g strokeWidth="1.4">
          <path d="M200 400 C220 440 250 480 290 520 L340 570" />
          <path d="M150 410 C160 460 180 520 210 580 L230 630" />
          <path d="M100 450 C110 500 125 560 140 620 L150 670" />
          
          {/* Vest folds & crosshatching */}
          <path d="M220 450 L200 500" />
          <path d="M235 460 L215 510" />
          <path d="M250 470 L230 520" />
          <path d="M265 480 L245 530" />
          <path d="M280 490 L260 540" />
          <path d="M295 500 L275 550" />
          <path d="M310 510 L290 560" />

          {/* Vest collar line */}
          <path d="M190 380 C210 410 240 430 270 440" strokeWidth="2" />
          <path d="M270 440 L310 490" strokeWidth="2" />
        </g>

        {/* Vintage 4-Point Star Sparkle in bottom right backdrop */}
        <path d="M350 460 Q 365 460 365 445 Q 365 460 380 460 Q 365 460 365 475 Q 365 460 350 460 Z" fill={color} fillOpacity="0.2" strokeWidth="0.8" />
      </g>
    </svg>
  );
};

/**
 * Detailed Multi-Petal Folk Rose component
 */
export const FolkRose: React.FC<{ size?: number; className?: string }> = ({ size = 90, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Leaves attached to rose */}
    <path d="M15 45 C5 35 10 15 30 20 C35 35 25 45 15 45 Z" fill="#3d5c38" stroke="#1d3319" strokeWidth="1.2" />
    <path d="M18 35 L26 26" stroke="#1d3319" strokeWidth="0.8" />
    <path d="M75 15 C90 10 95 30 85 45 C75 40 70 25 75 15 Z" fill="#3d5c38" stroke="#1d3319" strokeWidth="1.2" />
    <path d="M82 25 L78 35" stroke="#1d3319" strokeWidth="0.8" />
    <path d="M80 75 C95 80 90 95 70 95 C65 85 70 75 80 75 Z" fill="#3d5c38" stroke="#1d3319" strokeWidth="1.2" />

    {/* Outer rose petals */}
    <circle cx="50" cy="50" r="38" fill="#c02b20" stroke="#7a120a" strokeWidth="1.5" />
    
    {/* Layered concentric sculpted rose swirls */}
    <path d="M22 42 C18 60 35 80 58 82 C78 84 86 68 84 50 C82 30 65 18 45 18 C28 18 18 30 22 42 Z" fill="#c93327" stroke="#7a120a" strokeWidth="1.4" />
    <path d="M28 55 C26 70 42 78 58 76 C74 74 78 60 76 46 C74 32 60 26 44 28 C30 30 26 42 28 55 Z" fill="#d93d30" stroke="#7a120a" strokeWidth="1.4" />
    <path d="M34 46 C32 58 44 68 58 66 C70 64 72 52 68 42 C64 32 52 30 40 34 C34 36 32 40 34 46 Z" fill="#e6493c" stroke="#7a120a" strokeWidth="1.3" />
    <path d="M42 54 C40 60 50 64 58 62 C64 60 66 54 62 48 C58 42 50 42 44 46 C40 48 40 50 42 54 Z" fill="#f0584b" stroke="#7a120a" strokeWidth="1.2" />
    
    {/* Rose Center spiral */}
    <path d="M48 50 C46 54 52 56 55 54 C58 52 56 48 52 48 C48 48 47 50 48 50 Z" fill="#9e1c14" />
    <path d="M26 38 C34 32 48 30 62 36" stroke="#7a120a" strokeWidth="1.2" fill="none" />
    <path d="M68 40 C76 50 74 65 62 74" stroke="#7a120a" strokeWidth="1.2" fill="none" />
    <path d="M58 76 C42 78 30 68 30 54" stroke="#7a120a" strokeWidth="1.2" fill="none" />
    <path d="M34 44 C42 54 56 56 64 48" stroke="#7a120a" strokeWidth="1.2" fill="none" />
  </svg>
);

/**
 * 5-Petal Slate Blue Anemone / Poppy
 */
export const BlueAnemone: React.FC<{ size?: number; className?: string }> = ({ size = 70, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* 5 rounded petals */}
    <circle cx="50" cy="24" r="22" fill="#607897" stroke="#364960" strokeWidth="1.2" />
    <circle cx="24" cy="42" r="22" fill="#607897" stroke="#364960" strokeWidth="1.2" />
    <circle cx="76" cy="42" r="22" fill="#607897" stroke="#364960" strokeWidth="1.2" />
    <circle cx="34" cy="74" r="22" fill="#607897" stroke="#364960" strokeWidth="1.2" />
    <circle cx="66" cy="74" r="22" fill="#607897" stroke="#364960" strokeWidth="1.2" />
    
    {/* Petal shading lines */}
    <path d="M50 24 L50 44" stroke="#485c74" strokeWidth="1.2" />
    <path d="M24 42 L44 48" stroke="#485c74" strokeWidth="1.2" />
    <path d="M76 42 L56 48" stroke="#485c74" strokeWidth="1.2" />
    <path d="M34 74 L46 54" stroke="#485c74" strokeWidth="1.2" />
    <path d="M66 74 L54 54" stroke="#485c74" strokeWidth="1.2" />

    {/* Center core */}
    <circle cx="50" cy="50" r="14" fill="#f5a623" stroke="#b06f08" strokeWidth="1.2" />
    <circle cx="50" cy="50" r="8" fill="#1b2d42" />

    {/* Black stamen dots */}
    <circle cx="44" cy="42" r="1.8" fill="#1b2d42" />
    <circle cx="56" cy="42" r="1.8" fill="#1b2d42" />
    <circle cx="40" cy="50" r="1.8" fill="#1b2d42" />
    <circle cx="60" cy="50" r="1.8" fill="#1b2d42" />
    <circle cx="44" cy="58" r="1.8" fill="#1b2d42" />
    <circle cx="56" cy="58" r="1.8" fill="#1b2d42" />
  </svg>
);

/**
 * 5-Petal Vivid Coral-Orange Poppy
 */
export const OrangePoppy: React.FC<{ size?: number; className?: string }> = ({ size = 65, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="24" r="21" fill="#eb4c2d" stroke="#a62810" strokeWidth="1.2" />
    <circle cx="24" cy="42" r="21" fill="#eb4c2d" stroke="#a62810" strokeWidth="1.2" />
    <circle cx="76" cy="42" r="21" fill="#eb4c2d" stroke="#a62810" strokeWidth="1.2" />
    <circle cx="34" cy="72" r="21" fill="#eb4c2d" stroke="#a62810" strokeWidth="1.2" />
    <circle cx="66" cy="72" r="21" fill="#eb4c2d" stroke="#a62810" strokeWidth="1.2" />

    {/* Radial petal texture */}
    <path d="M50 24 L50 44" stroke="#c43316" strokeWidth="1.2" />
    <path d="M24 42 L44 48" stroke="#c43316" strokeWidth="1.2" />
    <path d="M76 42 L56 48" stroke="#c43316" strokeWidth="1.2" />
    <path d="M34 72 L46 54" stroke="#c43316" strokeWidth="1.2" />
    <path d="M66 72 L54 54" stroke="#c43316" strokeWidth="1.2" />

    {/* Golden Center */}
    <circle cx="50" cy="50" r="13" fill="#f5a623" stroke="#b06f08" strokeWidth="1.2" />
    <circle cx="50" cy="50" r="7" fill="#1b2d42" />

    {/* Speckled dots */}
    <circle cx="43" cy="43" r="1.6" fill="#1b2d42" />
    <circle cx="57" cy="43" r="1.6" fill="#1b2d42" />
    <circle cx="41" cy="50" r="1.6" fill="#1b2d42" />
    <circle cx="59" cy="50" r="1.6" fill="#1b2d42" />
    <circle cx="45" cy="57" r="1.6" fill="#1b2d42" />
    <circle cx="55" cy="57" r="1.6" fill="#1b2d42" />
  </svg>
);

/**
 * Golden Marigold Blossom
 */
export const MarigoldBlossom: React.FC<{ size?: number; className?: string }> = ({ size = 55, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="26" r="19" fill="#f5a623" stroke="#b87208" strokeWidth="1.2" />
    <circle cx="26" cy="44" r="19" fill="#f5a623" stroke="#b87208" strokeWidth="1.2" />
    <circle cx="74" cy="44" r="19" fill="#f5a623" stroke="#b87208" strokeWidth="1.2" />
    <circle cx="36" cy="70" r="19" fill="#f5a623" stroke="#b87208" strokeWidth="1.2" />
    <circle cx="64" cy="70" r="19" fill="#f5a623" stroke="#b87208" strokeWidth="1.2" />
    
    <circle cx="50" cy="50" r="10" fill="#e08a0d" />
    <circle cx="50" cy="50" r="6" fill="#1b2d42" />
    <circle cx="46" cy="46" r="1.2" fill="#fff" />
    <circle cx="54" cy="46" r="1.2" fill="#fff" />
    <circle cx="50" cy="54" r="1.2" fill="#fff" />
  </svg>
);

/**
 * Drooping Bellflowers
 */
export const Bellflowers: React.FC<{ size?: number; className?: string; flipped?: boolean }> = ({ size = 60, className = "", flipped = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${flipped ? 'scale-x-[-1]' : ''} ${className}`}
  >
    {/* Curved Stem */}
    <path d="M15 85 Q 40 40 85 20" stroke="#3d5c38" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M45 50 Q 55 65 65 75" stroke="#3d5c38" strokeWidth="2" strokeLinecap="round" />
    
    {/* Upper Bell */}
    <g transform="translate(60, 10)">
      <path d="M0 25 C10 10 30 10 35 25 C30 35 25 38 18 35 C10 38 5 35 0 25 Z" fill="#607897" stroke="#364960" strokeWidth="1.2" />
      <path d="M5 25 C12 30 22 30 30 25" stroke="#485c74" strokeWidth="1" />
      <circle cx="18" cy="38" r="2.5" fill="#f5a623" />
    </g>

    {/* Lower Bell */}
    <g transform="translate(45, 55)">
      <path d="M0 20 C8 8 25 8 30 20 C25 28 20 30 15 28 C10 30 5 28 0 20 Z" fill="#607897" stroke="#364960" strokeWidth="1.2" />
      <circle cx="15" cy="30" r="2" fill="#f5a623" />
    </g>

    {/* Leaves on stem */}
    <path d="M30 65 Q 15 55 25 45 Q 35 55 30 65" fill="#3d5c38" />
  </svg>
);

/**
 * 8-Point Star Flower
 */
export const StarFlower: React.FC<{ size?: number; color?: string; className?: string }> = ({ size = 24, color = "#eb4c2d", className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="15" cy="15" r="4.5" fill="#1b2d42" />
    <path
      d="M15 2 L17 10 L25 7 L20 13 L28 15 L20 17 L25 23 L17 20 L15 28 L13 20 L5 23 L10 17 L2 15 L10 13 L5 7 L13 10 Z"
      fill={color}
    />
    <circle cx="15" cy="15" r="2" fill="#f5a623" />
  </svg>
);

/**
 * Full Complete Folk Botanical Framing Wreath
 * Matches all 4 corners and borders of the uploaded poster
 */
export const BotanicalWreathFrame: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none z-10 ${className}`}>
      {/* === TOP-LEFT CORNER === */}
      <div className="absolute -top-3 -left-3">
        <BlueAnemone size={82} className="transform -rotate-12" />
      </div>
      <div className="absolute top-14 -left-2">
        <MarigoldBlossom size={46} />
      </div>
      <div className="absolute -top-1 left-20">
        <Bellflowers size={58} />
      </div>
      <div className="absolute top-8 left-36">
        <StarFlower size={20} color="#eb4c2d" />
      </div>

      {/* === TOP-RIGHT CORNER === */}
      <div className="absolute -top-4 -right-4">
        <FolkRose size={95} className="transform rotate-12" />
      </div>
      <div className="absolute -top-2 right-24">
        <MarigoldBlossom size={50} />
      </div>
      <div className="absolute top-16 right-20">
        <StarFlower size={22} color="#eb4c2d" />
      </div>
      <div className="absolute top-20 right-0">
        <OrangePoppy size={52} />
      </div>

      {/* === TOP BORDER CENTER ACCENTS === */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
        <BlueAnemone size={62} />
        <StarFlower size={18} color="#f5a623" />
        <Bellflowers size={52} flipped />
      </div>

      {/* === LEFT BORDER STEMS & BLOSSOMS === */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2 flex flex-col items-center gap-5">
        <OrangePoppy size={58} />
        <StarFlower size={18} color="#eb4c2d" />
        <BlueAnemone size={64} />
      </div>

      {/* === RIGHT BORDER STEMS & BLOSSOMS === */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2 flex flex-col items-center gap-4">
        <OrangePoppy size={60} />
        <StarFlower size={18} color="#f5a623" />
        <BlueAnemone size={66} />
      </div>

      {/* === BOTTOM-LEFT CORNER === */}
      <div className="absolute -bottom-4 -left-4">
        <FolkRose size={98} className="transform -rotate-45" />
      </div>
      <div className="absolute bottom-20 left-1">
        <Bellflowers size={54} />
      </div>
      <div className="absolute bottom-3 left-22">
        <MarigoldBlossom size={48} />
      </div>
      <div className="absolute bottom-12 left-28">
        <BlueAnemone size={58} />
      </div>

      {/* === BOTTOM-RIGHT CORNER === */}
      <div className="absolute -bottom-4 -right-4">
        <FolkRose size={102} className="transform rotate-45" />
      </div>
      <div className="absolute bottom-20 right-2">
        <Bellflowers size={54} flipped />
      </div>
      <div className="absolute bottom-3 right-24">
        <MarigoldBlossom size={50} />
      </div>
      <div className="absolute bottom-14 right-28">
        <StarFlower size={20} color="#eb4c2d" />
      </div>

      {/* === BOTTOM BORDER CENTER ACCENTS === */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex items-center gap-5">
        <OrangePoppy size={68} />
        <StarFlower size={18} color="#eb4c2d" />
        <MarigoldBlossom size={52} />
      </div>
    </div>
  );
};
