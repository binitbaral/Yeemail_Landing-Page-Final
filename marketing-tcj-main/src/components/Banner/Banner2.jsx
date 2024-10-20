import React, { useEffect, useRef } from "react";
import LinkedInIcon from "../../assets/linkedin.png";
import InstagramIcon from "../../assets/instagram.png";
import XIcon from "../../assets/x.png";

const Banner2 = () => {
  const canvasRef = useRef(null);

  // Function to create animated canvas effect
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.clientWidth;
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

    const handleResize = () => {
      drawCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="contact" className="relative flex flex-col md:flex-row items-stretch min-h-screen bg-lightgrey">
      {/* Single Animated Canvas */}
      <canvas ref={canvasRef} className="absolute left-0 top-0 h-full w-full z-10 pointer-events-none" />

      <div className="container relative z-20 flex flex-col md:flex-row justify-between items-stretch w-full p-5">
        {/* Left Section: Calendly iframe */}
        <div className="flex flex-col items-center w-full md:w-1/2 p-5">
          <h2 className="text-4xl font-bold mb-5 text-center" style={{ color: "#545454" }}>Schedule Your Meeting!</h2>
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2gUPPg7gGBnBjxZnLP2fK6sqxlG4T7m3VpP99RvyMbW3rignOBzp3r-1x8kbZvwW8GVdPYj0kV?gv=true"
            className="w-full h-[500px] md:h-[600px] rounded-xl shadow-lg"
            title="Calendly"
          />
        </div>

        {/* Right Section: Consultation Box */}
        <div className="relative flex flex-col justify-center items-center w-full md:w-1/2 p-5">
          <div className="flex flex-col justify-center items-center w-full bg-white rounded-lg shadow-lg border border-darkorange-200 text-center h-full">
            <h2 className="text-4xl font-bold mb-5" style={{ color: "#545454" }}>🚀 Book A Call With Us!</h2>
            <p className="mb-5 text-lg text-darkgrey">
              Working with us means an extra hour (or two) of sleep at night. Book a quick 15-minute chat to get the ball rolling and start your journey with us!
            </p>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: "#ff8c00" }}>This is for you if you want:</h3>
            <div className="mb-5 text-darkgrey space-y-2">
              <p className="flex items-center justify-center">🌟 A team 100% dedicated to your Klaviyo</p>
              <p className="flex items-center justify-center">🤝 Long-term email partners you can trust</p>
              <p className="flex items-center justify-center">📈 Immediate & long-term results</p>
            </div>
            <h3 className="text-2xl font-semibold mb-3" style={{ color: "#ff8c00" }}>To qualify, you must:</h3>
            <div className="mb-5 text-darkgrey space-y-2">
              <p className="flex items-center justify-center">🛍️ Run a DTC eCommerce brand</p>
            </div>
            {/* Schedule Button */}
            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2gUPPg7gGBnBjxZnLP2fK6sqxlG4T7m3VpP99RvyMbW3rignOBzp3r-1x8kbZvwW8GVdPYj0kV?gv=true" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
                Schedule My Free Consultation
              </button>
            </a>

            {/* Connect with Us Section */}
            <h3 className="mt-5 text-2xl font-semibold" style={{ color: "#545454" }}>We’re always available! Contact us via:</h3>
            <div className="flex justify-center items-center space-x-4 mt-3">
              <a href="https://www.linkedin.com/in/nischal-shahi-ab056825a/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a href="https://www.instagram.com/yeemail0/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" className="w-10 h-10" />
              </a>
              <a href="https://x.com/nischalshahi15" target="_blank" rel="noopener noreferrer">
                <img src={XIcon} alt="X" className="w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
