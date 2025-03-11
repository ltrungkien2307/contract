const salaryRange = document.getElementById("salaryRange");
const salaryValue = document.getElementById("salaryValue");

salaryRange.addEventListener("input", function () {
    let value = parseInt(salaryRange.value);
    salaryValue.textContent = value.toLocaleString();

    let minSalary = 5000000;
    let maxSalary = 100000000;
    let percentage = (value - minSalary) / (maxSalary - minSalary);

    let sliderWidth = salaryRange.offsetWidth;
    let sliderLeft = salaryRange.offsetLeft;

    let pen = document.getElementById("pen");
    let newPenPosition = sliderLeft + (sliderWidth * (1 - percentage)) - (pen.offsetWidth / 2);

    pen.style.left = `${newPenPosition}px`;
    if (value === minSalary) {
        showSuccessMessage();
        showConfetti(); 
    } else {
        hideSuccessMessage();
    }

});


function showSuccessMessage() {
    let message = document.getElementById("successMessage");
    if (!message) {
        message = document.createElement("p");
        message.id = "successMessage";
        message.textContent = "Ký hợp đồng thành công!";
        message.style.color = "green";
        message.style.fontWeight = "bold";
        document.querySelector(".slider-container").appendChild(message);
    }
    message.style.display = "block";
}


function hideSuccessMessage() {
    let message = document.getElementById("successMessage");
    if (message) {
        message.style.display = "none";
    }
}


function showConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}


function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}