import React, { useState, useEffect, useCallback } from 'react';
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
  X
} from 'lucide-react';

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
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Barcelona+Garsfontein+Pretoria";

  const eventTitle = "Café Barcelona Presents L.E. BAND - Live in Concert";
  const eventDate = "25 September 2026";
  const eventTime = "19:00 - 21:00 (SAST)";
  const eventVenue = "Café Barcelona, Pretoria";

  const fullShareText = `🎸 ${eventTitle}\n📅 Date: ${eventDate}\n⏰ Time: ${eventTime}\n📍 Venue: ${eventVenue}\n🎟️ Get Tickets: ${quicketLink}`;

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
  const [showCopiedToast, setShowCopiedToast] = useState<string | null>(null);
  const [isPlayingVibe, setIsPlayingVibe] = useState<boolean>(false);
  const [showShareModal, setShowShareModal] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const copyToClipboard = async (text: string, successMessage: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowCopiedToast(successMessage);
      setTimeout(() => setShowCopiedToast(null), 3000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setShowCopiedToast(successMessage);
        setTimeout(() => setShowCopiedToast(null), 3000);
      } catch (e) {
        console.error("Copy failed", e);
      }
      document.body.removeChild(textArea);
    }
  };

  const handleShareFacebook = () => {
    const quote = `${eventTitle} | ${eventDate} at ${eventTime} @ ${eventVenue}. Get tickets:`;
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(quicketLink)}&quote=${encodeURIComponent(quote)}`;
    window.open(fbShareUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const handleShareTwitter = () => {
    const tweetText = `🎸 ${eventTitle}\n📅 Date: ${eventDate}\n⏰ Time: ${eventTime}\n📍 Venue: ${eventVenue}\n🎟️ Tickets:`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(quicketLink)}&hashtags=LEBand,CafeBarcelona,LiveMusic`;
    window.open(twitterShareUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  const handleShareInstagram = async () => {
    // Instagram doesn't support pre-filling post text via web URL parameter,
    // so we copy the complete pre-formatted caption with title, date, time & link, then open Instagram.
    await copyToClipboard(
      fullShareText,
      "Instagram caption copied to clipboard! Paste it in your post or story."
    );
    setTimeout(() => {
      window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    }, 600);
  };

  const handleGeneralShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: eventTitle,
          text: `Join us for ${eventTitle} on ${eventDate} at ${eventTime}!`,
          url: quicketLink,
        });
        return;
      } catch {
        // user dismissed or not supported
      }
    }
    copyToClipboard(quicketLink, "Ticket link copied to clipboard!");
  };

  const handleAddToGoogleCalendar = () => {
    const title = encodeURIComponent(eventTitle);
    const details = encodeURIComponent(`Café Barcelona presents L.E. BAND live in concert.\n\nDate: ${eventDate}\nTime: ${eventTime}\nVenue: ${eventVenue}\n\nBook tickets on Quicket: ${quicketLink}`);
    const location = encodeURIComponent("Café Barcelona, Pretoria, South Africa");
    // 25 Sep 2026 19:00 SAST (17:00 UTC) to 21:00 SAST (19:00 UTC)
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20260925T170000Z/20260925T190000Z&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="event-page-container" className="min-h-screen bg-[#f8f5ef] flex items-center justify-center font-sans overflow-x-hidden relative p-3 sm:p-6 select-none">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-4 left-4 w-52 h-52 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob pointer-events-none"></div>
      <div className="absolute top-8 right-8 w-52 h-52 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-10 left-1/3 w-56 h-56 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Floating Toast Notification */}
      {showCopiedToast && (
        <div 
          id="toast-notification"
          className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-[#1e3450] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-medium border border-white/20 animate-bounce max-w-[90vw]"
        >
          <div className="w-5 h-5 rounded-full bg-[#7bc143] flex items-center justify-center flex-shrink-0">
            <Check size={13} className="text-white stroke-[3]" />
          </div>
          <span>{showCopiedToast}</span>
        </div>
      )}

      <main className="max-w-md w-full bg-[#f8f5ef] shadow-2xl rounded-3xl overflow-hidden relative z-10 border border-[#e6dfd1] transition-all duration-300">
        
        {/* Header / Hero Section */}
        <header className="relative h-72 sm:h-80 w-full flex items-center justify-center overflow-hidden bg-[#1e3450]">
          {/* Live concert atmosphere background */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-overlay scale-105 transform hover:scale-110 transition-transform duration-1000"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80')` 
            }}
          ></div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3450] via-[#1e3450]/80 to-transparent opacity-95"></div>

          {/* Sound vibe preview toggle in header corner */}
          <button
            id="audio-vibe-toggle-btn"
            onClick={() => setIsPlayingVibe(!isPlayingVibe)}
            title={isPlayingVibe ? "Mute venue ambiance" : "Play venue acoustic vibe"}
            aria-label="Toggle concert sound ambience"
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#e5a97c] backdrop-blur-md transition-colors"
          >
            {isPlayingVibe ? <Volume2 size={18} className="animate-pulse" /> : <VolumeX size={18} className="opacity-75" />}
          </button>
          
          <div className="relative z-10 text-center px-6 mt-6">
            <span className="inline-block text-[#f8f5ef]/90 text-xs sm:text-sm tracking-widest uppercase font-semibold mb-2 bg-white/10 px-3.5 py-1 rounded-full backdrop-blur-xs border border-white/15">
              Café Barcelona Presents
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md" style={{ fontFamily: 'Georgia, serif' }}>
              L.E. BAND
            </h1>
            <div className="flex items-center justify-center space-x-2 text-[#e5a97c]">
              <Music size={16} className="animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Live in Concert</span>
              <Music size={16} className="animate-pulse" />
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="px-6 py-7 relative bg-[#f8f5ef] -mt-6 rounded-t-3xl border-t border-[#e6dfd1]">
          
          {/* Floating Countdown Box */}
          <div 
            id="countdown-container" 
            className="bg-white rounded-2xl shadow-xl p-4 -mt-16 mb-6 relative z-20 border border-[#e6dfd1] transform transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="flex items-center justify-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d9534f] animate-ping inline-block"></span>
              <p className="text-center text-xs font-bold text-[#1e3450] uppercase tracking-wider">
                Event Starts In
              </p>
            </div>
            
            <div className="grid grid-cols-4 gap-2 text-center divide-x divide-[#e6dfd1]">
              <div className="px-1">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#d9534f] tracking-tight">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">Days</span>
              </div>
              <div className="px-1">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#1e3450] tracking-tight">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">Hours</span>
              </div>
              <div className="px-1">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#1e3450] tracking-tight">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">Mins</span>
              </div>
              <div className="px-1">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#1e3450] tracking-tight">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider">Secs</span>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-3 mb-6 text-[#1e3450]">
            <div className="flex items-center justify-between bg-[#f0ebd8] p-3.5 rounded-2xl hover:bg-[#eae3cd] transition-colors border border-[#e6dfd1]/60">
              <div className="flex items-center">
                <div className="p-2.5 bg-white rounded-xl shadow-xs mr-3.5 text-[#d9534f]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1e3450]">25 September 2026</p>
                  <p className="text-xs text-gray-600 font-medium">Friday Evening • Save the Date</p>
                </div>
              </div>
              <button
                id="add-calendar-action-btn"
                onClick={handleAddToGoogleCalendar}
                title="Add to Google Calendar"
                className="px-2.5 py-1.5 text-xs font-semibold text-[#1e3450] hover:text-[#d9534f] hover:bg-white/70 rounded-xl transition-colors flex items-center gap-1 border border-[#1e3450]/10"
              >
                <CalendarPlus size={15} />
                <span className="hidden sm:inline">Add</span>
              </button>
            </div>
            
            <div className="flex items-center bg-[#f0ebd8] p-3.5 rounded-2xl border border-[#e6dfd1]/60">
              <div className="p-2.5 bg-white rounded-xl shadow-xs mr-3.5 text-[#d9534f]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#1e3450]">19:00 - 21:00 (SAST)</p>
                <p className="text-xs text-gray-600 font-medium">Doors open early for dinner & drinks</p>
              </div>
            </div>

            <a
              id="venue-directions-link"
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-[#f0ebd8] p-3.5 rounded-2xl hover:bg-[#eae3cd] transition-colors border border-[#e6dfd1]/60 group"
            >
              <div className="flex items-center">
                <div className="p-2.5 bg-white rounded-xl shadow-xs mr-3.5 text-[#d9534f]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1e3450] group-hover:text-[#d9534f] transition-colors">
                    Café Barcelona
                  </p>
                  <p className="text-xs text-gray-600 font-medium">Live Music Venue & Bistro, Pretoria</p>
                </div>
              </div>
              <ExternalLink size={16} className="text-gray-500 group-hover:text-[#1e3450] transition-colors" />
            </a>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-4 mb-6">
            <a 
              id="get-tickets-quicket-btn"
              href={quicketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#7bc143] hover:bg-[#6ba837] active:bg-[#5f9730] text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-[#7bc143]/30 flex items-center justify-center transition-all transform hover:-translate-y-0.5 active:scale-[0.98] group text-base"
            >
              <Ticket className="mr-2.5 w-5 h-5 group-hover:rotate-12 transition-transform" />
              Get Tickets on Quicket
            </a>

            {/* Social Media Sharing Section */}
            <div id="social-share-section" className="bg-white rounded-2xl p-4 border border-[#e6dfd1] shadow-xs">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#1e3450] uppercase tracking-wider">
                  <Share2 size={14} className="text-[#d9534f]" />
                  <span>Share Event with Friends</span>
                </div>
                <button
                  id="preview-caption-btn"
                  onClick={() => setShowShareModal(true)}
                  className="text-[11px] font-semibold text-[#d9534f] hover:underline flex items-center gap-0.5"
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
              <div className="mt-3 pt-2.5 border-t border-[#e6dfd1] flex items-center justify-between gap-2">
                <button
                  id="copy-formatted-post-btn"
                  onClick={() => copyToClipboard(fullShareText, "Full event details & Quicket link copied!")}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-[#1e3450] bg-[#f0ebd8] hover:bg-[#eae3cd] rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Copy size={13} />
                  <span>Copy Post Text</span>
                </button>
                <button
                  id="universal-share-link-btn"
                  onClick={handleGeneralShare}
                  className="py-2 px-3 text-xs font-semibold text-[#1e3450] bg-[#f0ebd8] hover:bg-[#eae3cd] rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Share2 size={13} />
                  <span>Share Link</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <footer className="mt-4 text-center text-xs text-gray-500 flex items-center justify-center gap-1">
            <span>Powered by</span>
            <a 
              href={quicketLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold text-[#1e3450] hover:underline"
            >
              Quicket
            </a>
            <span>• Official Ticketing</span>
          </footer>
          
        </div>
      </main>

      {/* Share Preview Modal */}
      {showShareModal && (
        <div 
          id="share-preview-modal-backdrop"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowShareModal(false)}
        >
          <div 
            id="share-preview-modal"
            className="bg-[#f8f5ef] max-w-sm w-full rounded-3xl p-5 shadow-2xl border border-[#e6dfd1] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-[#1e3450] text-base flex items-center gap-2">
                <Sparkles size={16} className="text-[#d9534f]" />
                Pre-filled Social Post
              </h3>
              <button 
                onClick={() => setShowShareModal(false)}
                className="p-1 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-xs text-gray-600 mb-3">
              This message is automatically pre-filled when sharing to Facebook, Twitter, and Instagram:
            </p>

            <div className="bg-white p-3.5 rounded-2xl border border-[#e6dfd1] text-xs text-[#1e3450] font-mono whitespace-pre-line mb-4 shadow-inner">
              {fullShareText}
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3">
              <button
                onClick={() => {
                  handleShareFacebook();
                  setShowShareModal(false);
                }}
                className="py-2 rounded-xl bg-[#1877F2] text-white font-bold text-xs flex items-center justify-center gap-1 hover:opacity-90 transition-opacity"
              >
                <Facebook size={14} className="fill-current" />
                Facebook
              </button>
              <button
                onClick={() => {
                  handleShareTwitter();
                  setShowShareModal(false);
                }}
                className="py-2 rounded-xl bg-black text-white font-bold text-xs flex items-center justify-center gap-1 hover:opacity-90 transition-opacity"
              >
                <Twitter size={14} className="fill-current" />
                Twitter/X
              </button>
              <button
                onClick={() => {
                  handleShareInstagram();
                  setShowShareModal(false);
                }}
                className="py-2 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-bold text-xs flex items-center justify-center gap-1 hover:opacity-90 transition-opacity"
              >
                <Instagram size={14} />
                Instagram
              </button>
            </div>

            <button
              onClick={() => copyToClipboard(fullShareText, "Post copied to clipboard!")}
              className="w-full py-2.5 bg-[#1e3450] hover:bg-[#15253a] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <Copy size={14} />
              Copy Full Post Text
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


