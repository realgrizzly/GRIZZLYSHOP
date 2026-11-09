const PRODUCTS=[
{id:1,name:"Valorant Points",category:"เติมเกม",price:35,emoji:"💎",tag:"ยอดนิยม",description:"เติม VP สำหรับเกม Valorant เหมาะสำหรับผู้เล่นที่ต้องการซื้อสกินและไอเทมภายในเกม"},
{id:2,name:"Free Fire Diamonds",category:"เติมเกม",price:49,emoji:"💠",tag:"HOT",description:"เพชรสำหรับ Free Fire ใช้ซื้อไอเทมและของตกแต่งภายในเกม"},
{id:3,name:"Steam Wallet 100 THB",category:"บัตรเติมเงิน",price:105,emoji:"🎟️",tag:"",description:"บัตรเติมเงิน Steam Wallet สำหรับเติมเงินเข้า Steam Wallet"},
{id:4,name:"Roblox Gift Card",category:"บัตรเติมเงิน",price:120,emoji:"🧱",tag:"NEW",description:"Gift Card สำหรับเพิ่มเครดิตใน Roblox"},
{id:5,name:"กล่องสุ่มไอเทมเกม",category:"ไอเทมเกม",price:59,emoji:"🎁",tag:"SPECIAL",description:"กล่องสุ่มไอเทมดิจิทัล ตัวอย่างสินค้าเพื่อแสดงหน้ารายละเอียด"},
{id:6,name:"Game Pass Premium",category:"ไอเทมเกม",price:199,emoji:"🏆",tag:"",description:"แพ็กเกจเสริมประสบการณ์การเล่นเกม"},
{id:7,name:"Gaming Headset",category:"อุปกรณ์เกมมิ่ง",price:890,emoji:"🎧",tag:"แนะนำ",description:"หูฟังสำหรับเล่นเกม ตัวอย่างอุปกรณ์เกมมิ่ง"},
{id:8,name:"RGB Gaming Mouse",category:"อุปกรณ์เกมมิ่ง",price:590,emoji:"🖱️",tag:"",description:"เมาส์เกมมิ่งไฟ RGB สำหรับการเล่นเกม"}
];
function productCard(p){const detailUrl=document.body.dataset.page==="home"?"pages/product-detail.html":"product-detail.html";return `<article class="product"><a href="${detailUrl}?id=${p.id}"><div class="product-art"><label>${p.tag||p.category}</label>${p.emoji}</div></a><div class="product-info"><small>${p.category.toUpperCase()}</small><h3><a href="${detailUrl}?id=${p.id}">${p.name}</a></h3><div class="product-foot"><b>฿${p.price.toLocaleString("th-TH")}</b><button type="button" data-add="${p.id}" aria-label="เลือก ${p.name}">+</button></div></div></article>`}
function notify(message){let t=document.getElementById("toast");if(!t){t=document.createElement("div");t.id="toast";t.className="toast";document.body.append(t)}t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
document.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(b){const p=PRODUCTS.find(x=>x.id===Number(b.dataset.add));notify(`เพิ่ม ${p.name} ลงตะกร้าตัวอย่างแล้ว`)}});
