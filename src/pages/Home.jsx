import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SideScroller from "../components/SideScroller";
import { Link, useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const Section = ({ id, title, text, img, reverse, children }) => (
  <section
    id={id}
    className={`relative flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center justify-between max-w-[95rem] w-full mx-auto 
    my-10 px-5 sm:px-8 md:px-12 py-12 bg-gray-100 gap-10 md:gap-14`}
  >
    {children ? (
      children
    ) : (
      <>
        <div className="md:w-1/2 text-center md:text-left px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#00D4FF] tracking-wide">
            {title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
            {text}
          </p>
        </div>

        {img && (
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={img}
              alt={title}
              className="rounded-lg w-full max-w-[420px] sm:max-w-[500px] md:max-w-[550px]
              lg:max-w-[600px] xl:max-w-[650px]
              h-auto object-cover"
            />
          </div>
        )}
      </>
    )}
  </section>
);

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <SideScroller />

      <Section id="home">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 mb-8 font-extrabold 
          text-sm sm:text-base md:text-lg uppercase tracking-wider text-black">
            <Link to="/design" className="hover:text-[#0084FF] transition-colors">
              DESIGN
            </Link>
            <Link to="/develop" className="hover:text-[#0084FF] transition-colors">
              DEVELOP
            </Link>
            <Link to="/market" className="hover:text-[#0084FF] transition-colors">
              MARKET
            </Link>
          </div>

          <h1 className="font-black text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10vw] 
          xl:text-[10rem] leading-none mb-6 text-center text-[#00D4FF] tracking-wide">
            RONIX
          </h1>

          <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg max-w-5xl leading-relaxed px-4 text-gray-800">
            A <span className="font-medium">design obsessed</span> digital agency elevating brands to their maximum
            <br className="hidden sm:block" />
            with a firm belief that <span className="font-medium">limit is just an illusion.</span>
          </p>

          <div
            className="mt-12 sm:mt-16 flex flex-col items-center text-xs sm:text-sm uppercase 
            tracking-widest text-black cursor-pointer"
            onClick={() => navigate("/portfolio")}
          >
            <span className="font-bold">FEATURED WORK</span>
            <ArrowDown className="mt-2 h-5 w-5 sm:mt-3 animate-bounce text-[#00D4FF]" />
          </div>
        </div>
      </Section>

      <Section
        id="section1"
        title="Our Design Expertise"
        text="We create stunning visual designs that elevate your brand and leave a lasting impression. Our team focuses on unique concepts, color schemes, and layouts that make your brand stand out. Every design is tailored to reflect your brand’s personality and vision."
        img="/image1.png"
      />

      <Section
        id="section2"
        title="Development"
        text="We build robust, scalable applications with modern technology stacks. Our developers ensure clean code, responsive design, and seamless user experiences. From web apps to mobile platforms, we create solutions that meet your business needs and future growth."
        img="/section2.png"
        reverse
      />

      <Section
        id="section3"
        title="Marketing Strategies"
        text="Our marketing solutions help your business reach the right audience effectively. We create data-driven campaigns, optimize social media, and analyze trends to boost engagement. With strategic planning, we aim to increase brand awareness and generate measurable results for your business."
        img="/image3.png"
      />

      <Footer />
    </Layout>
  );
};

export default Home;
