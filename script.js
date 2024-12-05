let string = "";

let input = document.getElementById("text");
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "AC") {
            string = '';
            input.value = string;
        }
        else if (e.target.innerHTML == "=") {

            string = eval(string);

            if (string == undefined) {

                string = '';
                input.value = string;
            }
            else {
                input.value = string;
            }

        }
        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    });
});

