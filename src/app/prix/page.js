import React from "react";
import Image from "next/image";

export default function Prix() {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto p-6 overflow-x-auto">
          <table className="w-full">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th></th>
                <th scope="col">
                  <h2 className="px-2 text-lg font-medium">Basic</h2>
                  <p className="mb-3">
                    <span className="text-2xl font-bold sm:text-4xl dark:text-gray-50">
                    €99
                    </span>
                    <span className="font-medium dark:text-gray-400">/hour</span>
                  </p>
                </th>
                <th scope="col">
                  <h2 className="px-2 text-lg font-medium">Standard</h2>
                  <p className="mb-3">
                    <span className="text-2xl font-bold sm:text-4xl dark:text-gray-50">
                    €199
                    </span>
                    <span className="font-medium dark:text-gray-400">/hour</span>
                  </p>
                </th>
                <th scope="col">
                  <h2 className="px-2 text-lg font-medium">Premium</h2>
                  <p className="mb-3">
                    <span className="text-2xl font-bold sm:text-4xl dark:text-gray-50">
                    €299
                    </span>
                    <span className="font-medium dark:text-gray-400">/hour</span>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody className="space-y-6 text-center divide-y divide-gray-700">
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Local Moves</h3>
                </th>
                <td>
                  <span className="block text-sm">2 Demenageurs</span>
                </td>
                <td>
                  <span className="block text-sm">3 Demenageurs</span>
                </td>
                <td>
                  <span className="block text-sm">4 Demenageurs</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Packing Services</h3>
                </th>
                <td>
                  <span className="block text-sm">Basic packing</span>
                </td>
                <td>
                  <span className="block text-sm">Standard packing</span>
                </td>
                <td>
                  <span className="block text-sm">Premium packing</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Déménagement Longue-Distance = +100km </h3>
                </th>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Included in Basic plan"
                    className="w-5 h-5 mx-auto dark:text-violet-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Included in Standard plan"
                    className="w-5 h-5 mx-auto dark:text-violet-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Included in Premium plan"
                    className="w-5 h-5 mx-auto dark:text-violet-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Storage Solutions</h3>
                </th>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Not included in Basic plan"
                    className="w-5 h-5 mx-auto dark:text-gray-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Included in Standard plan"
                    className="w-5 h-5 mx-auto dark:text-violet-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label="Included in Premium plan"
                    className="w-5 h-5 mx-auto dark:text-violet-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
