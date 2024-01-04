$(document).ready(function() {
    console.log("ASDASD");
});

let lunch_text = document.getElementById('lunch-break');
let x_increment = 1;
let y_increment = 1;

function init(){
    setInterval(frame, 5);
}

function handle_collision(){
    let text_height = lunch_text.offsetHeight;
    let text_width = lunch_text.offsetWidth;
    let text_top = lunch_text.offsetTop;
    let text_left = lunch_text.offsetLeft;

    let window_height = window.innerHeight;
    let window_width = window.innerWidth;

    if(text_left <= 0 || text_left + text_width >= window_width)
        x_increment = ~x_increment + 1;
    if(text_top <= 0 || text_top + text_height >= window_height)
        y_increment = ~y_increment + 1;
}

function frame(){
    handle_collision();
    lunch_text.style.top = lunch_text.offsetTop + y_increment + 'px';
    lunch_text.style.left = lunch_text.offsetLeft + x_increment + 'px';
}

init();
