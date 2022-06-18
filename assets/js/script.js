var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    if(currentNumber >= 10) {
        currentNumber = currentNumber + 0;
        currentNumberWrapper.innerHTML = currentNumber;
    } else if (currentNumber < 10 | currentNumber > 0) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if(currentNumber <= 0) {
        currentNumber = currentNumber + 0;
        currentNumberWrapper.innerHTML = currentNumber;
    }else if (currentNumber < 10 | currentNumber > 0) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}
