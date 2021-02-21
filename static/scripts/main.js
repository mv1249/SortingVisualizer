console.log("hello all")



// grab the array size input,and as the value is set to 90 by default in the input,the array size is 90

var input_arraysize = document.getElementById('a_size'),
    array_size = input_arraysize.value;

// console.log(array_size)

// Grab the generate new array input

var input_generate = document.getElementById('a_generate');

// grab the speed input

var input_speed = document.getElementById('a_speed');

// grab the algo's button's div,querySelectorAll will generate all the buttons which are present in the div named "algosbutton",this will return a Node List which can be traversed by using simple loops!!

var button_algos = document.querySelectorAll(".algos button");

console.log(button_algos)

// setting an array of the height of the divs which will be stored in the divs array

var div_sizes = []

// setting the array where we will store the divs

var divs = []

var margin_sizes;

var array_container = document.getElementById('array_container')


// console.log(array_container)

// setting the style of the container

array_container.style = 'flex-direction:row';

// array generation and updation,so here when the user selects teh size of the array and clicks on the generate array input,then a random array of divs must be displayed in the innerHTML of the array container,so for that to happen we will set 2 event listners,as shown

// input generate is the input for the "generate Array"
input_generate.addEventListener("click",
    generate_array);

// when some changes the size of the array,it is the input which is getting actioned,so i have added the evenlistner as "input" there!


input_arraysize.addEventListener('input', update_arraysize);

// after we click on the "generate array method",the result will be something like this ↓

// this will be divs array↓

// [div, div, div, div, div, div, div, div, div, div, div, div,....],

// and this will be the divsizes array ↓

// 10, 25, 38, 14, 40, 30, 22, 71, 69, 31, 55, 53, 36, 28, 35, 53, 26, 33, 28, 40, 23, 57, 25, 19, 74, ...]

// so some random numbers will be generated and those numbers will be stored in the div_sizes,actually these numbers indicate the height of the divs which are present in the divs array

function generate_array() {
    console.log('Array will be generated')

    array_container.innerHTML = ""

    // array size max is 150,and min is 20,so 150-20 is 130 and 130*0.5 is ~ 65,and +10 is 75,so random numbers from 0->75 will be generated!,so the height of the max div can be 75 and min div can be 0

    for (var index = 0; index < array_size; index++) {

        div_sizes[index] = Math.floor(Math.random() * 0.5 * (input_arraysize.max - input_arraysize.min)) + 10;

        // this involves creation of the divs an styling of them

        divs[index] = document.createElement("div");
        array_container.appendChild(divs[index]);
        margin_sizes = 0.1;
        divs[index].style = " margin:0% " + margin_sizes + "%;background-color:salmon;width:" + (100 / array_size - (2 * margin_sizes)) + "%;height:" + (div_sizes[index]) + "%;";

    }
    // console.log(divs)
    // console.log(div_sizes)
}

// whenever user tries to reset the array size,we need to get the value what the user has set,so inorder to get it,we have defined an eventlistner which will listen to the event which was occured,i.e the event occured here is the change in the array size,so inorder to grab that value we use the "value",and once we get the value,we store it back to the array_size,and call the generate array,which will make the divs again!!

function update_arraysize() {

    console.log("Update Array sixe :)")
    array_size = input_arraysize.value;
    console.log(array_size)
    generate_array();
}

// when the window loads,set it to the default value by calling the update_arraysize()

window.onload = update_arraysize();

// As the button algo is a Node list,as it was grabbed using the queryselectorAll,so we will iterate through the buttons of it and will set an evenlistner of "click" to each on of them,and will make use of switch case,which will monitor which button was clicked,and which algo must be perfromed on it!!


for (let index = 0; index < button_algos.length; index++) {
    button_algos[index].addEventListener('click', runalgo);
}

// Now we need to disable few things,i.e suppose an algo is running,so no other event should occur,until and unless that algo completes it's work,so for that we will use the disbaled method,so when an particular algorithm is running we will first call teh disbaledbuttons() such that no other event occurs in between except when the user "reloads" the page!

function disbaledbuttons() {

    for (let index = 0; index < button_algos.length; index++) {
        button_algos[index].classList = [];
        button_algos[index].classList.add("button_locked");

        button_algos[index].disabled = true;
        input_arraysize.disabled = true;
        input_generate.disabled = true;
        input_speed.disabled = true;

    }
}

function runalgo() {

    disbaledbuttons();

    this.classList.add("button_selected");


    switch (this.innerHTML) {
        case "Bubble":
            Bubble();
            break;
        case "Selection":
            Selection_sort();
            break;
        case "Insertion":
            Insertion();
            break;
        case "Merge":
            Merge();
            break;
        case "Quick":
            Quick();
            break;


    }
}