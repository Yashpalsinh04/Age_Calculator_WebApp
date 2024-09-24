let userInput = document.getElementById("date");
let calculateAgeBtn = document.getElementById("calculate-age-btn");
let result = document.getElementById("result");

userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let date1 = birthDate.getDate();
    let month1 = birthDate.getMonth() + 1;
    let year1 = birthDate.getFullYear();

    let today = new Date();

    let date2 = today.getDate();
    let month2 = today.getMonth() + 1;
    let year2 = today.getFullYear();

    let date3, month3, year3;

    year3 = year2 - year1;

    if (month2 > month1) {
        month3 = month2 - month1;
    } else {
        year3--;
        month3 = 12 + month2 - month1;
    }

    if (date2 >= date1) {
        date3 = date2 - date1;
    } else {
        month3--;
        date3 = getDaysInMonth(year1, month1) + date2 - date1;
    }

    if (month3 < 0) {
        month3 = 11;
        year3--;
    }
    if (year3 < 0) {
        year3 = 0;
    }

    result.innerHTML = `You are <span>${year3}</span> years, <span>${month3}</span> months and <span>${date3}</span> days old. `
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

calculateAgeBtn.addEventListener("click", () => {
    calculateAge();
});