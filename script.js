var allButton = document.getElementsByTagName('button');

let copyAllButtons = [];
for (let i = 0; i < allButton.length; i++) {
    copyAllButtons.push(allButton[i].classList[1]);
    
}

function buttonColorChange (buttonThingy) {
    if (buttonThingy.value === "red") {
        buttonRed();
    }
    else if (buttonThingy.value === "green") {
        buttonGreen();
    }
    else if (buttonThingy.value === "reset") {
        buttonColorReset();
    }
    else if (buttonThingy.value === "random") {
        randomColor();
    }
}

function buttonRed() {
    for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-danger');
        
    }
}

function buttonGreen() {
    for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-success');
        
    }
}

function buttonColorReset() {
    for (let i = 0; i < allButton.length; i++) {
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(copyAllButtons[i]);
        
    }
}

function randomColor () {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
    for (let i = 0; i < allButton.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(choices[randomNumber]);
        
    }
}