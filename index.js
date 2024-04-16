const addButton = document.querySelector("button");
const input = document.querySelector("input");
const ol = document.querySelector("ol");
let itemCount = 0;

addButton.addEventListener("click", () => {
    let enteredValue = input.value;
    let item = document.createElement("li");
    item.innerHTML = `${enteredValue} <i class="fa-solid fa-circle-minus minus"></i><i class="fa-regular fa-square-check check"></i>`;
    ol.append(item);
    itemCount++;
    if (itemCount > 6) {
        alert("You cannot add more than 6 items.");
        item.remove();
    } if (enteredValue == "") {
        item.remove();
        alert("Please enter the task.")
    }

    input.value = "";

    item.querySelector(".minus").addEventListener("click", () => {
        item.remove();
        item.classList.add("removed");
    });

    item.querySelector(".check").addEventListener("click", () => {
        item.classList.add("checked");
        item.style.textDecoration = "line-through";

    });
});

const completedButton = document.querySelector(".completed");
const incompleteButton = document.querySelector(".incomplete");

completedButton.addEventListener("click", () => {
    const allItems = document.querySelectorAll("li");
    allItems.forEach(item => {
        if (item.classList.contains("checked")) {
            item.style.display = "block"; // Show completed items
        } else {
            item.style.display = "none"; // Hide incomplete items
        }
    });
});

incompleteButton.addEventListener("click", () => {
    const allItems = document.querySelectorAll("li");
    allItems.forEach(item => {
        if (!item.classList.contains("checked")) {
            item.style.display = "block"; // Show incomplete items
        } else {
            item.style.display = "none"; // Hide completed items
        }
    });
});


