import React, { useState } from 'react';
import { Music, Calendar, Trophy, Play } from 'lucide-react';

const Discography = () => {
  const [activeAlbum, setActiveAlbum] = useState(0);

  const albums = [
    {
      title: "THE FIRST STEP : CHAPTER ONE",
      type: "Single Album",
      releaseDate: "7 Agustus 2020",
      tracks: ["BOY", "Come to me", "지마 (B.L.T)"],
      description: "Album debut TREASURE yang menandai langkah pertama mereka di industri musik K-pop",
      image: "https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "THE FIRST STEP : CHAPTER TWO",
      type: "Single Album", 
      releaseDate: "18 September 2020",
      tracks: ["I LOVE YOU", "사랑해 (SARANGHAE)", "B.L.T (REMIX)"],
      description: "Kelanjutan dari chapter pertama dengan nuansa yang lebih matang",
      image: "https://images.pexels.com/photos/3721935/pexels-photo-3721935.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "THE FIRST STEP : CHAPTER THREE",
      type: "Single Album",
      releaseDate: "6 November 2020", 
      tracks: ["MMM", "음 (UM)", "SLOWMOTION"],
      description: "Chapter ketiga yang menunjukkan sisi yang lebih experimental dari TREASURE",
      image: "https://images.pexels.com/photos/3721988/pexels-photo-3721988.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "THE FIRST STEP : TREASURE EFFECT",
      type: "Full Album",
      releaseDate: "11 Januari 2021",
      tracks: ["MY TREASURE", "BOY", "사랑해", "MMM", "I LOVE YOU", "SLOWMOTION", "GOING CRAZY", "B.L.T", "지마", "음", "COME TO ME", "ORANGE"],
      description: "Album lengkap pertama TREASURE yang mengompilasi semua lagu terbaik mereka",
      image: "https://images.pexels.com/photos/3721939/pexels-photo-3721939.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "THE SECOND STEP : CHAPTER ONE",
      type: "Mini Album",
      releaseDate: "15 Februari 2022",
      tracks: ["JIKJIN", "DARARI", "THANK YOU", "인정하기 싫어", "U", "IT'S OKAY"],
      description: "Comeback yang kuat menandai babak baru perjalanan TREASURE",
      image: "https://images.pexels.com/photos/3721969/pexels-photo-3721969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2", 
      color: "from-red-500 to-pink-600"
    },
    {
      title: "REBOOT",
      type: "Full Album",
      releaseDate: "28 Juli 2023",
      tracks: ["BONA BONA", "G.M.A", "MOVE", "봐 (SHOOT!)", "BFF", "GOOD BOY", "RUN", "EVERYDAY", "TAYO"],
      description: "Album terbaru yang menunjukkan evolusi musik dan kedewasaan TREASURE",
      image: "https://images.pexels.com/photos/3721942/pexels-photo-3721942.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="discography" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            Diskografi TREASURE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-red-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Perjalanan musikal TREASURE dari debut hingga sekarang
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {albums.map((album, index) => (
              <button
                key={index}
                onClick={() => setActiveAlbum(index)}
                className={`relative group transform transition-all duration-300 hover:scale-105 ${
                  activeAlbum === index ? 'scale-105' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${album.color} rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <img
                  src={album.image}
                  alt={album.title}
                  className={`relative w-full aspect-square object-cover rounded-xl border-2 transition-all duration-300 ${
                    activeAlbum === index ? 'border-white' : 'border-gray-600 hover:border-gray-400'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${albums[activeAlbum].color} rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                <img
                  src={albums[activeAlbum].image}
                  alt={albums[activeAlbum].title}
                  className="relative w-full aspect-square object-cover rounded-2xl border-2 border-gray-600 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${albums[activeAlbum].color} bg-clip-text text-transparent`}>
                  {albums[activeAlbum].title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Music className="text-pink-400" size={20} />
                    <span className="text-gray-300"><strong>Tipe:</strong> {albums[activeAlbum].type}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="text-blue-400" size={20} />
                    <span className="text-gray-300"><strong>Release:</strong> {albums[activeAlbum].releaseDate}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="text-yellow-400" size={20} />
                    <span className="text-gray-300"><strong>Tracks:</strong> {albums[activeAlbum].tracks.length} lagu</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {albums[activeAlbum].description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Track List:</h4>
                  <div className="grid gap-2">
                    {albums[activeAlbum].tracks.map((track, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-200 group">
                        <span className="text-gray-400 text-sm w-6">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-gray-300 flex-1">{track}</span>
                        <Play className="text-gray-500 group-hover:text-pink-400 transition-colors duration-200" size={16} />
                      </div>
                    ))}
                  </div>
                </div>

                <button className={`bg-gradient-to-r ${albums[activeAlbum].color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2`}>
                  <Play size={20} />
                  Dengarkan Album
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discography;