import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../data/estatePagesData';
import { ImageWithFallback } from './ImageWithFallback';

interface LightboxProps {
  photos: GalleryPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  activeIndex,
  onClose,
  onChangeIndex,
}) => {
  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChangeIndex((activeIndex + 1) % photos.length);
      if (e.key === 'ArrowLeft') onChangeIndex((activeIndex - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, photos.length, onClose, onChangeIndex]);

  if (activeIndex === null || !photos[activeIndex]) return null;
  const current = photos[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#17261f]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 text-[#F5F1E8]"
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      onClick={onClose}
    >
      <div className="flex items-center justify-between max-w-6xl w-full mx-auto">
        <div className="text-xs uppercase tracking-[0.18em] text-[#B49A68] tabular-nums">
          {activeIndex + 1} / {photos.length} · {current.category}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="w-11 h-11 flex items-center justify-center border border-[#F5F1E8]/25 hover:bg-[#F5F1E8] hover:text-[#233B30] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div
        className="flex-1 flex items-center justify-center gap-4 max-w-6xl w-full mx-auto my-4 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => onChangeIndex((activeIndex - 1 + photos.length) % photos.length)}
          aria-label="Previous image"
          className="hidden sm:flex w-12 h-12 shrink-0 items-center justify-center border border-[#F5F1E8]/25 hover:border-[#B49A68] hover:text-[#B49A68] transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="relative max-h-[75vh] max-w-4xl w-full flex flex-col items-center">
          <ImageWithFallback
            src={current.src}
            alt={current.title}
            className="max-h-[68vh] w-auto max-w-full object-contain shadow-2xl"
          />
          <div className="mt-4 text-center">
            <h3 className="font-serif text-2xl text-[#F5F1E8]">{current.title}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#B49A68]">{current.category}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onChangeIndex((activeIndex + 1) % photos.length)}
          aria-label="Next image"
          className="hidden sm:flex w-12 h-12 shrink-0 items-center justify-center border border-[#F5F1E8]/25 hover:border-[#B49A68] hover:text-[#B49A68] transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="sm:hidden flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onChangeIndex((activeIndex - 1 + photos.length) % photos.length);
          }}
          className="px-4 py-2 border border-[#F5F1E8]/30 text-xs uppercase tracking-widest"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onChangeIndex((activeIndex + 1) % photos.length);
          }}
          className="px-4 py-2 border border-[#F5F1E8]/30 text-xs uppercase tracking-widest"
        >
          Next
        </button>
      </div>
    </div>
  );
};
