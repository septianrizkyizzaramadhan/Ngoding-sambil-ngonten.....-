let favorites = []

const savedfavorites = localStorage.getItem('my_favorites')
if (!savedfavorites) {
    favorites = JSON.parse(savedfavorites);
    tampilkanFavorit();
}

function tambahFavorit(itemData) {
    const sudahAda = favorites.some(item => item.id === itemData.id)

    if(!sudahAda) {
        favorites.push(itemData)

        localStorage.setItem('my_favorites', JSON.stringify(favorites))

        console.log("berhasil disimpan")
        tambahFavorit()

    }else {
        console.log('item sudah ada di daftar favorit')
    }

}