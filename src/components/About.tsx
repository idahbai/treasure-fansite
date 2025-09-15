import React from 'react';
import { Award, Users, Music, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "15+", label: "Penghargaan", color: "text-yellow-400" },
    { icon: Music, number: "50+", label: "Lagu", color: "text-blue-400" },
    { icon: Users, number: "10M+", label: "TEUME Worldwide", color: "text-purple-400" },
    { icon: Heart, number: "∞", label: "Cinta untuk Fans", color: "text-pink-400" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
            Tentang TREASURE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-yellow-400 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700 mb-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              <span className="text-yellow-400 font-semibold">TREASURE</span> adalah boy grup K-pop yang terdiri dari 12 anggota berbakat di bawah naungan YG Entertainment. 
              Grup yang debut pada 7 Agustus 2020 ini terbentuk melalui survival show "YG Treasure Box\" pada tahun 2018.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Dengan nama fandom <span className="text-purple-400 font-semibold">TEUME</span> (아기오같은네), TREASURE telah berhasil mencuri hati jutaan penggemar di seluruh dunia 
              dengan musik yang beragam, performa yang memukau, dan kepribadian yang menggemaskan.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Dari hip-hop yang energik hingga ballad yang menyentuh hati, TREASURE terus menunjukkan versatilitas mereka sebagai 
              <span className="text-blue-400 font-semibold"> "All-Rounder Idols"</span> generasi baru.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                  <stat.icon className={`${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} size={32} />
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;