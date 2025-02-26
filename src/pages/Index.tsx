import { useEffect, useState, useRef } from "react";
import { PortfolioPopup } from "@/components/PortfolioPopup";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (videoRef.current) {
        videoRef.current.volume = 1.0; // Set volume to maximum
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-7xl mx-auto space-y-8 animate-fade-in">
        <div className="text-center space-y-4 mb-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm font-medium tracking-wide text-white/80 animate-scale-in">
            Featured Video
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Premium Video Experience
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Experience seamless video playback in an elegantly designed interface
          </p>
        </div>

        <div className={`video-container glass-panel transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <div className="video-wrapper">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              controls
              playsInline
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-white/40">
            Video plays automatically and loops continuously
          </p>
        </div>
      </div>
      
      <PortfolioPopup />
    </div>
  );
};

export default Index;