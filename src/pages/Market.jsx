import React from "react";
import Layout from "../components/Layout";

const Market = () => {
  return (
    <Layout>
      <div className="space-y-12 px-6 md:px-24 pb-20 pt-12">

        <div className="bg-gray-100 p-8 shadow-md flex flex-col md:flex-row items-center gap-8 max-w-[95rem] mx-auto">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug text-[#00D4FF]">
             DIGITAL MEDIA MARKETING
            </h2>
            <p className="text-black leading-relaxed text-lg md:text-xl">
              RONIX offers complete Digital Media Marketing services to help your business reach potential clients effectively.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/image3.png"
              alt="Digital Marketing Mockup"
              className="rounded-lg max-w-full md:max-h-96 object-cover"
            />
          </div>
        </div>

        {/* Other Sections with Black Headings */}
        <Section
          title="Search Engine Optimization"
          text="SEO plays a key role in Google ranking. RONIX helps bring your website to the top rank and drives relevant traffic..."
        />
        <Section
          title="Our Strategy"
          text="We develop strategies to maximize your website’s potential, ensuring maximum online exposure globally..."
        />
        <Section
          title="Mobile Search Optimization"
          text="With the growing use of smartphones, optimizing your website for mobile users is crucial..."
        />
        <Section
          title="Genuine SEO Methods"
          text="We implement ethical SEO practices that help search engines understand your brand..."
        />
        <Section
          title="Pay-Per-Click Management"
          text="PPC provides instant traffic and targeted audience reach. RONIX manages your campaigns strategically..."
        />
        <Section
          title="Marketing Campaigns"
          text="We help target your campaigns based on user interests, search behavior, and demographics..."
        />
      </div>
    </Layout>
  );
};

const Section = ({ title, text }) => (
  <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-[95rem] mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">{title}</h2>
    <p className="text-gray-800 leading-relaxed text-lg md:text-xl">{text}</p>
  </div>
);

export default Market;
