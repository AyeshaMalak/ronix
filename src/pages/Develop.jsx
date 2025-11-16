import React from "react";
import Layout from "../components/Layout";

const Develop = () => {
  return (
    <Layout>
      <div className="space-y-12 px-6 md:px-24 pb-20 pt-12">
       

        <div className="bg-gray-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8 max-w-[95rem] mx-auto">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug text-[#00D4FF]">
              DESIGN AND DEVELOP
            </h2>
            <p className="text-black leading-relaxed text-lg md:text-xl">
              RONIX web design and development team creates powerful net presence for small or medium companies. We concentrate on designing effective branding and developing W3C standards compliant websites that add more value to the brand.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/image1.png"
              alt="Web Development Mockup"
              className="rounded-lg max-w-full md:max-h-96 object-cover"
            />
          </div>
        </div>

        {/* Other Sections */}
        <Section
          title="Web Design and Development"
          text="Your website is an extension of your brand. At RONIX, we help your brand come to existence at the web via customized websites developed along with your corporation and target audience in thoughts."
        />

        <Section
          title="Why Choose RONIX?"
          text={`RONIX digital agency offers high-quality and user-friendly web design and development services to clients all over the world. Benefits of using a custom-designed and responsive website for your enterprise include:
- Increase Brand Trust and Perception
- Increase Conversions and Sales
- Lower Bounce Rate
- Good for SEO
- Better User Experience
- Accessible for Mobile Users`}
        />

        <Section
          title="App Design and Development"
          text={`RONIX are expert iPhone/iPad apps designers and developers. We develop apps for iOS (iPad and iPhone). RONIX developers maintain high educational levels and design qualifications and take pride in providing top-class, affordable products and services.`}
        />
      </div>
    </Layout>
  );
};

const Section = ({ title, text }) => (
  <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-[95rem] mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-black">{title}</h2>
    <p className="text-black leading-relaxed text-lg md:text-xl whitespace-pre-line">{text}</p>
  </div>
);

export default Develop;
