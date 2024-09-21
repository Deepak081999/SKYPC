import React from "react";



const Service = () => {
    return (
        <>

            <div className="flex flex-col items-center mt-6 lg:mt-20">
                <div className="flex justify-center my-10">
                    <a
                        href="#"
                        className="bg-gradient-to-r border py-3 px-4 mx-3 rounded-md"
                    >
                        Warranty
                    </a>
                    <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                        Transparency
                    </a>

                    <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                        24* 7 Service
                    </a>
                </div>
            </div>


            <div className="flex flex-col items-center mt-6 lg:mt-20">

                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    Free Consultation
                </h1>

                <a href="#" className="mt-8 py-3 px-4 mx-3 rounded-md border">
                    Book Now
                </a>
            </div>
        </>


    );
};

export default Service;
