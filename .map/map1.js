// BELAJAR .map() METHOD (Mengekstrak 1 Properti Spesifik dari Array Object)


const user = [
    {id: 1, name: 'revy', email: 'revy@gmail.com', status: 'aktif'},
    {id: 2, name: 'rido', email: 'rido@gmail.com', status: 'aktif'},
    {id: 3, name: 'roni', email: 'roni@gmail.com', status: 'inaktif'}
]

const listEmail = user
    .map((item, index) => `${index + 1}.${item.name} ${item.email}`);

console.log(listEmail)