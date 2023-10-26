import Image from 'next/image';
import Link from 'next/link';
import clientImage from '../../../public/images/about/client.jpg';
import demenageurImage from '../../../public/images/about/demenageurs.jpg';
import colisImage from '../../../public/images/about/colis.jpg';

export default function About() {
  return (
    <div className="container mx-auto py-16 px-4 lg:px-20 md:py-12 md:px-6">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Notre Histoire</h1>
          <p className="font-normal text-base leading-6 text-gray-600">De Soirées Mémorables à un Service de Déménagement</p>
        </div>
        <div className="w-full lg:w-8/12">
          <Image
            src=""
            alt="A group of People"
            width={800}
            height={600}
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <p className="font-normal text-base leading-6 text-gray-600">
            {/* Your text content */}
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                src={clientImage}
                alt="Alexa featured"
                width={300}
                height={300}
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
            </div>
            {/* Add more Image components for other clients */}
          </div>
        </div>
      </div>

      <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      src={clientImage}
                      alt="client"
                      width={300}
                      height={300}
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src={demenageurImage}
                      alt="demenageurs"
                      width={300}
                      height={300}
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src={colisImage}
                      alt="colis"
                      width={300}
                      height={300}
                      className="w-full rounded-2xl"
                    />
                    {/* Your SVG content here */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Pourquoi-Nous
                </span>
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                  Rendre nos clients heureux avec nos services
                </h2>
                <p className="mb-8 text-base text-body-color">
                  {/* Your text content */}
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-normal text-center text-white rounded-lg bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
