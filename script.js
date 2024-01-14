let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let buttonsArray = Array.from(buttons);
let string = "";

buttonsArray.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    if (event.target.innerHTML == "AC") {
      string = "";
      display.value = string;
    } else if (event.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (event.target.innerHTML == "=") {
      if (string == "") {
        string = "0";
      }
      try {
        string = eval(string);
        display.value = string;
      } catch (error) {
        alert("Invalid Input!");
      }
    } else {
      if (string.length > 7) {
        alert("No of Digits Exceeded!");
      } else {
        string += event.target.innerHTML;
        display.value = string;
      }
    }
  });
});
