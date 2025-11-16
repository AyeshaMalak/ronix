import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="bg-gray-100 flex flex-col justify-center items-center text-center py-16 px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Contact</h1>
        <p className="italic text-gray-500">
          Whether it's a project or just a cup of coffee!
        </p>
      </section>

      <div className="max-w-[95rem] mx-auto grid md:grid-cols-2 gap-8 px-6 pb-16 pt-12">
      
        <div className="bg-gray-100 p-10 shadow-sm rounded-lg">
          <h2 className="text-3xl font-extrabold mb-6">Get a Quote</h2>
          <form className="space-y-5">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Good Name"
                className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
              />
              <input
                type="email"
                placeholder="Favorite Email"
                className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
              />
            </div>

            <div className="flex gap-4">
              <select className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent">
                <option>Interested In</option>
                <option>Web Design</option>
                <option>Branding</option>
                <option>UI/UX</option>
              </select>
              <select className="w-1/2 border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent">
                <option>Need Within</option>
                <option>1 Week</option>
                <option>1 Month</option>
                <option>3 Months</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                placeholder="Also please..."
                className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
              />
            </div>

            <button
              type="button"
              className="mt-4 font-bold bg-gradient-to-b from-[#00D4FF] to-[#0084FF] bg-clip-text text-transparent hover:text-black transition"
            >
              Let’s Rock →
            </button>
          </form>
        </div>

        <div className="bg-gray-100 p-10 shadow-sm rounded-lg">
          <h2 className="text-3xl font-extrabold mb-6">Befriend</h2>
          <form className="space-y-5">
            <input
              type="email"
              placeholder="Favorite Email"
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2 bg-transparent"
            />
            <button
              type="button"
              className="mt-4 font-bold bg-gradient-to-b from-[#00D4FF] to-[#0084FF] bg-clip-text text-transparent hover:text-black transition"
            >
              Add Me! →
            </button>
          </form>

          <p className="mt-10 italic text-gray-500 text-sm">
            Willing to join us? Send your resume at{" "}
            <span className="underline bg-gradient-to-b from-[#00D4FF] to-[#0084FF] bg-clip-text text-transparent hover:text-black">
              ronixsoftware@gmail.com
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
