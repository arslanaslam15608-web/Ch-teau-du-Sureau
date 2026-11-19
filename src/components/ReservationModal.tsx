import React, { useEffect } from 'react';
import { X, ArrowUpRight, Phone, Calendar, Utensils, Sparkles, Gift } from 'lucide-react';
import { EXTERNAL_LINKS, SITE_CONTACT } from '../data/media';
import { useRouter } from './RouterContext';

export const ReservationModal: React.FC = () => {
  const { isReserveOpen, closeReserve, navigate } = useRouter();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeReserve();
    };
    if (isReserveOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isReserveOpen, closeReserve]);

  if (!isReserveOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#233B30]/75 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reserve-modal-title"
      onClick={closeReserve}
    >
      <div
        className="relative w-full max-w-2xl bg-[#F5F1E8] text-[#292925] border border-[#D8D0C2] shadow-2xl p-8 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeReserve}
          aria-label="Close reservation options"
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-[#D8D0C2] text-[#292925] hover:bg-[#233B30] hover:text-[#F5F1E8] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <p className="text-xs uppercase tracking-[0.2em] text-[#B49A68] mb-2">
          Château du Sureau
        </p>
        <h2 id="reserve-modal-title" className="font-serif text-3xl md:text-4xl text-[#233B30]">
          Reserve Now
        </h2>
        <p className="mt-3 text-sm text-[#292925]/80 leading-relaxed">
          Reservation Hours: {SITE_CONTACT.reservationHours}.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={EXTERNAL_LINKS.bookRoomResNexus}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 bg-white border border-[#D8D0C2] hover:border-[#233B30] transition-colors"
          >
            <div className="flex items-center justify-between">
              <Calendar className="w-4 h-4 text-[#B49A68]" />
              <ArrowUpRight className="w-4 h-4 text-[#233B30]/50 group-hover:text-[#233B30] transition-colors" />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-[#233B30]">Book Your Room</h3>
              <p className="mt-1 text-xs text-[#292925]/70">
                10 guest rooms within the Chateau and private manor Villa Sureau
              </p>
            </div>
          </a>

          <a
            href={EXTERNAL_LINKS.bookTableOpenTable}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 bg-white border border-[#D8D0C2] hover:border-[#233B30] transition-colors"
          >
            <div className="flex items-center justify-between">
              <Utensils className="w-4 h-4 text-[#B49A68]" />
              <ArrowUpRight className="w-4 h-4 text-[#233B30]/50 group-hover:text-[#233B30] transition-colors" />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-[#233B30]">Book Your Table</h3>
              <p className="mt-1 text-xs text-[#292925]/70">
                The Elderberry House · Dinner service 5pm – 8pm daily
              </p>
            </div>
          </a>

          <a
            href={EXTERNAL_LINKS.bookSpaBooker}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between p-5 bg-white border border-[#D8D0C2] hover:border-[#233B30] transition-colors"
          >
            <div className="flex items-center justify-between">
              <Sparkles className="w-4 h-4 text-[#B49A68]" />
              <ArrowUpRight className="w-4 h-4 text-[#233B30]/50 group-hover:text-[#233B30] transition-colors" />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-[#233B30]">Book Your Treatment</h3>
              <p className="mt-1 text-xs text-[#292925]/70">
                Spa du Sureau · Daily 9am–4pm
              </p>
            </div>
          </a>

          <button
            type="button"
            onClick={() => {
              closeReserve();
              navigate('/reserve-now/');
            }}
            className="group flex flex-col justify-between text-left p-5 bg-white border border-[#D8D0C2] hover:border-[#233B30] transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between w-full">
              <Gift className="w-4 h-4 text-[#B49A68]" />
              <ArrowUpRight className="w-4 h-4 text-[#233B30]/50 group-hover:text-[#233B30] transition-colors" />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-[#233B30]">Experiences &amp; Packages</h3>
              <p className="mt-1 text-xs text-[#292925]/70">
                Spa Getaway, Yosemite Excursions, Honeymoon &amp; Villa packages
              </p>
            </div>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-[#D8D0C2] flex flex-wrap items-center justify-between gap-4 text-xs text-[#292925]/80">
          <a
            href={SITE_CONTACT.phoneHref}
            className="inline-flex items-center gap-2 font-medium text-[#233B30] hover:text-[#70443F] tabular-nums"
          >
            <Phone className="w-3.5 h-3.5 text-[#B49A68]" />
            {SITE_CONTACT.phoneDisplay}
          </a>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => {
                closeReserve();
                navigate('/gift-certificate/');
              }}
              className="underline underline-offset-4 hover:text-[#233B30] cursor-pointer"
            >
              Gift Certificates
            </button>
            <button
              type="button"
              onClick={() => {
                closeReserve();
                navigate('/hotel-information/');
              }}
              className="underline underline-offset-4 hover:text-[#233B30] cursor-pointer"
            >
              Hotel Policies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
