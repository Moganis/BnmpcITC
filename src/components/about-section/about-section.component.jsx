import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about-section.styles.scss";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  let aboutSectionImage = useRef(null);
  let container = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: false,
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=100", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });
    tl.from(aboutSectionImage, 1, {
      x: 200,
      autoAlpha: 0,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={(con) => {
        container = con;
      }}
    >
      <section class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              What is all this
              <br class="hidden lg:inline-block" /> hype about TechnoCloud?
            </h1>
            <p class="mb-8 leading-relaxed">
              🔷 BNMPC IT Club is presenting TECHNOBIT 2.0 🔷 🟡 TECHNOBIT 2.0
              is the intra-school-college event by the BNMPC IT Club, the host
              of TECHNOBIT '18. 🔘 This is the second time we are arranging our
              TECHNOBIT Event. 🔘This time along with the classic Project
              Display, Wall Magazine and IT Olympiad events we are bringing much
              more. 🔘 Including a few dedicated events for the youngest
              students of Birshreshtha Noor Mohammad Public College. 🔶Stay
              tuned with us for further information and registration links.🔶
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg custom-classes">
                Learn More
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              ref={(section) => {
                aboutSectionImage = section;
              }}
              class="object-cover object-center rounded"
              alt="hero"
              src="https://jesmachi.sirv.com/img/nat-3.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;