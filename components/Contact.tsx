import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contactme font-Inter" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
      <div className="max-w-full px-8 lg:px-32 pt-32">
        <h1 className="font-bold text-5xl lg:text-7xl">Let's Work Together</h1>
        <div className="bg-black w-full h-[1px] py-[1px] mt-10"></div>
      </div>
      <div className="footer max-w-full px-8 lg:px-32">
        <p className="text-xl lg:text-2xl py-12">If you have any project, collaboration or idea that you would like to discuss, please contact us</p>
        <p className="text-xl lg:text-2xl pb-4">
          <span className="font-bold">For inquiries</span>,{" "}
          <a href="mailto:akbarrbni03@gmail.com" className="hover:underline">
            email: akbarrbni03@gmail.com
          </a>
        </p>
        <p className="text-xl lg:text-2xl py-12">
          Muhammad Akbar Robbani <br />
          +62812-227-778-49 <br />
          Bandung, Indonesia
        </p>
        <p className="text-xl lg:text-2xl py-4 mb-20">
          Or you can contact us via Instagram{" "}
          <a href="https://www.instagram.com/akbarrbni/" className="font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
            akbarrbni
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
