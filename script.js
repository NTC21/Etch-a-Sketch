let container = document.querySelector("#container");
let squares = 16;


function mousehandlle (){

}

function createPixels() {
    // Clear existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < squares; i++) {
        let container1 = document.createElement('div');
        container.appendChild(container1);
        container1.classList.add('container1');

        for (let j = 0; j < squares; j++) {
            let box = document.createElement('div');
            box.classList.add('box');
            container1.appendChild(box);

        }
    }
}

createPixels();

// Adjusting number of pixels
let input = document.querySelector('.pixels');

input.addEventListener('input', () => {
    squares = input.value;
    createPixels();
});

// 