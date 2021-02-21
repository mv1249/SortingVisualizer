var speed = 1000;

input_speed.addEventListener("input", vis_speed);

function vis_speed() {

    var array_speed = input_speed.value;
    switch (parseInt(array_speed)) {
        case 1:
            speed = 1;
            break;
        case 2:
            speed = 10;
            break;
        case 3:
            speed = 100;
            break;
        case 4:
            speed = 1000;
            break;
        case 5:
            speed = 10000;
            break;
    }

    delay_time = 1000 / (Math.floor(array_size / 10) * speed);
}

// Decrease the numerator to increase the speed 

var delay_time = 10000 / (Math.floor(array_size / 10) * speed);

// this is updated on every div change so that visualization is visible

var c_delay = 0;

// this function takes in 3 parameters,one is container which is the array container,the other is height and color,so here we will set the style of the container with appropriate dimenssions,and colors,this div_update will be update every now and then until the algo will end!

function div_update(cont, height, color) {

    window.setTimeout(() => {
        cont.style = "margin:0%" +
            margin_sizes + "%; width:" + (100 / array_size - (2 * margin_sizes)) + "%;height:" + height + "%;background-color:" + color + ";";
    }, c_delay += delay_time);
}


function enable_buttons() {

    window.setTimeout(() => {
        for (var i = 0; i < button_algos.length; i++) {
            button_algos[i].classList = []
            button_algos[i].classList.add("butt_unselected");

            button_algos[i].disabled = false;
            input_arraysize.disabled = false;
            input_generate.disabled = false;
            input_speed.disabled = false;
        }
    }, c_delay += delay_time);
}