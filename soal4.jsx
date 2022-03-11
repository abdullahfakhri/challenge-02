let regex = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/

function isValidPassword (password) {
    if (typeof (password) == "string") {
        let hasil = regex.test(password)
        if(hasil == true){
            return "password memenuhi requirement"
        }else{
            return "coba password baru"
        }
    }else{
        return "ini bukan password"
    }
}
console.log(isValidPassword("Meong2021"))
console.log(isValidPassword("@eong"))
console.log(isValidPassword("Meong2"))
console.log(isValidPassword(0))
console.log(isValidPassword())
