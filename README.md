# IoT

Dự án IoT kiểm soát trạng thái trong phòng sử dụng vi điều khiển ESP8266 để giám sát nhiệt độ, độ ẩm, mức độ ánh sáng và kiểm soát việc bật/tắt đèn và quạt.

# Hướng dẫn cài đặt

## Bước 1: Clone dự án về máy

> git clone https://github.com/tiendat14099/IOT.git

## Bước 2: Cài đặt thư viện

Mở Terminal trong VSC nhập dòng lệnh sau

> cd backend

Sau đó thực hiện lệnh sau, hệ thống sẽ tự động tải xuống các thư viện cần thiết ở package.json.

> npm install

## Bước 3: Kết nối với Database

Chỉnh sửa thông tin ở trong file connectDB.js

## Bước 4: Chạy chương trình

Gõ lệnh sau vào Terminal

> node main.js

Sau đó Server sẽ được khởi chạy. Truy cập vào http://localhost:2002/api-docs/ để xem apidocs của Server.
