"use client"
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import {RxSketchLogo, RxArchive, RxEnter} from "react-icons/rx"
import {FiTruck} from "react-icons/fi"
import {GiLindenLeaf} from "react-icons/gi"
import {MdOutlineChildCare} from "react-icons/md"
import {BsFillBuildingFill} from "react-icons/bs"
import {FaLuggageCart} from "react-icons/fa"

import "keen-slider/keen-slider.min.css"
import "../style/styles.css"

const ServiceSlide = () => {
  const services = [
    {
     
      icon: <FaLuggageCart/>, 
      title: 'Camionnette Agile',
      description: 'Petits déménagements sans soucis en Belgique.',
    },
    {
      icon: <FiTruck/>,
      title: 'Grosse Camionne',
      description: 'Grands déménagements sans tracas en Belgique.',
    },
    {
      icon: <RxSketchLogo/>,
      title: 'Emballage Expert',
      description: 'Protégez vos biens pour le déménagement en Belgique.',
    },
    {
      icon: <RxEnter/>,
      title: 'Déménagement International',
      description: 'Déménagez partout depuis/vers la Belgique',
    },
    {
      icon: <BsFillBuildingFill/>,
      title: 'Déménagement Entreprise',
      description: 'Transférez vos bureaux en Belgique en toute simplicité',
    },
    {
      icon: <RxArchive/>,
      title: 'Déménagement Spécialisé',
      description: 'Articles précieux, déménagement sûr en Belgique',
    },
    {
      icon: <GiLindenLeaf/>,
      title: 'Éco-Déménagement',
      description: "Déménagez tout en protégeant l'environnement en Belgique",
    },
    {
      icon: <MdOutlineChildCare/>,
      title: 'Déménagement Etudiant',
      description: 'Étudiants, simplifiez votre déménagement en Belgique',
    },
    
    // Add more services as needed
  ];

  return services.map((service, index) => (
    <>
   
    
    <blockquote class="rounded-lg mb-9  p-6 shadow-sm sm:p-8">

    <div key={index} className={`keen-slider__slide number-slide${index + 1} mt-4 bg-gray-200 p-9  `}>
      <p className="text-4xl">{service.icon}</p>
      <h2 className="mt-0.5 text-lg font-medium text-gray-900 text-center">{service.title}</h2>
      <p className="mt-4 leading-relaxed text-gray-700 text-center">{service.description}</p>
    </div>
    </blockquote>
    </>
  ));
}

export default function ServiceSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    
    initial: 0,
    spacing: 3,
    loop: false,
    mode: "free-snap",
    slides: {
      perView:3,
    },
    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          origin: 'auto',
          perView: 1.5,
          spacing: 32,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
    <h2 class="text-3xl text-red-500 font-bold tracking-tight sm:text-4xl mt-9">
      Don&apos;t just take our word for it...
    </h2>
    <p class="mt-4 text-gray-700 mb-9">
      Lorem ipsum&lsquo; dolor sit amet consectetur adipisicing elit. Voluptas
      veritatis illo placeat harum porro optio fugit a culpa sunt id!
    </p>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <ServiceSlide /> {/* Render the service slides here */}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
