# UTC2 Website Clone - Học tập ReactJS

Dự án này được tạo với mục đích học tập về HTML và ReactJS bằng cách xây dựng một trang web tương tự như trang web của Trường Đại học Giao thông Vận tải - Phân hiệu tại TP.HCM. Toàn bộ dự án được phát triển với sự hỗ trợ của Amazon Q Developer thông qua giao diện dòng lệnh Q CLI.

## Giới thiệu

Đây là một dự án clone trang web UTC2 (https://utc2.edu.vn/) sử dụng ReactJS. Dự án này được tạo ra với mục đích học tập và thực hành kỹ năng phát triển web frontend với ReactJS.

## Cấu trúc dự án

```
utc2-clone/
├── public/               # Thư mục chứa tài nguyên tĩnh
├── src/                  # Mã nguồn của ứng dụng
│   ├── assets/           # Hình ảnh, font chữ và các tài nguyên khác
│   ├── components/       # Các component React
│   │   ├── common/       # Các component dùng chung
│   │   ├── home/         # Các component cho trang chủ
│   │   └── layout/       # Các component layout (Header, Footer)
│   ├── pages/            # Các trang của ứng dụng
│   ├── styles/           # CSS cho các component
│   ├── App.js            # Component gốc của ứng dụng
│   └── index.js          # Điểm khởi đầu của ứng dụng
└── package.json          # Cấu hình và dependencies
```

## Các tính năng đã triển khai

1. **Header và Navigation**: Menu chính và thanh tìm kiếm
2. **Slider**: Trình chiếu hình ảnh trên trang chủ
3. **Quick Links**: Các liên kết nhanh đến các phần quan trọng
4. **News Section**: Hiển thị tin tức và sự kiện
5. **Footer**: Thông tin liên hệ và liên kết hữu ích

## Công nghệ sử dụng

- React.js
- React Router DOM
- CSS thuần
- Font Awesome (cho các biểu tượng)

## Cài đặt và chạy dự án

1. Clone repository:
```bash
git clone <repository-url>
cd utc2-clone
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy ứng dụng ở môi trường phát triển:
```bash
npm start
```

4. Truy cập ứng dụng tại địa chỉ [http://localhost:3000](http://localhost:3000)

## Hướng dẫn học tập

1. **Tìm hiểu cấu trúc component**: Phân tích cách các component được tổ chức và tương tác với nhau
2. **CSS và Styling**: Học cách tạo layout và thiết kế responsive
3. **React Router**: Hiểu cách điều hướng trong ứng dụng React
4. **State Management**: Tìm hiểu cách quản lý trạng thái trong các component

## Lưu ý

Dự án này chỉ dùng cho mục đích học tập và không có ý định thương mại hóa hoặc sao chép nội dung của trang web gốc. Tất cả nội dung và hình ảnh được sử dụng chỉ nhằm mục đích minh họa.

## Tác giả

Được phát triển bởi [Tên của bạn] với mục đích học tập ReactJS.

## Phát triển với Amazon Q Developer

### Giới thiệu về Amazon Q Developer

Amazon Q Developer là một trợ lý AI được phát triển bởi AWS, được thiết kế để hỗ trợ các nhà phát triển trong quá trình lập trình. Amazon Q có thể:

- Tạo, giải thích và debug code
- Trả lời các câu hỏi về lập trình và công nghệ
- Hỗ trợ chuyển đổi và hiện đại hóa ứng dụng
- Tạo và tối ưu hóa các tài nguyên AWS
- Phân tích và đề xuất cải tiến cho code

Amazon Q Developer tích hợp với nhiều IDE phổ biến như VS Code, IntelliJ, PyCharm và có thể được sử dụng thông qua giao diện web hoặc dòng lệnh.

### Amazon Q CLI - Công cụ sử dụng để xây dựng dự án này

Dự án này được phát triển hoàn toàn với sự hỗ trợ của Amazon Q thông qua giao diện dòng lệnh (CLI). Amazon Q CLI là một công cụ mạnh mẽ cho phép tương tác với Amazon Q Developer trực tiếp từ terminal, giúp:

- Tạo và quản lý các dự án mới
- Tạo các component và file code
- Giải quyết các vấn đề kỹ thuật
- Tối ưu hóa code và cấu trúc dự án
- Tạo và chỉnh sửa các file CSS, JavaScript và React components

#### Cách sử dụng Amazon Q CLI

1. Cài đặt Amazon Q CLI:
```bash
pip install amazon-q-cli
```

2. Cấu hình Amazon Q CLI với AWS credentials:
```bash
q configure
```

3. Sử dụng Amazon Q trong terminal:
```bash
q chat "Tạo một component React hiển thị slider hình ảnh"
```

4. Sử dụng chế độ tương tác:
```bash
q chat
```

### Lợi ích của việc sử dụng Amazon Q CLI trong dự án này

- **Tăng tốc phát triển**: Amazon Q giúp tạo nhanh các component và code mẫu, giảm thời gian phát triển
- **Hỗ trợ học tập**: Cung cấp giải thích chi tiết về các khái niệm ReactJS và cách triển khai
- **Tối ưu hóa code**: Đề xuất cải tiến và best practices trong quá trình phát triển
- **Giải quyết vấn đề**: Hỗ trợ debug và khắc phục lỗi nhanh chóng
- **Tạo cấu trúc dự án**: Giúp thiết lập cấu trúc dự án theo tiêu chuẩn và dễ bảo trì

Toàn bộ cấu trúc dự án, các component, và file CSS trong dự án này đều được tạo và tối ưu hóa với sự hỗ trợ của Amazon Q Developer thông qua giao diện dòng lệnh, minh họa khả năng mạnh mẽ của công cụ này trong việc hỗ trợ phát triển web hiện đại.

### Tài nguyên học tập về Amazon Q Developer

- [Trang chủ Amazon Q Developer](https://aws.amazon.com/q/developer/)
- [Tài liệu Amazon Q CLI](https://docs.aws.amazon.com/amazonq/latest/cli-user-guide/what-is.html)
- [Workshop về Amazon Q Developer](https://catalog.workshops.aws/amazon-q-developer/en-US)



## DISCLAIMER
- For educational/reference purposes only
- Not production-ready, use at your own risk
- No warranty provided - test thoroughly before use
- Author not liable for any damages or issues
