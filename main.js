document.getElementById("ageCalculator").addEventListener("submit", function (event) {
    event.preventDefault();
    var birthdateInput = document.getElementById("birthdate");
    var birthdate = new Date(birthdateInput.value);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
        age--;
    }
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerText = "Your age is: ".concat(age);
    }
});
