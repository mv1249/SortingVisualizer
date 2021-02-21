function Merge() {

    c_delay = 0;
    merge_sort(0, array_size - 1);

    enable_buttons();
}

function merge_partition(start, mid, end) {

    var p = start,
        q = mid + 1;

    var array = [],
        k = 0;

    for (var i = start; i <= end; i++) {

        if (p > mid) {

            array[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], 'red');
        } else if (q > end) {
            array[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], 'red');
        } else if (div_sizes[p] < div_sizes[q]) {

            array[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red")

        } else {
            array[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], 'red');
        }
    }


    // After performing the internal sort,in merge sort we will be left with two big partitions,so after merging them we will,have to make them in one similar color,so for that i have used the color as green!

    for (let index = 0; index < k; index++) {
        div_sizes[start++] = array[index];
        div_update(divs[start - 1], div_sizes[start - 1], "green")

    }
}

function merge_sort(start, end) {

    if (start < end) {

        var mid = Math.floor((start + end) / 2);

        // setting the color of the middle element as yellow,so that we can know that,that div is the middle element of that range which is in [L,R]

        div_update(divs[mid], div_sizes[mid], 'yellow');

        merge_sort(start, mid);
        merge_sort(mid + 1, end);
        merge_partition(start, mid, end);
    }
}