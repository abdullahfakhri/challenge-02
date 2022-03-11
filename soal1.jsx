let selectedText = "mencintai"
let changedText = "membenci"
let text = "Andini sangat mencintai Kamu selamanya"
// let kalimat1 = "nama saya abdullah hasan mufid fakhri"

// let str = "selamat datang di jakarta"
// const strBaru = str.replace('jakarta','bandung')

function changeWord(selectedText, changedText, text){
    let kataBaru = text.replace(selectedText,changedText)
    return kataBaru
}

console.log (changeWord(selectedText, changedText, text))