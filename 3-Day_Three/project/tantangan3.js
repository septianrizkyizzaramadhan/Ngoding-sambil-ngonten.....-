// Sistem Analisis User & Email Validasi

async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
            throw new Error(`Terjadi error: ${response.status}`)
        }

        const data = await response.json();
        const spesifikData = data
            .filter(item => item.email.endsWith('.biz'))
        
        console.log(spesifikData)
    } catch (error) {
        console.error("ERROR:", error.message)
    }
}
getData()