import React, { useState } from 'react';
import { Calendar, MapPin, Heart, Sparkles } from 'lucide-react';

const Members = () => {
  const [selectedMember, setSelectedMember] = useState(0);

  const members = [
    {
      name: "CHOI HYUNSUK",
      koreanName: "최현석 ",
      position: "Rapper, main dancer",
      birthDate: "April 21, 1999",
      birthPlace: "Daegu, Korea Selatan",
      height: "171 cm",
      bloodType: "A",
      funFacts: [
        "Koleksi lip balm lebih banyak dari koleksi topi.",
        "Paling gampang kaget kalau ada yang tiba-tiba teriak di belakangnya..",
        "Fans bilang ia punya kebiasaan bicara sendiri saat nervous.",
        "Dulu bercita-cita jadi produser sebelum yakin jadi idol."
      ],
      image: "https://i.pinimg.com/736x/53/83/0d/53830d70fa9b81446f5e9497f546c946.jpg",
      color: "from-red-400 to-pink-500"
    },
    {
      name: "PARK JIHOON",
      koreanName: "박지훈", 
      position: "Visual, Vocalist, main dancer",
      birthDate: "Maret 14, 2000",
      birthPlace: "Busan, Korea Selatan",
      height: "178 cm",
      bloodType: "B",
      funFacts: [
        "Punya tahi lalat kecil di dada yang jadi “signature” bagi fans lama.",
        "Suka ngasih hadiah random (kayak polaroid dengan pesan kocak) ke member lain.",
        "Dulu dijuluki “prince of mood maker” oleh trainee YG.",
        " Suka meniru suara member lain dengan cukup mirip."
      ],
      image: "https://i.pinimg.com/736x/43/68/ec/4368ec487a3364532b1f4f5cedfaac8d.jpg",
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "KANEMOTO YOSHINORI",
      koreanName: "카네모토 요시노리", 
      position: "Rapper,",
      birthDate: "Mei 15, 2000", 
      birthPlace: "Kobe, Jepang",
      height: "179 cm",
      bloodType: "A",
      funFacts: [
        "Bisa bikin beat hanya dengan beatbox dan pulpen.",
        "Waktu trainee, dia suka bikin rap pakai lirik anime.",
        "Punya kebiasaan tidur sambil dengerin OST anime.",
        "Sering desain tato ilustrasi sendiri ",
        "Bisa niru suara karakter kartun dengan lumayan mirip"
      ],
      image: "https://i.pinimg.com/736x/0a/c7/28/0ac7287bfa0e15db82409899b9b768ed.jpg",
      color: "from-purple-400 to-indigo-500"
    },
    {
      name: "KIM JUNKYU",
      koreanName: "김준규",
      position: "Leader, Main Vocalist",
      birthDate: "September 9, 2000",
      birthPlace: "Chungju, Korea Selatan", 
      height: "178 cm",
      bloodType: "O",
      funFacts: [
        "Punya dua kucing yang dipanggilnya “noona” (Ruby & Aengdu).",
        "Gampang banget ketiduran bahkan di ruang latihan.",
        "Suka banget sama parfum, katanya punya koleksi lebih dari 10 botol ",
        "Dijuluki “Koala” karena wajahnya mirip binatang itu saat senyum."
      ],
      image: "https://i.pinimg.com/736x/fb/dc/aa/fbdcaa93b40e17524eac41bd6562bf39.jpg",
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "YOON JAEHYUK",
      koreanName: "윤재혁",
      position: "Vocalist, Visual",
      birthDate: "Juli 23, 2001",
      birthPlace: "Yongin, Korea Selatan",
      height: "178 cm",
      bloodType: "O",
      funFacts: [
        "Kidal, tapi beberapa dance move dia pakai tangan kanan biar sinkron.",
        "Punya eyelid tebal hanya di satu sisi mata, katanya itu daya tarik unik.",
        "Suka banget ngemil midnight snack bareng maknae.",
        "Katanya punya kemampuan “bau” parfum dan langsung ingat siapa pemiliknya."
      ],
      image: "https://i.pinimg.com/736x/cd/37/c6/cd37c66c3bb6425e4d75076f4ebe8815.jpg",
      color: "from-pink-400 to-rose-500"
    },
    {
      name: "HAMADA ASAHI",
      koreanName: "浜田朝光",
      position: "Leader, Vocalist, Visual",
      birthDate: "Agustus 20, 2001", 
      birthPlace: "Osaka, Jepang",
      height: "172 cm",
      bloodType: "AB",
      funFacts: [
        "Salah satu kata Korea favoritnya “예술작품 (artwork)”.",
        "Suka gambar doodle random di mana aja (bahkan tisu & botol minum).",
        "Dulu main bola di Jepang sebelum pindah ke musik.",
        "Pernah bikin lagu lengkap hanya dalam semalam.",
        "Nggak suka kalau ada orang duduk di tempat tidurnya"
      ],
      image: "https://i.pinimg.com/736x/c2/13/af/c213afb44a2fb4d0e8c9582e7d64fe35.jpg",
      color: "from-teal-400 to-blue-500"
    },
    {
        name: "KIM DOYOUNG",
        koreanName: "김도영",
        position: "Vocalist, Main Dancer",
        birthDate: "Desember 4, 2003",
        birthPlace: "Seoul, Korea Selatan",
        height: "177 cm",
        bloodType: "B",
        funFacts: [
          "Dijuluki “Sunshine” karena senyumnya dianggap paling cerah di grup.",
          "Bisa tidur dengan posisi badan miring aneh tapi tetap nyenyak.",
          "Paling sering ketawa sampai nangis di antara member.",
          "Punya bekas luka dibawah bbirnya karena dulu jatuh dirumah dan harus dijahit sebanyak 12 jahitan"
        ],
        image: "https://i.pinimg.com/736x/1b/ef/56/1bef56b814a1f4691696011e892a58a4.jpg",
        color: "from-yellow-400 to-amber-500"
      },
    {
        name: "WATANABE HARUTO",
        koreanName: "하루토",
        position: "Rapper, Visual",
        birthDate: "April 5, 2004",
        birthPlace: "Fukuoka, Jepang",
        height: "184 cm",
        bloodType: "B",
        funFacts: [
          "Pernah seminggu penuh nggak minum air putih, hanya soda & jus.",
          "Sering ketahuan pakai kaos kaki yang sama dua hari berturut-turut.",
          "Punya kebiasaan ngitung helai rambut waktu trainee.",
          "Dulu pengen jadi pemain basket sebelum yakin jadi idol."
        ],
        image: "https://i.pinimg.com/736x/1f/af/ac/1fafac60f09256a14c3abf1adfa7cdb3.jpg",
        color: "from-purple-400 to-pink-500"
      },
    {
      name: "PARK JEONGWOO",
      koreanName: "박정우",
      position: "Main Vocalist",
      birthDate: "September 28, 2004",
      birthPlace: "Iksan, Korea Selatan",
      height: "181 cm",
      bloodType: "O",
      funFacts: [
        "Paling sering tiba-tiba nyanyi lagu trot di dorm.",
        "Dikenal suka makan cepat, sampai fans sebut dia “eating machine”.",
        "Sejak kecil impiannya pernah jadi surgeon(dokter bedah)",
        "Punya kebiasaan humming lagu bahkan saat lagi mandi."
      ],
      image: "https://i.pinimg.com/736x/58/36/5e/58365e85970b168e7f9cd0b160dd3b14.jpg",
      color: "from-cyan-400 to-teal-500"
    },
    {
        name: "SO JUNGHWAN",
        koreanName: "소정환",
        position: "Vocalist, Maknae, Dancer",
        birthDate: "Februari 18, 2005",
        birthPlace: "Iksan, Korea Selatan", 
        height: "180 cm",
        bloodType: "B",
        funFacts: [
          "Disebut “Giant Baby” karena mukanya masih baby face meski tinggi.",
          "Suka nyembunyiin snack di dorm biar nggak ketahuan hyung-hyung.",
          "Bisa split dengan sempurna berkat latihan taekwondo saat kecil.",
          "Dijuluki super king cow baby karena posisinya sbagai maknae dan postur badannya lumayan tinngi besar untuk usianya."
        ],
        image: "https://i.pinimg.com/736x/c4/bd/85/c4bd8579470d13fa936c559e96783a24.jpg",
        color: "from-orange-400 to-red-500"
      }
  ];

  return (
    <section id="members" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            10 Member TREASURE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Kenali lebih dekat 10 member TREASURE dengan kepribadian dan bakat unik masing-masing
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