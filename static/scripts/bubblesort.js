function Bubble() {

    c_delay = 0;

    // here we have the divs array which contain all the "div tags" and the div sizes which contain heights of all the div tags,and we pass the div,the size of the div and a color to the div update function as shown ↓


    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {


            div_update(divs[j], div_sizes[j], "yellow");

            // this the swap operation which is performed in bubble sort,there we had elements here we have elements+sizes of them

            if (div_sizes[j] > div_sizes[j + 1]) {


                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j + 1], div_sizes[j + 1], "red");

                // swap operation
                var temp = div_sizes[j]
                div_sizes[j] = div_sizes[j + 1]
                div_sizes[j + 1] = temp;


                // height update

                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j + 1], div_sizes[j + 1], "red")
            }

            // if the following if is not true,then update the color!

            div_update(divs[j], div_sizes[j], "blue");
        }

        div_update(divs[j], div_sizes[j], "green");
    }

    // once the divs are sorted,then all must be in same color right,so for that after the end of the 2 loops we have to set that!!

    div_update(divs[0], div_sizes[0], "green");

    enable_buttons();
}