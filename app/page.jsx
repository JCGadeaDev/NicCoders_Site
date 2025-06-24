"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaHandshake,
  FaLightbulb,
  FaDesktop,
  FaCode,
  FaPalette,
  FaUserCheck,
  FaTools,
  FaMobileAlt,
  FaLaptopCode,
  FaCogs,
  FaShieldAlt,
  FaUserShield,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const HomePage = () => {
  return (
    <main>
      <section className="py-12 xl:py-24">
        <div className="container mx-auto flex flex-col-reverse xl:flex-row items-center justify-center gap-12">
          {/* Text */}
          <div className="text-center xl:text-left xl:flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
              We Transform Ideas<br />
              <span className="text-accent-hover">
                Into Innovative Software
              </span>
            </h1>
            <p className="text-white/80 mb-8">
              At NicCoders, we turn your vision into impactful digital
              solutions. We are your trusted tech partner, specializing in
              custom software development to boost your business growth.
            </p>
            <div className="flex justify-center xl:justify-start">
              <a href="#about-section">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>About Us</span>
                  <FaArrowRight className="text-xl" />
                </Button>
              </a>

              {/* <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>About Us</span>
                  <FaArrowRight className="text-xl" />
                </Button>
              </Link> */}
            </div>
          </div>

          {/* Image */}
          <div className="w-full xl:flex-1 flex justify-center">
            <div className="relative w-full max-w-lg h-80 xl:max-w-xl xl:h-[450px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/assets/heroimg.png"
                alt="Developer working"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-section" className="py-16 container pt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          Who We Are
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2">
            <h2 className="text-2xl font-semibold text-accent mb-2">Mission</h2>
            <p className="text-white/80 mb-4">
              Facilitate digital transformation by developing innovative,
              high-quality software solutions tailored to clients&apos; unique
              needs. We are committed to delivering services and products that
              drive efficiency, productivity, and business success while
              upholding the highest standards of ethics and professionalism.
            </p>
            <h2 className="text-2xl font-semibold text-accent mb-2">Vision</h2>
            <p className="text-white/80">
              To become a trusted reference in software development by anticipating market needs and delivering robust, scalable, 
              and client-aligned technology solutions. We strive to lead through innovation, quality, and commitment, 
              positioning ourselves as the preferred tech partner for companies that value excellence and close collaboration.
            </p>
          </div>
          <div className="w-full xl:flex-1 flex justify-center">
            <div className="relative w-full order-1 max-w-lg h-80 xl:max-w-xl xl:h-[450px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/assets/aboutus.png"
                alt="About Us"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Collaboration Card */}
          <div className="bg-[#1c1c22] rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Image
              src="/assets/collaboration.png"
              alt="Collaboration"
              width={100}
              height={100}
              className="w-28 h-28 mb-4"
            />
            <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2">
              <FaHandshake /> Collaboration
            </h3>
            <p className="text-white/80">
              We work closely with clients to achieve shared success.
            </p>
          </div>

          {/* Innovation Card */}
          <div className="bg-[#1c1c22] rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Image
              src="/assets/innovation.png"
              alt="Innovation"
              width={100}
              height={100}
              className="w-28 h-28 mb-4"
            />
            <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2">
              <FaLightbulb /> Innovation
            </h3>
            <p className="text-white/80">
              We drive change through creative solutions and cutting-edge
              technologies.
            </p>
          </div>

          {/* Integrity Card */}
          <div className="bg-[#1c1c22] rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Image
              src="/assets/integrity.png"
              alt="Integrity"
              width={100}
              height={100}
              className="w-28 h-28 mb-4"
            />
            <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2">
              <FaUserShield /> Integrity
            </h3>
            <p className="text-white/80">
              We are committed to transparency and honesty in all interactions.
            </p>
          </div>
        </div>
      </section>

      <section id="services-section" className="py-16 container pt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web App */}
          <div className="p-6 bg-[#2a2a30] rounded-lg shadow hover:scale-105 transition text-center">
            <FaLaptopCode className="text-4xl text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-accent">
              Web App Development
            </h3>
            <p className="text-white/80">
              We build high-performance, responsive, and scalable web
              applications tailored to your business goals. We deliver clean,
              maintainable code and a seamless user experience.
            </p>
          </div>

          {/* Mobile App */}
          <div className="p-6 bg-[#2a2a30] rounded-lg shadow hover:scale-105 transition text-center">
            <FaMobileAlt className="text-4xl text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-accent">
              Mobile App Development
            </h3>
            <p className="text-white/80">
              We design and develop high-quality mobile applications that
              deliver smooth user experiences, high performance, and long-term
              value. We bring your product idea to life across iOS and Android
              platforms.
            </p>
          </div>

          {/* Outsorcing Partner*/}
          <div className="p-6 bg-[#2a2a30] rounded-lg shadow hover:scale-105 transition text-center">
            <FaTools className="text-4xl text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-accent">
              Outsourcing Partner
            </h3>
            <p className="text-white/80">
              Full stack development outsourcing services for startups, SMEs,
              and tech companies looking to scale their digital products
              efficiently and cost-effectively.
            </p>
          </div>

          {/* UX Design */}
          <div className="p-6 bg-[#2a2a30] rounded-lg shadow hover:scale-105 transition text-center">
            <FaPalette className="text-4xl text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-accent">
              User Experience (UX) Design
            </h3>
            <p className="text-white/80">
              We create intuitive, engaging, and human-centered digital
              experiences that drive user satisfaction and business success. Our
              UX design process is grounded in research, strategy, and
              prototyping to help your product deliver real value.
            </p>
          </div>

          {/* Custom Software */}
          <div className="p-6 bg-[#2a2a30] rounded-lg shadow hover:scale-105 transition text-center">
            <FaCode className="text-4xl text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-accent">
              Custom Software Development
            </h3>
            <p className="text-white/80">
              We build tailored software solutions that align perfectly with
              your business goals, workflows, and user needs. Whether you&apos;re
              launching a new product or optimizing internal processes, our
              custom development approach ensures flexibility, scalability, and
              long-term success.
            </p>
          </div>

          {/* Desktop Apps */}
          <div className="p-6 bg-[#2a2a30] rounded-lg shadow hover:scale-105 transition text-center">
            <FaDesktop className="text-4xl text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-accent">
              Desktop App Development
            </h3>
            <p className="text-white/80">
              We design and build high-performance desktop applications tailored
              to your business requirements. Whether you need offline
              functionality, seamless hardware integration, or robust enterprise
              software, our desktop apps are secure, efficient, and scalable.
            </p>
          </div>
        </div>

        {/* Button centered */}
        {/* <div className="flex justify-center mt-8">
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <span>See All Services</span>
              <FaArrowRight className="text-xl" />
            </Button>
          </Link>
        </div> */}
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Why Work With Us?
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 order-2 lg:order-1">
            <div className="flex flex-col items-center text-center bg-[#2a2a30] p-4 rounded-lg shadow">
              <FaClipboardList className="text-4xl text-accent mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Requirements & Analysis
              </h3>
              <p className="text-white/80">
                We deeply understand your needs and tailor solutions to your
                project.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-[#2a2a30] p-4 rounded-lg shadow">
              <FaLaptopCode className="text-4xl text-accent mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Design & Prototyping
              </h3>
              <p className="text-white/80">
                We create visual prototypes for your approval.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-[#2a2a30] p-4 rounded-lg shadow">
              <FaCogs className="text-4xl text-accent mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Development & Implementation
              </h3>
              <p className="text-white/80">
                We build robust solutions and implement them efficiently.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-[#2a2a30] p-4 rounded-lg shadow">
              <FaShieldAlt className="text-4xl text-accent mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Testing & Quality
              </h3>
              <p className="text-white/80">
                We perform rigorous testing to ensure flawless performance.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-[#2a2a30] p-4 rounded-lg shadow">
              <FaUserCheck className="text-4xl text-accent mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Maintenance & Support
              </h3>
              <p className="text-white/80">
                We continue to support you even after delivery.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-[#2a2a30] p-4 rounded-lg shadow">
              <FaUsers className="text-4xl text-accent mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Our Team
              </h3>
              <p className="text-white/80">
                Meet our talented, passionate experts who drive our success.
              </p>
            </div>
          </div>

          {/* Right: Feature image */}
          <div className="relative w-full lg:w-[500px] h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg flex-shrink-0 order-1 lg:order-2">
            <Image
              src="/assets/feature.png"
              alt="Why Work With Us"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex justify-center mt-10">
            {/* <Link href="/work">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent-hover hover:text-primary transition duration-300 ease-in-out"
              >
                <span>See Our Work</span>
                <FaArrowRight className="text-xl" />
              </Button>
            </Link> */}
          </div>
        </div>
      </section>

      {/*FORM*/}
      <section id="contact-section">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;
