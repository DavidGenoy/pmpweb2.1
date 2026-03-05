import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroVideoProps {
  videoSrc: string;
  posterSrc: string;
  overlayOpacity?: number;
}

export default function HeroVideo({ 
  videoSrc, 
  posterSrc, 
  overlayOpacity = 0.4 
}: HeroVideoProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Poster Image - Always present as fallback or initial state */}
      <img
        src={posterSrc}
        alt="Hero Background Poster"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />

      {/* Video - Only for non-mobile */}
      {!isMobile && (
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVideoLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </motion.video>
      )}

      {/* Darkened Overlay */}
      <div 
        className="absolute inset-0 bg-black" 
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
