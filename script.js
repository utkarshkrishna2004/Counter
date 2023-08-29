let counter = document.getElementById("count")

let click = 0;

counter.addEventListener("click", function(){
    click++;
    console.log(`The count is now ${click}`);

    let outputBar = document.getElementById("output")
    outputBar.innerHTML = `The count is now ${click}.`
})


let reseter = document.getElementById("reset")

reseter.addEventListener("click", function(){
    click = 0;
    console.log(`The count is now ${click}`);

    let outputBar = document.getElementById("output")
    outputBar.innerHTML = `The count is now ${click}.`
})


