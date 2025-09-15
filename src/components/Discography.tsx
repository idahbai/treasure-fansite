import React, { useState } from 'react';
import { Music, Calendar, Trophy, Play } from 'lucide-react';

const Discography = () => {
  const [activeAlbum, setActiveAlbum] = useState(0);

  const albums = [
    {
      title: "THE FIRST STEP : CHAPTER ONE",
      type: "Single Album",
      releaseDate: "7 Agustus 2020",
      tracks: ["BOY", "Come to me (들어와)", " Boy (Inst.) [CD only]", "Come To Me (들어와) (Inst.) [CD only]"],
      description: "Album debut TREASURE yang menandai langkah pertama mereka di industri musik K-pop",
      image: "https://th.bing.com/th/id/OIP.Ay9AJ2UiB581IW1uhQn5lwHaHa?w=215&h=215&c=7&r=0&o=7&pid=1.7&rm=3",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "THE FIRST STEP : CHAPTER TWO",
      type: "Single Album", 
      releaseDate: "18 September 2020",
      tracks: ["I Love You (사랑해)", "B.L.T (Bling Like This)","I Love You (사랑해) (Inst.) [CD only]", "B.L.T (Bling Like This) (Inst.) [CD only]"],
      description: "Kelanjutan dari chapter pertama dengan nuansa yang lebih matang",
      image: "https://th.bing.com/th/id/OIP.OHaGQc6zkmSOUsA6EJTjBAHaHa?w=194&h=194&c=7&r=0&o=7&pid=1.7&rm=3",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "THE FIRST STEP : CHAPTER THREE",
      type: "Single Album",
      releaseDate: "6 November 2020", 
      tracks: ["MMM (음)", "Orange (주황색)", "Mmm (음) (Inst.) [CD only]", "Orange (주황색) (Inst.) [CD only]"],
      description: "Chapter ketiga yang menunjukkan sisi yang lebih experimental dari TREASURE",
      image: "data:image/webp;base64,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",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "THE FIRST STEP : TREASURE EFFECT",
      type: "Full Album",
      releaseDate: "11 Januari 2021",
      tracks: ["MY TREASURE", "Be With Me (나랑 있자)", "SLOWMOTION", "BOY", "Come To Me (들어와)", "I LOVE YOU", "B.L.T (Bling Like This)", "MMM (음)","Orange (주황색)", "GOING CRAZY (미져가네)", "I Love You (사랑해) (Piano ver.) | (CD only)", "MMM (음) (Rock ver.) | (CD only)"],
      description: "Album lengkap pertama TREASURE yang mengompilasi semua lagu terbaik mereka",
      image: "https://th.bing.com/th/id/OIP.P-9Zt2VmGBMpXKaY2tFmYwHaHa?w=195&h=195&c=7&r=0&o=7&pid=1.7&rm=3",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "THE SECOND STEP : CHAPTER ONE",
      type: "Mini Album",
      releaseDate: "15 Februari 2022",
      tracks: ["JIKJIN (직진)", "U", "DARARI (다라리)", "It’s Okay (괜찮아질 거야)", "BFF | Best Friend Forever (CD only)", "Gonna Be Fine (CD only)"],
      description: "Comeback yang kuat menandai babak baru perjalanan TREASURE",
      image: "https://kprofiles.com/wp-content/uploads/2022/04/TREASURE_The_Second_Step_-_Chapter_One_online_album_art-800x800.webp", 
      color: "from-red-500 to-pink-600"
    },
    {
        title: "THE SECOND STEP : CHAPTER TWO",
        type: "Mini Album",
        releaseDate: "4 oktober 2022",
        tracks: ["HELLO", "VolKno", "Clap", "Thank You (고마워)", "Hold It In (묻어둔다)", "Darari (Rock Remix) (CD only)"],
        description: "Comeback yang kuat menandai babak baru perjalanan TREASURE",
        image: "https://th.bing.com/th/id/OIP.ap8vscYFa_ILe-zPNEhaPAHaHa?w=192&h=192&c=7&r=0&o=7&pid=1.7&rm=3", 
        color: "from-red-500 to-pink-600"
      },
    {
      title: "REBOOT",
      type: "Full Album",
      releaseDate: "28 Juli 2023",
      tracks: ["BONA BONA*title", "I WANT YOUR LOVE", "RUN", "MOVE(T5 Unit)", "G.O.A.T (RAP Unit) (ft.Lee Younghyun)", "멍청이 (STUPID)", "어른 (THE WAY TO) (VOCAL Unit)", "WONDERLAND", "B.O.M.B", "병 (LOVESICK)"],
      description: "Album terbaru yang menunjukkan evolusi musik dan kedewasaan TREASURE",
      image: "data:image/webp;base64,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",
      color: "from-cyan-500 to-blue-600"
    },
    {
        title: "LOVE PULSE",
        type: "Mini Album",
        releaseDate: "1 September 2025",
        tracks: ["EVERYTHING", "PARADISE*title", "NOW OREVER", "BETTER THAN ME"],
        description: "Comeback yang lagi-lagi mengejutkan penggemar dengan sisi baru TREASURE",
        image: "https://th.bing.com/th/id/OIF.DJmKa4iF1MXdEmi20nIcmg?w=199&h=199&c=7&r=0&o=7&pid=1.7&rm=3",
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