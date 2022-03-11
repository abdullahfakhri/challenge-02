const dataPenjualanNovel = [ 
    { 
        idProduct:'BOOK002421', 
        namaProduct: 'Pulang-Pergi', 
        penulis: 'Tere Liye', 
        hargaBeli: 60000, 
        hargaJual:86000, 
        totalTerjual: 150, 
        sisaStok: 17, 
    }, 
    { 
        idProduct:'BOOK002351', 
        namaProduct: 'Selamat Tinggal', 
        penulis: 'Tere Liye', 
        hargaBeli: 75000, 
        hargaJual:103000, 
        totalTerjual: 171, 
        sisaStok: 20, 
    }, 
    { 
        idProduct:'BOOK002941', 
        namaProduct: 'Garis Waktu', 
        penulis: 'Fiersa Besari', 
        hargaBeli: 67000, 
        hargaJual:99000, 
        totalTerjual: 213, 
        sisaStok: 5, 
    }, 
    { 
        idProduct:'BOOK002941', 
        namaProduct: 'Laskar Pelangi', 
        penulis: 'Andrea Hirata', 
        hargaBeli: 55000, 
        hargaJual:68000, 
        totalTerjual: 20, 
        sisaStok: 56, 
    }, 
] 
 
function getInfoPenjualan(dataPenjualanNovel) { 
    const total ={ 
        totalKeuntungan:0, 
        totalModal:0, 
        presentaseKeuntungan:0, 
        produkBukuTerlaris:"", 
        penulisTerlaris:"", 
    } 

    let totalStok=0; 
    let totalTerjualSekarang=0; 
    let bukuTerlarisSekarang=0; 
 
    dataPenjualanNovel.map((item)=>{ 
        totalStok =item.totalTerjual + item.sisaStok 
        total.totalKeuntungan += item.hargaJual - item.hargaBeli; 
        total.totalModal += totalStok * item.hargaBeli; 
        total.presentaseKeuntungan = total.totalModal/item.hargaBeli 

        if(item.totalTerjual>totalTerjualSekarang){ 
            total.produkBukuTerlaris= item.namaProduct 
            totalTerjualSekarang = item.totalTerjual 
        } 
 
        if(item.totalTerjual>bukuTerlarisSekarang){ 
            total.penulisTerlaris= item.penulis 
            bukuTerlarisSekarang = item.totalTerjual 
        } 
    }); 
 
    return total 
} 
console.log(getInfoPenjualan(dataPenjualanNovel));
