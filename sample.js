const ce = document.querySelector(".CE");
const to = document.querySelectorAll(".to");
const bck = document.querySelector(".bck");
const userInput = document.getElementById("txt-area");
const equal = document.querySelector(".equal");

let evaluate = "";

update();
equal1();
function update() {
    to.forEach(element => {
        element.addEventListener("click",(e) => {
            evaluate += e.target.innerHTML;
            userInput.value = evaluate;
        })
    });
}

function equal1() {
    equal.addEventListener("click", () => {
        if (evaluate === undefined){
            userInput.value = 0;
        } else if (evaluate !== undefined) {
            userInput.value = eval(userInput.value);
            evaluate = "";
        }
    }) 
}

ce.addEventListener("click", () => {
    userInput.value = 0;
    evaluate = "";
})

bck.addEventListener("click", () => {
    if (evaluate.length > 0){
        evaluate = evaluate.slice(0, evaluate.length - 1);
        console.log(evaluate);
    }
    userInput.value = evaluate;
})



