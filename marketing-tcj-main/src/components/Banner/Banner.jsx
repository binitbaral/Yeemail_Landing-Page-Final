import React, { useEffect, useRef } from "react";
import BannerImg from "../../assets/11.png";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Banner = () => {
  const canvasRef = useRef(null);

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
        type: "particle",
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
        type: "star",
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
        type: "grayStar",
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

        if (particle.type === "star" || particle.type === "grayStar") {
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

  return (
    <>
      <div className="relative">
        {/* Background and Canvas */}
        <div className="absolute inset-0 bg-transparent z-0" />
        <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />

        {/* Main Banner Section */}
        <div id="strategy" className="container relative z-20 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
            <div className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-10 md:py-0 md:px-0 md:items-start">
              <motion.h1
                variants={slideUp(0.2)}
                initial="initial"
                whileInView="animate"
                className="text-4xl xl:text-5xl font-bold text-black/80"
              >
                <span className="text-gray-700">Ignite</span> Your Audience,
                <br />
                <span className="underline text-orange-500">Accelerate</span> Your Brand
              </motion.h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <motion.div
                  variants={slideUp(0.4)}
                  initial="initial"
                  whileInView="animate"
                  className="bg-gray-100/50 p-6 rounded-lg shadow-lg flex-1"
                >
                  <p className="font-bold text-lg">Targeted Campaigns</p>
                  <p className="text-sm">Speak directly to your audience and boost engagement with precision.</p>
                </motion.div>

                <motion.div
                  variants={slideUp(0.6)}
                  initial="initial"
                  whileInView="animate"
                  className="bg-gray-100/50 p-6 rounded-lg shadow-lg flex-1"
                >
                  <p className="font-bold text-lg">Personalized Automation</p>
                  <p className="text-sm">Automated yet personal, to nurture leads and build lasting relationships.</p>
                </motion.div>

                <motion.div
                  variants={slideUp(0.8)}
                  initial="initial"
                  whileInView="animate"
                  className="bg-gray-100/50 p-6 rounded-lg shadow-lg flex-1"
                >
                  <p className="font-bold text-lg">Data-Driven Insights</p>
                  <p className="text-sm">Leverage data to optimize every email campaign for maximum results.</p>
                </motion.div>

                <motion.div
                  variants={slideUp(1.0)}
                  initial="initial"
                  whileInView="animate"
                  className="bg-gray-100/50 p-6 rounded-lg shadow-lg flex-1"
                >
                  <p className="font-bold text-lg">Creative Design</p>
                  <p className="text-sm">Beautiful, responsive designs that captivate on every device.</p>
                </motion.div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
                className="relative w-[90%] md:w-[550px] xl:w-[650px] p-3 rounded-md shadow-2xl overflow-hidden bg-white/50"
              >
                <div className="absolute inset-0 rounded-md bg-gradient-to-b from-[#b03608]/70 to-[#1c1c1c]/70 opacity-70 z-0" />
                <img
                  src={BannerImg}
                  alt="Email marketing banner"
                  className="object-cover w-full h-full rounded-md relative z-10 mt-2 shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
