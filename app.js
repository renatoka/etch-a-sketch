const buttons = document.querySelectorAll('button');
const items = document.querySelectorAll('.item');

// Default color to paint
let defaultColor;
let rgbColor;

function randomColor() {
    rgbColor = '#' + (Math.random().toString(16) + '00000').slice(2, 8);
    return rgbColor;
}

buttons.forEach((button) => {
    button.addEventListener("click", function () {

        defaultColor = '#000000';

        if (button.className == 'reset') {
            items.forEach((item) => {
                item.style.backgroundColor = 'white';
            })
        }

        else if (button.className == 'black') {
            defaultColor = '#000000';
        }

        else if (button.className == 'rgb-color') {
            randomColor();
            defaultColor = rgbColor;
        }

    });
});


items.forEach((item) => {
    item.addEventListener("mouseover", function () {
        item.style.backgroundColor = defaultColor;
    });
}); 