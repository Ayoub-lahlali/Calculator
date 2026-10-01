
const displayArea = document.querySelector('.displayArea');

function addToDisplayArea(value) {
    displayArea.value += value;
}

function clearArea(){
    displayArea.value = "";
}

function deleteOne() {
    let newValue = displayArea.value;
    displayArea.value = newValue.substring(0, newValue.length - 1);
}

function calculate() {
    try {
        displayArea.value = eval(displayArea.value);  
    } catch (error) {
        displayArea.value = "Invalid";
        console.log(error);
    }
}