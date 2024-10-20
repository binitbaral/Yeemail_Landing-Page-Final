// services.jsx
import React, { useEffect, useRef } from "react";
import ServiceImg from "../../assets/10.jpeg";
import { motion } from "framer-motion";

const Services = () => {
  const canvasRef = useRef(null);

  // Function to create animated canvas effect
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = 150; // Total number of regular gray particles
    const starCount = 50; // Number of dark orange star particles
    const grayStarCount = 50; // Number of gray star particles

    // Create regular gray particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: "rgba(169, 169, 169, 0.5)", // Gray color
        speed: Math.random() * 0.5 + 0.1,
        type: 'particle', // Regular particle type
      });
    }

    // Create dark orange star particles
    for (let i = 0; i < starCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 2, // Stars are slightly larger
        color: "rgba(255, 140, 0, 0.8)", // Dark orange color for stars
        speed: Math.random() * 0.2 + 0.05,
        twinkle: Math.random() > 0.5, // Randomly determine if the star twinkles
        type: 'star', // Dark orange star type
      });
    }

    // Create gray star particles
    for (let i = 0; i < grayStarCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1.5, // Gray stars slightly larger than regular particles
        color: "rgba(169, 169, 169, 0.8)", // Darker gray for stars
        speed: Math.random() * 0.3 + 0.1, // Different speed for gray stars
        twinkle: Math.random() > 0.5, // Randomly determine if the star twinkles
        type: 'grayStar', // Gray star type
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.y += particle.speed;
        if (particle.y > canvas.height) particle.y = 0; // Reset to top

        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add twinkling effect for stars
        if (particle.type === 'star' || particle.type === 'grayStar') {
          ctx.globalAlpha = particle.twinkle ? Math.random() * 0.5 + 0.5 : 1; // Random opacity for twinkling
        }
      });
      ctx.globalAlpha = 1; // Reset global alpha for non-twinkling particles
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  };

  useEffect(() => {
    drawCanvas();
    // Resize the canvas on window resize
    window.addEventListener("resize", drawCanvas);
    return () => {
      window.removeEventListener("resize", drawCanvas);
    };
  }, []);

  return (
    <div className="relative">
      {/* Background Effect - White Background */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Animated Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />

      <div id="services" className="container relative z-20 py-12 flex flex-col md:flex-row items-center justify-center">
        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 mb-8 md:mb-0 irregular-frame" // Added irregular-frame class
        >
          <img
            src={ServiceImg}
            alt="Service"
            className="w-full h-auto rounded-lg shadow-md mt-8" // Increased top margin
          />
        </motion.div>

        {/* Services section */}
        <div className="md:w-1/2 md:pl-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="py-12 text-center" // Center text
          >
            <h1 className="text-4xl xl:text-5xl font-bold text-[#3e3e3e]">
              Our{" "}
              <span className="font-bold text-[#c65d0d] underline">Services</span>
            </h1>
          </motion.div>

          {/* Services list */}
          <div className="flex flex-col space-y-4 w-full max-w-md">
            {/* Service Item 1 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="service-item flex flex-col items-start border p-4 rounded-lg bg-white text-[#3e3e3e] shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold">Email Campaign Management</h3>
              <p>Expertly crafted email campaigns to engage and convert your audience.</p>
            </motion.div>

            {/* Service Item 2 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="service-item flex flex-col items-start border p-4 rounded-lg bg-white text-[#3e3e3e] shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold">List Building Strategies</h3>
              <p>Grow your audience with effective list-building techniques.</p>
            </motion.div>

            {/* Service Item 3 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="service-item flex flex-col items-start border p-4 rounded-lg bg-white text-[#3e3e3e] shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold">Performance Analytics</h3>
              <p>Analyze your campaign's performance with detailed reports and insights.</p>
            </motion.div>

            {/* Service Item 4 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="service-item flex flex-col items-start border p-4 rounded-lg bg-white text-[#3e3e3e] shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold">Creative Email Design</h3>
              <p>Beautifully designed emails that resonate with your brand identity.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Add this CSS for the irregular frame and service items */}
      <style jsx>{`
        .irregular-frame {
          position: relative;
          display: inline-block;
          padding: 10px;
          background: linear-gradient(45deg, #545454, #c65d0d); /* Gray and dark orange gradient */
          border-radius: 15px; /* Adjust for more or less curvature */
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }

        .irregular-frame::before {
          content: '';
          position: absolute;
          top: -10px; /* Adjust for frame offset */
          left: -10px; /* Adjust for frame offset */
          right: -10px; /* Adjust for frame offset */
          bottom: -10px; /* Adjust for frame offset */
          background: rgba(255, 255, 255, 0.2); /* Light background for frame effect */
          border-radius: 15px; /* Match the frame radius */
          z-index: -1; /* Ensure the frame is behind the image */
          filter: blur(5px); /* Blur effect for more depth */
        }

        .service-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-item:hover {
          transform: scale(1.05); /* Slightly grow on hover */
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); /* Elevate on hover */
        }
      `}</style>
    </div>
  );
};

export default Services;
