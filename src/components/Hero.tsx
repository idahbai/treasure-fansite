import React, { useEffect, useState } from 'react';
import { Play, Heart, Star } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "TREASURE",
      subtitle: "10 Anggota, 1 Hati",
      description: "Boy grup terbaik dari YG Entertainment yang telah mencuri hati jutaan TEUME di seluruh dunia",
      image: "https://i.pinimg.com/1200x/e1/96/d5/e196d5ce0e9de5219036be72d3f99129.jpg"
    },
    {
      title: "KINGS OF K-POP",
      subtitle: "Generasi Baru",
      description: "Dengan talenta luar biasa dan visual yang memukau, TREASURE siap menaklukkan dunia musik",
      image: "https://i.pinimg.com/736x/87/5f/5f/875f5ff3ee316eae05d97f8d49b91f6f.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-yellow-900/80"></div>
          </div>
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-6">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              <Play className="group-hover:scale-110 transition-transform" size={20} />
              Tonton MV Terbaru
            </button>
            <button className="group bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
              <Heart className="group-hover:scale-110 transition-transform" size={20} />
              Bergabung dengan TEUME
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">10</div>
              <div className="text-gray-300">Member</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">2020</div>
              <div className="text-gray-300">Debut</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">∞</div>
              <div className="text-gray-300">TEUME</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;