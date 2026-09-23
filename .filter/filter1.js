// menghapus item dari array  

let cart = [
  { id: 'P1', nama: 'Sepatu', qty: 1 },
  { id: 'P2', nama: 'Baju', qty: 2 },
  { id: 'P3', nama: 'Topi', qty: 1 }
];

const hapusId = 'p1';

cart =  cart.filter(item => item.id.toLocaleLowerCase() !== hapusId); // menggunakan toLowerCase agar menyesuaikan datanya. 

console.log(cart)