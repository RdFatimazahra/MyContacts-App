const form = document.getElementById("form");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
    e.preventDefault();
    inputs.forEach((input) => {
        const errorMessage = input.nextElementSibling;
        if (input.value.trim() === "") {
            errorMessage.textContent = `${input.dataset.type} is required`;
        } else if (input.dataset.type === "Email" && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value.trim())) {
            errorMessage.textContent = "Invalid email format";
        } else if (input.dataset.type === "phone" && !/^06\d{8}$/.test(input.value.trim())) {
            errorMessage.textContent = "Phone number must start with 06 and have 10 digits in total";
        } else {
            errorMessage.textContent = "";
        }
    });
}
