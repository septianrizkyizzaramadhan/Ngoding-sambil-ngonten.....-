// mencari tugas yang perlu di kerjakan melalu API BERIKUT : https://jsonplaceholder.typicode.com/todos

async function tugas() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        if (!response.ok) {
            throw new Error(`TERJADI KESALAHAN ${response.status}`)
        }

        console.log("Mengabil data.....")

        const data =  await response.json();
        const pending = data.filter(item => !item.completed)
        const hasil = pending.map(item => {
            const {id, title} = item
            
            return {
                id,
                title,
                StatusText: 'Perlu dikerjakan'
            }
        })
        
        console.log(hasil.slice(0, 10));

    } catch (error) {
        console.error('Terjadi kesalahan', error.message)
    }
}

tugas()