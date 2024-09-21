import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Pricing = () => {
  return (
    <div className="mt-20">
      <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
        <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
          Categories
        </h2>

        <div className="mt-8 flex gap-4 lg:mt-0">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous"
            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 rtl:rotate-180"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            id="keen-slider-next"
            className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
          >
            <svg
              className="size-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mt-8">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-3xl mb-8">
                {option.title}

              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Pricing;
