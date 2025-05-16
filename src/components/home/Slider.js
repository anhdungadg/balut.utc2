import React, { useState, useEffect } from 'react';
import '../../styles/Slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: '/images/slider1.jpg',
      title: 'Chào mừng đến với Phân hiệu trường ĐH GTVT tại TP.HCM',
      description: 'Đào tạo nguồn nhân lực chất lượng cao trong lĩnh vực giao thông vận tải'
    },
    {
      id: 2,
      image: '/images/slider2.jpg',
      title: 'Tuyển sinh năm học 2023-2024',
      description: 'Thông tin tuyển sinh các ngành đào tạo đại học, cao đẳng'
    },
    {
      id: 3,
      image: '/images/slider3.jpg',
      title: 'Nghiên cứu khoa học',
      description: 'Các dự án nghiên cứu và hợp tác quốc tế'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
        
        <button className="slider-arrow prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slider-arrow next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
        
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
