import React, { useState } from 'react';
import { Calendar, Trophy, Music, Star } from 'lucide-react';

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  const events = [
    {
        year: "2018",
        title: "YG Treasure Box",
        description: "Survival show dengan 29 trainee untuk membentuk grup baru YG Entertainment",
        icon: Star,
        color: "bg-purple-500"
      },
      {
        year: "2019",
        title: "TREASURE 13 Terbentuk",
        description: "13 anggota terpilih resmi menjadi TREASURE, kemudian menjadi 12 anggota",
        icon: Trophy,
        color: "bg-blue-500"
      },
      {
        year: "2020",
        title: "Debut Resmi",
        description: "Debut dengan single album 'THE FIRST STEP : CHAPTER ONE' dan title track 'BOY'",
        icon: Music,
        color: "bg-yellow-500"
      },
      {
        year: "2021",
        title: "Album Pertama",
        description: "Merilis full album pertama 'THE FIRST STEP : TREASURE EFFECT'",
        icon: Music,
        color: "bg-green-500"
      },
      {
        year: "2022 (Awal)",
        title: "World Tour",
        description: "Menggelar konser world tour pertama 'TREASURE 2022 WORLD TOUR [HELLO]'",
        icon: Trophy,
        color: "bg-pink-500"
      },
      {
        year: "2022 (Akhir)",
        title: "Kehilangan 2 Member",
        description: "Bang Yedam dan Mashiho resmi keluar dari grup, TREASURE melanjutkan dengan 10 member",
        icon: Star,
        color: "bg-gray-500"
      },
      {
        year: "2023",
        title: "Era Reboot & Subunit",
        description: "Merilis album kedua 'REBOOT' dan memperkenalkan subunit T5",
        icon: Star,
        color: "bg-orange-500"
      },
      {
        year: "2024",
        title: "Single King Kong & Leader Baru",
        description: "Rilis 'King Kong', 'Reverse', pre-release 'Last Night', serta pengumuman Junkyu & Asahi sebagai leader baru mulai 2025",
        icon: Music,
        color: "bg-red-500"
      },
      {
        year: "2025 (Maret)",
        title: "Mini Album Pleasure",
        description: "Rilis mini album 'PLEASURE' dengan title track 'Yellow' serta tur fan-concert 'SPECIAL MOMENT'",
        icon: Trophy,
        color: "bg-indigo-500"
      },
      {
        year: "2025 (Juni)",
        title: "Live CD/DVD",
        description: "Rilis '2025 TREASURE FAN CONCERT [SPECIAL MOMENT] IN JAPAN (LIVE CD/DVD)'",
        icon: Star,
        color: "bg-cyan-500"
      },
      {
        year: "2025 (September)",
        title: "Mini Album LOVE PULSE",
        description: "Merilis mini album ketiga 'LOVE PULSE' sebagai comeback terbaru",
        icon: Music,
        color: "bg-teal-500"
      }
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Perjalanan TREASURE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dari trainee hingga menjadi bintang global, ikuti perjalanan menakjubkan TREASURE
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                onMouseEnter={() => setActiveEvent(index)}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className={`bg-gray-700/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-600 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 ${
                    activeEvent === index ? 'border-purple-400 scale-105' : ''
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <event.icon className="text-purple-400" size={24} />
                      <span className="text-2xl font-bold text-yellow-400">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>

                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${event.color} rounded-full border-4 border-gray-800 transition-all duration-300 ${
                  activeEvent === index ? 'scale-150' : ''
                }`}></div>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            {events.map((event, index) => (
              <div key={index} className="relative flex items-start mb-8">
                <div className={`w-4 h-4 ${event.color} rounded-full mr-4 mt-2 flex-shrink-0`}></div>
                <div className="flex-1">
                  <div className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-600">
                    <div className="flex items-center gap-3 mb-3">
                      <event.icon className="text-purple-400" size={20} />
                      <span className="text-xl font-bold text-yellow-400">{event.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300 text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;