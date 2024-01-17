let container = document.querySelector("#container");


function handlemousedown(){
    isMouseDown = true;
}

function handlemouseup() {
    isMouseDown = false;
}

function handlemouseover() {
    if (isMouseDown) {
        this.classList.add('hover');
    }
}
container.addEventListener("mousedown", handlemousedown);
container.addEventListener("mouseup", handlemouseup);


for (let i =0; i<16;i++){

    let container1 = document.createElement('div');
    container.appendChild(container1);
    container1.classList.add('container1');

    for (let j =0; j<16; j++){
        let box = document.createElement('div');
        box.classList.add('box');

        box.addEventListener("mouseover", handlemouseover);


        container1.appendChild(box);

    }
}








// adjusting number of pixels

// let btn =document.querySelector('pixels');

// btn.addEventListener('click', () =>{

// let squares = prompt("Enter the number of squares you want");
// }
// )
