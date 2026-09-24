let kotak = [ 
    {id: 1, namaBarang: 'pintu', harga: 100000, qty: 5},
    {id: 2, namaBarang: 'AC', harga: 200000, qty: 3}
]

function tambahKeKotak(barangBaru)  {
    kotak = [...kotak, barangBaru];
}

tambahKeKotak({id: 3, namaBarang: 'HP', harga: 1000000, qty: 5});

console.log("isi keranjang Baru:");
console.log(kotak)

// Penggunaan destructuring dan rest/spread

function buatResep(itemKotak) {
    return itemKotak.map(item => {
        const {harga, qty, ...detailItem} = item;

        const total = harga * qty; 

        return {
            ...detailItem,
            total: total
        }
    })
}

const resep = buatResep(kotak)

console.log('\n Struk Pembayaran')
console.log(resep)