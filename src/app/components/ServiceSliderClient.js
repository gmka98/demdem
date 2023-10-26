"use client"
import React, { useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
{/*
const ServiceSlide = () => {
  const services = [
    {
      title: 'Camionnette Agile',
      description: 'Petits déménagements sans soucis en Belgique.',
    },
    {
      title: 'Grosse Camionne',
      description: 'Grands déménagements sans tracas en Belgique.',
    },
    {
      title: 'Emballage Expert',
      description: 'Protégez vos biens pour le déménagement en Belgique.',
    },
    {
      title: 'Déménagement International',
      description: 'Déménagez partout depuis/vers la Belgique',
    },
    {
      title: 'Déménagement Entreprise',
      description: 'Transférez vos bureaux en Belgique en toute simplicité',
    },
    {
      title: 'Déménagement Spécialisé',
      description: 'Articles précieux, déménagement sûr en Belgique',
    },
    {
      title: 'Éco-Déménagement',
      description: "Déménagez tout en protégeant l'environnement en Belgique",
    },
    {
      title: 'Déménagement Etudiant',
      description: 'Étudiants, simplifiez votre déménagement en Belgique',
    },
    
    // Add more services as needed
  ];
*/}
export default function ServiceSliderClient() {
  const services = [
    {
      title: "Stayin' Alive",
      description:
        "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
    },
    // Add more services here
  ];

  useEffect(() => {
    const keenSlider = new KeenSlider('.keen-slider', {
      loop: true,
      slidesPerView: 1.25,
      spacing: 16,
      breakpoints: {
        '(min-width: 1024px)': {
          slidesPerView: 2.5,
          spacing: 32,
        },
      },
    });
    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');

    keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
    keenSliderNext.addEventListener('click', () => keenSlider.next());
  }, []);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slidesPerView: 1.25,
    spacing: 16,
    breakpoints: {
      '(min-width: 1024px)': {
        slidesPerView: 2.5,
        spacing: 32,
      },
    },
  });

  return (
    <div className="bg-gray-50">
      <div className="max-w-[1340px] mx-auto px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              {/* Your previous slide icon here */}
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              {/* Your next slide icon here */}
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            {services.map((service, index) => (
              <div key={index} className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  {/* Testimonial content here */}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
