//  menghitung total biaya

const keranjang = [
  { produk: 'Kemeja', harga: 150000, qty: 2 }, // 300.000
  { produk: 'Celana', harga: 200000, qty: 1 }, // 200.000
  { produk: 'Kaos Kaki', harga: 25000, qty: 3 } // 75.000
];

const totalBiaya = keranjang.reduce((acc, item) => {
    return acc + (item.harga * item.qty)
}, 0);

console.log(`Rp.${totalBiaya}`)