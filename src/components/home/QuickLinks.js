import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/QuickLinks.css';

const QuickLinks = () => {
  const links = [
    {
      id: 1,
      title: 'Tuyển sinh',
      icon: 'fas fa-graduation-cap',
      url: '/tuyen-sinh',
      color: '#e74c3c'
    },
    {
      id: 2,
      title: 'Đào tạo',
      icon: 'fas fa-book',
      url: '/dao-tao',
      color: '#3498db'
    },
    {
      id: 3,
      title: 'Nghiên cứu',
      icon: 'fas fa-flask',
      url: '/nghien-cuu',
      color: '#2ecc71'
    },
    {
      id: 4,
      title: 'Sinh viên',
      icon: 'fas fa-user-graduate',
      url: '/sinh-vien',
      color: '#f39c12'
    },
    {
      id: 5,
      title: 'Thư viện',
      icon: 'fas fa-book-open',
      url: '/thu-vien',
      color: '#9b59b6'
    },
    {
      id: 6,
      title: 'Liên hệ',
      icon: 'fas fa-envelope',
      url: '/lien-he',
      color: '#1abc9c'
    }
  ];

  return (
    <section className="quick-links">
      <div className="container">
        <div className="links-grid">
          {links.map(link => (
            <Link key={link.id} to={link.url} className="link-card" style={{ backgroundColor: link.color }}>
              <div className="link-icon">
                <i className={link.icon}></i>
              </div>
              <h3>{link.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
