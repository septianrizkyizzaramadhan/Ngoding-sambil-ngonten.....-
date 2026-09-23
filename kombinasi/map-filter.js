// kombinasi .map() dan .filter()

const inventory = [
    {nama: 'monitor', ready: true},
    {nama: 'mouse', ready: true},
    {nama: 'handphone', ready: false}
]

const hasil = inventory
    .filter(item => item.ready === false)
    .map(item => item.nama.toUpperCase());

console.log(hasil)