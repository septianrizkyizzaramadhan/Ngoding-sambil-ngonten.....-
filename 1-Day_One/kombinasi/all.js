    const transaksi = [
    { id: 'T01', produk: 'Laptop', harga: 8000000, qty: 1, status: 'LUNAS' },
    { id: 'T02', produk: 'Mouse', harga: 150000, qty: 2, status: 'PENDING' },
    { id: 'T03', produk: 'Keyboard', harga: 500000, qty: 1, status: 'LUNAS' },
    { id: 'T04', produk: 'Monitor', harga: 2000000, qty: 2, status: 'LUNAS' },
    { id: 'T05', produk: 'Headset', harga: 350000, qty: 1, status: 'CANCELLED' }
    ];

    const hasil = transaksi
        .filter(item => item.status === 'LUNAS')
        .map((item, index) => `${index + 1}. ${item.produk} ${item.harga}`)

    console.log(hasil.join('\n'))

    const totalOmzet = transaksi
        .filter(item => item.status === "LUNAS")
        .reduce((acc, item) => acc + (item.harga * item.qty), 0);

    console.log("total omzet:", totalOmzet)