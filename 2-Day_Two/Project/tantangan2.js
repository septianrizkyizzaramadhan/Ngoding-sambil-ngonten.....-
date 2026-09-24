const antrean = ['Servis Rem', 'Ganti Oli', 'Tune Up'];

function prosesAntrean(list, antreanBaru) {
    const [sedangMengerjakan, ...sisaAntrean] = list
    return {
        diproses: sedangMengerjakan,
        antreanBaru: [antreanBaru, ...sisaAntrean]
    }
}

const hasil = prosesAntrean(antrean, 'Ganti Ban');
console.log(hasil);

//BELUM LULUS 5/10