import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';
import { useRouter } from './RouterContext';

interface PageHeroProps {
  kicker: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  breadcrumbs?: { label: string; to?: string }[];
}

export const PageHero: React.FC<PageHeroProps> = ({
  kicker,
  title,
  subtitle,
  image,
  imageAlt,
  breadcrumbs,
}) => {
  const { navigate } = useRouter();

  return (
    <section className="relative pt-24 lg:pt-28 pb-16 lg:pb-24 bg-[#233B30] text-[#F5F1E8] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={image}
          alt={imageAlt}
          loading="eager"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#233B30] via-[#233B30]/75 to-[#233B30]/60" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12 pt-8 lg:pt-12">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-[#F5F1E8]/70">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="hover:text-[#B49A68] transition-colors cursor-pointer"
            >
              Home
            </button>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb.label}>
                <span aria-hidden="true">/</span>
                {crumb.to && idx < breadcrumbs.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => navigate(crumb.to!)}
                    className="hover:text-[#B49A68] transition-colors cursor-pointer"
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className="text-[#B49A68]">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <p className="text-xs uppercase tracking-[0.22em] text-[#B49A68]">{kicker}</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F1E8] max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base sm:text-lg text-[#F5F1E8]/85 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
