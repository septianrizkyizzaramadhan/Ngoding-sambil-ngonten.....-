export async function getUsers(jumlah = 222222){
    const res = await fetch(`https://randomuser.me/api/?results=${jumlah}`)

    if(!res.ok) {
        throw new Error('ERROR: GAGAL MEMUAT API!')
    }
    const data = await res.json()
    return data.results
}