const url = "http://127.0.0.1:3000/calculate"
document.getElementById("button").addEventListener("click",(e) => {
    var inputValue = document.getElementById("expression").value;
    calculateExpression(inputValue)
})

function calculateExpression(val) {
    fetch(url, {
        method : "POST",
        body: JSON.stringify({
            exp: val
        }),
        headers: new Headers({'content-type': 'application/json'})
    })
    .then(response => response.json())
    .then(res => {
        console.log(res);
        document.getElementById("result").innerHTML = res.result;
    });
}