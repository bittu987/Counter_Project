// Fetch Data from HTML

let add_btn = document.getElementById("add_btn");
let cournter_value  = document.getElementById("cournter_value");
let minus_btn = document.getElementById("minus_btn");
let reset_btn = document.getElementById("reset_btn");

let count = 0;

// For Increment

    add_btn.addEventListener('click',() => {
        count++;
        cournter_value.innerHTML = count;
    });

    // For Minus
    minus_btn.addEventListener('click',()=>{
        count--;
        cournter_value.innerHTML = count;
    })

    // For Reset
    reset_btn.addEventListener('click' , ()=>{
        cournter_value.innerHTML = 0;
        count = 0;
    })



    