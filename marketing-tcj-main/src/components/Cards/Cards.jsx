import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Cards = () => {
  const canvasRef = useRef(null);
  const starCanvasRef = useRef(null);
  const darkOrangeStarCanvasRef = useRef(null);

  // Create an enchanting animated canvas effect
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      color: "rgba(169, 169, 169, 0.5)",
      speed: Math.random() * 0.5 + 0.1,
    }));

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.y += particle.speed;
        if (particle.y > canvas.height) particle.y = 0; // Reset to top
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  };

  // Create a starry night effect
  const drawStarCanvas = () => {
    const starCanvas = starCanvasRef.current;
    const ctx = starCanvas.getContext("2d");
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;

    Array.from({ length: 100 }).forEach(() => {
      const x = Math.random() * starCanvas.width;
      const y = Math.random() * starCanvas.height;
      const radius = Math.random() * 2 + 1;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fill();
    });
  };

  // Create a mystical dark orange starry effect
  const drawDarkOrangeStarCanvas = () => {
    const darkOrangeStarCanvas = darkOrangeStarCanvasRef.current;
    const ctx = darkOrangeStarCanvas.getContext("2d");
    darkOrangeStarCanvas.width = window.innerWidth;
    darkOrangeStarCanvas.height = window.innerHeight;

    Array.from({ length: 50 }).forEach(() => {
      const x = Math.random() * darkOrangeStarCanvas.width;
      const y = Math.random() * darkOrangeStarCanvas.height;
      const radius = Math.random() * 2 + 1;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 140, 0, 0.8)";
      ctx.fill();
    });
  };

  useEffect(() => {
    drawCanvas();
    drawStarCanvas();
    drawDarkOrangeStarCanvas();

    const resizeHandler = () => {
      drawCanvas();
      drawStarCanvas();
      drawDarkOrangeStarCanvas();
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div id="testimonials" className="relative bg-white flex flex-col lg:flex-row">
      {/* Main Animated Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      {/* Starry Canvas */}
      <canvas ref={starCanvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      {/* Dark Orange Star Canvas */}
      <canvas ref={darkOrangeStarCanvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      <motion.div
        id="services"
        className="z-10 relative flex flex-col justify-center items-center w-full lg:w-1/2 px-6 py-10 bg-opacity-70 shadow-lg rounded-lg border border-[#545454] transform transition-transform duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title for Services */}
        <h2 className="text-4xl font-extrabold text-center text-[#545454] py-4 px-6 rounded-md mb-6 shadow-md">
          Here’s What You’ll Receive:
        </h2>

        {/* List of Services */}
        <ul className="text-lg text-[#545454] mb-8 space-y-4 text-center">
          {[
            "✅ Custom pop-up form setup and management",
            "✅ At least 3-4 email campaigns weekly",
            "✅ Setup of 8+ automated flows with 40-60 emails total",
            "✅ Continuous Klaviyo management and support",
            "✅ Regular testing and optimization for performance",
            "✅ Creation of a cross-channel marketing calendar",
            "✅ Unlimited consulting for e-commerce marketing strategies",
          ].map((service) => (
            <li key={service} className="transform transition-transform duration-300 hover:-translate-y-1">
              {service}
            </li>
          ))}
        </ul>

        {/* Button positioned to the right */}
        <div className="flex justify-center w-full">
          <button
            onClick={() => window.open("https://calendar.google.com/calendar/appointments/schedules/AcZssZ2gUPPg7gGBnBjxZnLP2fK6sqxlG4T7m3VpP99RvyMbW3rignOBzp3r-1x8kbZvwW8GVdPYj0kV?gv=true", "_blank")}
            className="bg-[#FF8C00] text-white font-bold py-2 px-6 rounded hover:bg-[#e07b00] transition duration-300 transform hover:scale-105"
          >
            Schedule My Free Consultation
          </button>
        </div>
      </motion.div>

      {/* Enhanced Testimonials Section */}
      <motion.div
        className="z-10 relative flex flex-col justify-center items-center w-full lg:w-1/2 px-6 py-10 bg-opacity-70 border-t lg:border-t-0 lg:border-l-4 border-[#545454] rounded-l-lg shadow-lg transform transition-transform duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-extrabold text-[#545454] mb-6 text-center">
          What Our Clients Say
        </h2>
        <div className="space-y-6">
          {[
            {
              quote: "“True professionals who I'd trust to take email marketing efforts to the next level—their passion for email and development of our presence on Klaviyo has been integral in our success as a brand.”",
              author: "— James Bearman",
            },
            {
              quote: "“We started working with Yeemail in October 2023. We asked them to rebuild all of our automated flows and create a new campaign structure on a tight timeline. All of our Klaviyo metrics have improved, ranging from deliverability to revenue per recipient.”",
              author: "— Natasha Jackson",
            },
          ].map(({ quote, author }) => (
            <blockquote key={author} className="text-lg italic text-[#545454] border-l-4 border-[#545454] pl-4 p-4 rounded-lg shadow-md relative">
              {quote}
              <footer className="mt-2">{author}</footer>
            </blockquote>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
