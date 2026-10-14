export function ambilData() {
    const dataLama = localStorage.getItem('catatan')
    return dataLama ? JSON.parse(dataLama) : []
}

export function simpanData(data) {
    localStorage.setItem('catatan', JSON.stringify(data))
}