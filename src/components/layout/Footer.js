import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI</h3>
            <h4>PHÂN HIỆU TẠI TP. HỒ CHÍ MINH</h4>
            <p>Địa chỉ: 450-451 Lê Văn Việt, Phường Tăng Nhơn Phú A, TP. Thủ Đức, TP. Hồ Chí Minh</p>
            <p>Điện thoại: (028) 3896 6798 - (028) 7300 1155</p>
            <p>Email: banbientap@utc2.edu.vn</p>
          </div>
          <div className="footer-column">
            <h3>LIÊN KẾT</h3>
            <ul>
              <li><a href="https://utc.edu.vn/">Trường Đại học GTVT Hà Nội</a></li>
              <li><a href="https://moet.gov.vn/">Bộ Giáo dục và Đào tạo</a></li>
              <li><a href="https://mt.gov.vn/">Bộ Giao thông Vận tải</a></li>
              <li><a href="/sitemap">Sơ đồ website</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/utc2.edu.vn/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCWgW1WGIwWAYjU-xC3L9WCg" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="mailto:banbientap@utc2.edu.vn">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <div className="visitor-counter">
              <p>Lượt truy cập: 1,234,567</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© {new Date().getFullYear()} Phân hiệu trường Đại học Giao thông Vận tải tại TP. Hồ Chí Minh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
