import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  Calendar,
  Clock,
  MapPin,
  Share2,
  Ticket,
  Music,
  Check,
  CalendarPlus,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Copy,
  Sparkles,
  Volume2,
  VolumeX,
  X,
  Image as ImageIcon
} from 'lucide-react';
import { QuicketLogo, QuicketQIcon, QuicketPageTag } from './components/QuicketBrand';
import { PosterArtwork } from './components/PosterArtwork';
import { BandStageIllustration } from './components/BandStageIllustration';
import { 
  PaperTextureBackground, 
  FolkRose, 
  BlueAnemone, 
  OrangePoppy, 
  MarigoldBlossom, 
  Bellflowers, 
  StarFlower 
} from './components/BotanicalTheme';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function App() {
  // Target: 25 September 2026 at 19:00 SAST (UTC+2)
  const targetDate = new Date('2026-09-25T19:00:00+02:00').getTime();
  const quicketLink = "https://www.quicket.co.za/events/393344-caf-barcelona-presents-leband/?utm_source=EventPage&utm_medium=Sharebox&utm_campaign=&ref=event-page-share";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Barcelona%2C+53+Thomson+St%2C+Colbyn%2C+Pretoria%2C+0153";

  const eventTitle = "Café Barcelona Presents L.E.BAND - UNPLUGGED (Louis Esterhuizen Band)";
  const eventDate = "25 September 2026";
  const eventTime = "19:00 - 21:00 (SAST)";
  const eventVenue = "Café Barcelona, 53 Thomson St, Colbyn, Pretoria, 0153";
  const ticketPrice = "R150";

  const fullShareText = `🎸 ${eventTitle}\n📅 Date: ${eventDate}\n⏰ Time: ${eventTime}\n📍 Venue: ${eventVenue}\n🎟️ Tickets: ${ticketPrice}\n🔗 Get Tickets on Quicket: ${quicketLink}`;

  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = targetDate - Date.now();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [showPosterModal, setShowPosterModal] = useState<boolean>(false);
  const [showCopiedToast, setShowCopiedToast] = useState<string | null>(null);
  const [isPlayingVibe, setIsPlayingVibe] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  // Gentle acoustic ambiance synth audio generator
  useEffect(() => {
    let audioCtx: AudioContext | null = null;
    let isCancelled = false;
    let loopTimeout: number | null = null;

    if (isPlayingVibe) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtx = new AudioContextClass();

        const chords = [
          [220, 277.18, 329.63, 440], // A major warm acoustic
          [164.81, 207.65, 246.94, 329.63], // E major
          [146.83, 220, 293.66, 369.99], // D major
          [174.61, 220, 261.63, 349.23]  // F#m / Dm warmth
        ];

        let chordIndex = 0;

        const playWarmChord = () => {
          if (!audioCtx || audioCtx.state === 'closed' || isCancelled) return;

          const currentNotes = chords[chordIndex];
          chordIndex = (chordIndex + 1) % chords.length;

          currentNotes.forEach((freq, i) => {
            if (!audioCtx) return;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = i % 2 === 0 ? 'triangle' : 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

            const startTime = audioCtx.currentTime + i * 0.12;
            const noteDuration = 3.8;

            gain.gain.setValueAtTime(0.0001, startTime);
            gain.gain.exponentialRampToValueAtTime(0.04, startTime + 0.5);
            gain.gain.exponentialRampToValueAtTime(0.0001, startTime + noteDuration);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start(startTime);
            osc.stop(startTime + noteDuration);
          });

          loopTimeout = window.setTimeout(playWarmChord, 3500);
        };

        playWarmChord();
      } catch {
        // Fallback gracefully if Web Audio is restricted
      }
    }

    return () => {
      isCancelled = true;
      if (loopTimeout) clearTimeout(loopTimeout);
      if (audioCtx && audioCtx.state !== 'closed') {
        audioCtx.close().catch(() => {});
      }
    };
  }, [isPlayingVibe]);

  const copyToClipboard = (text: string, toastMessage = "Copied to clipboard!") => {
    navigator.clipboard.writeText(text).then(() => {
      setShowCopiedToast(toastMessage);
      setTimeout(() => setShowCopiedToast(null), 3000);
    }).catch(() => {
      setShowCopiedToast("Copied text!");
      setTimeout(() => setShowCopiedToast(null), 3000);
    });
  };

  const handleShareFacebook = () => {
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(quicketLink)}&quote=${encodeURIComponent(fullShareText)}`;
    window.open(fbShareUrl, '_blank', 'width=600,height=500');
  };

  const handleShareTwitter = () => {
    const tweetText = `🎸 ${eventTitle}\n📅 25 Sept 2026, 19:00\n📍 Café Barcelona, 53 Thomson St, Colbyn, Pretoria\n🎟️ Tickets: ${ticketPrice}\n\nBook your tickets now on @QuicketSA:`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(quicketLink)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=500');
  };

  const handleShareInstagram = () => {
    copyToClipboard(fullShareText, "Formatted event caption copied for Instagram! Paste in your post/story.");
    setTimeout(() => {
      window.open('https://www.instagram.com', '_blank');
    }, 900);
  };

  const handleGeneralShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: eventTitle,
          text: fullShareText,
          url: quicketLink,
        });
      } catch {
        // User cancelled or share not supported
      }
    } else {
      copyToClipboard(fullShareText, "Event details & Quicket link copied to clipboard!");
    }
  };

  const handleAddToGoogleCalendar = () => {
    const title = encodeURIComponent(eventTitle);
    const details = encodeURIComponent(`Café Barcelona presents L.E.BAND - UNPLUGGED (Louis Esterhuizen Band) live in concert.\n\nDate: ${eventDate}\nTime: ${eventTime}\nVenue: ${eventVenue}\nTickets: ${ticketPrice}\n\nBook tickets on Quicket: ${quicketLink}`);
    const location = encodeURIComponent("Café Barcelona, 53 Thomson St, Colbyn, Pretoria, 0153, South Africa");
    // 25 Sep 2026 19:00 SAST (17:00 UTC) to 21:00 SAST (19:00 UTC)
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260925T170000Z/20260925T190000Z&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#ede8dc] text-[#162b48] flex flex-col items-center justify-center p-3 sm:p-6 font-['Heebo'] relative overflow-x-hidden selection:bg-[#5EB700]/20 selection:text-[#162b48]">
      
      {/* Background Decorative Paper Texture & Atmospheric Band Concert Artwork */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
        <PaperTextureBackground />
        <div className="absolute inset-0 opacity-75 sm:opacity-85 flex items-center justify-center">
          <BandStageIllustration className="w-full h-full object-cover min-w-[700px] max-w-[1400px]" opacity={0.95} showSpotlights={true} />
        </div>
        <div className="absolute inset-0 bg-[#ede8dc]/25 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Floating Botanical Corner Accents on App Canvas */}
      <div className="fixed -top-6 -left-6 pointer-events-none opacity-40 select-none z-0 hidden md:block">
        <FolkRose size={140} />
      </div>
      <div className="fixed -top-6 -right-6 pointer-events-none opacity-40 select-none z-0 hidden md:block">
        <FolkRose size={140} className="transform rotate-90" />
      </div>
      <div className="fixed -bottom-6 -left-6 pointer-events-none opacity-40 select-none z-0 hidden md:block">
        <BlueAnemone size={130} />
      </div>
      <div className="fixed -bottom-6 -right-6 pointer-events-none opacity-40 select-none z-0 hidden md:block">
        <FolkRose size={140} className="transform -rotate-90" />
      </div>

      {/* Toast Notification */}
      {showCopiedToast && (
        <div 
          id="toast-notification"
          className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-[#162b48] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-medium border border-white/20 animate-bounce max-w-[90vw]"
        >
          <div className="w-5 h-5 rounded-full bg-[#5EB700] flex items-center justify-center flex-shrink-0">
            <Check size={13} className="text-white stroke-[3]" />
          </div>
          <span>{showCopiedToast}</span>
        </div>
      )}

      {/* Main Poster Applet Container */}
      <main className="max-w-md w-full bg-[#f4f0e6] shadow-2xl rounded-3xl overflow-hidden relative z-10 border border-[#d6cfbe] transition-all duration-300">
        
        {/* Top Official Quicket Header Bar */}
        <div className="bg-[#162b48] px-4 py-2.5 flex items-center justify-between border-b border-white/10 text-white text-xs">
          <div className="flex items-center gap-2.5">
            <QuicketQIcon size={24} variant="profile" />
            <div>
              <div className="font-black text-white text-[13px] tracking-tight leading-tight uppercase">
                Quicket
              </div>
              <div className="text-gray-300 font-normal text-[10px] tracking-wider uppercase">
                Official Event
              </div>
            </div>
          </div>
          <QuicketPageTag href={quicketLink} variant="white" />
        </div>

        {/* ========================================================================= */}
        {/* HERO SECTION: DIRECT REPLICA OF CONCERT POSTER ARTWORK & ENGRAVED VIBE */}
        {/* ========================================================================= */}
        <header className="relative w-full bg-[#f4f0e6] overflow-hidden pt-7 pb-8 px-6 text-center border-b border-[#d6cfbe]">
          
          {/* Subtle Paper Grain */}
          <PaperTextureBackground />

          {/* Central 4-Piece Band Unplugged Stage Illustration Backdrop */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <BandStageIllustration className="w-full h-full object-cover scale-105" opacity={0.68} showSpotlights={true} />
          </div>

          {/* Botanical Floral Frame Corner Accents */}
          <div className="absolute -top-3 -left-3 pointer-events-none select-none z-10 opacity-70">
            <BlueAnemone size={58} className="transform -rotate-12" />
          </div>
          <div className="absolute -top-3 -right-3 pointer-events-none select-none z-10 opacity-70">
            <FolkRose size={68} className="transform rotate-12" />
          </div>

          {/* Quick Floating Actions over Botanical Header */}
          <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
            {/* View Full Poster Modal Toggle */}
            <button
              id="view-poster-artwork-btn"
              onClick={() => setShowPosterModal(true)}
              title="View full commemorative concert poster"
              className="p-1.5 sm:p-2 rounded-full bg-[#162b48]/85 hover:bg-[#162b48] text-white backdrop-blur-md transition-colors flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 shadow-md border border-white/20"
            >
              <ImageIcon size={13} className="text-[#5EB700]" />
              <span>Poster</span>
            </button>

            {/* Audio Ambiance preview toggle */}
            <button
              id="audio-vibe-toggle-btn"
              onClick={() => setIsPlayingVibe(!isPlayingVibe)}
              title={isPlayingVibe ? "Mute venue ambiance" : "Play venue acoustic vibe"}
              aria-label="Toggle concert sound ambience"
              className="p-1.5 sm:p-2 rounded-full bg-[#162b48]/85 hover:bg-[#162b48] text-[#5EB700] backdrop-blur-md transition-colors shadow-md border border-white/20"
            >
              {isPlayingVibe ? <Volume2 size={15} className="animate-pulse" /> : <VolumeX size={15} className="opacity-80" />}
            </button>
          </div>

          {/* Authentic Concert Poster Typography Framed over Background Sketch */}
          <div className="relative z-10 mt-1 bg-[#f4f0e6]/85 backdrop-blur-[2px] px-4 py-3.5 rounded-2xl border border-[#d6cfbe]/80 shadow-xs inline-block max-w-[92%] mx-auto">
            <div className="font-['Playfair_Display'] text-lg sm:text-xl font-extrabold text-[#162b48] tracking-tight leading-tight">
              Café Barcelona Presents
            </div>

            <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-black text-[#162b48] tracking-tight leading-none uppercase my-1 drop-shadow-xs">
              L.E.BAND - UNPLUGGED
            </h1>

            <p className="font-['Playfair_Display'] italic text-xs sm:text-sm font-bold text-[#2d4768] mb-1.5 tracking-wide">
              Louis Esterhuizen Band
            </p>

            {/* Delicate Vintage Engraved Divider */}
            <div className="flex items-center justify-center gap-2 my-1.5">
              <span className="h-[1.5px] w-8 sm:w-12 bg-[#5a7088]/50"></span>
              <div className="w-1.5 h-1.5 rotate-45 border border-[#5a7088]/80 bg-[#f4f0e6]"></div>
              <span className="h-[1.5px] w-8 sm:w-12 bg-[#5a7088]/50"></span>
            </div>

            {/* Poster Date & Time & Price Representation */}
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm font-extrabold text-[#162b48] font-['Playfair_Display']">
              <span>25 September 2026</span>
              <span>•</span>
              <span>19:00 - 21:00</span>
              <span>•</span>
              <span className="text-[#248200] font-black">Tickets: R150</span>
            </div>
          </div>
        </header>

        {/* Content Section with Vintage Cream Styling */}
        <div className="px-5 sm:px-6 py-6 relative bg-[#f4f0e6]">
          
          {/* Floating Countdown Box with Antique Ticket Framing */}
          <div 
            id="countdown-container" 
            className="bg-white/90 backdrop-blur-xs rounded-2xl shadow-xl p-4 -mt-10 mb-6 relative z-20 border-2 border-[#d6cfbe] transform transition-transform hover:scale-[1.01] duration-300"
          >
            <div className="flex items-center justify-center gap-1.5 mb-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c02b20] animate-ping inline-block"></span>
              <p className="text-center text-xs font-black text-[#162b48] uppercase tracking-wider">
                Concert Starts In
              </p>
            </div>
            
            <div className="grid grid-cols-4 gap-2 text-center divide-x divide-[#e6dfcc]">
              <div className="px-1">
                <span className="block text-2xl sm:text-3xl font-black text-[#c02b20] tracking-tight">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Days</span>
              </div>
              <div className="px-1">
                <span className="block text-2xl sm:text-3xl font-black text-[#162b48] tracking-tight">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Hours</span>
              </div>
              <div className="px-1">
                <span className="block text-2xl sm:text-3xl font-black text-[#607897] tracking-tight">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Mins</span>
              </div>
              <div className="px-1">
                <span className="block text-2xl sm:text-3xl font-black text-[#f5a623] tracking-tight">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Secs</span>
              </div>
            </div>
          </div>

          {/* Event Details with Folk Botanical Accents & Initial Load Fade-In */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                }
              }
            }}
            className="space-y-3 mb-6 text-[#162b48]"
          >
            {/* Ticket Price Card */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }
                }
              }}
              className="flex items-center justify-between bg-white/70 p-3.5 rounded-2xl hover:bg-white transition-colors border border-[#d6cfbe]"
            >
              <div className="flex items-center">
                <div className="p-2.5 bg-[#f4f0e6] rounded-xl shadow-xs mr-3.5 text-[#5EB700] border border-[#d6cfbe]">
                  <Ticket className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#162b48]">Ticket Price: R150</p>
                  <p className="text-xs text-[#3d5c38] font-semibold">General Admission • Book on Quicket</p>
                </div>
              </div>
              <span className="text-xs font-black px-2.5 py-1 bg-[#5EB700]/15 text-[#248200] border border-[#5EB700]/30 rounded-xl">
                R150
              </span>
            </motion.div>

            {/* Date Card */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }
                }
              }}
              className="flex items-center justify-between bg-white/70 p-3.5 rounded-2xl hover:bg-white transition-colors border border-[#d6cfbe]"
            >
              <div className="flex items-center">
                <div className="p-2.5 bg-[#f4f0e6] rounded-xl shadow-xs mr-3.5 text-[#c02b20] border border-[#d6cfbe]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#162b48]">25 September 2026</p>
                  <p className="text-xs text-[#3d5c38] font-semibold">Friday Evening • Live Show</p>
                </div>
              </div>
              <button
                id="add-calendar-action-btn"
                onClick={handleAddToGoogleCalendar}
                title="Add to Google Calendar"
                className="px-2.5 py-1.5 text-xs font-bold text-[#162b48] hover:text-[#c02b20] hover:bg-[#f4f0e6] rounded-xl transition-colors flex items-center gap-1 border border-[#162b48]/15 shadow-xs"
              >
                <CalendarPlus size={15} />
                <span className="hidden sm:inline">Calendar</span>
              </button>
            </motion.div>
            
            {/* Time Card */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }
                }
              }}
              className="flex items-center bg-white/70 p-3.5 rounded-2xl border border-[#d6cfbe]"
            >
              <div className="p-2.5 bg-[#f4f0e6] rounded-xl shadow-xs mr-3.5 text-[#607897] border border-[#d6cfbe]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#162b48]">19:00 - 21:00 (SAST)</p>
                <p className="text-xs text-[#3d5c38] font-semibold">Doors open early for dinner & drinks</p>
              </div>
            </motion.div>

            {/* Venue Location Card */}
            <motion.a
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }
                }
              }}
              id="venue-directions-link"
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white/70 p-3.5 rounded-2xl hover:bg-white transition-colors border border-[#d6cfbe] group"
            >
              <div className="flex items-center">
                <div className="p-2.5 bg-[#f4f0e6] rounded-xl shadow-xs mr-3.5 text-[#f5a623] border border-[#d6cfbe]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#162b48] group-hover:text-[#5EB700] transition-colors">
                    Café Barcelona
                  </p>
                  <p className="text-xs text-[#3d5c38] font-semibold">53 Thomson St, Colbyn, Pretoria, 0153</p>
                </div>
              </div>
              <ExternalLink size={16} className="text-gray-500 group-hover:text-[#162b48] transition-colors" />
            </motion.a>
          </motion.div>

          {/* Primary Action Buttons */}
          <div className="space-y-4 mb-6">
            {/* Quicket Official Booking CTA Button */}
            <a 
              id="get-tickets-quicket-btn"
              href={quicketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#5EB700] hover:bg-[#248200] active:bg-[#1f6e00] text-white font-black py-4 px-6 rounded-2xl shadow-xl shadow-[#5EB700]/30 flex items-center justify-center transition-all transform hover:-translate-y-0.5 active:scale-[0.98] group text-base uppercase tracking-tight"
            >
              <Ticket className="mr-2.5 w-5 h-5 group-hover:rotate-12 transition-transform stroke-[2.5]" />
              <span>Get Tickets on Quicket • R150</span>
            </a>

            {/* Social Media Sharing Section */}
            <div id="social-share-section" className="bg-white/80 rounded-2xl p-4 border border-[#d6cfbe] shadow-xs">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-1.5 text-xs font-black text-[#404040] uppercase tracking-wider">
                  <Share2 size={14} className="text-[#5EB700]" />
                  <span>Share Event with Friends</span>
                </div>
                <button
                  id="preview-caption-btn"
                  onClick={() => setShowShareModal(true)}
                  className="text-[11px] font-bold text-[#FF7D00] hover:underline flex items-center gap-0.5"
                >
                  <Sparkles size={12} />
                  <span>View Post</span>
                </button>
              </div>

              {/* Social Buttons Grid: Facebook, Twitter, Instagram */}
              <div className="grid grid-cols-3 gap-2.5">
                {/* Facebook Button */}
                <button
                  id="share-facebook-btn"
                  onClick={handleShareFacebook}
                  title="Share on Facebook (Pre-filled post)"
                  aria-label="Share on Facebook"
                  className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-all transform active:scale-95 group border border-[#1877F2]/20 hover:border-transparent shadow-xs"
                >
                  <div className="p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                    <Facebook size={20} className="fill-current" />
                  </div>
                  <span className="text-[11px] font-bold mt-1 tracking-tight">Facebook</span>
                </button>

                {/* Twitter / X Button */}
                <button
                  id="share-twitter-btn"
                  onClick={handleShareTwitter}
                  title="Post to Twitter/X (Pre-filled tweet)"
                  aria-label="Share on Twitter / X"
                  className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-gray-900/10 hover:bg-black text-gray-900 hover:text-white transition-all transform active:scale-95 group border border-gray-900/20 hover:border-transparent shadow-xs"
                >
                  <div className="p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                    <Twitter size={20} className="fill-current" />
                  </div>
                  <span className="text-[11px] font-bold mt-1 tracking-tight">Twitter / X</span>
                </button>

                {/* Instagram Button */}
                <button
                  id="share-instagram-btn"
                  onClick={handleShareInstagram}
                  title="Share to Instagram (Copies formatted caption & opens Instagram)"
                  aria-label="Share on Instagram"
                  className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-[#E1306C]/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-[#E1306C] hover:text-white transition-all transform active:scale-95 group border border-[#E1306C]/20 hover:border-transparent shadow-xs"
                >
                  <div className="p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                    <Instagram size={20} />
                  </div>
                  <span className="text-[11px] font-bold mt-1 tracking-tight">Instagram</span>
                </button>
              </div>

              {/* Fast Copy & Universal Share Row */}
              <div className="mt-3 pt-2.5 border-t border-[#e6dfcc] flex items-center justify-between gap-2">
                <button
                  id="copy-formatted-post-btn"
                  onClick={() => copyToClipboard(fullShareText, "Full event details & Quicket link copied!")}
                  className="flex-1 py-2 px-3 text-xs font-bold text-[#404040] bg-[#ede8dc] hover:bg-[#e4ddcd] rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-[#d6cfbe]"
                >
                  <Copy size={13} />
                  <span>Copy Post Text</span>
                </button>
                <button
                  id="universal-share-link-btn"
                  onClick={handleGeneralShare}
                  className="py-2 px-3 text-xs font-bold text-[#404040] bg-[#ede8dc] hover:bg-[#e4ddcd] rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-[#d6cfbe]"
                >
                  <Share2 size={13} />
                  <span>Share Link</span>
                </button>
              </div>
            </div>
          </div>

          {/* Official Quicket Brand Footer with Logo & Tagline */}
          <footer className="mt-6 pt-5 border-t border-[#d6cfbe] text-center flex flex-col items-center justify-center">
            <span className="text-[10px] text-[#59595C] uppercase tracking-widest font-bold mb-2">
              Official Ticketing Partner
            </span>
            <a 
              href={quicketLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block transform hover:scale-105 transition-transform"
              title="Visit Quicket - a ticketmaster company"
            >
              <QuicketLogo variant="green-grey" className="h-8" />
            </a>
          </footer>
          
        </div>
      </main>

      {/* ========================================================================= */}
      {/* SOCIAL MEDIA PREVIEW MODAL */}
      {/* ========================================================================= */}
      {showShareModal && (
        <div 
          id="social-share-modal" 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowShareModal(false)}
        >
          <div 
            className="bg-[#f4f0e6] rounded-3xl p-6 max-w-sm w-full shadow-2xl border-2 border-[#d6cfbe] animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-black text-[#404040] text-base flex items-center gap-2 uppercase tracking-tight">
                <Sparkles size={16} className="text-[#5EB700]" />
                Pre-filled Social Post
              </h3>
              <button 
                onClick={() => setShowShareModal(false)}
                className="p-1 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-xs text-[#59595C] mb-3">
              This message is automatically pre-filled when sharing to Facebook, Twitter, and Instagram:
            </p>

            <div className="bg-white p-3.5 rounded-2xl border border-[#d6cfbe] text-xs text-[#404040] whitespace-pre-line mb-4 shadow-inner leading-relaxed font-sans">
              {fullShareText}
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <button
                onClick={handleShareFacebook}
                className="py-2 px-3 bg-[#1877F2] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 hover:bg-[#1465cc] transition-colors"
              >
                <Facebook size={14} className="fill-current" />
                Post
              </button>
              <button
                onClick={handleShareTwitter}
                className="py-2 px-3 bg-black text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 hover:bg-gray-800 transition-colors"
              >
                <Twitter size={14} className="fill-current" />
                Tweet
              </button>
              <button
                onClick={handleShareInstagram}
                className="py-2 px-3 bg-[#E1306C] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 hover:bg-[#c1275d] transition-colors"
              >
                <Instagram size={14} />
                Insta
              </button>
            </div>

            <button
              onClick={() => copyToClipboard(fullShareText, "Post copied to clipboard!")}
              className="w-full py-2.5 bg-[#162b48] hover:bg-[#0f1f34] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs uppercase tracking-wider"
            >
              <Copy size={14} />
              Copy Full Post Text
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* FULL CONCERT POSTER MODAL (Exact Authentic Artwork) */}
      {/* ========================================================================= */}
      {showPosterModal && (
        <div 
          id="poster-artwork-modal" 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setShowPosterModal(false)}
        >
          <div 
            className="relative max-w-lg w-full bg-[#f4f0e6] rounded-3xl shadow-2xl border-2 border-[#d6cfbe] p-4 sm:p-6 animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowPosterModal(false)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-[#162b48] text-white hover:bg-black transition-colors shadow-lg"
              title="Close poster"
            >
              <X size={20} />
            </button>

            {/* Poster Artwork Replica Component */}
            <PosterArtwork className="w-full" />

            {/* Modal Bottom Actions */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <a
                href={quicketLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#5EB700] hover:bg-[#248200] text-white py-3 rounded-2xl font-black text-xs text-center flex items-center justify-center gap-1.5 shadow-lg uppercase tracking-tight"
              >
                <Ticket size={16} />
                Book Tickets on Quicket
              </a>
              <button
                onClick={() => copyToClipboard(fullShareText, "Post copied to clipboard!")}
                className="px-4 bg-[#162b48] hover:bg-[#0f1f34] text-white py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}
