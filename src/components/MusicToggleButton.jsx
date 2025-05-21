import { useState, useRef, useEffect } from "react";

function MusicToggleButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        className="flex items-center gap-2 px-2 py-2 rounded-md bg-[#1b1f21] shadow-md image-render-pixel hover:scale-110 transition-transform duration-300"
        data-umami-event="Music Button"
      >
        {!hasInteracted ? (
          <>
            <span className="text-white font-vt323 text-xl ml-2">Better with</span>
            <img
              src="/portfolio/icon/ico_music.png"
              alt="Music Icon"
              className="w-8 h-8 object-contain mr-2"
            />
          </>
        ) : (
          <img
            src={
              isPlaying
                ? "/portfolio/icon/ico_pause.png"
                : "/portfolio/icon/ico_music.png"
            }
            alt="Music Icon"
            className="w-8 h-8 object-contain"
          />
        )}
      </button>
      <audio ref={audioRef} loop src="/portfolio/music/bg_0.mp3" />
    </div>
  );
}

export default MusicToggleButton;
