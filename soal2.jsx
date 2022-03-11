// let givenNumber = 2

function checkTypeNumber(givenNumber){
    if(typeof(givenNumber) == 'number'){
        if(givenNumber % 2 == 0){
            return "Bilangan Genap"
        }else{
            return "Bialngan Ganjil"
        }
    }else{
        return "bukan bilangan"
    }


}
console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())
