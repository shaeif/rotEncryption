const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const letter = 'abcdefghijklmnopqrstuvwxyz'
const rotValue = 1
readline.question('Enter the plantext\n', string => {
    const text = string.toLowerCase()
    let encryptString = []
    for (let i = 0; i < text.length; i++) {
        if (text[i] != " ") {
            let letNum = letter.indexOf(text[i])
            if (letNum > letter.length - rotValue) {
                letNum = letNum - (letter.length - rotValue)
            } else {
                letNum += rotValue
            }
            encryptString.push(letter[letNum])
        } else {
            encryptString.push("-")
        }
    }
    console.log(encryptString.join(""))
    process.exit(1)
})
