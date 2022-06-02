let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function incriment() {
    count +=1
    countEl.innerText = count
}

function save() {
    let previousEntries = count + " - "
    saveEl.textContent += previousEntries 
    console.log(count)
    count = 0
    countEl.textContent = count
}