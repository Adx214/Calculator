let string = "";
let input = document.querySelector("input");
let button = Array.from(document.getElementsByTagName("button"))
let t = document.querySelector(".text");
function mathfact() {
    let p = fetch("http://numbersapi.com/25/math");
    p.then((response) => {
        console.log("without json", response);
        return response.text();
    })
        .then((response) => {
            t.innerText = response;
        });
}
mathfact();
button.forEach((button) => {
    button.addEventListener("click", function (e) {
        if (e.target.innerText == "=") {
            string = eval(string);
            input.value = string;
            mathfact();
        }
        else if (e.target.innerText == "C") {
            string = "";
            input.value = string
        }
        else if (e.target.innerText == 'X') {
            string = string + "*"
            input.value = string
        }
        else {
            string = string + e.target.innerText;
            input.value = string;
        }
    })
})