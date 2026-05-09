import { useEffect, useRef } from "react";

function BackgroundMusic({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.5;

    audioRef.current = audio;

    // Try autoplay on load
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (err) {
        console.log("Autoplay blocked by browser");
      }
    };

    playAudio();

    // Optional fallback: start on first interaction
    const startOnInteraction = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", startOnInteraction);
      window.removeEventListener("touchstart", startOnInteraction);
    };

    window.addEventListener("click", startOnInteraction);
    window.addEventListener("touchstart", startOnInteraction);

    return () => {
      audio.pause();
      window.removeEventListener("click", startOnInteraction);
      window.removeEventListener("touchstart", startOnInteraction);
    };
  }, [src]);

  return null;
}

export default BackgroundMusic;