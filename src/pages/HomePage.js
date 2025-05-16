import React from 'react';
import Slider from '../components/home/Slider';
import QuickLinks from '../components/home/QuickLinks';
import NewsSection from '../components/home/NewsSection';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Slider />
      <QuickLinks />
      
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <h2>CHÀO MỪNG ĐẾN VỚI PHÂN HIỆU TRƯỜNG ĐH GTVT TẠI TP.HCM</h2>
            <p>
              Trường Đại học Giao thông vận tải có tiền thân là Trường Cao đẳng Công chính Việt Nam
              được khai giảng lại dưới chính quyền cách mạng ngày 15 tháng 11 năm 1945 theo
              Sắc lệnh của Chủ tịch Hồ Chí Minh; Nghị định thư của Bộ trưởng Quốc gia Giáo dục
              Vũ Đình Hòa và Bộ trưởng Bộ Giao thông công chính Đào Trọng Kim.
            </p>
            <p>
              Tháng 8/1960, Ban Xây dựng Trường Đại học Giao thông vận tải được thành lập và
              tuyển sinh khóa 1 trình độ Đại học. Ngày 24/03/1962, trường chính thức mang tên
              Trường Đại học Giao thông vận tải theo Quyết định số 42/CP ngày 24/03/1962 của Hội đồng Chính phủ.
            </p>
            <div className="welcome-stats">
              <div className="stat-item">
                <div className="stat-number">60+</div>
                <div className="stat-label">Năm phát triển</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Ngành đào tạo</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15,000+</div>
                <div className="stat-label">Sinh viên</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Giảng viên</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <NewsSection />
      
      <section className="video-section">
        <div className="container">
          <div className="video-content">
            <h2>GIỚI THIỆU VỀ PHÂN HIỆU</h2>
            <div className="video-wrapper">
              <iframe 
                width="100%" 
                height="500" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Giới thiệu về Phân hiệu trường ĐH GTVT tại TP.HCM" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section className="partners-section">
        <div className="container">
          <h2>ĐỐI TÁC</h2>
          <div className="partners-slider">
            <div className="partner">
              <img src="/images/partner1.png" alt="Partner 1" />
            </div>
            <div className="partner">
              <img src="/images/partner2.png" alt="Partner 2" />
            </div>
            <div className="partner">
              <img src="/images/partner3.png" alt="Partner 3" />
            </div>
            <div className="partner">
              <img src="/images/partner4.png" alt="Partner 4" />
            </div>
            <div className="partner">
              <img src="/images/partner5.png" alt="Partner 5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
