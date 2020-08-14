let counter = 1;

function Increment() {
    let counterEle = document.querySelector("#counterid");
    for (i = 0; i <= 5; i++) {
        counter = counter + 1;
    }
    counterEle.innerHTML = counter;
}

function Decrement() {
    let counterEle = document.querySelector('#counterid');
    if (counterEle.innerHTML > 100) {
        counter = counter - 1;
    }
    counterEle.innerHTML = counter;
}
