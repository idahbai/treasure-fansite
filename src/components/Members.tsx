import React, { useState } from 'react';
import { Calendar, MapPin, Heart, Sparkles } from 'lucide-react';

const Members = () => {
  const [selectedMember, setSelectedMember] = useState(0);

  const members = [
    {
      name: "CHOI HYUNSUK",
      koreanName: "최현석",
      position: "Leader, Main Rapper",
      birthDate: "11 April 1999",
      birthPlace: "Daegu, Korea Selatan",
      height: "176 cm",
      bloodType: "AB",
      funFacts: [
        "Mantan trainee SM Entertainment selama 4 tahun",
        "Ahli dalam dance dan rap",
        "Suka menggambar dan fotografi",
        "Memiliki senyum yang sangat manis"
      ],
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      color: "from-red-400 to-pink-500"
    },
    {
      name: "PARK JIHOON",
      koreanName: "박지훈", 
      position: "Visual, Vocalist",
      birthDate: "14 Mei 2000",
      birthPlace: "Seoul, Korea Selatan",
      height: "178 cm",
      bloodType: "O",
      funFacts: [
        "Visual utama TREASURE dengan wajah seperti pangeran",
        "Mantan trainee FNC Entertainment",
        "Suka bermain game dan menonton film",
        "Memiliki suara yang sangat merdu"
      ],
      image: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "KANEMOTO YOSHINORI",
      koreanName: "요시",
      position: "Rapper, Dancer",
      birthDate: "15 Mei 2000", 
      birthPlace: "Osaka, Jepang",
      height: "178 cm",
      bloodType: "A",
      funFacts: [
        "Member Jepang pertama TREASURE",
        "Rapper dengan flow yang unik",
        "Suka anime dan manga",
        "Memiliki kepribadian yang lucu dan menggemaskan"
      ],
      image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      color: "from-purple-400 to-indigo-500"
    },
    {
      name: "KIM JUNKYU",
      koreanName: "김준규",
      position: "Main Vocalist",
      birthDate: "9 September 2000",
      birthPlace: "Daegu, Korea Selatan", 
      height: "179 cm",
      bloodType: "A",
      funFacts: [
        "Main vocalist dengan vocal range yang luas",
        "Dikenal sebagai 'Vocal King' TREASURE",
        "Suka menonton drama dan variety show",
        "Memiliki mata yang sangat indah"
      ],
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "TAKATA MASHIHO",
      koreanName: "마시호",
      position: "Vocalist, Visual",
      birthDate: "25 Maret 2001",
      birthPlace: "Fukuoka, Jepang",
      height: "164 cm", 
      bloodType: "AB",
      funFacts: [
        "Member termuda kedua TREASURE",
        "Visual line dengan wajah seperti boneka",
        "Suka bermain piano dan menggambar",
        "Memiliki senyum yang sangat manis dan infectious"
      ],
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "YOON JAEHYUK",
      koreanName: "윤재혁",
      position: "Vocalist, Visual",
      birthDate: "23 Juli 2001",
      birthPlace: "Seoul, Korea Selatan",
      height: "179 cm",
      bloodType: "O",
      funFacts: [
        "Visual line dengan tinggi yang ideal",
        "Suka olahraga terutama basket",
        "Memiliki kepribadian yang tenang dan dewasa",
        "Dikenal sebagai 'Gentleman' TREASURE"
      ],
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      color: "from-pink-400 to-rose-500"
    },
    {
      name: "HAMADA ASAHI",
      koreanName: "아사히",
      position: "Vocalist, Visual",
      birthDate: "20 Agustus 2001", 
      birthPlace: "Kumamoto, Jepang",
      height: "175 cm",
      bloodType: "O",
      funFacts: [
        "Member Jepang dengan suara yang sangat merdu",
        "Suka memasak dan eksperimen dengan makanan",
        "Memiliki mata yang sangat ekspresif",
        "Dikenal sebagai 'Angel Voice' TREASURE"
      ],
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      color: "from-teal-400 to-blue-500"
    },
    {
      name: "BANG YEDAM",
      koreanName: "방예담",
      position: "Main Vocalist, Songwriter",
      birthDate: "7 Mei 2002",
      birthPlace: "Busan, Korea Selatan",
      height: "173 cm",
      bloodType: "O", 
      funFacts: [
        "Mantan peserta K-pop Star 2",
        "Songwriter berbakat yang telah menulis banyak lagu",
        "Memiliki suara yang sangat powerful",
        "Dikenal sebagai 'Golden Voice' TREASURE"
      ],
      image: "https://images.pexels.com/photos/1812756/pexels-photo-1812756.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      color: "from-indigo-400 to-purple-500"
    },
    {
      name: "SO JUNGHWAN",
      koreanName: "소정환",
      position: "Vocalist, Maknae",
      birthDate: "18 Februari 2005",
      birthPlace: "Iksan, Korea Selatan", 
      height: "179 cm",
      bloodType: "A",
      funFacts: [
        "Maknae (member termuda) TREASURE",
        "Tinggi tertinggi di grup meski termuda",
        "Suka bermain game dan olahraga",
        "Dikenal sebagai 'Giant Baby' karena tinggi tapi muka baby"
      ],
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "PARK JEONGWOO",
      koreanName: "박정우",
      position: "Main Vocalist",
      birthDate: "28 September 2004",
      birthPlace: "Seoul, Korea Selatan",
      height: "175 cm",
      bloodType: "AB",
      funFacts: [
        "Main vocalist dengan teknik vocal yang luar biasa",
        "Suka menonton anime dan bermain game",
        "Memiliki kepribadian yang energik dan lucu",
        "Dikenal sebagai 'Vocal Prodigy' TREASURE"
      ],
      image: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      color: "from-cyan-400 to-teal-500"
    },
    {
      name: "WATANABE HARUTO",
      koreanName: "하루토",
      position: "Rapper, Visual",
      birthDate: "5 April 2004",
      birthPlace: "Fukuoka, Jepang",
      height: "185 cm",
      bloodType: "O",
      funFacts: [
        "Member tertinggi TREASURE",
        "Rapper dengan visual yang memukau",
        "Suka fotografi dan fashion",
        "Dikenal sebagai 'Tall Prince' TREASURE"
      ],
      image: "https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "DOI DOYOUNG",
      koreanName: "도영",
      position: "Vocalist",
      birthDate: "4 Desember 2003",
      birthPlace: "Tokyo, Jepang",
      height: "172 cm",
      bloodType: "B",
      funFacts: [
        "Member Jepang dengan kepribadian yang bright",
        "Suka menari dan bernyanyi sejak kecil",
        "Memiliki senyum yang sangat menawan",
        "Dikenal sebagai 'Sunshine' TREASURE"
      ],
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2",
      color: "from-yellow-400 to-amber-500"
    }
  ];

  return (
    <section id="members" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            12 Member TREASURE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Kenali lebih dekat 12 member TREASURE dengan kepribadian dan bakat unik masing-masing
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {members.map((member, index) => (
              <button
                key={index}
                onClick={() => setSelectedMember(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedMember === index
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-400 text-gray-900'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {member.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${members[selectedMember].color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                <img
                  src={members[selectedMember].image}
                  alt={members[selectedMember].name}
                  className="relative w-full h-96 object-cover rounded-2xl border-2 border-gray-600 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h3 className={`text-4xl font-bold mb-2 bg-gradient-to-r ${members[selectedMember].color} bg-clip-text text-transparent`}>
                  {members[selectedMember].name}
                </h3>
                <p className="text-xl text-gray-300 mb-6">{members[selectedMember].koreanName}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-yellow-400" size={20} />
                    <span className="text-gray-300"><strong>Posisi:</strong> {members[selectedMember].position}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="text-blue-400" size={20} />
                    <span className="text-gray-300"><strong>Tanggal Lahir:</strong> {members[selectedMember].birthDate}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-green-400" size={20} />
                    <span className="text-gray-300"><strong>Tempat Lahir:</strong> {members[selectedMember].birthPlace}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="text-pink-400" size={20} />
                    <span className="text-gray-300"><strong>Tinggi:</strong> {members[selectedMember].height} | <strong>Golongan Darah:</strong> {members[selectedMember].bloodType}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Fun Facts:</h4>
                  <ul className="space-y-2">
                    {members[selectedMember].funFacts.map((fact, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;