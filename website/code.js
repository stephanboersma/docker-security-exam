
// URL to the hosted website + endpoint to calculate
const url = "http://127.0.0.1:8080/calculate"

// Add eventlistener to record button clicks
document.getElementById("button").addEventListener("click", (e) => {
    var inputValue = document.getElementById("expression").value;
    calculateExpression(inputValue)
})

// Function to calculate user input
function calculateExpression(val) {
    fetch(url, {
            method: "POST",
            body: JSON.stringify({
                exp: val
            }),
            headers: new Headers({
                'content-type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(res => {
            console.log(res);
            document.getElementById("result").innerHTML = res.result;
        });
}