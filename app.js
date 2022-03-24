let matched = document.getElementById("matched");
matched.style.display = "none";
const notMatched = document.getElementById("not-matched");
notMatched.style.display ="none";
let display1 = document.getElementById("display1");
let pinButton = document.getElementById("pin-button");
pinButton.addEventListener("click",()=>{
    x = Math.floor((999 + Math.random() * 8999) + 1);
    display1.value = x;  
});
let display2 = document.getElementById("display2");
let button =Array.from(document.getElementsByClassName("button"));
button.map(button=>{
    button.addEventListener("click",(e)=>{
        switch (e.target.innerText) {
            case "C":
                display2.value ="";
                break;
            case "<":
                display2.value = display2.value.slice(0,-1);
                break;
            default:
                display2.value += e.target.innerText;
                display3 = display2.value;
        }
    })
})
let submit = document.getElementById("submit");
submit.addEventListener("click", ()=>{
    if (x==display3) {
        matched.style.display = "block";
        notMatched.style.display ="none"
    } else {
        matched.style.display = "none";
        notMatched.style.display ="block";
    }
})