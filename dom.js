// const heading = document.querySelector("#result");
// const children = result.children;
// console.log(heading);
// console.log(children);

// const text = document.createElement("div");
// // console.log(text);
// const bodyDiv = document.createTextNode("A simple website");
// // console.log(bodyDiv);
// text.appendChild(bodyDiv);
// document.body.appendChild(text);

// const displayText = document.createElement("div");
// displayText.innerText = "<p>I love programming<p>";
// displayText.style.color = "red";
// document.body.appendChild(displayText);

// const displayText = document.createElement("div");
// displayText.innerHTML = "<b>I love programming<b>";
// displayText.style.color = "red";
// document.body.appendChild(displayText);


// const btn = document.querySelector(".btn");
// function over() {
//     document.write("Mouse Over");
// }
// function out() {
//     document.write("Mouse Out");
// }


const btn = document.querySelector(".btn");
const btnn = document.querySelector(".btnn");
const zero = document.querySelector(".zero")


count = 0;
btnn.addEventListener("click", function (e) {
    count ++
    zero.innerHTML = count
    });
btn.addEventListener("click", function (e) {
    // count --;
    if (count ==0) {
        
        return;
      
    } else{

        zero.innerHTML = -- count
    }
    
    });
