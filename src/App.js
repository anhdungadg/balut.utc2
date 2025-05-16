import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Thêm các route khác ở đây */}
            <Route path="*" element={<div className="container page-not-found">
              <h1>404 - Không tìm thấy trang</h1>
              <p>Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.</p>
            </div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
