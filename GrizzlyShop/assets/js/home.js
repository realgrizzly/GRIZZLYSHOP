document.getElementById("featuredProducts").innerHTML=PRODUCTS.slice(0,4).map(productCard).join("");


async function loadFeaturedProducts() {
    const container = document.getElementById("featuredProducts");

    try {
        const { data, error } = await window.sb
            .from("products")
            .select("*")
            .eq("status", "active")
            .limit(4);

        if (error) throw error;

        if (!data || data.length === 0) {
            container.textContent = "ยังไม่มีสินค้า";
            return;
        }

        container.innerHTML = data.map(product => `
            <div class="product-card">
                <img
                    src="${product.image_url}"
                    alt="${product.name}"
                >

                <div class="product-info">
                    <small>${product.category}</small>
                    <h3>${product.name}</h3>
                    <p>฿${Number(product.price).toFixed(2)}</p>
                    <p>คงเหลือ ${product.stock} ชิ้น</p>
                </div>
            </div>
        `).join("");

    } catch (error) {
        console.error(error);
        container.textContent = "โหลดสินค้าไม่สำเร็จ";
    }
}

loadFeaturedProducts();
