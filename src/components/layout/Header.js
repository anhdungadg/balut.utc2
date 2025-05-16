import React from 'react';
import '../../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <div className="top-header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="UTC2 Logo" />
              <div className="logo-text">
                <h1>TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI</h1>
                <h2>PHÂN HIỆU TẠI TP. HỒ CHÍ MINH</h2>
              </div>
            </Link>
          </div>
          <div className="header-right">
            <div className="search-box">
              <input type="text" placeholder="Tìm kiếm..." />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <div className="language-selector">
              <button>VI</button>
              <button>EN</button>
            </div>
          </div>
        </div>
      </div>
      <nav className="main-navigation">
        <div className="container">
          <ul className="nav-menu">
            <li><Link to="/">TRANG CHỦ</Link></li>
            <li><Link to="/gioi-thieu">GIỚI THIỆU</Link></li>
            <li><Link to="/dao-tao">ĐÀO TẠO</Link></li>
            <li><Link to="/nghien-cuu">NGHIÊN CỨU</Link></li>
            <li><Link to="/sinh-vien">SINH VIÊN</Link></li>
            <li><Link to="/tuyen-sinh">TUYỂN SINH</Link></li>
            <li><Link to="/lien-he">LIÊN HỆ</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
