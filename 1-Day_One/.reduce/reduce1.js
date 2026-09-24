const transaksi = [
  { deskripsi: 'Gaji', tipe: 'pemasukan', nominal: 5000000 },
  { deskripsi: 'Makan', tipe: 'pengeluaran', nominal: 50000 },
  { deskripsi: 'Freelance', tipe: 'pemasukan', nominal: 1500000 },
  { deskripsi: 'Bensin', tipe: 'pengeluaran', nominal: 30000 }
];

const summary = transaksi.reduce((acc, item) => {
    acc[item.tipe] += item.nominal;
    return acc;
}, {pemasukan: 0, pengeluaran: 0});

console.log(summary)