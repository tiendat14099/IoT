// Import thư viện Express để tạo ứng dụng web và thư viện MySQL để kết nối đến cơ sở dữ liệu MySQL
const express = require('express');
const mysql = require('mysql');

// Cấu hình kết nối đến cơ sở dữ liệu MySQL
var mysqlConfig = {
    host: 'localhost', // Địa chỉ host của MySQL
    user: 'root',      // Tên người dùng của MySQL
    password: '123456', // Mật khẩu của MySQL
    database: 'iot'    // Tên cơ sở dữ liệu MySQL
};

// Tạo một kết nối pool đến cơ sở dữ liệu MySQL, pool sẽ quản lý việc kết nối và tái sử dụng chúng
var pool  = mysql.createConnection(mysqlConfig);

// Kết nối đến cơ sở dữ liệu MySQL
pool.connect((err) => {
    if (err) {
        // Nếu có lỗi khi kết nối đến cơ sở dữ liệu, hiển thị thông báo lỗi
        console.error('Error connecting to MySQL:', err);
        return;
    }
    // Nếu kết nối thành công, hiển thị thông báo kết nối thành công
    console.log('Connected to MySQL database');
});

// Xuất kết nối pool để có thể sử dụng ở nơi khác trong ứng dụng
module.exports = pool;
