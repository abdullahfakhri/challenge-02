const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang-Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86800,
        totalTerjual: 150,
        sisaStock: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStock: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStock: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hitari',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStock: 56,
    },
]

function getInfoPenjualan(total) {
    let totalKeuntungan = 0
    let totalModal = 0
    let persentaseKeuntungan = 0
    let produkBukuTerlaris = 0
    let penulisTerlaris = 0
    total.map((value, index) => {
        totalKeuntungan += (value.hargaJual * value.totalTerjual) - ((value.totalTerjual + value.sisaStock) * value.hargaBeli)
        totalModal += (value.totalTerjual + value.sisaStock) * value.hargaBeli
        persentaseKeuntungan += ((value.totalTerjual + value.sisaStock) * value.hargaJual) - ((value.totalTerjual + value.sisaStock) * value.hargaBeli) / ((value.totalTerjual + value.sisaStock) * value.hargaBeli) * 100
    })
    produkBukuTerlaris = total.reduce((previousValue, currentValue) => {
        if (previousValue.totalTerjual > currentValue.totalTerjual){
            return previousValue.namaProduk
        }else{
            return currentValue.namaProduk
        }
    });
    penulisTerlaris = total.reduce((previousValue, currentValue) => {

        if (previousValue.totalTerjual > currentValue.totalTerjual){
            return previousValue.penulis
        }else{
            return currentValue.penulis
        }
    });

    return (totalKeuntungan)
    return (totalModal)
    return (persentaseKeuntungan)
    return (produkBukuTerlaris)
    return (penulisTerlaris)
    

}
console.log(getInfoPenjualan(dataPenjualanNovel));