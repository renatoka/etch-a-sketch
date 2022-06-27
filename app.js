const buttons = document.querySelectorAll('button');
const items = document.querySelectorAll('.item');

// Default color to paint
let defaultColor;
let rgbColor;

/* function randomColor() {
    rgbColor = '#'+(Math.random().toString(16)+'00000').slice(2,8);
} */

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
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
            defaultColor = randomColor();
        }

    });

    items.forEach((item) => {
        item.addEventListener("mouseover", function () {
            item.style.backgroundColor = defaultColor;
        });
    });
});
