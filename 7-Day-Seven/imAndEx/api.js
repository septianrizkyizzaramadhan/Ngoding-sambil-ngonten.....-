export async function ambilDataPengguna(jumlah = 3) {
    const res = await fetch(`https://randomuser.me/api/?results=${jumlah}`)

    if (!res.ok) {
        throw new Error('Gagal memuat API')
    }

    const data = await res.json()
    return data.results
}