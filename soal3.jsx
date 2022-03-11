let regex = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/


function email(email1){
    if (typeof (email1) == "string"){
        let hasil = regex.test(email1)
        if (hasil == true){
            return "VALID"
        }else{
            return "INVALID"
        }
    }else{
        return "ERROR"
    }
}
console.log(email("apranata@binar.co.id"))
console.log(email("apranata@binar.com"))
console.log(email("apranata@binar"))
console.log(email("apranata"))
console.log(email(3322))
console.log(email())