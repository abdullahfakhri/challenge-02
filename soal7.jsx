const dataPenjualanPakAldi = [
    {
        namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Black High',
        hargaSatuan : 960000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Maroon High ',
        hargaSatuan : 360000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan : 120000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },
]

function getTotalPenjualan(jumlah){
    let totalPenjualan = 0
    jumlah.map((value, index) => {
        totalPenjualan += value.hargaSatuan
    })
    return totalPenjualan
}
console.log(getTotalPenjualan(dataPenjualanPakAldi))
