document.getElementById("btn").addEventListener("click", function () {
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    let result = document.querySelector(".result");
    let operator = document.getElementById("selectOption").value;

    switch (operator) {
        case "plus":
            result.innerHTML = Number(num1) + Number(num2);
            break;
        case "minus":
            result.innerHTML = Number(num1) - Number(num2);
            break;
        case "dev":
            result.innerHTML = Number(num1) / Number(num2);
            break;
        case "multi":
            result.innerHTML = Number(num1) * Number(num2);
    }
});