// basic filter (mencari item menggunakan kata kunci)

const daftarProduk = [
  { id: 1, nama: 'Laptop Gaming Asus' },
  { id: 2, nama: 'Mouse Wireless Logi' },
  { id: 3, nama: 'Keyboard Mechanical' },
  { id: 4, nama: 'Laptop Macbook Pro' }
];

const kataKunci = 'laptop'

const hasilCari = daftarProduk.filter(item => item.nama.toLocaleLowerCase().includes(kataKunci.toLocaleString()));

console.log(hasilCari)