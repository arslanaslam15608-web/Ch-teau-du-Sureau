import React, { useEffect, useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'eager' | 'lazy';
  caption?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  loading = 'lazy',
}) => {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#EBE6DC] text-[#233B30]/70 border border-[#D8D0C2] p-6 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <span className="font-serif italic text-lg text-[#233B30]">Château du Sureau</span>
        <span className="mt-1 text-xs tracking-wider uppercase text-[#292925]/60">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};
