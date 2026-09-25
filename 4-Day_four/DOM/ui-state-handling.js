async function loadData() {
    const container = document.querySelector('#app')
    
    container.innerHTML = `<p>Sedang mengambil data</p>`
    
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()

        container.innerHTML = data.map(item => `<div>${item.name}</div>`).join('');
    } catch (error) {
        container.innerHTML = `<p class='error'>GAGAL MEMUAT DATA: ${error.message}</p>`;               
    }

}
