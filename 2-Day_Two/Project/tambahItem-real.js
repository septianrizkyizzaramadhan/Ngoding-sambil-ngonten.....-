// Tantangan: Fitur Update Stok & Profil Kasir
// Kamu diminta membuat fungsi logika sederhana untuk manajemen stok barang toko dengan ketentuan berikut

const item = {
  id: 'PRD-01',
  name: 'Kampas Rem',
  price: 150000,
  stock: 10,
  category: 'Sparepart'
};

function updateStock(product, qtySold) {
    const {stock, ...otherProduck} = product
    const newStock = stock - qtySold    
    return {
        ...otherProduck,
        stock: newStock
    }
}

const updateItem = updateStock(item, 3)
console.log(updateItem)