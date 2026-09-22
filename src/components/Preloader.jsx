import { useEffect, useState } from "react";
import { NotebookDot } from "lucide-react";

function Preloader({ minDuration = 1500 }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Pastikan loader tampil minimal `minDuration` ms,
    // supaya tidak "kedip" kalau halaman sudah siap duluan.
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, minDuration);

    // Setelah animasi fade-out selesai (300ms), baru benar-benar dilepas dari DOM.
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, minDuration + 300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [minDuration]);

  // Kunci scroll body selama preloader tampil
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Memuat halaman"
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white transition-opacity duration-300 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex size-24 items-center justify-center">
        {/* Lingkaran denyut di belakang icon */}
        <span className="absolute inset-0 animate-ping rounded-full bg-peach opacity-75" />
        <span className="absolute inset-0 rounded-full bg-peach" />

        {/* Icon cart yang bergerak naik-turun (bounce) */}
        <NotebookDot
          className="relative size-12 animate-bounce text-peach-ink"
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>

      <p className="mt-6 text-sm font-semibold tracking-wide text-body/70">
        Memuat halaman...
      </p>

      {/* Progress bar dekoratif */}
      <div className="mt-4 h-1 w-40 overflow-hidden rounded-full bg-peach/30">
        <div className="h-full w-1/2 animate-loading-bar rounded-full bg-peach-ink" />
      </div>
    </div>
  );
}

export default Preloader;