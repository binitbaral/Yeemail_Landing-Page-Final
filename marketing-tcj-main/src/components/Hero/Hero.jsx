import React, { useEffect, useRef } from "react";
import HeroImg from "../../assets/23.png"; // Updated to use 23.png
import Logo8 from "../../assets/8.png"; // Partner logo 8
import Logo9 from "../../assets/9.png"; // Partner logo 9
import Logo17 from "../../assets/17.png"; // Partner logo 17
import Logo18 from "../../assets/18.png"; // Partner logo 18
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Hero = () => {
  const canvasRef = useRef(null);

  // Function to create animated canvas effect
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = 150;
    const starCount = 50;
    const grayStarCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: "rgba(169, 169, 169, 0.5)",
        speed: Math.random() * 0.5 + 0.1,
        type: 'particle',
      });
    }

    for (let i = 0; i < starCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 2,
        color: "rgba(255, 140, 0, 0.8)",
        speed: Math.random() * 0.2 + 0.05,
        twinkle: Math.random() > 0.5,
        type: 'star',
      });
    }

    for (let i = 0; i < grayStarCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1.5,
        color: "rgba(169, 169, 169, 0.8)",
        speed: Math.random() * 0.3 + 0.1,
        twinkle: Math.random() > 0.5,
        type: 'grayStar',
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.y += particle.speed;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        if (particle.type === 'star' || particle.type === 'grayStar') {
          ctx.globalAlpha = particle.twinkle ? Math.random() * 0.5 + 0.5 : 1;
        }
      });
      ctx.globalAlpha = 1;
      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  };

  useEffect(() => {
    drawCanvas();
    window.addEventListener("resize", drawCanvas);
    return () => {
      window.removeEventListener("resize", drawCanvas);
    };
  }, []);

  const handleAuditClick = () => {
    window.location.href = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2gUPPg7gGBnBjxZnLP2fK6sqxlG4T7m3VpP99RvyMbW3rignOBzp3r-1x8kbZvwW8GVdPYj0kV?gv=true";
  };

  return (
    <div className="relative bg-white overflow-hidden pt-16 md:pt-16">
      {/* Animated Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />

      <div className="container relative z-20 flex flex-col items-center justify-center h-screen px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl md:text-5xl font-extrabold text-[#545454] leading-tight"
            >
              Increase Profit, Customer Retention, and <span className="text-[#c65d0d] underline">Lifetime Value</span>
            </motion.h1>
            <motion.p
              variants={slideUp(0.5)}
              initial="initial"
              animate="animate"
              className="mt-4 text-base md:text-lg text-gray-600"
            >
              We help DTC brands convert and retain more customers to maximize online revenue through Email and SMS.
            </motion.p>
            <motion.button
              variants={slideUp(0.8)}
              initial="initial"
              animate="animate"
              onClick={handleAuditClick}
              className="mt-6 px-8 py-3 bg-[#c65d0d] text-white font-semibold rounded-full shadow-lg hover:bg-[#b5580c] transition duration-300 transform hover:scale-110"
            >
              Book an Audit
            </motion.button>
          </div>

          {/* Full display of Hero Image */}
          <div className="flex justify-center items-center">
            <motion.img
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 3, 0],
                filter: ['drop-shadow(0 0 0 rgba(0,0,0,0))', 'drop-shadow(0 0 0 rgba(0,0,0,0.5))', 'drop-shadow(0 0 0 rgba(0,0,0,0))'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: "easeInOut",
              }}
              src={HeroImg}
              alt="Email Marketing Hero"
              className="w-full h-auto max-w-full rounded-lg"
            />
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-10 w-full">
          <h2 className="text-center text-gray-700 font-bold mb-4 text-2xl">Trusted By:</h2>
          <div className="slider-container">
            <div className="slider">
              <div className="slide-track">
                {[Logo8, Logo9, Logo17, Logo18, Logo8, Logo9, Logo17, Logo18].map((logo, index) => (
                  <motion.div
                    key={index}
                    className="slide"
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={logo} alt={`Logo ${index + 8}`} className="logo" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add the CSS for the slider and media queries */}
      <style jsx>{`
        .slider {
          overflow: hidden;
          position: relative;
        }
        .slider-container {
          width: 100%;
          margin: 0 auto;
          padding: 20px 0;
        }
        .slide-track {
          display: flex;
          animation: scroll 20s linear infinite;
          width: calc(250px * 8);
        }
        .slide {
          width: 250px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logo {
          width: 150px;
          height: auto;
          object-fit: contain;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* New mobile view */
        @media (max-width: 768px) {
          .container {
            padding-top: 20px; /* Increased padding for mobile view */
            margin-top: 50px; /* Increased bottom margin for mobile view */
            margin-bottom:80px;
          }
          .grid {
            gap: 12px; /* Adjust gap for mobile */
          }
          .text-4xl {
            font-size: 2.5rem; /* Adjust font size for mobile */
          }
          .text-lg {
            font-size: 0.9rem; /* Adjust font size for mobile */
          }
          .slider-container {
            padding: 10px 0; /* Reduce padding in the slider container */
          }
          .logo {
            width: 80px; /* Smaller logo size for mobile */
          }
          .slide {
            width: 120px; /* Adjust slide width for mobile */
          }
          .slide-track {
            width: calc(120px * 8); /* Adjust for smaller logos */
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
