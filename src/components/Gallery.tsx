import React, { useState } from 'react';
import { Heart, Share2, Download } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'concept', name: 'Concept Photos' },
    { id: 'performance', name: 'Performance' },
    { id: 'behind', name: 'Behind The Scene' }
  ];

  const images = [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/d2/9e/fe/d29efee8299f4e38ef92cb0a7ace4ad2.jpg",
      category: 'concept',
      title: 'Love Pulse Concept Photo',
      likes: 2450
    },
    {
      id: 2,
      src: "https://i.pinimg.com/736x/7f/1b/4f/7f1b4feda6ec9663852f9a5670a9ed29.jpg",
      category: 'performance',
      title: 'Live Performance',
      likes: 3210
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/7d/d6/be/7dd6be2423db6fe97df04a53f43077da.jpg",
      category: 'concept',
      title: 'Individual Portrait',
      likes: 1890
    },
    {
      id: 4,
      src: "https://i.pinimg.com/1200x/a1/74/4d/a1744dd3cadb09e287b968a6d5011553.jpg",
      category: 'behind',
      title: 'Recording Session',
      likes: 1567
    },
    {
      id: 5,
      src: "https://i.pinimg.com/736x/be/ca/8b/beca8b604cee8a8968262f6ae471d48f.jpg",
      category: 'concept',
      title: 'Group Photo Shoot',
      likes: 4320
    },
    {
      id: 6,
      src: "https://i.pinimg.com/736x/da/4a/7b/da4a7ba8bf12b894a20315e87fd7a701.jpg",
      category: 'performance',
      title: 'Stage Performance',
      likes: 2890
    },
    {
      id: 7,
      src: "https://i.pinimg.com/736x/ec/3f/2c/ec3f2cbe0ce67247985b20c49358ed58.jpg",
      category: 'behind',
      title: 'Practice Room',
      likes: 1234
    },
    {
      id: 8,
      src: "https://i.pinimg.com/1200x/5e/6e/14/5e6e14fbab3e50ca5ee75241ffa63ffc.jpg",
      category: 'concept',
      title: 'Fashion Shoot',
      likes: 3456
    },
    {
      id: 9,
      src: "https://i.pinimg.com/1200x/34/d2/3e/34d23ec8c2636b6b833d1511d2ce44a6.jpg",
      category: 'behind',
      title: 'Backstage Moments',
      likes: 2100
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Galeri TREASURE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Koleksi foto terbaik TREASURE dari berbagai momen spesial
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image.id)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="text-pink-400" size={16} />
                      <span className="text-white text-sm">{image.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                        <Share2 className="text-white" size={16} />
                      </button>
                      <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                        <Download className="text-white" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={images.find(img => img.id === selectedImage)?.src}
                alt="Selected"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;