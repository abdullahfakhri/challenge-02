
function getSplitName(personName) {
    let name = personName;
    let result = [];

    if (typeof name !== "string") {
        return "ERROR : Paremeter ini bukan string";
    }

    if (name.match(/(\w+)/g).length === 1) {
        result.push({
            firstName: name.split(" ")[0],
            middelName: name.split === "null",
            lastName: name.split === "null",
        });
        return result;
    }
    if (name.match(/(\w+)/g).length === 2) {
        result.push({
            firstName: name.split(" ")[0],
            middelName: name.split === "null",
            lastName: name.split(" ")[1],
        });
        return result;
    }
    if (name.match(/(\w+)/g).length === 3) {
        result.push({
            firstName: name.split(" ")[0],
            middelName: name.split(" ")[1],
            lastName: name.split(" ")[2],
        });
        return result;
    }

    if (name.match(/(\w+)/g).length > 3){
        return "ERROR : This Function Only For 3 Characters";
    }
}

// function getSplitName(personeName) {
//     let namaBaru = personeName;
//     let namaBaru1 = [];

//     if (typeof namaBaru !== "string") {
//         return "Ini bukan string"
//     }

//     if (namaBaru.match(/(\w+)/g.)length === 1) {
//         namaBaru1.push({
//             firstName: namaBaru.split(" ")[0],
//             middelName: namaBaru.split === "null",
//             lastName: namaBaru.split === "null",
//         });
//         return namaBaru1;
//     }

//     if (namaBaru.match(/(\w+)/g.)length === 2) {
//         namaBaru1.push({
//             firstName: namaBaru.split(" ")[0],
//             middelName: namaBaru.split === "null",
//             lastName: namaBaru.split(" ")[1],
//         });
//         return namaBaru1;
//     }

//     if (namaBaru.match(/(\w+)/g.)length === 3) {
//         namaBaru1.push({
//             firstName: namaBaru.split(" ")[0],
//             middelName: namaBaru.split(" ")[1],
//             lastName: namaBaru.split === (" ")[2],
//         });
//         return namaBaru1;
//     }

//     if (namaBaru.match(/(\w+)/g.)length > 3) {
//         return "Hanya boleh 3 karakter kata"
//     }
// }

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));