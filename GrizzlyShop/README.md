# GrizzlyShop — Multi-page HTML/CSS/JS

## โครงสร้างโปรเจกต์
```text
GrizzlyShop/
├── index.html                 # หน้าหลัก
├── pages/
│   ├── products.html          # หน้ารวมสินค้า / ค้นหา / กรอง / เรียงราคา
│   ├── product-detail.html    # หน้ารายละเอียดสินค้า (รับ id ผ่าน URL)
│   ├── premium.html            # หน้าแอพ/บริการพรีเมียม
│   └── login.html              # สมัครสมาชิก / เข้าสู่ระบบ (UI)
├── assets/
│   ├── css/style.css           # CSS กลางของทุกหน้า
│   └── js/
│       ├── layout.js           # Header/Footer และเมนูร่วม
│       ├── products-data.js    # ข้อมูลสินค้าและการ์ดสินค้า
│       ├── home.js             # สินค้าแนะนำหน้าแรก
│       ├── products-page.js    # ค้นหา/กรอง/เรียงสินค้า
│       ├── detail.js           # รายละเอียดสินค้า
│       ├── premium.js          # ปุ่มแพ็กเกจพรีเมียม
│       └── auth.js             # สลับหน้า login/register
└── README.md
```

## วิธีเปิด
เปิดโฟลเดอร์ด้วย VS Code แล้วใช้ Live Server โดยเริ่มจาก `index.html` หรือเปิดไฟล์ HTML ด้วยเบราว์เซอร์

## การแก้ไขข้อมูลสินค้า
แก้ไข array `PRODUCTS` ใน `assets/js/products-data.js`

## หมายเหตุ
ตอนนี้เป็น Frontend UI ตัวอย่างเท่านั้น ระบบสมาชิก ตะกร้าถาวร คำสั่งซื้อ และการชำระเงินยังไม่ได้เชื่อม Firebase/Backend
