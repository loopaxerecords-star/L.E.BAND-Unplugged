import React from 'react';
import { 
  PaperTextureBackground, 
  BotanicalWreathFrame 
} from './BotanicalTheme';
import { BandStageIllustration } from './BandStageIllustration';
import { QuicketLogo } from './QuicketBrand';

interface PosterArtworkProps {
  className?: string;
  onClose?: () => void;
}

export const PosterArtwork: React.FC<PosterArtworkProps> = ({ className = "" }) => {
  return (
    <div 
      className={`relative bg-[#f4f0e6] text-center rounded-3xl shadow-2xl overflow-hidden border border-[#d6cfbe] select-none ${className}`}
      style={{
        boxShadow: '0 25px 50px -12px rgba(27, 54, 93, 0.25), inset 0 0 0 1px rgba(255,255,255,0.6)'
      }}
    >
      {/* Paper grain texture overlay */}
      <PaperTextureBackground />

      {/* Band Unplugged Live Concert Stage Illustration Backdrop */}
      <div className="absolute inset-0 flex items-center justify-center p-2 opacity-85">
        <BandStageIllustration className="w-full h-full object-cover" opacity={0.65} showSpotlights={true} />
      </div>

      {/* Lush Surrounding Folk Botanical Wreath Frame */}
      <BotanicalWreathFrame />

      {/* Foreground Typography Content */}
      <div className="relative z-20 py-12 px-8 sm:px-14 flex flex-col items-center justify-between min-h-[540px]">
        {/* Header Block */}
        <div className="mt-4">
          <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-extrabold text-[#162b48] tracking-tight leading-tight">
            Café Barcelona
          </h2>
          <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-extrabold text-[#162b48] tracking-tight leading-none mt-0.5">
            Presents
          </h3>
        </div>

        {/* Main Band Title Block */}
        <div className="my-6">
          <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-black text-[#162b48] tracking-tight leading-none uppercase drop-shadow-xs">
            L.E.BAND - UNPLUGGED
          </h1>
          <p className="font-['Playfair_Display'] italic text-base sm:text-lg font-bold text-[#2d4768] mt-1.5 tracking-wide">
            Louis Esterhuizen Band
          </p>

          {/* Delicate Vintage Engraved Divider */}
          <div className="flex items-center justify-center gap-3 my-3">
            <span className="h-[1.5px] w-12 sm:w-16 bg-[#5a7088]/40"></span>
            <div className="w-2 h-2 rotate-45 border border-[#5a7088]/60 bg-[#f4f0e6]"></div>
            <span className="h-[1.5px] w-12 sm:w-16 bg-[#5a7088]/40"></span>
          </div>

          {/* Date, Time & Ticket Price Block */}
          <div className="space-y-0.5 mt-2">
            <div className="font-['Playfair_Display'] text-xl sm:text-2xl font-extrabold text-[#162b48] tracking-normal">
              25 September
            </div>
            <div className="font-['Playfair_Display'] text-lg sm:text-xl font-bold text-[#162b48] tracking-normal">
              19:00-21:00
            </div>
            <div className="font-['Playfair_Display'] text-base sm:text-lg font-black text-[#248200] tracking-wide pt-1">
              Tickets: R150
            </div>
          </div>
        </div>

        {/* Official Quicket Brand Footer */}
        <div className="mb-4 pt-2 flex flex-col items-center justify-center">
          <div className="transform scale-95 hover:scale-100 transition-transform">
            <QuicketLogo variant="green-grey" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};
