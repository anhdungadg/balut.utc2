import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NewsSection.css';

// Import images
import news1Image from '../../assets/images/news1.jpg';
import news2Image from '../../assets/images/news2.jpg';
import news3Image from '../../assets/images/news3.jpg';
import news4Image from '../../assets/images/news4.jpg';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Thông báo tuyển sinh năm học 2023-2024',
      image: news1Image,
      date: '15/05/2023',
      excerpt: 'Phân hiệu trường Đại học Giao thông Vận tải tại TP.HCM thông báo tuyển sinh đại học chính quy năm học 2023-2024...',
      category: 'Tuyển sinh'
    },
    {
      id: 2,
      title: 'Lễ tốt nghiệp sinh viên khóa 2019-2023',
      image: news2Image,
      date: '20/06/2023',
      excerpt: 'Sáng ngày 20/06/2023, Phân hiệu trường Đại học Giao thông Vận tải tại TP.HCM đã long trọng tổ chức Lễ tốt nghiệp...',
      category: 'Sự kiện'
    },
    {
      id: 3,
      title: 'Hội thảo khoa học về công nghệ giao thông thông minh',
      image: news3Image,
      date: '10/07/2023',
      excerpt: 'Hội thảo khoa học quốc tế về công nghệ giao thông thông minh sẽ được tổ chức tại Phân hiệu trường Đại học GTVT...',
      category: 'Nghiên cứu'
    },
    {
      id: 4,
      title: 'Thông báo về việc đăng ký học phần học kỳ I năm học 2023-2024',
      image: news4Image,
      date: '01/08/2023',
      excerpt: 'Phòng Đào tạo thông báo về việc đăng ký học phần học kỳ I năm học 2023-2024 cho sinh viên các khóa...',
      category: 'Đào tạo'
    }
  ];

  const categories = [
    { id: 1, name: 'Tất cả' },
    { id: 2, name: 'Tuyển sinh' },
    { id: 3, name: 'Đào tạo' },
    { id: 4, name: 'Nghiên cứu' },
    { id: 5, name: 'Sự kiện' },
    { id: 6, name: 'Thông báo' }
  ];

  return (
    <section className="news-section">
      <div className="container">
        <div className="section-header">
          <h2>TIN TỨC - SỰ KIỆN</h2>
          <div className="news-categories">
            {categories.map(category => (
              <button key={category.id} className={category.id === 1 ? 'active' : ''}>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="news-grid">
          {news.map(item => (
            <div key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <span className="news-category">{item.category}</span>
              </div>
              <div className="news-content">
                <h3><Link to={`/tin-tuc/${item.id}`}>{item.title}</Link></h3>
                <div className="news-meta">
                  <span className="news-date">
                    <i className="far fa-calendar-alt"></i> {item.date}
                  </span>
                </div>
                <p>{item.excerpt}</p>
                <Link to={`/tin-tuc/${item.id}`} className="read-more">
                  Xem thêm <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all">
          <Link to="/tin-tuc" className="btn-view-all">
            Xem tất cả tin tức <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
