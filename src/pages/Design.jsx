import React, { useState } from "react";
import Layout from "../components/Layout";

const Section = ({ title, text }) => (
  <div className="bg-gray-100 p-4 shadow-md max-w-[95rem] mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">{title}</h2>
    <p className="text-black leading-relaxed text-lg md:text-xl">{text}</p>
  </div>
);

const Design = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Layout>
      <div className="space-y-12 px-6 md:px-24 pb-20 mt-12 max-w-[95rem] mx-auto">
       
        <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8 mt-10 max-w-[95rem] mx-auto">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug text-[#00D4FF]">
              RONIX BRAND IDENTITY 
            </h2>
            <p className="text-black leading-relaxed text-lg md:text-xl mb-4">
              We create strong brand identities that elevate your business globally. Clear and memorable designs for maximum impact.
            </p>

            {/* More Content */}
            {showMore && (
              <p className="text-black leading-relaxed text-lg md:text-xl">
                Our team carefully researches your market and audience to craft a unique identity. From color palettes to typography, we ensure every visual element resonates with your brand values. We also provide comprehensive brand guidelines for consistency across all platforms.
              </p>
            )}

            <button
              className="mt-2 text-black font-bold hover:underline"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Less <<" : "More >>"}
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/image3.png"
              alt="Brand Identity Mockup"
              className="rounded-lg max-w-full md:max-h-96 object-cover"
            />
          </div>
        </div>

        {/* Other Sections */}
        <Section
          title="Brand Guidelines"
          text="Every brand is unique. We carefully choose colors and fonts for consistency and visual impact, ensuring your brand stands out in the market."
        />
        <Section
          title="Brand Reputation"
          text="We maintain your brand reputation professionally and effectively. From monitoring public perception to enhancing your image, we provide a strong and consistent presence."
        />
        <Section
          title="Logo Design"
          text="Our designers craft logos that perfectly reflect your brand identity, ensuring your business is instantly recognizable and memorable."
        />
        <Section
          title="Business Cards"
          text="Professional cards that leave a lasting impression on clients. We focus on design, quality, and consistency with your brand identity."
        />
        <Section
          title="Stationery Design"
          text="Custom stationery that strengthens your brand identity, including letterheads, envelopes, and other materials that make your business look professional."
        />
       
      </div>
    </Layout>
  );
};

export default Design;
