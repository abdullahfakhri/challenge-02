const dataAngka = [9,4,7,7,4,3,2,2,8]

function getAngkaTerbesarKedua (personName){
    let angka1 = array.isArray(personName)
    if (angka1 == true){
        return "true"
    }else{
        return "false"
    }
    let angka2 = personName.sort ((a, b) => {
        return b - a
    });
    return angka2 [1]
}

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());