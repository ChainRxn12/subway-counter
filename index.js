
// // onclick for incriment button
// // initialize the count as 0
// // change the counter-el in the html to reflect the new count

let count = 0
let counterEl = document.getElementById('counter-el') //pass in 'counter-el' argument
let saveEl = document.getElementById('save-el')

console.log(saveEl)


function increment() {
    count += 1
    counterEl.innerHTML = count
    
}


function save() {
    let countStr = " " + count + " - "
    saveEl.innerHTML += countStr
}



