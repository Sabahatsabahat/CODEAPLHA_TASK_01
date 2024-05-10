document.getElementById("ageCalculator")!.addEventListener("submit", function(event: Event) {
    event.preventDefault();

    const birthdateInput = document.getElementById("birthdate") as HTMLInputElement;
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();

    if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
        age--;
    }

    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerText = `Your age is: ${age}`;
    }
});
