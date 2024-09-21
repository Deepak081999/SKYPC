import { testimonials } from "../constants";

const Blog = () => {
  return (
    <>
      <div className="mt-20">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
            Blogs
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
        <div className="mt-5 flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" sm:w-1/2 lg:w-1/4 px-4 py-2">
              <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                <div className="flex items-center mb-4">
                  <img className=" mr-4 w h "
                    src={testimonial.image}
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="fonst-bold">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
                <p>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Blog;
