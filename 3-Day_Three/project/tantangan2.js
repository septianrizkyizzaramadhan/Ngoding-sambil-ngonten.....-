// File: tantangan2.js

async function analisaKatalog() {
  try {
    const respone = await fetch('https://dummyjson.com/products')
    if (!respone.ok) {
        throw new Error(`Terjadi Error, ${respone.status}`)
    }

    const data = await respone.json()
    const properti = data.products  //tambahan products karena data didalam products.
        .filter(item => item.rating >= 4.5 && item.stock > 0)
        .map(item => {
            const {title, price, category, rating, stock} = item;
            return {
                title,
                hargaRupiah: price * 15000,
                category,
                rating,
                stock: stock < 10 ? 'Stock Hampir Habis' : 'Stock Aman'
            }
        })
        const hasil = properti
            .reduce((acc, item) => {return acc + item.hargaRupiah}, 0);

    console.log(properti.slice(0, 5))
    console.log(`estimasi nilai aset: Rp.${hasil.toLocaleString('id-ID')}`)

} catch (error) {
    console.error('Terjadi kesalahan:', error.message);
  }
}

analisaKatalog();

