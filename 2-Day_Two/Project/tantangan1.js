    // Tantangan: Diskon Harga Produk
    // Kamu punya data produk toko dengan harga normal. Tugas kamu adalah membuat fungsi untuk memberikan diskon pada produk tersebut

    const product = {
    id: 'PRD-99',
    name: 'Oli Mesin',
    price: 100000,
    category: 'Pelumas'
    };

    function applyDiscount(item, discountAmount) {
        const {price, ...otherData} = item
        const discount = price - discountAmount 
        return { 
            ...otherData,
            price: discount
        }

    }

    const discountProduct = applyDiscount(product, 20000);
    console.log(discountProduct)